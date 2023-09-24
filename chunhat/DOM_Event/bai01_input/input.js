document.getElementById("generateNumberBtn").addEventListener("click", generateNumber);
let input = document.getElementById("input")
let errorText = document.getElementById("errorText")

function generateNumber() {
    let num = Number.parseInt(input.value);

    if (Number.isNaN(num)) {
        showError("Hãy nhập 1 chữ số vào input")
    } else if (num < 1) {
        showError("Hãy nhập 1 chữ số lớn hơn 0")
    } else {
        errorText.classList.add("d-none");
        const generateNumberDom = document.getElementById("generatedContainer");
        let bg = "";
        if (checkSoNguyenTo(num)) {
            bg = 'bg-danger'
        } else if (num % 2 == 0) {
            bg = 'bg-success'
        } else {
            bg = 'bg-warning'
        }
        generateNumberDom.insertAdjacentHTML('beforeend', `<div class="grid-item ${bg}">${num}</div>`)
    }
}

function checkSoNguyenTo(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i < n - 1; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag
}

function showError(text) {
    errorText.classList.remove('d-none');
    errorText.textContent = text
}
