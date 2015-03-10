function berechnen() {

    var auswahl = document.querySelector("input[type='radio'][name='grid_auswahl']:checked").value;

    var div_liste=document.querySelector("#liste");
    var breite_gesamt  = (document.getElementById("breite_gesamt").value);
    var anzahl_spalten = (document.getElementById("anzahl_spalten").value);
    var margin = (document.getElementById("margin").value);

    var breite_rest = breite_gesamt-((anzahl_spalten-1)*margin);
    var breite_spalten = (breite_rest)/(anzahl_spalten);
    var einheit = "px";
    if (auswahl=="fluid") {

        var margin_prozent = margin * 100 / breite_gesamt;
        var breite_gesamt_prozent = 100;
        var breite_rest_prozent = breite_gesamt_prozent-((anzahl_spalten-1)*margin_prozent);
        breite_spalten = (breite_rest_prozent)/(anzahl_spalten);
        einheit="%";
    }
    ausgabe(auswahl, einheit, margin, margin_prozent, breite_spalten, anzahl_spalten)
}


function ausgabe(auswahl, einheit, margin, margin_prozent,  breite_spalten, anzahl_spalten)
{
    var index = 0;
    while (index < anzahl_spalten) {
        index = index + 1;
        var node = document.createElement("p");
        var grid_breite = (breite_spalten*index)+((index-1)*margin);
        if (auswahl=="fluid") {grid_breite = (breite_spalten*index)+((index-1)*margin_prozent)}

        var textnode = document.createTextNode(".spalte-" + index + "-von-" + anzahl_spalten  + " erhält eine Breite von " + (grid_breite) + " " + einheit);
        node.appendChild(textnode);
        document.getElementById("liste").appendChild(node);
    }
}

