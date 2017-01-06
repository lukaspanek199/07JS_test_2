var pole = new Array("img/obr1.png", "img/obr2.png", "img/obr3.png", "img/obr4.png", "img/obr5.png", "img/obr6.png", "img/obr7.png", "img/obr8.png", "img/obr9.png", "img/obr10.png", "img/obr11.png");
var pointer = 0;
function randomImage(){
    pointer = Math.floor(Math.random()*11);
    document.getElementById("obrazek").setAttribute("src", pole[pointer]);
}

var radky;
var sloupce;
var maxcislo;
function table(){
radky = prompt("Zadej počet řádků tabulky");
sloupce = prompt("Zadej počet sloupců tabulky");
maxcislo = prompt("Zadej maximální číslo na generování");
document.write("<table>");
for (j = 0; j < radky; j++) {
    document.write("<tr>");
    for (i = 0; i < sloupce; i++) {
        cislo2 = Math.floor((Math.random()*maxcislo)+1)
        document.write("<td>");
        document.write(cislo2);
        document.write("</td>");
    }
    document.write("</tr>")
}
document.write("</table>");
}
