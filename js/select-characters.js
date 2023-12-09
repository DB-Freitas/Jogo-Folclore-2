const selectCharacter = (character) => {
    let gamePage;

    if (character === 'character1') {
        gamePage = 'game-forest';
    } else if (character === 'character2') {
        gamePage = 'game-river';
    }

    localStorage.setItem('player', character);
    window.location = `../pages/${gamePage}.html`;
}