/* recipes-data.js — biblioteca inicial de receitas (somente leitura no app).

   COMO ADICIONAR MAIS RECEITAS:
   • Opção 1 (sem mexer em código): na página Receitas, clique em "Nova receita". Elas ficam salvas no
     navegador de quem cadastrou (entram no backup).
   • Opção 2 (para vender no produto): copie um bloco abaixo, mude os textos e cole no fim da lista.
     Todos os compradores passam a ver a receita. Mantenha `id` único (letras minúsculas e hífens).

   FOTOS: coloque a foto em img/receitas/<id>.jpg (use fotos suas ou com licença de uso) e escreva
   photo: 'img/receitas/<id>.jpg'. Se photo for null, o app mostra uma ilustração original.

   Os rendimentos, tempos, preços e prazos são orientações iniciais. Teste cada receita na sua cozinha,
   confira o custo na Calculadora e ajuste os prazos de validade às normas sanitárias da sua região. */
(function (global) {
  'use strict';
  const DL = (global.DL = global.DL || {});
  DL.RECIPE_SLOTS = 50;
  DL.RECIPES = [
  {
    "id": "pao-frances-caseiro",
    "name": "Pão francês caseiro",
    "category": "Pães salgados",
    "art": "pao-frances",
    "photo": null,
    "yield": "10 pães de 80 g",
    "time": "3 h",
    "suggestedPrice": 1.2,
    "ingredients": [
      "500 g de farinha de trigo",
      "300 ml de água morna",
      "10 g de sal (2 colheres de chá)",
      "1 colher (sopa) de açúcar",
      "10 g de fermento biológico seco",
      "1 colher (sopa) de óleo"
    ],
    "steps": [
      "Misture a farinha, o sal, o açúcar e o fermento. Junte a água e o óleo e sove por 10 minutos, até a massa ficar lisa e soltar das mãos.",
      "Deixe descansar coberta por 1 hora, até dobrar de volume.",
      "Divida em 10 porções de 80 g, modele em formato alongado e deixe crescer 40 minutos em assadeira.",
      "Faça um corte no meio de cada pão e asse a 220 °C por 20 a 25 minutos, com uma forma de água quente no forno para a casca ficar crocante."
    ],
    "storage": "No mesmo dia fica no ponto. Congele por até 30 dias e reaqueça no forno."
  },
  {
    "id": "pao-forma-caseiro",
    "name": "Pão de forma caseiro",
    "category": "Pães salgados",
    "art": "pao-forma",
    "photo": null,
    "yield": "1 pão de 500 g (14 fatias)",
    "time": "3 h",
    "suggestedPrice": 12,
    "ingredients": [
      "500 g de farinha de trigo",
      "1 e 1/2 colher (chá) de sal",
      "2 colheres (sopa) de açúcar",
      "10 g de fermento biológico seco",
      "1 ovo",
      "50 g de manteiga em temperatura ambiente",
      "250 ml de leite morno"
    ],
    "steps": [
      "Misture os secos, junte o ovo, o leite e sove por 10 minutos. Acrescente a manteiga e sove mais 5 minutos.",
      "Deixe crescer por 1 hora, até dobrar.",
      "Modele e coloque em forma de pão untada. Deixe crescer 40 minutos.",
      "Pincele com ovo ou leite e asse a 180 °C por 35 a 40 minutos. Desenforme morno."
    ],
    "storage": "Embalado, em local fresco, por até 4 dias. Congele fatiado por até 30 dias."
  },
  {
    "id": "pao-queijo-mineiro",
    "name": "Pão de queijo mineiro",
    "category": "Salgados de forno",
    "art": "pao-queijo",
    "photo": null,
    "yield": "30 bolinhas",
    "time": "50 min",
    "suggestedPrice": 1.5,
    "ingredients": [
      "500 g de polvilho azedo",
      "1 xícara (chá) de leite",
      "1 xícara (chá) de óleo",
      "1 colher (chá) de sal",
      "3 ovos",
      "250 g de queijo minas meia cura ou parmesão ralado"
    ],
    "steps": [
      "Ferva o leite, o óleo e o sal e escalde o polvilho, misturando bem. Deixe amornar.",
      "Junte os ovos, um a um, e o queijo, e amasse até ficar uma massa que desgrude das mãos.",
      "Modele bolinhas de uns 30 g e coloque na assadeira.",
      "Asse a 200 °C por 25 a 30 minutos, até dourar."
    ],
    "storage": "Congele cru, em bolinhas, por até 60 dias e asse sem descongelar."
  },
  {
    "id": "pao-doce-padaria",
    "name": "Pão doce de padaria",
    "category": "Pães doces",
    "art": "pao-doce",
    "photo": null,
    "yield": "12 pães",
    "time": "3 h",
    "suggestedPrice": 2.5,
    "ingredients": [
      "500 g de farinha de trigo",
      "1/2 xícara (chá) de açúcar",
      "1 colher (chá) de sal",
      "10 g de fermento biológico seco",
      "2 ovos",
      "100 g de manteiga",
      "250 ml de leite morno",
      "1 gema + 1 colher (sopa) de leite para pincelar"
    ],
    "steps": [
      "Misture os secos, junte ovos e leite e sove 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa e elástica.",
      "Deixe crescer por 1 hora. Divida em 12 bolinhas e disponha na assadeira.",
      "Deixe crescer mais 40 minutos, pincele com a gema e o leite.",
      "Asse a 180 °C por 20 a 25 minutos, até dourar."
    ],
    "storage": "Em saco fechado, por até 3 dias. Congele por até 30 dias."
  },
  {
    "id": "rosca-coco",
    "name": "Rosca doce com coco",
    "category": "Roscas e broas",
    "art": "rosca",
    "photo": null,
    "yield": "2 roscas (10 fatias cada)",
    "time": "3 h",
    "suggestedPrice": 6,
    "ingredients": [
      "500 g de farinha de trigo",
      "1/2 xícara (chá) de açúcar",
      "1 colher (chá) de sal",
      "10 g de fermento biológico seco",
      "2 ovos",
      "80 g de manteiga",
      "250 ml de leite morno",
      "100 g de coco ralado",
      "Cobertura: 1 xícara (chá) de açúcar de confeiteiro e 3 colheres (sopa) de leite"
    ],
    "steps": [
      "Prepare a massa como a do pão doce e deixe crescer 1 hora.",
      "Divida em 2 partes, abra, espalhe a manteiga e o coco, enrole e una as pontas formando um anel.",
      "Deixe crescer 40 minutos e asse a 180 °C por 30 minutos.",
      "Misture o açúcar de confeiteiro com o leite e cubra as roscas ainda mornas."
    ],
    "storage": "Em local fresco, coberta, por até 3 dias."
  },
  {
    "id": "broa-milho",
    "name": "Broa de milho",
    "category": "Roscas e broas",
    "art": "broa",
    "photo": null,
    "yield": "12 broas",
    "time": "50 min",
    "suggestedPrice": 2,
    "ingredients": [
      "2 xícaras (chá) de fubá",
      "1 xícara (chá) de farinha de trigo",
      "1 xícara (chá) de açúcar",
      "1 xícara (chá) de leite",
      "1/2 xícara (chá) de óleo",
      "2 ovos",
      "1 colher (sopa) de erva-doce",
      "1 colher (sopa) de fermento em pó"
    ],
    "steps": [
      "Misture todos os ingredientes secos e a erva-doce.",
      "Junte o leite, o óleo e os ovos e misture até ficar uma massa firme.",
      "Modele as broas, coloque na assadeira untada e asse a 180 °C por 30 a 35 minutos."
    ],
    "storage": "Em pote fechado, por até 7 dias."
  },
  {
    "id": "pao-integral-sementes",
    "name": "Pão integral com sementes",
    "category": "Pães salgados",
    "art": "pao-integral",
    "photo": null,
    "yield": "1 pão de 600 g",
    "time": "3 h 30 min",
    "suggestedPrice": 14,
    "ingredients": [
      "300 g de farinha de trigo integral",
      "200 g de farinha de trigo branca",
      "10 g de fermento biológico seco",
      "1 colher (sopa) de mel",
      "1 e 1/2 colher (chá) de sal",
      "320 ml de água morna",
      "3 colheres (sopa) de sementes (linhaça, girassol, gergelim)"
    ],
    "steps": [
      "Misture as farinhas, o fermento, o sal e o mel, junte a água e sove por 12 minutos. Acrescente as sementes.",
      "Deixe crescer por 1 hora e 30 minutos, modele e coloque em forma.",
      "Deixe crescer 45 minutos, polvilhe sementes por cima e asse a 200 °C por 40 minutos."
    ],
    "storage": "Em local fresco, por até 5 dias. Congele fatiado por até 30 dias."
  },
  {
    "id": "pao-batata",
    "name": "Pãozinho de batata",
    "category": "Pães doces",
    "art": "pao-doce",
    "photo": null,
    "yield": "16 pãezinhos",
    "time": "3 h",
    "suggestedPrice": 3,
    "ingredients": [
      "500 g de farinha de trigo",
      "300 g de batata cozida e amassada",
      "1/3 xícara (chá) de açúcar",
      "1 colher (chá) de sal",
      "10 g de fermento biológico seco",
      "2 ovos",
      "50 g de manteiga",
      "1/2 xícara (chá) de leite morno"
    ],
    "steps": [
      "Misture a farinha, o açúcar, o sal e o fermento. Junte a batata, os ovos, o leite e a manteiga e sove 10 minutos.",
      "Deixe crescer por 1 hora e modele 16 bolinhas.",
      "Deixe crescer 40 minutos, pincele com ovo e asse a 180 °C por 20 a 25 minutos."
    ],
    "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
  },
  {
    "id": "creme-confeiteiro",
    "name": "Creme de confeiteiro para pães",
    "category": "Massas e recheios",
    "art": "pao-forma",
    "photo": null,
    "yield": "Rende cerca de 500 g",
    "time": "25 min",
    "suggestedPrice": 12,
    "ingredients": [
      "500 ml de leite",
      "4 gemas",
      "1/2 xícara (chá) de açúcar",
      "3 colheres (sopa) de amido de milho",
      "1 colher (chá) de baunilha"
    ],
    "steps": [
      "Misture as gemas, o açúcar e o amido. Junte o leite e leve ao fogo baixo, mexendo sempre, até engrossar.",
      "Retire do fogo, junte a baunilha e cubra com filme em contato com o creme. Leve à geladeira."
    ],
    "storage": "Na geladeira, por até 3 dias."
  }
];
})(typeof globalThis !== 'undefined' ? globalThis : window);
