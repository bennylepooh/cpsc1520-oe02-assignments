const searchButton = document.querySelector('#search-button')
const favoriteButton = document.querySelector('#favorites-button')
const searchTab = document.querySelector('#search-tab')
const favoriteTab = document.querySelector('#favorites-tab')
const searchForm = document.querySelector('#search-form')
const favoriteAlbums = []
let albumPayload = null

searchButton.addEventListener('click', searchActive)
favoriteButton.addEventListener('click', favoritesActive)
searchForm.addEventListener('submit', submitForm)

async function albumFetch() {
    const res = await fetch('https://660ded606ddfa2943b357361.mockapi.io/api/v1/albums')
    albumPayload = await res.json()
    return albumPayload
}

function searchActive() {
    searchTab.classList.remove('d-none')
    favoriteTab.classList.add('d-none')

    searchButton.classList.add('active')
    favoriteButton.classList.remove('active')
}

function favoritesActive() {
    favoriteTab.classList.remove('d-none')
    searchTab.classList.add('d-none')

    favoriteButton.classList.add('active')
    searchButton.classList.remove('active')

    renderFavorites()
}

async function submitForm(event) {
    event.preventDefault()
    const query = document.querySelector('#query').value.toLowerCase()
    const albums = await albumFetch()
    const filteredAlbums = albums.filter(album => {
        return album.artistName.toLowerCase().includes(query) || album.albumName.toLowerCase().includes(query)
    })
    renderSearch(filteredAlbums)
}

async function myFavorites(id) {
    const favAlbum = albumPayload.find(album => album.id === id)

    if (!favoriteAlbums.some(album => album.id === id)) {
        favoriteAlbums.push(...favAlbum)

        const payload = JSON.stringify(favAlbum)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: payload,
            redirect: 'follow'
        }

        const response = await fetch('https://660ded606ddfa2943b357361.mockapi.io/api/v1/favorites', requestOptions)
        const result = await response.json()
        renderFavorites()
        return result
    }
}

function renderSearch(albums) {
    const renderContainer = document.querySelector('#search-results')
    renderContainer.innerHTML = ''

    albums.forEach(album => {
        const albumHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${album.albumName} <span class="badge bg-primary rounded-pill">${album.averageRating}</span></div>
                    <span>${album.artistName}</span>
                </div>
                <button type="button" class="btn btn-success" onclick="myFavorites('${album.id}')">Add to Favorites</button>
            </li>
        `
        renderContainer.innerHTML += albumHTML
    })
}

function renderFavorites() {
    const renderContainer = document.querySelector('#favorites')
    renderContainer.innerHTML = ''

    favoriteAlbums.forEach(album => {
        const albumHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${album.albumName} <span class="badge bg-primary rounded-pill">${album.averageRating}</span></div>
                    <span>${album.artistName}</span>
                </div>
                <button type="button" class="btn btn-danger" onclick="removeFromFavorites('${album.id}')">Remove from Favorites</button>
            </li>
        `
        renderContainer.innerHTML += albumHTML
    })
}

async function removeFromFavorites(id) {
    favoriteAlbums = favoriteAlbums.filter(album => album.id !== id)
    renderFavorites()

    const url = `https://660ded606ddfa2943b357361.mockapi.io/api/v1/favorites`

    const response = await fetch(url, {method: 'DELETE'})
    const result = await response.json()
    return result
}