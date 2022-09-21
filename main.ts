input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
    if (true) {
        for (let index = 0; index < randint(1, 10); index++) {
            music.playMelody("C D E E D E G F ", 120)
            music.playMelody("E D F A B A G F ", 120)
            music.playMelody("D C G A E G C E ", 120)
            music.playMelody("G A B A G F E D ", 120)
            music.playMelody("F G A G F E D C ", 120)
            music.playMelody("D C G A E G C E ", 120)
            music.playMelody("G A B A G F E D ", 120)
            music.playMelody("F G A G F E D C ", 120)
            music.playMelody("D C G A E G C E ", 120)
            music.playMelody("E D F A B A G F ", 120)
            music.playMelody("C D E E D E G F ", 120)
        }
    }
})
basic.showString("Hola" + "Mundo" + "como" + "estan" + "?")
