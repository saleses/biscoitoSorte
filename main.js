// Variables
const btnClick = document.querySelector(".btnClick")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


// Function switchForm
function switchForm(event) {
    event.preventDefault()

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Event: function call
btnClick.addEventListener('click', switchForm)
btnClick.addEventListener('keypress', function(event) {

    if(event.key == 'Enter') {
        switchForm()
    }
})
