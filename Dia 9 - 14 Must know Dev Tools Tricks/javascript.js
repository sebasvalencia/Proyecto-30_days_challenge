
const dogs = [
    {
        name: 'Snickers',
        agge: 2
    },
    { name: 'hugo', age: 8 }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
}

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');//Pasarle un parametro
    var popo = '💩';
    console.log(`Hello I am a ${popo} string!`);//Mejor ES6

    // Styled
    //Primer parametro texto, segundo parametro estilos
    console.log('%c I am some great text ', 'font-size:50px; background:red');//Anteponer %c

    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('shit');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    console.assert(1 === 1, 'That is wrong');//Este no imprime la aserción es correcta
    console.assert(1 === 2, 'That is wrong');//Este imprime por que es erronea la respuesta

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements

    // Grouping together

    // counting

    // timing