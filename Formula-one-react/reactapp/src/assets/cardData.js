// Array de objetos com detalhes de cada pista da temporada
const cardsData = [
  {
    id: 1,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Bahrein - Sakhir",
      distance: "5.4km",
      laps: 57,
      lastWinner: "Max Verstapen",
      funFact:
        " O Circuito Internacional do Bahrein, em Sakhir, é o local do primeiro Grande Prêmio noturno da Fórmula 1 e é famoso por sua iluminação espetacular, que cria uma atmosfera única durante a corrida.",
    },
  },
  {
    id: 2,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Arábia Saudita - Jeddah",
      distance: "6.1km",
      laps: 50,
      lastWinner: "Max Verstapen",
      funFact:
        " O Circuito de Jeddah, na Arábia Saudita, é conhecido por sua vista deslumbrante do Mar Vermelho, proporcionando aos pilotos uma experiência de corrida única com um pano de fundo pitoresco.",
    },
  },
  {
    id: 3,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Austrália - Melbourne",
      distance: "5.3km",
      laps: 58,
      lastWinner: "Carlos Sainz",
      funFact:
        " O Circuito de Albert Park, em Melbourne, tem uma seção conhecida como 'Lagoa das Garças', onde ocasionalmente aves migratórias fazem uma parada durante suas viagens sazonais.",
    },
  },

  {
    id: 4,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677250050/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Japão - Suzuka",
      distance: "5.8km",
      laps: 53,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Suzuka é conhecido por sua 'Esses de Suzuka', uma série de curvas desafiadoras em forma de 'S', que testam os limites dos pilotos e proporcionam alguns dos momentos mais emocionantes da temporada.",
    },
  },
  {
    id: 5,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da China - Xangai",
      distance: "5.4km",
      laps: 56,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito Internacional de Xangai é conhecido por sua reta de 1,2 km, uma das mais longas do calendário da Fórmula 1, proporcionando oportunidades emocionantes de ultrapassagem.",
    },
  },
  {
    id: 6,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio de Miami",
      distance: "5.4km",
      laps: 57,
      lastWinner: "Lando Norris",
      funFact:
        " O Circuito de Miami é projetado para incorporar algumas das icônicas ruas da cidade, proporcionando uma experiência de corrida única com vistas deslumbrantes e desafios emocionantes.",
    },
  },
  {
    id: 7,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Emilia-Romagna - Imola",
      distance: "4.909km",
      laps: 63,
      lastWinner: "Max Verstappen",
      funFact:
        " O Autódromo Enzo e Dino Ferrari, em Imola, é famoso por sua história na Fórmula 1 e por sediar corridas emocionantes com seu layout desafiador.",
    },
  },
  {
    id: 8,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio de Mônaco",
      distance: "3.3km",
      laps: 78,
      lastWinner: "Charles Leclerc",
      funFact:
        " O Circuito de Mônaco é conhecido por suas casas luxuosas ao longo do traçado da pista, e uma delas, a Villa La Vigie, já foi residência do famoso estilista Karl Lagerfeld.",
    },
  },
  {
    id: 9,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Canadá (Montreal)",
      distance: "4.4km",
      laps: 70,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito Gilles Villeneuve, em Montreal, é cercado por uma vegetação exuberante, e durante os dias de corrida, os fãs muitas vezes chegam em suas embarcações pelo Rio São Lourenço para assistir à corrida de perto.",
    },
  },
  {
    id: 10,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244986/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Espanha - Barcelona",
      distance: "4.7km",
      laps: 66,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Barcelona-Catalunha é um dos poucos circuitos de Fórmula 1 que também possui uma pista de testes adjacente, onde as equipes realizam testes durante a pré-temporada e ao longo do ano.",
    },
  },
  {
    id: 11,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Áustria - Spielberg",
      distance: "4.3km",
      laps: 71,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito Red Bull Ring, em Spielberg, é cercado por belas paisagens montanhosas e é comum ver parapentes coloridos voando sobre a pista durante os fins de semana de corrida.",
    },
  },
  {
    id: 12,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Grã-Bretanha - Silverstone",
      distance: "5.8km",
      laps: 52,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Silverstone é um dos circuitos mais antigos do calendário da Fórmula 1 e é famoso por sua história rica e suas instalações modernas.",
    },
  },
  {
    id: 13,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Hungria - Budapeste",
      distance: "4.4km",
      laps: 70,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Hungaroring, perto de Budapeste, é conhecido por sua localização pitoresca, situado entre colinas arborizadas e oferecendo vistas panorâmicas da cidade de Budapeste.",
    },
  },
  {
    id: 14,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Bélgica - Spa-Francorchamps",
      distance: "7.0km",
      laps: 44,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Spa-Francorchamps é famoso por suas mudanças climáticas imprevisíveis, onde uma parte da pista pode estar ensolarada enquanto outra está sob chuva torrencial, desafiando os pilotos e proporcionando corridas emocionantes.",
    },
  },
  {
    id: 15,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Holanda - Zandvoort",
      distance: "4.3km",
      laps: 72,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Zandvoort está localizado à beira-mar e oferece aos fãs uma oportunidade única de assistir às corridas enquanto desfrutam das brisas do Mar do Norte.",
    },
  },
  {
    id: 16,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio da Itália - Monza",
      distance: "5.8km",
      laps: 53,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Monza é o lar da famosa 'Floresta Real', uma área de parque natural dentro do complexo do circuito, que acrescenta um toque de beleza natural à atmosfera de alta velocidade das corridas.",
    },
  },
  {
    id: 17,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Azerbaijão - Baku",
      distance: "6.003km",
      laps: 51,
      lastWinner: "Sergio Perez",
      funFact:
        " O Circuito Urbano de Baku é conhecido por suas retas longas, curvas estreitas e seu cenário urbano único, com trechos passando por áreas históricas da cidade.",
    },
  },
  {
    id: 18,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1683633963/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio de Cingapura",
      distance: "5.1km",
      laps: 62,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito de Marina Bay, em Cingapura, é o primeiro e único circuito de rua da Fórmula 1 a ser totalmente iluminado por lâmpadas de LED, criando uma paisagem urbana deslumbrante durante as corridas noturnas.",
    },
  },
  {
    id: 19,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio dos Estados Unidos - Austin",
      distance: "5.5km",
      laps: 56,
      lastWinner: "Max Verstappen",
      funFact:
        " O Circuito das Américas, em Austin, é o único circuito nos Estados Unidos projetado especificamente para corridas de Fórmula 1 e possui uma das maiores elevações de todo o calendário da Fórmula 1.",
    },
  },
  {
    id: 20,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do México - Cidade do México",
      distance: "4.3km",
      laps: 71,
      lastWinner: "Max Verstappen",
      funFact:
        " O Autódromo Hermanos Rodríguez, na Cidade do México, é construído dentro do Parque Forestal de los Chapultepec, um dos maiores parques urbanos do mundo, proporcionando um contraste interessante entre a natureza e a alta velocidade das corridas.",
    },
  },
  {
    id: 21,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Brasil - São Paulo",
      distance: "4.3km",
      laps: 71,
      lastWinner: "Max Verstappen",
      funFact:
        " O Autódromo José Carlos Pace, em São Paulo, é carinhosamente conhecido como Interlagos, nome que se origina da região onde está localizado, entre dois grandes lagos, Guarapiranga e Billings.",
    },
  },
  {
    id: 22,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677249930/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio de Las Vegas",
      distance: "6.2km",
      laps: 50,
      lastWinner: "Max Verstapen",
      funFact:
        " O Circuito de Las Vegas é projetado para proporcionar uma experiência emocionante aos pilotos, com uma mistura de trechos de alta velocidade e curvas desafiadoras, além de vistas deslumbrantes dos famosos hotéis e cassinos da Strip.",
    },
  },
  {
    id: 23,
    image:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio do Catar (Losail)",
      distance: "5.4km",
      laps: 57,
      lastWinner: "Max Verstapen",
      funFact:
        " O Circuito Internacional de Losail, no Catar, é conhecido por ser uma pista de corrida de motociclismo de classe mundial e sediar eventos noturnos. A Fórmula 1 fará sua estreia neste circuito em breve.",
    },
  },
  {
    id: 24,
    image:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/7col-retina/image.png",
    trackInfo: {
      name: "Grande Prêmio de Abu Dhabi - Yas Marina",
      distance: "5.3km",
      laps: 58,
      lastWinner: "Max Verstapen",
      funFact:
        " O Circuito de Yas Marina, em Abu Dhabi, é famoso por sua arquitetura deslumbrante e pela corrida que termina ao anoitecer, proporcionando uma paisagem espetacular com o pôr do sol e as luzes artificiais da cidade.",
    },
  },
];

export default cardsData;
