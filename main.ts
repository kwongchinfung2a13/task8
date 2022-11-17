input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showString("E")
        music.playMelody("A F E F D G E F ", 120)
    } else if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showString("S")
        music.playMelody("E D G F B A C5 B ", 120)
    } else if (input.compassHeading() > 225 || input.compassHeading() < 315) {
        basic.showString("W")
        music.playMelody("E D G F B A C5 B ", 120)
    }
    if (input.compassHeading() > 0 || input.compassHeading() < 270) {
        basic.showString("NW")
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else if (input.compassHeading() > 0 || input.compassHeading() < 90) {
        basic.showString("NE")
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else if (input.compassHeading() > 90 || input.compassHeading() < 180) {
        basic.showString("SE")
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else if (input.compassHeading() > 90 || input.compassHeading() < 180) {
    	
    } else {
    	
    }
})
basic.forever(function () {
	
})
