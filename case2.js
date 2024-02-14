class Person {
    #name
    #age
    #gender

    constructor({ name, age, gender }) {
        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    set NewName({value}) {
         this.#name = value
    }

    get getterName(){
        return this.#name
    }
}

    const person =  new Person({
        name:"TOTO",
        age:22,
        gender:"Male"
    })

console.log("antes",person.getterName);
person.setterNewName = 'FELISBERTO'
console.log("depois",person.getterName);

console.log("/////////////////");
person.NewName = {value:'Mukinda'}
console.log("depois2",person.getterName);






