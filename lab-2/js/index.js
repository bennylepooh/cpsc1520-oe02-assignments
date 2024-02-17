const updateInnerHTML = function (selector, htmlString) {
    document.querySelector(selector).insertAdjacentHTML('beforebegin', htmlString)
}

updateInnerHTML('h1', "New Topic")

function strong(string) {
    return `<strong>${string}</strong>`
}

const template = strong('making things useful')
console.log(template)

updateInnerHTML('section',template)
