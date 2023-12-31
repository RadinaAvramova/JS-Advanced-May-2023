function cookingByNmbers(...params) {
    let number = Number(params[0]);

    const commandDictionnary = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2
    };

    for(let i = 1; i < params.length; i++) {
        const cmd = params[i];

        number = commandDictionnary[cmd](number);
        console.log(number);
    }
}


cookingByNmbers('32', 'chop', 'chop', 'chop', 'chop', 'chop' );
cookingByNmbers('9', 'dice', 'spice', 'chop', 'bake',
'fillet');