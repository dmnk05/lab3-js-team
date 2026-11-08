const tablica = ['metro2033',
    'metro last light',
    'metro exodus',
    'metro awakening',
    'metro 2039'];
//1
console.log(tablica);
console.table(tablica);

//2
tablica[tablica.length-1]='Nowa wartość';

console.table(tablica);

//3
tablica[5] = 'nowy6';
console.log(tablica.length)

tablica[tablica.length] = 'nowy7';
console.log(tablica.length);

tablica.push('nowy8','nowy9','nowy10','nowy11');
console.log(tablica.length);

//4
/*
tablica[20] = 'daleko'
console.log(tablica.length);
console.log(tablica[15])
*/
// rozmiar tablicy =21, zawartość tablica[15] undefined

//5
const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);
let wynik = console.log(nowaDlugosc);

//6
//document.write('<p>Tablica: ' + tablica.join(', '));
//document.write(' (elementów: ' + tablica.length + ')</p>');

const nowaTablica = ['Matrix', 'Incepcja', 'Avatar', 'Gladiator'];

document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');

document.write('<p>Ostatni element to <strong>');
document.write(nowaTablica[nowaTablica.length - 1] + '</strong></p>');

nowaTablica.unshift('Diuna');

document.write('<p>Nowy pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');

const usunietyZKonca = nowaTablica.pop();
const usunietyZPoczatku = nowaTablica.shift();

document.write('<p>Usunięto z końca: ' + usunietyZKonca + ', usunięto z początku: ' + usunietyZPoczatku + '</p>');
document.write('<p>Zostało w tablicy: ' + nowaTablica.join(', ') + '</p>');