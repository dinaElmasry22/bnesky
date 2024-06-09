


let categories = document.querySelector(".categ-btn")
categBtn.onclick=function(){

}











let plusBtn = document.querySelector(".plus")
let minusBtn = document.querySelector(".minus");
let NumsInputField = document.querySelector(".nums-of-items")


plusBtn.onclick = function () {
    let currentValue = parseInt(NumsInputField.value)

    if (currentValue >= 1) {
        NumsInputField.value = currentValue + 1;
    }
}

minusBtn.onclick = function () {
    let currentValue = parseInt(NumsInputField.value)

    if (currentValue > 1) {
        NumsInputField.value = currentValue - 1;
    }

}