let newUsersList = document.querySelector(".new-users-list");

// READ THE PDF BEFORE STARTING
// Step 1-5 is read the pdf.

// Add your code here
const userForm = document.querySelector(".new-user-form");

userForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  let formValid = true;

  const usernameElem = event.currentTarget.elements.username;
  const ctiyElem = event.currentTarget.elements.city;
  const provinceElem = event.currentTarget.elements.province;

  const username = usernameElem.value.trim();
  const city = ctiyElem.value.trim();
  const province = provinceElem.value.trim();

  console.log("Username: ", username);
  console.log("City: ", city);
  console.log("Province: ", province);

  if (isValueNotEmpty(username) && !hasWhiteSpace(username)) {
    usernameElem.classList.remove("is-invalid");
  } else {
    formValid = false;
    usernameElem.classList.add("is-invalid");
    console.log("Please enter a username. ");
  }

  if (isValueNotEmpty(city)) {
    ctiyElem.classList.remove("is-invalid");
  } else {
    formValid = false;
    ctiyElem.classList.add("is-invalid");
    console.log("Please enter a city. ");
  }

  if (isValueNotEmpty(province)) {
    provinceElem.classList.remove("is-invalid");
  } else {
    formValid = false;
    provinceElem.classList.add("is-invalid");
    console.log("Please select a province. ");
  }

  if (formValid) {
    addUser(username, city, province);
    usernameElem.value = "";
    ctiyElem.value = "";
    provinceElem.value = "";
  }
}

// the isValueNotEmpty function:
// returns true if value not empty
// returns false if the value is empty
function isValueNotEmpty(value) {
  if (value !== "") {
    return true;
  }
  return false;
}

// the hasWhiteSpace function
// returns true if s has whitespace
// returns false if s does not have whitespace
function hasWhiteSpace(s) {
  return /\s/.test(s);
}

// adds user to the page.
function addUser(username, city, province) {
  let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
  newUsersList.innerHTML = newUsersList.innerHTML + newUser;
}
