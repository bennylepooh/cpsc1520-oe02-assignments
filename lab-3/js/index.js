const resourcesDiv = document.querySelector('#resources');

const showResourcesButton = document.querySelector('#show-resources');

showResourcesButton.addEventListener('click', showResources);
resourcesDiv.addEventListener('mouseover', boldLinks);
resourcesDiv.addEventListener('mouseout', removeBoldLinks);
resourcesDiv.addEventListener('click', italicizedClick);
resourcesDiv.addEventListener('mouseout', removeItalic);

function showResources() {
    resourcesDiv.classList.remove('d-none');
}

function boldLinks (e) {
    e.target.classList.add('fw-bold');
}

function removeBoldLinks (e) {
    e.target.classList.remove('fw-bold');
}

function italicizedClick (e) {
    e.target.classList.add('fst-italic');
}

function removeItalic (e) {
    e.target.classList.remove('fst-italic');
}