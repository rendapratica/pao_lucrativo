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
    },
    {
      "id": "brioche-classico",
      "name": "Brioche clássico",
      "category": "Brioches e folhados",
      "art": "brioche",
      "photo": null,
      "yield": "12 brioches de 60 g",
      "time": "4 h + geladeira",
      "suggestedPrice": 4.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "60 g de açúcar (1/3 de xícara)",
        "10 g de sal (2 colheres de chá)",
        "10 g de fermento biológico seco",
        "4 ovos",
        "100 ml de leite morno",
        "200 g de manteiga em temperatura ambiente, em cubos",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture a farinha, o açúcar, o sal e o fermento. Junte os ovos e o leite e sove por 10 minutos, até a massa começar a soltar da tigela.",
        "Acrescente a manteiga aos poucos, sovando até a massa ficar lisa, brilhante e elástica (cerca de 10 minutos).",
        "Deixe crescer coberta por 1 hora e leve à geladeira por pelo menos 2 horas, ou de um dia para o outro. A massa gelada é bem mais fácil de modelar.",
        "Divida em 12 porções de 60 g. De cada uma, separe uma bolinha pequena (a \"cabeça\"), modele a parte maior, faça uma cavidade no centro e encaixe a bolinha.",
        "Coloque em forminhas de brioche (ou de empada) untadas e deixe crescer por 1 hora e 30 minutos em local morno.",
        "Pincele com a gema misturada ao leite e asse a 180 °C por 18 a 20 minutos, até dourar."
      ],
      "storage": "Em saco fechado, por até 3 dias. Congele por até 30 dias e reaqueça no forno."
    },
    {
      "id": "brioche-hamburguer",
      "name": "Pão de hambúrguer brioche",
      "category": "Brioches e folhados",
      "art": "brioche",
      "photo": null,
      "yield": "10 pães de 90 g",
      "time": "3 h 30 min",
      "suggestedPrice": 3.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "50 g de açúcar (1/4 de xícara)",
        "10 g de sal (2 colheres de chá)",
        "10 g de fermento biológico seco",
        "1 ovo",
        "250 ml de leite morno",
        "60 g de manteiga em temperatura ambiente",
        "1 gema + 1 colher (sopa) de leite para pincelar",
        "Gergelim para polvilhar"
      ],
      "steps": [
        "Misture os secos, junte o ovo e o leite e sove por 10 minutos. Acrescente a manteiga e sove mais 5 minutos, até a massa ficar lisa.",
        "Deixe crescer coberta por 1 hora, até dobrar de volume.",
        "Divida em 10 porções de 90 g, modele bolinhas bem esticadas e achate de leve com a palma da mão.",
        "Deixe crescer 45 minutos na assadeira, pincele com a gema e o leite e polvilhe o gergelim.",
        "Asse a 180 °C por 18 a 20 minutos, até dourar. Deixe esfriar antes de cortar ao meio."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "brioche-gotas-chocolate",
      "name": "Brioche com gotas de chocolate",
      "category": "Brioches e folhados",
      "art": "brioche",
      "photo": null,
      "yield": "12 brioches de 70 g",
      "time": "4 h",
      "suggestedPrice": 5.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "80 g de açúcar (1/3 de xícara + 1 colher de sopa)",
        "8 g de sal (1 e 1/2 colher de chá)",
        "10 g de fermento biológico seco",
        "3 ovos",
        "150 ml de leite morno",
        "120 g de manteiga em temperatura ambiente",
        "150 g de gotas de chocolate",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture a farinha, o açúcar, o sal e o fermento. Junte os ovos e o leite e sove por 10 minutos.",
        "Acrescente a manteiga aos poucos e sove até a massa ficar lisa e elástica. Incorpore 100 g das gotas de chocolate delicadamente.",
        "Deixe crescer por 1 hora e 30 minutos, até dobrar de volume.",
        "Divida em 12 bolinhas de 70 g e coloque em forminhas de papel ou em assadeira.",
        "Deixe crescer 1 hora, pincele com a gema e o leite e espalhe o restante das gotas por cima.",
        "Asse a 180 °C por 20 a 22 minutos."
      ],
      "storage": "Em saco fechado, por até 3 dias. Congele por até 30 dias."
    },
    {
      "id": "croissant-tradicional",
      "name": "Croissant tradicional",
      "category": "Brioches e folhados",
      "art": "croissant",
      "photo": null,
      "yield": "12 croissants",
      "time": "6 h + geladeira",
      "suggestedPrice": 7,
      "ingredients": [
        "Massa: 500 g de farinha de trigo",
        "60 g de açúcar (1/4 de xícara)",
        "10 g de sal (2 colheres de chá)",
        "10 g de fermento biológico seco",
        "250 ml de leite gelado",
        "40 g de manteiga derretida e fria",
        "Para laminar: 250 g de manteiga sem sal gelada",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture a farinha, o açúcar, o sal e o fermento. Junte o leite e a manteiga derretida e sove só até unir (uns 5 minutos). Modele um retângulo, embale e leve à geladeira por 1 hora.",
        "Entre dois papéis-manteiga, bata e achate os 250 g de manteiga gelada, formando um quadrado de 20 cm. Mantenha na geladeira até a hora de usar: ela precisa estar fria, mas flexível.",
        "Abra a massa em retângulo de 20 x 40 cm, coloque a manteiga na metade, dobre a outra metade por cima e pressione as bordas para fechar.",
        "Abra em retângulo de uns 60 cm e dobre em três, como uma carta. Embale e gele por 30 minutos. Repita mais 2 vezes (3 dobras no total), sempre gelando entre elas.",
        "Abra a massa em retângulo de 40 x 60 cm, com 4 a 5 mm de espessura. Corte ao meio no comprimento e, em cada faixa, corte 6 triângulos de 10 cm de base.",
        "Enrole cada triângulo da base para a ponta e curve as pontas. Coloque na assadeira com a ponta para baixo e deixe crescer por 1 hora e 30 minutos em local morno (nunca quente, para a manteiga não derreter).",
        "Pincele com a gema e o leite e asse a 200 °C por 15 a 18 minutos, até dourar bem."
      ],
      "storage": "No mesmo dia ficam no auge. Congele já modelados, por até 30 dias: descongele, deixe crescer e asse."
    },
    {
      "id": "pain-au-chocolat",
      "name": "Folhado de chocolate (pain au chocolat)",
      "category": "Brioches e folhados",
      "art": "croissant",
      "photo": null,
      "yield": "12 folhados",
      "time": "6 h + geladeira",
      "suggestedPrice": 7.5,
      "ingredients": [
        "Massa de croissant (use a receita Croissant tradicional)",
        "24 bastões de chocolate para forno ou 200 g de chocolate meio amargo cortado em tirinhas",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Prepare a massa do croissant até a última dobra, como na receita Croissant tradicional.",
        "Abra a massa em retângulo de 40 x 36 cm, com 4 a 5 mm de espessura, e corte 12 retângulos de 10 x 12 cm.",
        "Coloque um bastão de chocolate perto da borda curta, dobre a massa sobre ele, coloque o segundo bastão e enrole até o fim, deixando a emenda para baixo.",
        "Deixe crescer 1 hora e 30 minutos em local morno, pincele com a gema e o leite e asse a 200 °C por 18 minutos."
      ],
      "storage": "No mesmo dia ficam no auge. Congele crus, já modelados, por até 30 dias."
    },
    {
      "id": "croissant-presunto-queijo",
      "name": "Croissant de presunto e queijo",
      "category": "Brioches e folhados",
      "art": "croissant",
      "photo": null,
      "yield": "12 croissants",
      "time": "6 h + geladeira",
      "suggestedPrice": 9,
      "ingredients": [
        "Massa de croissant (use a receita Croissant tradicional)",
        "6 fatias finas de presunto, cortadas ao meio",
        "6 fatias finas de queijo mussarela, cortadas ao meio",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Prepare a massa do croissant e corte os 12 triângulos, como na receita Croissant tradicional.",
        "Coloque meia fatia de presunto e meia de queijo na base de cada triângulo e enrole da base para a ponta.",
        "Deixe crescer 1 hora e 30 minutos em local morno, pincele com a gema e o leite e asse a 190 °C por 18 a 20 minutos."
      ],
      "storage": "Consuma no mesmo dia. Com recheio de frios, guarde na geladeira por até 1 dia e reaqueça no forno."
    },
    {
      "id": "folhado-goiabada-queijo",
      "name": "Folhado de goiabada com queijo",
      "category": "Brioches e folhados",
      "art": "croissant",
      "photo": null,
      "yield": "12 folhados",
      "time": "1 h",
      "suggestedPrice": 6,
      "ingredients": [
        "500 g de massa folhada (pronta ou a receita Massa folhada rápida)",
        "200 g de goiabada em cubinhos",
        "150 g de queijo minas meia cura ou mussarela em cubinhos",
        "1 gema + 1 colher (sopa) de leite para pincelar",
        "Açúcar de confeiteiro para polvilhar"
      ],
      "steps": [
        "Abra a massa folhada em retângulo de 30 x 40 cm, com uns 3 mm de espessura, e corte 12 quadrados de 10 cm.",
        "Coloque um pouco de goiabada e de queijo no centro de cada quadrado e dobre formando um triângulo. Pressione as bordas com um garfo.",
        "Pincele com a gema misturada ao leite e leve à geladeira por 15 minutos.",
        "Asse a 200 °C por 20 a 25 minutos, até crescer e dourar. Polvilhe açúcar de confeiteiro depois de frio."
      ],
      "storage": "Em pote aberto ou saco de papel, por até 2 dias. Reaqueça no forno para voltar a crocância."
    },
    {
      "id": "sonho-creme",
      "name": "Sonho de padaria com creme",
      "category": "Sonhos e fritos",
      "art": "sonho",
      "photo": null,
      "yield": "14 sonhos de 70 g",
      "time": "3 h 30 min",
      "suggestedPrice": 5,
      "ingredients": [
        "500 g de farinha de trigo",
        "70 g de açúcar (1/3 de xícara)",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "200 ml de leite morno",
        "60 g de manteiga",
        "Raspas de 1 limão",
        "Óleo para fritar",
        "1 xícara (chá) de açúcar para empanar",
        "Recheio: 500 g de creme de confeiteiro (use a receita Creme de confeiteiro para pães)"
      ],
      "steps": [
        "Misture a farinha, o açúcar, o sal, o fermento e as raspas de limão. Junte os ovos e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa e macia.",
        "Deixe crescer coberta por 1 hora, até dobrar de volume.",
        "Divida em 14 porções de 70 g, modele bolinhas e coloque sobre quadrados de papel-manteiga untados. Deixe crescer por 40 minutos, até ficarem fofos.",
        "Aqueça o óleo a 170 °C em panela funda (nunca acima de 180 °C). Frite poucos sonhos por vez, 2 minutos de cada lado, até dourar com uma faixa clara no meio.",
        "Escorra em papel-toalha e passe no açúcar ainda mornos.",
        "Depois de frios, faça um furo na lateral e recheie com o creme usando um saco de confeitar com bico fino."
      ],
      "storage": "Melhor no mesmo dia. Recheados, guarde na geladeira por até 2 dias."
    },
    {
      "id": "sonho-doce-leite-coco",
      "name": "Sonho de doce de leite com coco",
      "category": "Sonhos e fritos",
      "art": "sonho",
      "photo": null,
      "yield": "14 sonhos de 70 g",
      "time": "3 h 30 min",
      "suggestedPrice": 5.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "70 g de açúcar (1/3 de xícara)",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "200 ml de leite morno",
        "60 g de manteiga",
        "Óleo para fritar",
        "400 g de doce de leite pastoso (ou a receita Doce de leite cremoso para recheios)",
        "60 g de coco ralado",
        "1/2 xícara (chá) de açúcar para empanar"
      ],
      "steps": [
        "Prepare a massa como a do sonho de creme e deixe crescer por 1 hora.",
        "Modele 14 bolinhas de 70 g e deixe crescer 40 minutos sobre papel-manteiga untado.",
        "Frite em óleo a 170 °C, 2 minutos de cada lado, escorra e passe no açúcar ainda mornos.",
        "Recheie com o doce de leite usando um saco de confeitar e passe o topo em um pouco de doce de leite e no coco ralado."
      ],
      "storage": "Melhor no mesmo dia. Guarde em local fresco por até 2 dias."
    },
    {
      "id": "donut-glaceado",
      "name": "Donut glaceado",
      "category": "Sonhos e fritos",
      "art": "donut",
      "photo": null,
      "yield": "12 donuts",
      "time": "3 h 30 min",
      "suggestedPrice": 6,
      "ingredients": [
        "500 g de farinha de trigo",
        "80 g de açúcar (1/3 de xícara + 1 colher de sopa)",
        "8 g de sal (1 e 1/2 colher de chá)",
        "10 g de fermento biológico seco",
        "2 ovos",
        "200 ml de leite morno",
        "70 g de manteiga",
        "Óleo para fritar",
        "Glacê: 2 xícaras (chá) de açúcar de confeiteiro peneirado",
        "3 colheres (sopa) de leite morno",
        "1 colher (chá) de baunilha",
        "Granulado colorido a gosto"
      ],
      "steps": [
        "Misture os secos, junte os ovos e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa. Deixe crescer por 1 hora.",
        "Abra a massa com 1,5 cm de espessura e corte discos de 9 cm com um furo de 3 cm no centro (use cortadores ou copos).",
        "Deixe os donuts crescerem por 40 minutos sobre papel-manteiga.",
        "Frite em óleo a 170 °C, 1 minuto e 30 segundos de cada lado, e escorra em papel-toalha.",
        "Misture o açúcar de confeiteiro, o leite e a baunilha até ficar um glacê liso. Mergulhe a parte de cima dos donuts ainda mornos e cubra com granulado."
      ],
      "storage": "Melhor no mesmo dia. Em pote fechado, por até 2 dias."
    },
    {
      "id": "churros-doce-leite",
      "name": "Churros recheado com doce de leite",
      "category": "Sonhos e fritos",
      "art": "churros",
      "photo": null,
      "yield": "16 churros de 15 cm",
      "time": "40 min",
      "suggestedPrice": 6,
      "ingredients": [
        "250 ml de água",
        "2 colheres (sopa) de açúcar",
        "1/2 colher (chá) de sal",
        "50 g de manteiga",
        "150 g de farinha de trigo",
        "1 ovo",
        "Óleo para fritar",
        "400 g de doce de leite pastoso",
        "Para empanar: 1 xícara (chá) de açúcar + 2 colheres (sopa) de canela em pó"
      ],
      "steps": [
        "Leve ao fogo a água, o açúcar, o sal e a manteiga até ferver. Despeje a farinha de uma vez e mexa com força até a massa desgrudar do fundo da panela.",
        "Deixe amornar por 5 minutos, junte o ovo e misture até ficar lisa.",
        "Coloque a massa em um saco de confeitar com bico de estrela grande.",
        "Aqueça o óleo a 170 °C e esprema tiras de 15 cm, cortando com uma tesoura. Frite até dourar, virando na metade do tempo.",
        "Escorra, passe no açúcar com canela e recheie com o doce de leite usando um bico fino."
      ],
      "storage": "Melhor na hora. Sem recheio, em pote aberto, por até 1 dia."
    },
    {
      "id": "pao-leite",
      "name": "Pão de leite fofinho",
      "category": "Pães doces",
      "art": "pao-doce",
      "photo": null,
      "yield": "12 pães",
      "time": "3 h",
      "suggestedPrice": 2.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "1/3 de xícara (chá) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "3 colheres (sopa) de leite em pó",
        "1 ovo",
        "60 g de manteiga",
        "250 ml de leite morno",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture a farinha, o açúcar, o sal, o fermento e o leite em pó. Junte o ovo e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa.",
        "Deixe crescer por 1 hora, até dobrar de volume.",
        "Divida em 12 bolinhas e disponha na assadeira bem juntinhas, para os pães crescerem grudados e ficarem macios.",
        "Deixe crescer 40 minutos, pincele com a gema e o leite e asse a 180 °C por 25 minutos."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "rolinho-canela",
      "name": "Rolinho de canela com cobertura",
      "category": "Pães doces",
      "art": "canela",
      "photo": null,
      "yield": "12 rolinhos",
      "time": "3 h 30 min",
      "suggestedPrice": 6.5,
      "ingredients": [
        "Massa: 500 g de farinha de trigo",
        "1/3 de xícara (chá) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "250 ml de leite morno",
        "80 g de manteiga",
        "Recheio: 100 g de manteiga em pomada",
        "3/4 de xícara (chá) de açúcar mascavo",
        "2 colheres (sopa) de canela em pó",
        "Cobertura: 100 g de cream cheese, 1 xícara (chá) de açúcar de confeiteiro e 2 colheres (sopa) de leite"
      ],
      "steps": [
        "Misture os secos, junte os ovos e o leite e sove por 10 minutos. Acrescente a manteiga e sove até ficar lisa. Deixe crescer 1 hora.",
        "Abra a massa em retângulo de 30 x 50 cm. Espalhe a manteiga em pomada e polvilhe o açúcar mascavo misturado com a canela.",
        "Enrole pelo lado maior, bem apertado, e corte 12 fatias de 4 cm.",
        "Disponha em forma untada com um pouco de espaço entre elas e deixe crescer 40 minutos.",
        "Asse a 180 °C por 25 a 30 minutos. Misture o cream cheese, o açúcar de confeiteiro e o leite e cubra os rolinhos mornos."
      ],
      "storage": "Em local fresco, por até 2 dias. Com cobertura de cream cheese, guarde na geladeira."
    },
    {
      "id": "bisnaguinha",
      "name": "Bisnaguinha caseira",
      "category": "Pães doces",
      "art": "pao-doce",
      "photo": null,
      "yield": "30 bisnaguinhas de 25 g",
      "time": "3 h 30 min",
      "suggestedPrice": 1,
      "ingredients": [
        "500 g de farinha de trigo",
        "60 g de açúcar (1/4 de xícara)",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 colheres (sopa) de leite em pó",
        "1 ovo",
        "80 g de manteiga",
        "250 ml de leite morno",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture os secos, junte o ovo e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar bem lisa. Deixe crescer 1 hora.",
        "Divida em porções de 25 g e modele cilindrinhos de 8 cm.",
        "Coloque lado a lado, bem juntinhos, em assadeira untada e deixe crescer 40 minutos.",
        "Pincele com a gema e o leite e asse a 180 °C por 15 a 18 minutos, até dourar de leve."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "pao-creme-coco",
      "name": "Pão doce com creme e coco",
      "category": "Pães doces",
      "art": "pao-doce",
      "photo": null,
      "yield": "12 pães",
      "time": "3 h 30 min",
      "suggestedPrice": 4,
      "ingredients": [
        "500 g de farinha de trigo",
        "1/2 xícara (chá) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "100 g de manteiga",
        "250 ml de leite morno",
        "Recheio: 400 g de creme de confeiteiro (use a receita Creme de confeiteiro para pães)",
        "1 gema + 1 colher (sopa) de leite para pincelar",
        "50 g de coco ralado"
      ],
      "steps": [
        "Prepare a massa como a do pão doce de padaria e deixe crescer por 1 hora.",
        "Divida em 12 bolinhas, achate de leve e faça uma cavidade no centro de cada uma.",
        "Coloque 2 colheres (sopa) do creme em cada cavidade e feche a massa por cima, modelando de novo a bolinha.",
        "Deixe crescer 40 minutos, pincele com a gema e o leite e polvilhe o coco ralado.",
        "Asse a 180 °C por 20 a 25 minutos, até dourar."
      ],
      "storage": "Em local fresco, por até 1 dia. Depois disso, guarde na geladeira por até 2 dias."
    },
    {
      "id": "pao-trancado-doce",
      "name": "Pão trançado doce",
      "category": "Pães doces",
      "art": "tranca",
      "photo": null,
      "yield": "2 pães de 420 g",
      "time": "3 h 30 min",
      "suggestedPrice": 15,
      "ingredients": [
        "500 g de farinha de trigo",
        "1/2 xícara (chá) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "60 g de manteiga",
        "200 ml de leite morno",
        "1 gema + 1 colher (sopa) de leite para pincelar",
        "Açúcar granulado ou gergelim para polvilhar"
      ],
      "steps": [
        "Misture os secos, junte os ovos e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa. Deixe crescer 1 hora.",
        "Divida a massa em 2 partes e cada parte em 3 tiras. Role cada tira até ter 40 cm.",
        "Una as três tiras por uma das pontas, faça a trança e esconda as pontas por baixo.",
        "Coloque em assadeira forrada e deixe crescer 40 minutos. Pincele com a gema e o leite e polvilhe o açúcar granulado.",
        "Asse a 180 °C por 30 minutos, até dourar por igual."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "ciabatta",
      "name": "Ciabatta",
      "category": "Pães salgados",
      "art": "pao-frances",
      "photo": null,
      "yield": "4 ciabattas de 200 g",
      "time": "5 h",
      "suggestedPrice": 8,
      "ingredients": [
        "500 g de farinha de trigo (de preferência para pães)",
        "375 ml de água morna",
        "10 g de sal (2 colheres de chá)",
        "5 g de fermento biológico seco (1 colher de chá)",
        "2 colheres (sopa) de azeite"
      ],
      "steps": [
        "Misture todos os ingredientes com uma colher, sem sovar. A massa fica bem molhada e pegajosa, e é assim mesmo.",
        "Deixe descansar coberta. A cada 30 minutos, durante 2 horas, molhe a mão, puxe as bordas da massa e dobre-as para o centro (4 dobras no total).",
        "Deixe crescer mais 1 hora, até ficar cheia de bolhas.",
        "Vire a massa sobre a bancada bem enfarinhada, sem apertar, e corte 4 retângulos. Transfira para uma assadeira enfarinhada e deixe descansar 40 minutos.",
        "Asse a 230 °C por 22 a 25 minutos, com uma forma de água quente no forno para formar vapor."
      ],
      "storage": "No mesmo dia fica no ponto. Congele por até 30 dias e reaqueça no forno."
    },
    {
      "id": "focaccia-alecrim",
      "name": "Focaccia de alecrim",
      "category": "Pães salgados",
      "art": "focaccia",
      "photo": null,
      "yield": "1 forma de 30 x 40 cm (12 pedaços)",
      "time": "3 h 30 min",
      "suggestedPrice": 28,
      "ingredients": [
        "500 g de farinha de trigo",
        "400 ml de água morna",
        "10 g de fermento biológico seco",
        "10 g de sal (2 colheres de chá)",
        "1 colher (chá) de açúcar",
        "6 colheres (sopa) de azeite (2 na massa e 4 para a forma e a cobertura)",
        "Alecrim fresco, flor de sal, tomates-cereja e azeitonas a gosto"
      ],
      "steps": [
        "Misture a farinha, o sal, o açúcar e o fermento. Junte a água e 2 colheres de azeite e mexa até não ter mais farinha seca. A massa é mole e não precisa de sova.",
        "Deixe crescer coberta por 1 hora, até dobrar de volume.",
        "Unte a forma com azeite, passe a massa para ela e vá esticando com as pontas dos dedos. Se encolher, espere 10 minutos e estique de novo.",
        "Deixe crescer 40 minutos. Faça covinhas com os dedos untados em azeite e regue com mais azeite.",
        "Cubra com alecrim, tomates e azeitonas, polvilhe a flor de sal e asse a 220 °C por 20 a 25 minutos, até dourar."
      ],
      "storage": "Em local fresco, por até 2 dias. Congele em pedaços por até 30 dias."
    },
    {
      "id": "baguete-caseira",
      "name": "Baguete caseira",
      "category": "Pães salgados",
      "art": "pao-frances",
      "photo": null,
      "yield": "3 baguetes de 250 g",
      "time": "4 h",
      "suggestedPrice": 9,
      "ingredients": [
        "500 g de farinha de trigo",
        "330 ml de água morna",
        "10 g de sal (2 colheres de chá)",
        "5 g de fermento biológico seco (1 colher de chá)"
      ],
      "steps": [
        "Misture todos os ingredientes e sove por 10 minutos, até a massa ficar lisa e elástica.",
        "Deixe crescer coberta por 1 hora e 30 minutos, até dobrar de volume.",
        "Divida em 3 partes, dobre cada uma como uma carta e deixe descansar 30 minutos.",
        "Modele cada parte em um cilindro de 35 cm, apertando bem a emenda, e coloque em assadeira enfarinhada. Deixe crescer 45 minutos.",
        "Faça 3 cortes diagonais em cada baguete e asse a 230 °C por 25 minutos, com uma forma de água quente no forno."
      ],
      "storage": "No mesmo dia fica no ponto. Congele por até 30 dias e reaqueça no forno."
    },
    {
      "id": "pao-cachorro-quente",
      "name": "Pão de cachorro-quente",
      "category": "Pães salgados",
      "art": "pao-doce",
      "photo": null,
      "yield": "12 pães de 70 g",
      "time": "3 h",
      "suggestedPrice": 2.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "2 colheres (sopa) de açúcar",
        "10 g de sal (2 colheres de chá)",
        "10 g de fermento biológico seco",
        "1 ovo",
        "50 g de manteiga",
        "250 ml de leite morno",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture os secos, junte o ovo e o leite e sove por 10 minutos. Acrescente a manteiga e sove até a massa ficar lisa. Deixe crescer 1 hora.",
        "Divida em 12 porções de 70 g e modele cilindros de 14 cm.",
        "Coloque em assadeira com espaço entre eles e deixe crescer 40 minutos.",
        "Pincele com a gema e o leite e asse a 180 °C por 18 a 20 minutos."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "pao-australiano",
      "name": "Pão australiano",
      "category": "Pães salgados",
      "art": "pao-integral",
      "photo": null,
      "yield": "1 pão de 700 g",
      "time": "3 h 30 min",
      "suggestedPrice": 18,
      "ingredients": [
        "500 g de farinha de trigo",
        "2 colheres (sopa) de cacau em pó",
        "3 colheres (sopa) de melado (ou mel de cana)",
        "10 g de fermento biológico seco",
        "1 colher (chá) de sal",
        "300 ml de água morna",
        "30 g de manteiga"
      ],
      "steps": [
        "Misture a farinha, o cacau, o sal e o fermento. Dissolva o melado na água morna e junte aos secos.",
        "Sove por 10 minutos e acrescente a manteiga, sovando até a massa ficar lisa.",
        "Deixe crescer por 1 hora, até dobrar de volume.",
        "Modele um pão redondo, coloque em assadeira e deixe crescer 40 minutos.",
        "Faça um corte em X por cima e asse a 200 °C por 35 a 40 minutos."
      ],
      "storage": "Em local fresco, por até 5 dias. Congele fatiado por até 30 dias."
    },
    {
      "id": "pao-sirio",
      "name": "Pão sírio (pita)",
      "category": "Pães salgados",
      "art": "sirio",
      "photo": null,
      "yield": "10 pães",
      "time": "1 h 30 min",
      "suggestedPrice": 2.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "300 ml de água morna",
        "7 g de fermento biológico seco",
        "1 colher (chá) de sal",
        "1 colher (chá) de açúcar",
        "2 colheres (sopa) de azeite"
      ],
      "steps": [
        "Misture todos os ingredientes e sove por 8 minutos, até a massa ficar lisa.",
        "Deixe crescer coberta por 1 hora.",
        "Divida em 10 bolinhas e abra cada uma em um disco de 15 cm e 3 mm de espessura. Deixe descansar 15 minutos.",
        "Asse a 250 °C, sobre uma assadeira pré-aquecida, por 3 a 4 minutos, até inflar e ficar com manchas douradas.",
        "Retire e cubra com um pano limpo para os pães ficarem macios."
      ],
      "storage": "Em saco fechado, por até 4 dias. Congele por até 30 dias."
    },
    {
      "id": "esfiha-carne",
      "name": "Esfiha aberta de carne",
      "category": "Salgados de forno",
      "art": "esfiha",
      "photo": null,
      "yield": "20 esfihas",
      "time": "3 h",
      "suggestedPrice": 4.5,
      "ingredients": [
        "Massa: 500 g de farinha de trigo",
        "1 colher (sopa) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "250 ml de leite morno",
        "100 ml de óleo",
        "1 ovo",
        "Recheio: 500 g de carne moída",
        "1 cebola grande picada",
        "2 tomates sem sementes, picados",
        "1/2 xícara (chá) de salsinha picada",
        "Suco de 1/2 limão",
        "Sal e pimenta a gosto"
      ],
      "steps": [
        "Misture os secos, junte o leite, o óleo e o ovo e sove por 10 minutos. Deixe crescer por 1 hora.",
        "Refogue a cebola, junte a carne e o sal e cozinhe até secar. Desligue, misture o tomate, a salsinha, o limão e a pimenta. Deixe esfriar.",
        "Divida a massa em 20 bolinhas de 40 g e abra cada uma em um disco de 9 cm.",
        "Coloque 2 colheres (sopa) de recheio no centro e espalhe, deixando uma borda de 1 cm.",
        "Asse a 220 °C por 18 a 20 minutos, até as bordas dourarem."
      ],
      "storage": "Na geladeira, por até 3 dias. Congele assadas por até 30 dias e reaqueça no forno."
    },
    {
      "id": "enroladinho-salsicha",
      "name": "Enroladinho de salsicha",
      "category": "Salgados de forno",
      "art": "enrolado",
      "photo": null,
      "yield": "20 enroladinhos",
      "time": "2 h 30 min",
      "suggestedPrice": 4,
      "ingredients": [
        "500 g de farinha de trigo",
        "1 colher (sopa) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "250 ml de leite morno",
        "3 colheres (sopa) de óleo",
        "1 ovo",
        "10 salsichas cortadas ao meio",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Misture os secos, junte o leite, o óleo e o ovo e sove por 10 minutos. Deixe crescer por 1 hora.",
        "Abra a massa com 5 mm e corte 20 tiras de 12 x 3 cm.",
        "Enrole cada tira em uma metade de salsicha, em espiral, deixando as pontas aparecendo.",
        "Coloque na assadeira, deixe crescer 30 minutos e pincele com a gema e o leite.",
        "Asse a 200 °C por 20 a 25 minutos, até dourar."
      ],
      "storage": "Na geladeira, por até 2 dias. Congele por até 30 dias."
    },
    {
      "id": "enroladinho-presunto-queijo",
      "name": "Enroladinho de presunto e queijo",
      "category": "Salgados de forno",
      "art": "enrolado",
      "photo": null,
      "yield": "20 enroladinhos",
      "time": "2 h 30 min",
      "suggestedPrice": 4.5,
      "ingredients": [
        "500 g de farinha de trigo",
        "1 colher (sopa) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "250 ml de leite morno",
        "3 colheres (sopa) de óleo",
        "1 ovo",
        "10 fatias de presunto, cortadas ao meio",
        "10 fatias de queijo mussarela, cortadas ao meio",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Prepare a massa como a do enroladinho de salsicha e deixe crescer por 1 hora.",
        "Abra a massa em retângulo de 5 mm de espessura e corte 20 retângulos de 8 x 10 cm.",
        "Coloque meia fatia de presunto e meia de queijo em cada um, enrole e feche bem a emenda.",
        "Deixe crescer 30 minutos na assadeira, pincele com a gema e o leite e asse a 200 °C por 20 a 25 minutos."
      ],
      "storage": "Na geladeira, por até 2 dias. Congele por até 30 dias e reaqueça no forno."
    },
    {
      "id": "folhado-frango-requeijao",
      "name": "Folhado de frango com requeijão",
      "category": "Salgados de forno",
      "art": "enrolado",
      "photo": null,
      "yield": "12 folhados",
      "time": "1 h 30 min",
      "suggestedPrice": 7,
      "ingredients": [
        "500 g de massa folhada (pronta ou a receita Massa folhada rápida)",
        "300 g de peito de frango cozido e desfiado",
        "1/2 cebola picada",
        "1 dente de alho amassado",
        "1 colher (sopa) de azeite",
        "1 tomate sem sementes, picado",
        "100 g de requeijão cremoso",
        "Sal, pimenta e cheiro-verde a gosto",
        "1 gema + 1 colher (sopa) de leite para pincelar"
      ],
      "steps": [
        "Refogue a cebola e o alho no azeite, junte o frango, o tomate, o sal e a pimenta e cozinhe por 5 minutos. Misture o requeijão e o cheiro-verde e deixe esfriar completamente.",
        "Abra a massa folhada com 3 mm de espessura e corte 12 quadrados de 10 cm.",
        "Coloque uma colher de recheio no centro, dobre em triângulo e pressione as bordas com um garfo.",
        "Pincele com a gema misturada ao leite e leve à geladeira por 15 minutos.",
        "Asse a 200 °C por 20 a 25 minutos, até crescer e dourar."
      ],
      "storage": "Na geladeira, por até 2 dias. Congele crus por até 30 dias e asse sem descongelar."
    },
    {
      "id": "biscoito-polvilho-assado",
      "name": "Biscoito de polvilho assado",
      "category": "Salgados de forno",
      "art": "pao-queijo",
      "photo": null,
      "yield": "Cerca de 40 biscoitos",
      "time": "50 min",
      "suggestedPrice": 0.8,
      "ingredients": [
        "500 g de polvilho azedo",
        "1 xícara (chá) de água",
        "3/4 de xícara (chá) de óleo",
        "1 colher (chá) de sal",
        "2 ovos"
      ],
      "steps": [
        "Ferva a água com o óleo e o sal e escalde o polvilho, misturando bem. Deixe amornar.",
        "Junte os ovos, um a um, e amasse até obter uma massa lisa que não grude nas mãos.",
        "Coloque a massa em um saco de confeitar com bico pitanga e faça argolas de 4 cm sobre a assadeira untada.",
        "Asse a 200 °C por 25 a 30 minutos, até ficarem dourados e crocantes."
      ],
      "storage": "Em pote bem fechado, por até 10 dias."
    },
    {
      "id": "pao-alho-churrasco",
      "name": "Pão de alho para churrasco",
      "category": "Salgados de forno",
      "art": "pao-frances",
      "photo": null,
      "yield": "10 pães",
      "time": "30 min",
      "suggestedPrice": 4.5,
      "ingredients": [
        "10 pãezinhos franceses (use a receita Pão francês caseiro)",
        "200 g de manteiga em temperatura ambiente",
        "6 dentes de alho amassados",
        "2 colheres (sopa) de salsinha picada",
        "1/2 colher (chá) de sal",
        "100 g de mussarela ralada (opcional)"
      ],
      "steps": [
        "Misture a manteiga, o alho, a salsinha e o sal até formar uma pasta.",
        "Corte cada pãozinho ao meio, sem separar as metades, e passe a pasta dentro.",
        "Embrulhe em papel-alumínio e asse a 200 °C por 10 minutos.",
        "Abra o papel, cubra com a mussarela, se quiser, e leve de volta ao forno por mais 5 minutos, até dourar."
      ],
      "storage": "Melhor na hora. Congele crus, embrulhados, por até 30 dias."
    },
    {
      "id": "rosca-leite-condensado",
      "name": "Rosca de leite condensado",
      "category": "Roscas e broas",
      "art": "rosca",
      "photo": null,
      "yield": "2 roscas (10 fatias cada)",
      "time": "3 h 30 min",
      "suggestedPrice": 8,
      "ingredients": [
        "500 g de farinha de trigo",
        "1 lata (395 g) de leite condensado",
        "2 ovos",
        "100 ml de leite morno",
        "10 g de fermento biológico seco",
        "1 colher (chá) de sal",
        "60 g de manteiga",
        "1 gema + 1 colher (sopa) de leite para pincelar",
        "Açúcar cristal para polvilhar"
      ],
      "steps": [
        "Misture o leite condensado, os ovos, o leite e o fermento. Junte a farinha e o sal e sove por 10 minutos.",
        "Acrescente a manteiga e sove até a massa ficar lisa. Deixe crescer 1 hora.",
        "Divida em 2 partes, role cada uma em um cilindro de 50 cm e una as pontas formando uma rosca.",
        "Deixe crescer 40 minutos, pincele com a gema e o leite e polvilhe o açúcar cristal.",
        "Asse a 180 °C por 30 minutos, até dourar."
      ],
      "storage": "Em local fresco, coberta, por até 3 dias."
    },
    {
      "id": "cuca-banana-farofa",
      "name": "Cuca de banana com farofa doce",
      "category": "Roscas e broas",
      "art": "broa",
      "photo": null,
      "yield": "1 forma de 25 x 35 cm (16 pedaços)",
      "time": "2 h 30 min",
      "suggestedPrice": 4.5,
      "ingredients": [
        "Massa: 500 g de farinha de trigo",
        "1/2 xícara (chá) de açúcar",
        "10 g de fermento biológico seco",
        "1 colher (chá) de sal",
        "2 ovos",
        "60 g de manteiga",
        "200 ml de leite morno",
        "5 bananas-nanicas maduras fatiadas",
        "Farofa: 1 xícara (chá) de farinha de trigo",
        "1/2 xícara (chá) de açúcar",
        "100 g de manteiga gelada em cubos",
        "1 colher (chá) de canela em pó"
      ],
      "steps": [
        "Misture os secos, junte os ovos e o leite e sove por 8 minutos. Acrescente a manteiga e sove até ficar lisa. Deixe crescer 1 hora.",
        "Para a farofa, esfregue com as pontas dos dedos a farinha, o açúcar, a canela e a manteiga gelada até virar uma farofa grossa.",
        "Abra a massa na forma untada, cubra com as bananas e espalhe a farofa por cima. Deixe crescer 30 minutos.",
        "Asse a 180 °C por 35 a 40 minutos, até a farofa dourar."
      ],
      "storage": "Em local fresco, coberta, por até 3 dias."
    },
    {
      "id": "rosca-nata",
      "name": "Rosca de nata",
      "category": "Roscas e broas",
      "art": "rosca",
      "photo": null,
      "yield": "2 roscas (10 fatias cada)",
      "time": "3 h 30 min",
      "suggestedPrice": 7,
      "ingredients": [
        "500 g de farinha de trigo",
        "150 g de nata (ou creme de leite fresco)",
        "1/2 xícara (chá) de açúcar",
        "1 colher (chá) de sal",
        "10 g de fermento biológico seco",
        "2 ovos",
        "100 ml de leite morno",
        "Cobertura: receita Glacê de açúcar para pães e sonhos"
      ],
      "steps": [
        "Misture os secos, junte a nata, os ovos e o leite e sove por 12 minutos, até a massa ficar lisa e macia.",
        "Deixe crescer por 1 hora e 30 minutos.",
        "Divida em 2 partes, role cada uma em um cilindro e una as pontas formando uma rosca. Coloque em assadeira untada.",
        "Deixe crescer 40 minutos e asse a 180 °C por 30 minutos.",
        "Cubra com o glacê ainda morna."
      ],
      "storage": "Em local fresco, coberta, por até 3 dias."
    },
    {
      "id": "massa-folhada-rapida",
      "name": "Massa folhada rápida",
      "category": "Massas e recheios",
      "art": "croissant",
      "photo": null,
      "yield": "Rende cerca de 800 g de massa",
      "time": "2 h",
      "suggestedPrice": 25,
      "ingredients": [
        "400 g de farinha de trigo",
        "1 colher (chá) de sal",
        "250 g de manteiga sem sal gelada, em cubos",
        "150 ml de água gelada",
        "1 colher (sopa) de suco de limão"
      ],
      "steps": [
        "Misture a farinha e o sal. Junte a manteiga em cubos e misture rapidamente, deixando pedaços visíveis de manteiga.",
        "Junte a água e o limão e una a massa sem sovar. Modele um retângulo.",
        "Abra em retângulo de 20 x 50 cm e dobre em três, como uma carta. Embale e leve à geladeira por 30 minutos.",
        "Repita o processo de abrir, dobrar e gelar mais 3 vezes (4 dobras no total).",
        "Deixe descansar 30 minutos na geladeira antes de usar."
      ],
      "storage": "Na geladeira, por até 3 dias. Congele por até 60 dias."
    },
    {
      "id": "glace-acucar",
      "name": "Glacê de açúcar para pães e sonhos",
      "category": "Massas e recheios",
      "art": "creme",
      "photo": null,
      "yield": "Rende cerca de 300 g (cobre 20 pães)",
      "time": "10 min",
      "suggestedPrice": 8,
      "ingredients": [
        "2 xícaras (chá) de açúcar de confeiteiro peneirado",
        "3 colheres (sopa) de leite morno",
        "1 colher (chá) de baunilha",
        "1 colher (chá) de suco de limão"
      ],
      "steps": [
        "Coloque o açúcar em uma tigela e junte o leite aos poucos, mexendo sem parar.",
        "Acrescente a baunilha e o limão e mexa até ficar liso e brilhante.",
        "Use na hora: mergulhe os pães ainda mornos ou espalhe com uma colher. Se ficar grosso, junte leite aos pingos; se ficar ralo, mais açúcar."
      ],
      "storage": "Em pote fechado, na geladeira, por até 7 dias. Mexa bem antes de usar."
    },
    {
      "id": "doce-leite-cremoso",
      "name": "Doce de leite cremoso para recheios",
      "category": "Massas e recheios",
      "art": "creme",
      "photo": null,
      "yield": "Rende cerca de 400 g",
      "time": "1 h 30 min",
      "suggestedPrice": 18,
      "ingredients": [
        "1 litro de leite integral",
        "1 e 1/2 xícara (chá) de açúcar (300 g)",
        "1/2 colher (chá) de bicarbonato de sódio",
        "1 colher (chá) de baunilha"
      ],
      "steps": [
        "Em uma panela grande e funda (o leite sobe ao ferver), misture o leite, o açúcar e o bicarbonato.",
        "Leve ao fogo médio até ferver, depois abaixe o fogo e cozinhe por 1 hora a 1 hora e 15 minutos, mexendo de vez em quando e com mais frequência no final.",
        "Está no ponto quando, ao raspar o fundo com a colher, aparece o fundo da panela por 2 ou 3 segundos.",
        "Desligue, junte a baunilha e deixe esfriar mexendo de vez em quando."
      ],
      "storage": "Em pote fechado, na geladeira, por até 15 dias."
    },
    {
      "id": "recheio-frango-cremoso",
      "name": "Recheio de frango cremoso",
      "category": "Massas e recheios",
      "art": "creme",
      "photo": null,
      "yield": "Rende cerca de 500 g (recheia 20 salgados)",
      "time": "30 min",
      "suggestedPrice": 14,
      "ingredients": [
        "500 g de peito de frango cozido e desfiado",
        "1/2 cebola picada",
        "2 dentes de alho amassados",
        "1 colher (sopa) de óleo",
        "1 xícara (chá) de leite",
        "2 colheres (sopa) de amido de milho",
        "200 g de requeijão cremoso",
        "Sal, pimenta e cheiro-verde a gosto"
      ],
      "steps": [
        "Refogue a cebola e o alho no óleo, junte o frango e o sal e cozinhe por 3 minutos.",
        "Dissolva o amido no leite frio, despeje na panela e mexa em fogo baixo até engrossar.",
        "Desligue, junte o requeijão, a pimenta e o cheiro-verde e misture bem.",
        "Deixe esfriar completamente antes de rechear."
      ],
      "storage": "Na geladeira, por até 3 dias."
    }
  ];
})(typeof globalThis !== 'undefined' ? globalThis : window);
