
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

    // Testing

    // clearing

    // Viewing DOM Elements

    // Grouping together

    // counting

    // timing