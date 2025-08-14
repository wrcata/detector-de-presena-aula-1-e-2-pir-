basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showIcon(IconNames.No)
    }
})
