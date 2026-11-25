/* encomendas.js — encomendas de pães com data de entrega e sinal */
(function () {
  'use strict';
  const { icon, esc, money, $, handleError } = DL.ui;
  let items = [], editingId = null;
  const OPEN = ['Pedido', 'Em produção', 'Pronto'];
  const PERIODS = [['abertas', 'Em andamento'], ['7d', 'Próximos 7 dias'], ['hoje', 'Entregas de hoje'], ['mes', 'Este mês'], ['todas', 'Todas']];
  const pad = (n) => String(n).padStart(2, '0');
  const plus = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  const isOpen = (o) => OPEN.indexOf(o.status) >= 0;
  const when = (o) => DL.dates.br(o.deliveryDate) + (o.deliveryTime ? ' às ' + o.deliveryTime : '');

  function waLink(o) {
    let d = String(o.phone || '').replace(/\D/g, ''); if (d.length < 10) return '';
    if (d.length <= 11) d = '55' + d;
    const msg = o.status === 'Pronto'
      ? 'Olá, ' + o.customer + '! Seu pedido (' + o.item + ') está pronto. ' + (o.delivery === 'Entrega' ? 'Vamos entregar em ' : 'Pode retirar em ') + when(o) + '. Saldo a pagar: ' + money(o.total - o.deposit) + '.'
      : 'Olá, ' + o.customer + '! Confirmando sua encomenda: ' + o.item + (o.size ? ' (' + o.size + ')' : '') + ', para ' + when(o) + '. Total ' + money(o.total) + ', sinal ' + money(o.deposit) + ', saldo ' + money(o.total - o.deposit) + '.';
    return 'https://wa.me/' + d + '?text=' + encodeURIComponent(msg);
  }
  function resetForm() {
    editingId = null; const form = $('#form'); form.reset(); DL.ui.showErrors(form, {});
    $('#f-date').value = DL.dates.today(); $('#f-delivery').innerHTML = DL.ui.options(DL.ORDER_DELIVERY, 'Retirada'); $('#f-status').innerHTML = DL.ui.options(DL.ORDER_STATUS, 'Pedido');
    $('#form-title').textContent = 'Nova encomenda'; $('#edit-pill').hidden = true; $('#btn-cancel').hidden = true; $('#bal').textContent = '';
    $('#btn-save').innerHTML = icon('check') + ' Salvar encomenda';
  }
  function visible() {
    const p = $('#flt').value, st = $('#flt-st').value, t = DL.dates.today();
    return items.filter((o) => {
      if (st && o.status !== st) return false;
      if (p === 'abertas') return isOpen(o);
      if (p === '7d') return o.deliveryDate >= t && o.deliveryDate <= plus(7);
      if (p === 'hoje') return o.deliveryDate === t;
      if (p === 'mes') return o.deliveryDate.slice(0, 7) === t.slice(0, 7);
      return true;
    }).sort((a, b) => (a.deliveryDate + (a.deliveryTime || '99:99')).localeCompare(b.deliveryDate + (b.deliveryTime || '99:99')));
  }
  function render() {
    const t = DL.dates.today(), open = items.filter(isOpen), late = open.filter((o) => o.deliveryDate < t).length;
    const week = open.filter((o) => o.deliveryDate >= t && o.deliveryDate <= plus(7)).length;
    const toReceive = open.reduce((a, o) => a + (o.total - o.deposit), 0), deposits = open.reduce((a, o) => a + o.deposit, 0);
    $('#summary').innerHTML = DL.ui.stat('Entregas nos próximos 7 dias', String(week), { icon: 'calendar', tone: 'feature', note: 'incluindo hoje' }) +
      DL.ui.stat('Encomendas em andamento', String(open.length), { icon: 'cake', tone: 'gold', note: late ? late + ' em atraso' : 'nenhuma em atraso' }) +
      DL.ui.stat('A receber das encomendas', money(toReceive), { icon: 'wallet', tone: 'gold', note: 'sinais já recebidos: ' + money(deposits) });
    const list = visible();
    if (!list.length) { $('#list').innerHTML = DL.ui.emptyState('Nenhuma encomenda neste filtro', 'Cadastre acima o primeiro pedido.', { art: 'pao-doce' }); return; }
    $('#list').innerHTML = '<div class="table-wrap"><table class="stack"><thead><tr><th>Entrega</th><th>Cliente</th><th>Produto</th><th class="num">Valores</th><th>Status</th><th></th></tr></thead><tbody>' +
      list.map((o) => { const lateRow = isOpen(o) && o.deliveryDate < t, w = waLink(o);
        return '<tr><td data-label="Entrega"><b' + (lateRow ? ' class="late"' : '') + '>' + when(o) + '</b><br><small class="muted">' + esc(o.delivery) + (lateRow ? ' · atrasada' : '') + (o.address && o.delivery === 'Entrega' ? ' · ' + esc(o.address) : '') + '</small></td>' +
          '<td data-label="Cliente"><b>' + esc(o.customer) + '</b>' + (o.phone ? '<br><small class="muted">' + esc(o.phone) + '</small>' : '') + '</td>' +
          '<td data-label="Pão">' + esc(o.item) + (o.size ? '<br><small class="muted">' + esc(o.size) + '</small>' : '') + (o.theme ? '<br><small class="muted">' + esc(o.theme) + '</small>' : '') + '</td>' +
          '<td class="num" data-label="Valores">' + money(o.total) + '<br><small class="muted">sinal ' + money(o.deposit) + ' · saldo ' + money(o.total - o.deposit) + '</small></td>' +
          '<td data-label="Status"><select data-status="' + o.id + '" aria-label="Status da encomenda">' + DL.ui.options(DL.ORDER_STATUS, o.status) + '</select></td>' +
          '<td class="actions">' + (w ? '<a class="btn sm" target="_blank" rel="noopener" href="' + w + '">WhatsApp</a> ' : '') + '<button class="btn sm" type="button" data-edit="' + o.id + '">' + icon('edit') + ' Editar</button> <button class="btn sm danger" type="button" data-del="' + o.id + '" aria-label="Excluir encomenda">' + icon('trash') + '</button></td></tr>'; }).join('') + '</tbody></table></div>';
  }
  async function load() { items = await DL.db.getAll('orders'); render(); }
  async function submit(e) {
    e.preventDefault(); const form = $('#form'), btn = $('#btn-save'); btn.disabled = true;
    try { await DL.ops.saveOrder(DL.ui.formData(form), editingId); DL.ui.toast(editingId ? 'Encomenda atualizada.' : 'Encomenda cadastrada.', 'ok'); resetForm(); await load(); }
    catch (err) { handleError(err, form); } finally { btn.disabled = false; }
  }
  function startEdit(id) {
    const o = items.find((i) => i.id === id); if (!o) return;
    editingId = id; const form = $('#form'); DL.ui.showErrors(form, {});
    DL.ui.fillForm(form, { customer: o.customer, phone: o.phone, item: o.item, size: o.size, theme: o.theme, deliveryDate: o.deliveryDate, deliveryTime: o.deliveryTime, delivery: o.delivery, address: o.address, total: DL.ui.moneyStr(o.total), deposit: DL.ui.moneyStr(o.deposit), status: o.status, notes: o.notes });
    $('#form-title').textContent = 'Editar encomenda'; $('#edit-pill').hidden = false; $('#btn-cancel').hidden = false; $('#btn-save').innerHTML = icon('check') + ' Salvar alterações';
    $('#form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  async function remove(id) {
    const o = items.find((i) => i.id === id); if (!o) return;
    const ok = await DL.ui.confirm({ title: 'Excluir esta encomenda?', message: 'A encomenda de ' + o.customer + ' (' + o.item + ') será removida.', confirmText: 'Excluir encomenda' });
    if (!ok) return;
    try { await DL.ops.deleteOrder(id); DL.ui.toast('Encomenda excluída.', 'ok'); if (editingId === id) resetForm(); await load(); } catch (err) { handleError(err); }
  }
  async function changeStatus(id, status) {
    const o = items.find((i) => i.id === id); if (!o) return;
    if (status === 'Entregue' && o.total - o.deposit > 0) {
      const ok = await DL.ui.confirm({ title: 'Marcar como entregue?', message: 'O saldo de ' + money(o.total - o.deposit) + ' será considerado recebido.', confirmText: 'Marcar como entregue' });
      if (!ok) { render(); return; }
    }
    try { await DL.ops.setOrderStatus(id, status); DL.ui.toast('Status atualizado.', 'ok'); await load(); } catch (err) { handleError(err); await load(); }
  }
  DL.ui.boot(async function () {
    $('#flt').innerHTML = DL.ui.options(PERIODS, 'abertas'); $('#flt-st').innerHTML = DL.ui.options(DL.ORDER_STATUS, '', 'Todos os status');
    $('#sizes').innerHTML = DL.ORDER_SIZES.map((s) => '<option value="' + esc(s) + '"></option>').join('');
    resetForm();
    $('#form').addEventListener('submit', submit); $('#btn-cancel').addEventListener('click', resetForm);
    const upd = () => { const t = DL.num.parseMoney($('#f-total').value), d = $('#f-deposit').value === '' ? 0 : DL.num.parseMoney($('#f-deposit').value); $('#bal').textContent = t > 0 && d >= 0 && d <= t ? 'Saldo: ' + money(t - d) : ''; };
    ['#f-total', '#f-deposit'].forEach((s) => $(s).addEventListener('input', upd));
    ['#flt', '#flt-st'].forEach((s) => $(s).addEventListener('change', render));
    $('#list').addEventListener('click', (e) => { const ed = e.target.closest('[data-edit]'), dl = e.target.closest('[data-del]'); if (ed) startEdit(Number(ed.dataset.edit)); if (dl) remove(Number(dl.dataset.del)); });
    $('#list').addEventListener('change', (e) => { const s = e.target.closest('[data-status]'); if (s) changeStatus(Number(s.dataset.status), s.value); });
    await load();
  });
})();
