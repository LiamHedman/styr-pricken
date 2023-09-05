input.onButtonPressed(Button.A, function () {
    if (styrning == 0) {
        if (x > 0) {
            led.unplot(x, y)
            x += -1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            x = 4
            led.plot(x, y)
        }
    } else {
        if (y < 4) {
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            y = 0
            led.plot(x, y)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (styrning == 1) {
        styrning = 0
    } else {
        styrning = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (styrning == 0) {
        if (x < 4) {
            led.unplot(x, y)
            x += 1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            x = 0
            led.plot(x, y)
        }
    } else {
        if (y > 0) {
            led.unplot(x, y)
            y += -1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            y = 4
            led.plot(x, y)
        }
    }
})
let styrning = 0
let y = 0
let x = 0
x = 2
y = 2
styrning = 0
led.plot(x, y)
basic.forever(function () {
	
})
