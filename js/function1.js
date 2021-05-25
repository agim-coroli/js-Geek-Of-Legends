// // fonction qui permet de généré un chiffre entre 7 9 ou 11 pour la mana du mage
let getRandomIntForMage = () => {
    let rep = Math.floor(Math.random() * (12 - 7)) + 7;
    if (rep == 7 || rep == 9 || rep == 11) {
        return rep;
    } else {
        Math.floor(Math.random() * (12 - 7)) + 7;
    }
    return rep
}



// // fonction qui permet de généré un chiffre entre 7 et 11 pour les fleches de l'archer
let getRandomIntForArcher = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (7 - 11)) + 12;
}

let attributionGuerrier = (hero) => {
    hero.nom = prompt(`Quel est le nom de votre ${hero.nom}`);
    alert(`vous avez appellez votre personnage ${hero.nom} maintenant vous allez devoir attribuer des point de vie et d'attaque a ${hero.nom}`);
    hero.pv = parseInt(prompt(`Combien de point de vie voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pv} point de vie a ${hero.nom}`);
    hero.pa = parseInt(prompt(`Combien de point de d'attaque voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pa} point de vie a ${hero.nom}`);
    alert(`Voila, votre Guerrier s'appelle ${hero.nom}, a ${hero.pv}PV et ${hero.pa}PA`);
}

let attributionMage = (hero) => {
    hero.nom = prompt(`Quel est le nom de votre ${hero.nom}`);
    alert(`vous avez appellez votre personnage ${hero.nom} maintenant vous allez devoir attribuer des point de vie et d'attaque a ${hero.nom}`);
    hero.pv = parseInt(prompt(`Combien de point de vie voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pv} point de vie a ${hero.nom}`);
    hero.pa = parseInt(prompt(`Combien de point de d'attaque voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pa} point de vie a ${hero.nom}`);
    alert(`Voila, votre Mage s'appelle ${hero.nom}, a ${hero.pv}PV et ${hero.pa}PA`);
}

let attributionArcher = (hero) => {
    hero.nom = prompt(`Quel est le nom de votre ${hero.nom}`);
    alert(`vous avez appellez votre personnage ${hero.nom} maintenant vous allez devoir attribuer des point de vie et d'attaque a ${hero.nom}`);
    hero.pv = parseInt(prompt(`Combien de point de vie voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pv} point de vie a ${hero.nom}`);
    hero.pa = parseInt(prompt(`Combien de point de d'attaque voulez vous attribuer a ${hero.nom} ?`));
    alert(`vous avez attribuer ${hero.pa} point de vie a ${hero.nom}`);
    alert(`Voila, votre Archer s'appelle ${hero.nom}, a ${hero.pv}PV et ${hero.pa}PA`);
}

export {getRandomIntForMage, getRandomIntForArcher ,attributionGuerrier, attributionMage, attributionArcher};