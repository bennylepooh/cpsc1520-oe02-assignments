const albumArtInput = document.querySelector("#album-art");
const albumTitleInput = document.querySelector("#album-title");
const albumDescriptionInput = document.querySelector("#album-description");

document.querySelector('#album-form').addEventListener('submit', albumEvent)

function albumEvent(event) {
  event.preventDefault();

  const isValidArt = isEmpty(event.currentTarget.element['album-art'].value);

  if(isValidArt === "") {
    $('invalid-feedback').addClass('is-invalid');
    return true
  }
  else {
    $('invalid-feedback').removeClass('is-invalid');
    return false
  };

  const isValidTitle = isEmpty(event.currentTarget.element['album-title'].value);

  


}

function renderAlbumCard(albumTitleInput, albumDescriptionInput) {
  const albumCardTemplate = `<div class="col">
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="${albumArtInput}"/>
        <div class="card-body">
            <h5 class="card-title">${albumTitleInput}</h5>
            <p class="card-text">${albumDescriptionInput}</p>
        </div>
    </div>
</div>`;

    allAlbumList.insertAdjacentHTML(albumCardTemplate);
}
