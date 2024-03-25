/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  function filterGames(platform) {
    allGameListItems.forEach(item => {
      if (item.innerText.toLowerCase().includes(platform)) {
        item.classList.remove('hidden-item');
      }
      else {
        item.classList.add('hidden-item');
      }
    });
  }

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavGames(game);
  });

  function addToFavGames(game) {
    myGames.push(game);
    renderFavList();
    console.log(myGames);
  }

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
    removeFavGame(favGame)
  });
  
  function removeFavGame(game) {
    let index = myGames.indexOf(game);
    if (index !== -1) {
      myGames.splice(index, 1);
      renderFavList();
    }
  }

  function renderFavList() {
    let myGameList = document.querySelector('.my-favourite-games');
    
    myGameList.innerHTML = '';

    myGames.forEach(game => {
      myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
  }

})();
