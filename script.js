//Jogos exemplos
  var listaNomes = [
    {
      name: 'Cyberpunk 2077',
      link:'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/09/capsule_616x353.jpg'
    },
    {
      name: "Destiny 2",
      link: 'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/FR_Bungie_Destiny2_S1_2560x1440_2560x1440-eb02e9edc6111b582ebbacbaae6482ed'
    },
    {
      name: "Hollow Knight",
      link: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51'
    },
    {
      name: "The Legend of Zelda: Ocarina of Time",
      link: 'https://guarientoportal.com/wp-content/uploads/2021/06/The-Legend-of-Zelda-Ocarina-of-Time-Curiosidades-Game-Nintendo.jpg'
    },   
  ];

// addEventListener seria um ouvinte de evento a um elemento HTML
// DomContentLoaded é um evento específico que é acionado assim que a página for carregada.
document.addEventListener('DOMContentLoaded', function() {
  renderGames();
});
  
 function renderGames() {
   var games = document.getElementById('jogos');
   games.innerHTML = '';                                 // Evita que fica duplicando.

    var i = 0;
    while(i < listaNomes.length){
      var gameDiv = document.createElement('div');      //Cria Elemento em HTML
      gameDiv.classList.add('game');                    //Classe para modificar no CSS

      var gameNome = document.createElement('h2');     //Fornece título aos jogos em HTML
      gameNome.textContent = listaNomes[i].name;

      var gameImg = document.createElement('img');    //Fornece imagem aos jogos em HTML
      gameImg.src = listaNomes[i].link;               //Img src associado o link

      gameDiv.appendChild(gameNome);                //Agrega Nome e Imagem ao elemento html
      gameDiv.appendChild(gameImg);

      games.appendChild(gameDiv);                    //agrega o elemento gameDiv ao id games
      i++
    }
  }
  

var button = document.getElementById('go');
button.addEventListener('click', function() {             //clicar no botão executa essa função
    var newName = document.getElementById('newName').value;
    var newImg = document.getElementById('newImg').value;
  
    var gameNOld = listaNomes.find(function(gameName) {       //Função que evita duplicação de jogos
    return gameName.name == newName;
    });
    var gameLOld = listaNomes.find(function(gameImg){
    return gameImg.link == newImg
      })
  

  if (gameNOld || gameLOld) {
    alert('Esse jogo já está na lista!');
    return;             // Sai da função para evitar adicionar o jogo repetido
  } 

    var newGame = {
      name: newName,
      link: newImg
    };

    listaNomes.push(newGame);             // Adiciona o novo jogo à lista

    listaNomes.sort(function(a, b) {      //Função para organizar os Jogos
      var nameA = a.name.toUpperCase();     // Converte os nomes para maiúsculas
      var nameB = b.name.toUpperCase();
         
     if (nameA < nameB) {
       return -1;                        // Retorna um número negativo se o nomeA vier antes do nomeB
     }
     if (nameA > nameB) {
       return 1;                         // Retorna um número positivo se o nomeA vier depois do nomeB
     }
     return 0;                           // Retorna 0 se os nomes forem iguais
      
    }
                   ); 

  renderGames(); // Atualiza a exibição dos jogos;
  var newNameInput = document.getElementById('newName');   //Limpa os inputs para ficar em branco após adicionar.
  var newImgInput = document.getElementById('newImg');

  newNameInput.value = '';
  newImgInput.value = '';
  


  alert('Novo Jogo Adicionado!'); 
});