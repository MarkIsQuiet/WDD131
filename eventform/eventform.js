
const form = document.querySelector("#fsyForm");
const accessType = document.querySelector("#accessType");
const studentIDContainer = document.querySelector("#studentIDRequest");
const studentID = document.querySelector("#studentID");
const accessCodeContainer = document.querySelector("#accessCodeRequest");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

function updateNotesField() {
    const value = accessType.value;
    console.log(value)

    // Show the travel notes on the form if they are choosing many campuses and require it
    if (value === "guest") {
        accessCodeContainer.hidden = false;
        accessCode.required = true;
        studentIDContainer.hidden = true;
        studentID.required = false;
    } 
    else if (value === "student") {
        studentIDContainer.hidden = false;
        studentID.required = true;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
    else {
        studentIDContainer.hidden = true;
        studentID.required = false;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
  
}

accessType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const availableDate = form.availableDate.value;
    const student_id = form.studentID.value.trim();
    const access_code = form.accessCode.value.trim();
    const type = form.accessType.value;


    // Let the user know if they choose many campuses but didn't put a note that they need to add a note
    if (type === "student" && student_id.length != 9) {
        output.textContent = "Please enter a valid 9 didgit student ID";
        return;
    }

    if (type === "guest" && access_code != "EVENT131") {
        output.textContent = "Invalid Access Code";
        return;
    }

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Access Type: ${type}</p>
    <p>Event Date: ${availableDate}</p>
    `;
    

    form.reset();
    updateNotesField();
});