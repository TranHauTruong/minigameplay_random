function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function comparison(key) {
    switch (key) {
        case 'ks':
        case 'bk':
        case 'sb':
            return 'win';
        case 'bs':
        case 'kb':
        case 'sk':
            return 'lose';
        case 'kk':
        case 'ss':
        case 'bb':
            return '==';
    }
}

function sum(elemenOne, elemenTwo) {
    return elemenOne + elemenTwo;
}

function gameplay(options) {
    const { typeGames, playerOne } = options;
    const playerTwo = random(typeGames);
    const sumTypes = sum(playerOne, playerTwo);
    const compare = comparison(sumTypes)
    return {
        playerOne,
        playerTwo,
        compare
    };
}


const typeGames = ['k', 'b', 's'];
let playerOne = 'b';
console.log(gameplay({ typeGames, playerOne }));
