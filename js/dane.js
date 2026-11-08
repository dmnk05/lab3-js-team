const zespol = [
  ['Małejkyj', 'Dominik', '1', '21510@student.ans-elblag.pl', '21510'],
  ['?', '?', '?', '?', '?'] 
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (let i = 0; i < pola.length; i++) {
  const daneOsob = zespol[0][i] + ', ' + zespol[1][i];
  document.getElementById(pola[i]).textContent = daneOsob;
}

const srodek = Math.floor(tablica.length / 2);

// Pętla while - pierwsza połowa
let k = 0;
let tekstWhile = 'Pierwsza połowa (while): ';
while (k < srodek) {
  tekstWhile += tablica[k] + ' ';
  k++;
}
document.getElementById('while').textContent = tekstWhile;

// Pętla for - druga połowa
let tekstFor = 'Druga połowa (for): ';
for (let j = srodek; j < tablica.length; j++) {
  tekstFor += tablica[j] + ' ';
}
document.getElementById('for').textContent = tekstFor;