const tablica = ['metro2033',
    'metro last light',
    'metro exodus',
    'metro awakening',
    'metro 2039'];

console.log(tablica);
console.table(tablica);

tablica[tablica.length-1]='Nowa wartość';

console.table(tablica);