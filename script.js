/* 1. Creați clasa AngajatIT cu următoarele:
     Proprietăți: CNP, nume, prenume, vechime, departament
     Metode: afiseazaVarsta, afișeazăAnulAngajarii, lucrează ( va afișa mesajul "Neimplementat")
     Din clasa creată extindeți clasele QA și Developer, adăugați mesaje specifice pentru metoda 
     lucrează a acestora ( ex. "testează software", "scrie cod") */
class AngajatIT {
    #CNP = 1999849294527;
    #nume = 'Zlampa';
    #prenume = 'Ciprian';
    #varsta = 21;
    #vechime = 2;
    #departament = 'IT';
    afiseazaVarsta() {
        console.log("Angajatul " + this.#nume + " " + this.#prenume + " avand CNP-ul: " +
            this.#CNP + " lucreaza la departamentul: " + this.#departament);
        console.log("Angajatul are varsta de " + this.#varsta + " de ani.");
    }
    afișeazăAnulAngajarii() {
        console.log("Anul in care m-am angajat este:" + (2021 - this.#vechime));
    }
    lucrează() {
        console.log("Neimplementat");
        console.log("scrie cod");
        console.log("testează software");
    }
}
class Developer extends AngajatIT {
}
class QA extends AngajatIT {
}
let myAngajatIT = new AngajatIT;
myAngajatIT.afiseazaVarsta();
myAngajatIT.afișeazăAnulAngajarii();
myAngajatIT.lucrează();
let myDeveloper = new Developer;
myDeveloper.lucrează();
let myQA = new QA;
myQA.lucrează();

