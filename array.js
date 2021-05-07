/*3.Se dă un array cu numere de la 0 la 10
Parcurgeți array-ul și afișați fiecare număr adunat cu 15 * numărul respectiv
( pentru 2 se va afișa 32), folosind atat VanillaJS cât și arrow functions și iteratori specifici ES6.
Folosind destructuring copiați array-ul și modificați elementele astfel: 2 va deveni 22, 6 va deveni 66.
Afișați ambele array-uri.*/
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lun = array.length;
var i;
const Functie = {
    array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    VanillaJs: function () {
        for (var i = 0; i < lun; i++)
            console.log("Pentru " + i + " afisam:" + (this.array[i] * 15 + i));
        const [a, b, ...rest] = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
        console.log(a, b, ...rest);
    },
    Arrow: () => {
        for (var i = 0; i < lun; i++)
            console.log("Pentru " + i + " afisam:" + (array[i] * 15 + i));
        const [a, b, ...rest] = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
        console.log(a, b, ...rest);
    }
}
Functie.VanillaJs();
Functie.Arrow();
