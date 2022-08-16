const CardData = [
  {
    title: "Pede Ali",
    to: "https://pedeali.vercel.app/",
    footer: "NextJS, MongoDB",
    body: "Delivery de Comida a Distância de um Clique",
    thumbnail: "./assets/misc/restaurant.png",
    category: "main",
    type: "Website",
  },
  {
    title: "Shmag",
    to: "https://shmag.netlify.app/",
    footer: "ReactJS, Axios",
    body: "Link Shortener Frontend",
    thumbnail: "./assets/misc/nodes.png",
    category: "main",
    type: "Link Shorener",
  },
  {
    title: "GameSystem Bot",
    to: "https://github.com/raymag/GameSystem",
    footer: "Python, Discord.py",
    body: "A Discord bot for Tabletop RPG campaigns",
    thumbnail: "./assets/misc/dice.png",
    category: "side",
    type: "Discord bot",
  },
  {
    title: "Lomotif Maker",
    to: "https://github.com/raymag/lomotif-maker",
    footer: "Python, FFMPEG",
    body: "Easily make lomotif videos",
    thumbnail: "./assets/misc/video-file.png",
    category: "side",
    type: "Program",
  },
  {
    title: "Shmag API",
    to: "https://github.com/raymag/shmag",
    footer: "NodeJS, MongoDB",
    body: "Link Shortener API",
    thumbnail: "./assets/misc/link.png",
    category: "side",
    type: "Link Shorener API",
  },
  {
    title: "Nope",
    to: "https://github.com/raymag/nope",
    footer: "Javascript, HTML, CSS",
    thumbnail: "./assets/misc/angry.png",
    category: "side",
    type: "Browser Extension",
  },
  {
    title: "Retweet Bot",
    to: "https://github.com/raymag/retweet-bot",
    footer: "NodeJs, Twit",
    thumbnail: "./assets/misc/retweet.png",
    category: "side",
    type: "Twitter Bot",
  },
  {
    title: "Emojix",
    to: "https://emojix.netlify.app/",
    footer: "Javascript",
    thumbnail: "./assets/misc/smile.png",
    category: "side",
    type: "Matrix but with Emojis",
  },
  {
    title: "InstaDown",
    to: "https://github.com/raymag/instadown",
    footer: "Python, Selenium",
    thumbnail: "./assets/misc/camera.png",
    category: "side",
    type: "Program",
  },
  {
    title: "InstaMage",
    to: "https://github.com/raymag/instamage-cli",
    footer: "Node, Puppeteer",
    thumbnail: "./assets/misc/instagram-purple.png",
    category: "side",
    type: "CLI",
  },
  {
    title: "vBorder Radius",
    to: "https://raymag.github.io/vborder-radius",
    footer: "Javascript, CSS",
    thumbnail: "./assets/misc/creation.png",
    category: "side",
    type: "website",
  },
  {
    title: "MCLOCK",
    to: "https://mclock.netlify.com/",
    footer: "Javascript, CSS, HTML",
    thumbnail: "./assets/misc/hourglass.png",
    category: "side",
    type: "code snippet",
  },
  {
    title: "TEMPLATE SOCKETIO",
    to: "https://github.com/raymag/socketio_template",
    footer: "SocketIO and NodeJS Template",
    thumbnail: "./assets/misc/socketio.png",
    category: "side",
    type: "code base",
  },
  {
    title: "TEMPLATE NODEJS",
    to: "https://github.com/raymag/node_template",
    footer: "NodeJS Template",
    thumbnail: "./assets/skills/nodejs.png",
    category: "side",
    type: "code base",
  },
  {
    title: "IMDB Scrapper",
    to: "https://github.com/raymag/IMDB-Scrapper",
    footer: "Web Scrapper",
    thumbnail: "./assets/misc/imdb.png",
    category: "side",
    type: "web crawler",
  },
  {
    title: "HACKTOBERFEST JANAÚBA",
    to: "https://hacktoberfestjn.netlify.com/",
    footer: "Javascript, CSS, HTML",
    thumbnail: "./assets/misc/astronaut.png",
    category: "side",
    type: "website",
  },
  {
    title: "Papo Reto",
    to: "https://papo-io.herokuapp.com/",
    footer: "Python, Flask, SocketIO, Javascript",
    thumbnail: "./assets/projects/sun.png",
    body: "Chat Room built with Python and WebSockets",
    category: "side",
    type: "chat",
  },
  {
    title: "LanQ",
    to: "https://github.com/raymag/lanq",
    footer: "ReactJS, Javascript",
    thumbnail: "./assets/misc/translate.png",
    type: "Lang Learning Website",
  },
  {
    title: "BOND",
    to: "https://bond-tk.000webhostapp.com/",
    footer: "PHP, MySQL, Bootstrap, Javascript",
    thumbnail: "./assets/projects/molecule.png",
    category: "side",
    type: "website",
  },
  {
    title: "PAD",
    to: "https://pad-io.herokuapp.com/",
    footer: "PHP, Python, MongoDB, Javascript",
    thumbnail: "./assets/projects/star.png",
    body: "Share and correct redactions",
    category: "side",
    type: "website",
  },
  {
    title: "Floesia",
    to: "https://github.com/raymag/floesia",
    footer: "HTML, CSS & JavaScript",
    body: "Find and publish amateur poems in a fast and straight way.",
    thumbnail: "./assets/misc/poem.png",
    category: "side",
    type: "Website",
  },
  {
    title: "Floesia API",
    to: "https://github.com/raymag/floesia-api",
    footer: "Node, MongoDB",
    body: "API for Floesia API.",
    thumbnail: "./assets/misc/poem-api.png",
    category: "side",
    type: "REST API",
  },
  {
    title: "BUTECO",
    to: "https://buteco-io.herokuapp.com/",
    footer: "NodeJS, ExpressJS, SocketIO",
    thumbnail: "./assets/icons/mango/icon-512x512.png",
    body: "Have a nice chat from anywhere",
    category: "side",
    type: "chat",
  },
  {
    title: "BUTECO MOBILE",
    to: "https://github.com/raymag/buteco-mobile",
    footer: "React Native, Heroku, SocketIO",
    thumbnail: "./assets/icons/mango/icon-512x512.png",
    body: "Have a nice chat from anywhere",
    category: "main",
    type: "Mobile App",
  },
  {
    title: "ACIDLOG",
    to: "https://github.com/raymag/acidlog",
    footer: "React Native, Styled-Components",
    thumbnail: "./assets/misc/flask.png",
    body: "Journal anywhere, anytime you want",
    category: "main",
    type: "Mobile App",
  },
  {
    title: "DOTLAND",
    to: "https://dotland.herokuapp.com/",
    footer: "NodeJS, ExpressJS, HTML5, SocketIo",
    thumbnail: "./assets/projects/cube.png",
    body: "Online multiplayer game built with WebSockets and Canvas",
    category: "side",
    type: "game",
  },
  {
    title: "TODO LIST",
    to: "https://reacttodoraymag.netlify.com/",
    footer: "ReactJS, Javascript",
    thumbnail: "./assets/misc/react.png",
    body: "Todo list app built with pure ReactJS",
    category: "side",
    type: "website",
  },
  {
    title: "GUILA DEFENSE",
    to: "https://raymag.github.io/guila_defense/index",
    footer: "Unity2D, C#",
    thumbnail: "./assets/projects/heart-card.png",
    body: "Protect Guila's territory by all means",
    category: "side",
    type: "game",
  },
  {
    title: "Matrix Fx",
    to: "https://codepen.io/Raymag/full/gObVLBw",
    footer: "Javascript, Canvas",
    thumbnail: "./assets/misc/hack.png",
    category: "side",
    type: "code snippet",
  },
  {
    title: "TIRAPELADA",
    to: "https://github.com/raymag/tirapelada",
    footer: "PHP, Javascript",
    thumbnail: "./assets/projects/football.png",
    category: "side",
    type: "website",
  },
  {
    title: "Instagram Bot",
    to: "https://github.com/raymag/igbot",
    footer: "Python, Selenium",
    thumbnail: "./assets/misc/instagram.png",
    category: "side",
    type: "bot",
  },
  {
    title: "CONTRIBUIÇÃO OPEN-SOURCE?",
    to: "https://raymag.github.io/show/contribuicao_opensource/",
    footer: "Slideshow",
    thumbnail: "./assets/misc/git.png",
    category: "side",
    type: "slideshow",
  },
  {
    title: "A EVOLUÇÃO DOS GAMES",
    to: "https://raymag.github.io/show/evolucao_jogos/",
    footer: "Slideshow",
    thumbnail: "./assets/misc/joystick.png",
    category: "side",
    type: "slideshow",
  },
  {
    title: "Passcat",
    to: "https://github.com/raymag/passcat-web",
    footer: "Javascript, HTML, CSS",
    thumbnail: "./assets/misc/passcat.png",
    category: "side",
    type: "Webpage",
  },
  {
    title: "SOLITUDE",
    to: "https://github.com/raymag/Solitude",
    footer: "Python, Tkinter",
    thumbnail: "./assets/misc/muslim.png",
    category: "side",
    type: "Desktop GUI",
  },
  {
    title: "PAINHO",
    to: "https://github.com/raymag/painho",
    footer: "Python",
    thumbnail: "./assets/misc/father.png",
    category: "side",
    type: "Script",
  },
  {
    title: "ETHERIAL",
    to: "https://github.com/raymag/etherial",
    footer: "Angular",
    thumbnail: "./assets/misc/eclipse.png",
    category: "side",
    type: "Weather Webapp",
  },
  {
    title: "VList",
    to: "https://github.com/raymag/vlist",
    footer: "VueJS",
    thumbnail: "./assets/skills/vue.png",
    category: "side",
    type: "TodoList Webapp",
  },
  {
    title: "Tasker",
    to: "https://github.com/raymag/tasker",
    footer: "Angular, Angular Material",
    thumbnail: "./assets/misc/tasks.png",
    category: "side",
    type: "TodoList Webapp",
  },
  {
    title: "Passcat Ext",
    to: "https://github.com/raymag/passcat-ext",
    footer: "Javascript, HTML, CSS",
    thumbnail: "./assets/misc/passcat.png",
    category: "side",
    type: "Browser Extension",
  },
  {
    title: "Alumiart",
    to: "https://alumiart-web.vercel.app/",
    footer: "ReactJS",
    body: "Esquadrias de Alumínio",
    thumbnail: "./assets/misc/window.png",
    category: "side",
    type: "Webiste",
  },
];

export default CardData;
