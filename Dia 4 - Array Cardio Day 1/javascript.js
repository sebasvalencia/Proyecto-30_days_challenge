
//Creamos un arreglo con los datos que vamos a trabajar

const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//Array.prototype.filter()
//1. Filtrar la lista de inventores para los nacidos en 1500 a 1600
/*const fifteen = inventors.filter(function(inventor){
    //console.log(inventor);
    if(inventor.year >= 1500 && inventor.year<1600){ 
        return true;//Nos quedamos con el o no
    }else{
        return false;
    }
});
console.table(fifteen);*/

const fifteen = inventors.filter( inventor => 
    (inventor.year >= 1500 && inventor.year<1600)
);
console.table(fifteen);

//Array.prototype.map()
//2. Retorne un arreglo con el nombre y apellido de los inventores

//Array.prototype.sort()
//3. Ordene el arreglo de inventores por fecha de nacimiento del menor al mayor

//Array.prototype.reduce()
//4. Cuantos años vivieron los inventores

//5. Ordene los inventores por años vividos

//6. Crear una lista de Boulevards en Paris que contenga 'de' en cualquier parte del nombre
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//7. Ordene el ejercicio
//Ordene el arreglo de personas alfabeticamente por apellido 

//8. Reduce exercise
//Sumar cada una de las instancias de cada elemento
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];



