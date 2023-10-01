const registerBtn = document.getElementById("submit");
// Text error Label
const fullnameErrorLb = document.getElementById("fullnameError");
const genderErrorLb = document.getElementById("genderError");
const mailErrorLb = document.getElementById("mailError");
const telnumberErrorLb = document.getElementById("telnumberError");
const marksErrorLb = document.getElementById("marksError");
const japanlevelErrorLb = document.getElementById("japanlevelError");

// Input
const fullname = document.getElementById("fullname");
const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");
const mail = document.getElementById("mail");
const telnumber = document.getElementById("telnumber");
const marks = document.getElementById("marks");
const japanlevel = document.getElementById("japanlevel");
const group = document.getElementById("group");

const errorLabels = document.getElementsByClassName("input-error")
renderUser();
registerBtn.onclick = function () {
    for (let i = 0; i < errorLabels.length; i++) {
        clearError(errorLabels[i])
    }
    validate()
}


function validate() {
    isError = false;
    if(fullname.value === "") {
        showError(fullnameErrorLb, "氏名を入力して。")
        isError = true;
    }

    if(mail.value === "") {
        showError(mailErrorLb, "メールを入力して。")
        isError = true;
    } else if (!mail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)){
        showError(mailErrorLb, "メールを正しいに入力して。")
        isError = true;
    }

    if(telnumber.value === "") {
        showError(telnumberErrorLb, "電話番号を入力して。")
        isError = true;
    } else if(false && !telnumber.value.test("/^\d{2}(?:-\d{4}-\d{4}|\d{8}|\d-\d{3,4}-\d{4})$/")) {
        showError(telnumberErrorLb,"電話番号を正しいに入力して。")
        isError = true;
    }

    if(marks.value === "") {
        showError(marksErrorLb, "点数を入力して。")
        isError = true;
    } else if(isNaN(+marks.value) || +marks.value > 180 || +marks.value < 0) {
        showError(marksErrorLb, "0 ～ 180 の点数を入力して。")
        isError = true;
    }

    if(!genderMale.checked && !genderFemale.checked) {
        showError(genderErrorLb, "性別を選択して。")
        isError = true;
    }

    if(japanlevel.value === "") {
        showError(japanlevelErrorLb,"日本語能力を選択して。")
        isError = true;
    }

    if(!isError) {
        let user = {
            fullname: fullname.value,
            gender: genderMale.checked ? "male" : "female",
            group: group.value,
            telnumber: telnumber.value,
            mail: mail.value,
            japanlevel: japanlevel.value,
            marks: +marks.value,
        }
        let users = getUsers();
        users.push(user)
        saveUsers(users)
        renderUser()
    }
}

function showError(input, errorMsg) {
    input.textContent = errorMsg
    input.classList.remove("hide")
}

function clearError(input) {
    input.textContent = "errorMsg"
    input.classList.add("hide")
}

function getUsers() {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    return users;
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function renderUser() {
    let tbody = document.getElementsByTagName("tbody")[0]
    let oldRows = document.getElementsByClassName("user-row");
    while (oldRows.length > 0) {
        const row = oldRows[0];
        row.parentNode.removeChild(row);
    }
    let users = getUsers();
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        tbody.insertAdjacentHTML("beforeend", `<tr class="user-row">
            <td>${i}</td>
            <td>${user.fullname}</td>
            <td>${user.gender}</td>
            <td>${user.group}</td>
            <td>${user.mail}</td>
            <td>${user.telnumber}</td>
            <td>${user.japanlevel}</td>
            <td>${user.marks}</td>
            <td><button onclick="removeUser(${i})">remove</button></td>
        </tr>`)
    }
}

function removeUser(index) {
    event.preventDefault()
    let users = getUsers();
    users.splice(index,1)
    saveUsers(users)
    renderUser()
}
