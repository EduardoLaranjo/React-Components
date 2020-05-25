const cities = [
  'Lisbon',
  'Picotos',
  'Braga',
  'Funchal',
  'Setúbal',
  'Copeira',
  'Ponta Delgada',
  'Portimão',
  'Évora',
  'Aveiro',
  'Leiria',
  'Faro',
  'Beja',
  'Bragança',
  'Castelo Branco',
  'Guarda',
  'Santarém',
  'Viseu',
  'Covilhã',
  'Vila Marim',
  'Portalegre',
  'Viana do Castelo',
  'Angra do Heroísmo',
  'Portela',
  'Lagos',
  'Paredes de Coura',
  'São João da Pesqueira',
  'São João da Madeira',
  'Fornos de Algodres',
  'Castelo de Paiva',
  'Portel',
  'Porto',
  'Sertã',
  'Vila do Bispo',
  'Fronteira',
  'Alfândega da Fé',
  'Celorico da Beira',
  'Alcoutim',
  'Arronches',
  'Amarante',
  'Tabuaço',
  'Gouveia',
  'Aguiar da Beira',
  'Idanha-a-Nova',
  'Ribeira de Pena',
  'Seia',
  'Rio Maior',
  'Condeixa-a-Nova',
  'Mação',
  'Lousada',
  'Trancoso',
  'Estarreja',
  'Moita',
  'Ponte de Lima',
  'Guimarães',
  'Sobral de Monte Agraço',
  'Seixal',
  'Almeirim',
  'Cantanhede',
  'Elvas',
  'Ponte da Barca',
  'Golegã',
  'Anadia',
  'Moura',
  'Avis',
  'Águeda',
  'Valongo',
  'Caminha',
  'Ourique',
  'Sardoal',
  'Vila do Conde',
  'Alijó',
  'Monchique',
  'Cabeceiras de Basto',
  'Aljezur',
  'Castanheira de Pêra',
  'Melgaço',
  'Gavião',
  'Monforte',
  'Vila Viçosa',
  'Almodôvar',
  'Redondo',
  'Vila Nova de Cerveira',
  'Mafra',
  'Lousã',
  'Amadora',
  'Pinhel',
  'Estremoz',
  'Penamacor',
  'Penalva do Castelo',
  'Crato',
  'Nelas',
  'Aljustrel',
  'Esposende',
  'Alcochete',
  'Sever do Vouga',
  'Sesimbra',
  'São Pedro do Sul',
  'Lourinhã',
  'Santa Comba Dão',
  'Entroncamento',
  'Armamar',
  'Arcos de Valdevez',
  'Paços de Ferreira',
  'Fafe',
  'Ponte de Sôr',
  'Moimenta da Beira',
  'Santa Marta de Penaguião',
  'Murça',
  'Sernancelhe',
  'Vila Real',
  'Vinhais',
  'Alcácer do Sal',
  'Ourém',
  'Vila Nova de Gaia',
  'Castelo de Vide',
  'Vila Nova da Barquinha',
  'Loulé',
  'Lamego',
  'Alvaiázere',
  'Sátão',
  'Albergaria-a-Velha',
  'Matosinhos',
  'Alandroal',
  'Proença-a-Nova',
  'Lagoa',
  'Montijo',
  'Felgueiras',
  'Nazaré',
  'Miranda do Corvo',
  'Penedono',
  'Vale de Cambra',
  'Vila Flor',
  'Figueiró dos Vinhos',
  'Santiago do Cacém',
  'Trofa',
  'Penafiel',
  'Penacova',
  'Pedrógão Grande',
  'Oleiros',
  'Sousel',
  'Arraiolos',
  'Poiares',
  'Famalicão',
  'Vila Verde',
  'Terras de Bouro',
  'Manteigas',
  'Sintra',
  'Vizela',
  'Vila Velha de Ródão',
  'Benavente',
  'Maia',
  'Santo Tirso',
  'Oeiras',
  'Celorico de Basto',
  'Bombarral',
  'Barreiro',
  'Belmonte',
  'Montemor-o-Velho',
  'Espinho',
  'Oliveira do Hospital',
  'Oliveira de Frades',
  'Oliveira de Azemeis',
  'Oliveira do Bairro',
  'Viana do Alentejo',
  'Carrazeda de Anciães',
  'Ovar',
  'Torres Novas',
  'Torres Vedras',
  'Cartaxo',
  'Mangualde',
  'Vila Nova de Paiva',
  'Paredes',
  'Vidigueira',
  'Chamusca',
  'Macedo de Cavaleiros',
  'Resende',
  'Póvoa de Lanhoso',
  'Feira',
  'Azambuja',
  'Vieira do Minho',
  'Batalha',
  'Alcanena',
  'Palmela',
  'Ferreira do Zêzere',
  'Arouca',
  'Vila de Rei',
  'Tomar',
  'Tondela',
  'Constância',
  'Vila Pouca de Aguiar',
  'Almada',
  'Almeida',
  'Alvito',
  'Soure',
  'Alenquer',
  'Mértola',
  'Mesão Frio',
  'Mourão',
  'Valpaços',
  'Pombal',
  'Mogadouro',
  'Póvoa de Varzim',
  'Baião',
  'Mortágua',
  'Tábua',
  'Cascais',
  'Barcelos',
  'Boticas',
  'Sabrosa',
  'Montalegre',
  'Gondomar',
  'Freixo de Espada à Cinta',
  'Mora',
  'Vendas Novas',
  'Vila Nova de Foz Côa',
  'Caldas da Rainha',
  'Marvão',
  'Vimioso',
  'Odivelas',
  'Odemira',
  'Peniche',
  'Vagos',
  'Marco de Canavezes',
  'Coruche',
  'Coimbra',
  'Barrancos',
  'Montemor-o-Novo',
  'Mêda',
  'Óbidos',
  'Góis',
  'Reguengos de Monsaraz',
  'Torre de Moncorvo',
  'Murtosa',
  'Alcobaça',
  'Figueira da Foz',
  'Figueira de Castelo Rodrigo',
  'Abrantes',
  'Arruda dos Vinhos',
  'Fundão',
  'Tarouca',
  'Ílhavo',
  'Alpiarça',
  'Albufeira',
  'Penela',
  'Valença',
  'Amares',
  'São Brás de Alportel',
  'Pampilhosa da Serra',
  'Tavira',
  'Nisa',
  'Alter do Chão',
  'Castro Verde',
  'Mealhada',
  'Cuba',
  'Vouzela',
  'Vila Franca de Xira',
  'Marinha Grande',
  'Cinfães',
  'Borba',
  'Mira',
  'Silves',
  'Grândola',
  'Campo Maior',
  'Ferreira do Alentejo',
  'Miranda do Douro',
  'Mirandela',
  'Chaves',
  'Sines',
  'Mondim de Basto',
  'Monção',
  'Castro Marim',
  'Castro Daire',
  'Arganil',
  'Olhão',
  'Cadaval',
  'Loures',
  'Salvaterra de Magos',
  'Peso da Régua',
  'Serpa',
  'Sabugal',
  'Ansião',
  'Vila Real de Santo António',
  'Porto de Mós'
];

export default cities;
