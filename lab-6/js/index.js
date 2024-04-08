/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/


async function getContacts() {
  const res = await fetch('public/data/contacts.json')
  const contacts = await res.json()
  console.log(contacts)
  renderContacts(contacts)
}

function renderContacts(contacts) {
  const contactInfo = document.querySelector('#contacts')
  contactInfo.innerHTML = ''
  let contactHtml = ''

  contacts.forEach(({name, email}) => {
    contactHtml += `<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${name}</h5>
    </div>
  <small>${email}</small>
  </div>`
  
  
  })
  contactInfo.insertAdjacentHTML('afterbegin', contactHtml)
}

getContacts()