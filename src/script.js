let myKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
document.addEventListener("keypress", function (e) {
    if (myKeys.includes(e.code)) {
        const sound = new Audio(`./audio/${e.key}.mp3`);
        sound.play();
        console.log(`The '${e.key.toUpperCase()}' key is pressed`)
    } else {
        console.log('an incorrect key was pressed!')
    }
});