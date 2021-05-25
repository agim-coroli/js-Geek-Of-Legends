// j'importe mes personnage
import { Boss, Sauron, Chronos, Lilith, Guerrier, Mage, Archer } from "./classes.js";
// // j'importe mes fonction
import { getRandomIntForMage, getRandomIntForArcher, attributionGuerrier, attributionMage, attributionArcher } from "./function1.js"
let sauron = new Sauron("Sauron", 300, 20);
let chronos = new Chronos("Chronos", 300, 20);
let lilith = new Lilith("Lilith", 300, 20);

let boss = [sauron, chronos, lilith];
let bossRandom = Math.floor(Math.random() * boss.length);

let bossFinal = boss[bossRandom];
alert(bossFinal.nom);

let guerrier = new Guerrier("Guerrier", 0, 0);
let mage = new Mage("Mage", 0, 0);
let archer = new Archer("Archer", 0, 0);

// msg de bienvenu 
alert("Bienvenue sur Geek of Lengends");
alert("Vous allez devoir affronté un boss aleatoirement choisi entre Sauron, Chronos et Lilith. Avec l'aide de vos 3 heros, un guerrier, un mage et un archer");

// nomé les hero et leur donner leur attribut

attributionGuerrier(guerrier);
attributionMage(mage);
attributionArcher(archer);

let heros = [guerrier, mage, archer];
let herosRandom = 0;
let heroFinal = 0;

// apparition du boss aléatoire
alert(`Attention ${bossFinal.nom} apparait, vous allez devoir le combattre, preparé vous`);
let tour = 1;
boucle1:
do {
    alert(`tour ${tour}`);
    tour++
    herosRandom = Math.floor(Math.random() * heros.length);
    heroFinal = heros[herosRandom];
    // tour du boss
    alert(`${bossFinal.nom} lance une attaque normal sur ${heroFinal.nom}`);
    bossFinal.attaqueNormal(heroFinal);
    alert(`il reste ${heroFinal.pv} point de vie a ${heroFinal.nom}`);

    alert(`A votre tour d'attaquer`);

    // tour de lequipe
    alert(`${guerrier.nom} lance son attaque`);
    guerrier.attaque(bossFinal);
    alert(`Il reste ${bossFinal.pv} a ${bossFinal.nom}`);
    if (bossFinal.pv <= 60) {
        break boucle1;
    } else {
        alert(`${mage.nom} lance son attaque`);
        mage.attaque(bossFinal);
        alert(`Il reste ${bossFinal.pv} a ${bossFinal.nom}`);
        if (bossFinal.pv <= 60) {
            break boucle1;
        } else {
            alert(`${archer.nom} lance son attaque`);
            archer.attaque(bossFinal);
            alert(`Il reste ${bossFinal.pv} a ${bossFinal.nom}`);
        }
    }
} while (bossFinal.pv > 0)
bossFinal.attaqueEnigme();

alert("merci d'avoir jouer a mon jeu !!!");



// // enigme a 20% de pv du boss
// if (sauron.pv <= 20 && sauron.pv > 0) {
//     alert("le boss va mourir si vous repondez correctement a une de ces enigme")
//     sauron.attaqueEnigme();
// }