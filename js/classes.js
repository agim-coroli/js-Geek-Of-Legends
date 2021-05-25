class Boss {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.attaqueEnigme = () => {
            if (this.pv <= 20) {
                let tabEnigme = ["Je touche la terre, je touche le ciel, mais si je te touche tu est voué a la mort, que suis je ?", "Ma tête est froide et mes pieds sont chaud, que suis-je ?", "Je cours toute la journée mais je ne peut pas marché, que suis-je ?"];
                let randomEnigme = Math.floor(Math.random()*tabEnigme.length);  
                if (randomEnigme == 0) {
                    let reponseEnigme = prompt(tabEnigme[randomEnigme]);
                    if (reponseEnigme == "la foudre") {
                        alert("le boss est mort");
                    } else {
                        alert("c'est faux, il ne vous reste que 2 chance, recommencer");
                        let rep = prompt(tabEnigme[0]);
                        if (rep == "la foudre") {
                            alert("Le boss est mort");
                        } else{
                            alert("c'est faux, il ne vous reste que 1 chance, attention");
                            let rep = prompt(tabEnigme[0]);
                            if (rep == "la foudre"){
                                alert("le boss est mort, de justesse");
                            } else {
                                alert("vous etes mort a tout jamais");
                            }
                        }
                    }
                } else if (randomEnigme == 1){
                    let reponseEnigme = prompt(tabEnigme[randomEnigme]);
                    if (reponseEnigme == "la montagne") {
                        alert("le boss est mort");
                    } else {
                        alert("c'est faux, il ne vous reste que 2 chance, recommencer");
                        let rep = prompt(tabEnigme[1]);
                        if (rep == "la montagne") {
                            alert("Le boss est mort");
                        } else{
                            alert("c'est faux, il ne vous reste que 1 chance, attention");
                            let rep = prompt(tabEnigme[1])
                            if (rep == "la montagne"){
                                alert("le boss est mort, de justesse");
                            } else {
                                alert("vous etes mort a tout jamais");
                            }
                        }
                    }

                } else if (randomEnigme == 2) {
                    let reponseEnigme = prompt(tabEnigme[randomEnigme]);
                    if (reponseEnigme == "la rivière") {
                        alert("le boss est mort");
                    } else {
                        alert("c'est faux, il ne vous reste que 2 chance, recommencer");
                        let rep = prompt(tabEnigme[2]);
                        if (rep == "la rivière") {
                            alert("Le boss est mort");
                        } else{
                            alert("c'est faux, il ne vous reste que 1 chance, attention");
                            let rep = prompt(tabEnigme[2]);
                            if (rep == "la rivière"){
                                alert("le boss est mort, de justesse");
                            } else {
                                alert("vous etes mort a tout jamais");
                            }
                        }
                    }
                }
            }
        }
        this.attaqueNormal = (heroVictim) => {
            // let randomHeros = Math.floor(Math.random()*heros.length-1);
            heroVictim.pv -= 30;
        }
    }
}

class Sauron extends Boss {
    constructor(nom, pv, pa) {
        super(nom, pv, pa)
    }
}
class Chronos extends Boss {
    constructor(nom, pv, pa) {
        super(nom, pv, pa)
    }
}
class Lilith extends Boss {
    constructor(nom, pv, pa) {
        super(nom, pv, pa)
    }
}

// Person Héros

class Hero {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.defense = () => {
            this.pa = this.pa * 0.5;
            this.pv = this.pv * 2.5;

        }
        this.attaque = (cible) => {
            this.pa = this.pa * 1.4;
            this.pv = this.pv * 0.75;
            cible.pv -= (Math.floor(Math.random()*50)) + 50

        }
    }
}

class Guerrier extends Hero {
    constructor(nom, pv, pa) {
        super(nom, pv, pa)
        this.rage = (rage, pa, pv) => {
            this.rage = 0;
            if (this.rage == 4) {
                this.pa = this.pa * 1.25;
            }
        }
    }
}


class Mage extends Hero {
    constructor(nom, pv, pa, mana) {
        super(nom, pv, pa)
        this.mana = mana;
        
    }
}

class Archer extends Hero {
    constructor(nom, pv, pa, fleche) {
        super(nom, pv, pa)
        this.fleche = fleche;
    }
}
// j'exporte plusieur module a la fois

export {Boss, Sauron, Chronos, Lilith, Guerrier, Mage, Archer};