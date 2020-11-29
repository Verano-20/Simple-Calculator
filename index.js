var calculator = document.getElementById("calculator")
calculator.style.height = calculator.clientWidth * 1.5 + 'px'

var display = document.getElementById("calculator-display")
var buttons = document.getElementById("calculator-buttons")

// Listener for enter key
document.body.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        result = eval(display.value)
        display.value = result
    }
})

// Add event listeners for each button
for (var i = 0; i < buttons.children.length; i++) {   
    var button = buttons.children[i]
    switch(button.innerHTML) {
        case "C":
            button.addEventListener('click', function() {
                display.value = ''
            })
            break
        case "=":
            button.addEventListener('click', function() {
                result = eval(display.value)
                display.value = result
            })
            break
        default:
            button.addEventListener('click', function() {
                display.value += this.innerHTML
            })
        }
}
