// Perso BOSS

class Sauron{
    constructor(nom,pv,pa){
        this.nom=nom;
        this.pv=pv;
        this.pa=pa;
    }
}
class Chronos{
    constructor(nom,pv,pa){
        this.nom=nom;
        this.pv=pv;
        this.pa=pa;
    }
}
class Lilith{
    constructor(nom,pv,pa){
        this.nom=nom;
        this.pv=pv;
        this.pa=pa;
    }
}

// Person Héros

class Hero{
    constructor(nom,pv,pa){
        this.nom=nom;
        this.pv=pv;
        this.pa=pa;
    }
}

class Guerrier extends Hero{
    constructor(nom,pv,pa,rage){
        super(nom,pv,pa)
        this.rage=rage;
    }
}

class Mage extends Hero{
    constructor(nom,pv,pa,mana){
        super(nom,pv,pa)
        this.mana=mana;
    }
}

class Archer extends Hero{
    constructor(nom,pv,pa,fleche){
        super(nom,pv,pa)
        this.fleche=fleche;
    }
}
// j'exporte plusieur module a la fois
export {Sauron, Chronos, Lilith, Guerrier, Mage, Archer};