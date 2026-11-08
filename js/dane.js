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

function policzZnaki(tekst) {
  return tekst.length;
}

let tekstForOf = 'Długość elementów nowaTablica: ';
for (const element of nowaTablica) {
  tekstForOf += element + ' (' + policzZnaki(element) + '), ';
}
document.getElementById('for-of').textContent = tekstForOf;

// Przycisk 1: Pokaż dane w alert
function pokazDane() {
  const daneZDOM = document.getElementById('nazwisko').textContent + ' ' + document.getElementById('imie').textContent;
  alert('Dane zespołu: ' + daneZDOM);
}
document.getElementById('pokazDane').addEventListener('click', pokazDane);

// Przycisk 2: Dodaj element do listy #lista
let licznikKlikniec = 0;
document.getElementById('dodajElement').addEventListener('click', function() {
  licznikKlikniec++;
  const nowyElement = document.createElement('li');
  nowyElement.textContent = 'Kliknięcie nr ' + licznikKlikniec;
  document.getElementById('lista').append(nowyElement);
});