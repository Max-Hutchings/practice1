export default class Person{ 
    static #ids = 0;
    #type = "Person";
    #id;
    #name;
    #age;

    constructor(name, age, id){
        if (id){
            this.#id = id
        } else{
            this.#id = Person.#ids ++;
        }
        this.#name = name;
        this.#age = age;
    }

    getId(){
        return this.#id;
    }

    getName(){
        return this.#name;
    }

    getAge(){
        return this.#age;
    }

    getType(){
        return this.#type;
    }


    getSaveDetails(){
        return (
            {
                "type": this.getType(),
                "id": this.getId(),
                "name": this.getName(),
                "age": this.getAge(),
            }
        )
    }
}