// fonction qui permet de généré un chiffre entre 7 9 ou 11 pour la mana du mage
function getRandomIntForMage() {
    let rep = Math.floor(Math.random() * (12 - 7)) + 7;
    if (rep == 7 || rep == 9 || rep == 11) {
        return rep;
    } else {
        Math.floor(Math.random() * (12 - 7)) + 7;
    }
    return getRandomIntForMage()
}
let manaMage = getRandomIntForMage();







// fonction qui permet de généré un chiffre entre 7 et 11 pour les fleches de l'archer
function getRandomIntForArcher(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (7 - 11)) + 12;
}

let flecheArcher = Math.floor(Math.random() * (12 - 7)) + 7;


// les export de variable des fonctions
export {manaMage ,flecheArcher};