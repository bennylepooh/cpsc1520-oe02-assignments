async function appInit () {
    const res = await fetch('https://660ded606ddfa2943b357361.mockapi.io/api/v1/albums')
    const albumPayload = await res.json()
    console.log(albumPayload)
}

appInit()