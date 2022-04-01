input.onButtonPressed(Button.A, function () {
    if (flecha == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (flecha == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let flecha = 0
let cuentaAtras = 3
basic.showIcon(IconNames.Happy)
for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    basic.showNumber(cuentaAtras)
    basic.pause(1000)
    cuentaAtras += -1
}
basic.clearScreen()
basic.showString("GO!")
flecha = randint(1, 2)
if (flecha == 1) {
    basic.showArrow(ArrowNames.East)
} else {
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
	
})
