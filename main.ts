input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . . #
        . # # . .
        . . # # .
        # . . # #
        # # . . #
        `)
})
