/* Creating Objects & Custom Types */

type Persons = { // define custom type for an object // 
    name: String;
    Age: Number;
    Job: String;
    Height: Number;
    RollNo: Number;
    Hobbies: String[];
}

let person = { //creating an object "person" which stores different values //
    name: "Junaid", 
    Age: 36, 
    Job: "Junior Lecturer", 
    Height: 5.7,
    RollNo: 606,
    Hobbies: ["owais", "junaid", "sadia"]
}
console.log(person);

const persons: Persons[] = [] // const persons = variable name, Persons[] = Type, [] = Value //
persons.push({ //same types but different values from the previous object "person" //
    name: "Kashif", 
    Age: 40, 
    Job: "Junior Elementary School Teacher", 
    Height: 5.9,
    RollNo: 607,
    Hobbies: ["Cricket", "Internet", "Body Building"]
});
console.log(persons);