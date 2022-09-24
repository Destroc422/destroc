input.onGesture(Gesture.LogoUp, function () {
    prueba_1.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    prueba_1.move(-1)
})
input.onGesture(Gesture.TiltLeft, function () {
    prueba_1.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    prueba_1.change(LedSpriteProperty.Y, 1)
})
let prueba_1: game.LedSprite = null
game.setLife(3)
prueba_1 = game.createSprite(2, 2)
basic.forever(function () {
	
})
basic.forever(function () {
    game.addScore(1)
    basic.pause(50000)
    basic.pause(50000)
})
basic.forever(function () {
    for (let index = 0; index < randint(1, input.lightLevel()); index++) {
        input.setSoundThreshold(SoundThreshold.Loud, 255)
    }
    music.setVolume(music.volume())
    for (let index = 0; index < 4; index++) {
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
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                music.playMelody("E D F A B A G F ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("G A B A G F E D ", 120)
                music.playMelody("F G A G F E D C ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("G A B A G F E D ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("G A B A G F E D ", 120)
                music.playMelody("F G A G F E D C ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("G A B A G F E D ", 120)
                music.playMelody("F G A G F E D C ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("E D F A B A G F ", 120)
                music.playMelody("C D E E D E G F ", 120)
                for (let index = 0; index < 4; index++) {
                    for (let index = 0; index < 4; index++) {
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
                        for (let index = 0; index < 4; index++) {
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
                music.playMelody("F G A G F E D C ", 120)
                music.playMelody("D C G A E G C E ", 120)
                music.playMelody("E D F A B A G F ", 120)
                music.playMelody("C D E E D E G F ", 120)
                for (let index = 0; index < 4; index++) {
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
                    music.playMelody("F G A G F E D C ", 120)
                    music.playMelody("D C G A E G C E ", 120)
                    music.playMelody("G A B A G F E D ", 120)
                    music.playMelody("F G A G F E D C ", 120)
                    music.playMelody("D C G A E G C E ", 120)
                    music.playMelody("E D F A B A G F ", 120)
                    music.playMelody("C D E E D E G F ", 120)
                }
            }
            music.playMelody("E D F A B A G F ", 120)
            music.playMelody("D C G A E G C E ", 120)
            music.playMelody("G A B A G F E D ", 120)
        }
    }
    for (let index = 0; index < randint(1, input.lightLevel()); index++) {
        input.setSoundThreshold(SoundThreshold.Loud, 255)
    }
    music.setVolume(music.volume())
    for (let index = 0; index < 4; index++) {
        music.playMelody("E D F A B A G F ", 120)
    }
})
