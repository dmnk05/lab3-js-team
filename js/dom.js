const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaOdnoscnikow = document.links.length;
const liczbaAkapitowProjektu1 = document.querySelectorAll("#projekt1 p").length;

console.log("Formularze na całej stronie:", liczbaFormularzy);
console.log("Obrazki na całej stronie:", liczbaObrazkow);
console.log("Odnośniki na całej stronie:", liczbaOdnoscnikow);
console.log("Akapity <p> w sekcji #projekt1:", liczbaAkapitowProjektu1);

document.getElementById("licznik").innerHTML =
    `Formularze (&lt;form&gt;) na całej stronie: ${liczbaFormularzy}<br>` +
    `Obrazki (&lt;img&gt;) na całej stronie: ${liczbaObrazkow}<br>` +
    `Odnośniki (&lt;a&gt; z atrybutem href) na całej stronie: ${liczbaOdnoscnikow}<br>` +
    `Akapity (&lt;p&gt;) w sekcji #projekt1: ${liczbaAkapitowProjektu1}`;