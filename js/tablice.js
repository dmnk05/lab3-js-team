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