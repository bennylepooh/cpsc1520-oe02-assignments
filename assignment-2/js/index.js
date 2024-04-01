/* 
<tr>
  <td>ALBUM NAME HERE</td>
  <td>RELEASE DATE HERE</td>
  <td>ARTIST NAME HERE</td>
  <td>GENRE HERE</td>
  <td>AVERAGE RATING HERE</td>
  <td>NUMBER OF RATINGS HERE</td>
</tr> 
*/

let albumInfo

document.querySelector('.album-search-form').addEventListener('submit', filteredAlbumData)

async function albumInIt() {
  const res = await fetch("public/data/albums.json")

  albumInfo = await res.json()
  const albumsCopy = [...albumInfo]
  
  renderAlbums(albumsCopy)
}

albumInIt();

function filteredAlbumData(event) {
  event.preventDefault();

  const albumValue = document.querySelector('.album-input').value.trim()
  const ratingValue = document.querySelector('.min-album-rating-input').value.trim()

  const filteredData = searchByRating(searchByText(albumInfo, albumValue), ratingValue)

  renderAlbums(filteredData)
}

function searchByText(albumData, albumValue) {
  const lowerCaseVal = albumValue.toLowerCase()
  return albumData.filter(album => album.album.includes(lowerCaseVal) || album.artistName.includes(lowerCaseVal))
}

function searchByRating(albumData, rating) {
  return albumData.filter(album => album.averageRating >= rating)
}

function renderAlbums(albums) {
  const albumTable = document.querySelector('.album-rows')

  let albumHTML = ''

  if (albums.length === 0) {
    albumHTML = `No albums exist with this data`
  }
  else {
    albums.forEach(album => {
      albumHTML += `<tr>
      <td>${album.album}</td>
      <td>${album.releaseDate}</td>
      <td>${album.artistName}</td>
      <td>${album.genres}</td>
      <td>${album.averageRating}</td>
      <td>${album.numberRatings}</td> 
      </tr>`
    })
  }

  albumTable.innerHTML = albumHTML
}