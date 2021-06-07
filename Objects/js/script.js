// const person = {}
// const person = new Object()

// console.log(typeof person)

// -------------------------------------------------------------------
const person = {
    name : {
        first: 'Robert',
        last: 'Smith'
    },
    email:['user@user.com', 'admin@admin.com'],
    gender: 'male',
    interests: ['Football', 'Cricket', 'Hocky'],
    fullName: function () {
        return this.name.first + ' ' + this.name.last
    },
}

console.log(person)
console.log(person.name.first + ' ' + person.name.last)
console.log(person['name']['first'] + ' ' + person['name']['last']) // same

person.email.forEach(element => {
    console.log(element)
})

console.log(person.gender)
console.log(person['gender']) // same

person.interests.forEach((element) => {
    console.log(element)
})
console.log(person.fullName())

// -------------------------------------------------------------------
function createNewPerson(first, last = 'Default') {
    const obj = new Object() // {}
          obj.first = first
          obj.last = last
          obj.fullName = function (){
              return obj.first + ' ' + obj.last
          }
    return obj
}

console.log(createNewPerson('Edward'))
console.log(createNewPerson('Edward', 'Anthony'))

const person1 = createNewPerson('Salva')
      console.log(person1.fullName())

const person2 = createNewPerson('Sarah')
      console.log(person2.fullName())

// ----------------------------- Object Oriented JavaScript --------------------------------------
function PersonObject(first, last, email, games) {
    this.name = first + ' ' + last
    this.email = email
    this.games = games
    this.fullName = function () {
        return this.name
    }
}

const person3 = new PersonObject('Edward', 'Anthony', ['edward@edward.com', 'anthony@anthony.com'], ['Football', 'Cricket'])

console.log(person3)
console.log(person3.fullName())

// -------------------------- Class Based Object Oriented JavaScript -----------------------------------------
class Person {
    constructor (first, last, age, gender, games) {
        this.name = {first, last}
        this.age = age
        this.gender = gender
        this.games = games
    }

    fullName() {
        return this.name
    }
}

const personClass = new Person('Edward', 'Anthony', 'age', 'gender', ['Football', 'Cricket'])

console.log(personClass) // return constructor
console.log(personClass.fullName())

// -------------------------- Inheritance means extends -----------------------------------------
class Teacher extends Person{
    constructor (sallary = 10000) {
        super() // It means new Person() ; we can also define params of person inside super()
        this.sallary = sallary
        this.name = 'Edward Anthony' // It will extends the Parent's name propertry and return 'Edward Anthony'
    }
}

// const teacherClass = new Teacher(20000) // define the sallary
const teacherClass = new Teacher()

console.log(teacherClass)

// -------------------------- Getter & Setter -----------------------------------------
class Tutor {
    constructor (sallary) {
        this.sallary = sallary
    }
}

class Student extends Tutor{
    constructor (first, last, role) {
        super(50000)
        this.student = {
            name: {first, last},
            _role: role
        }
    }

    get role (){
        return this.student._role
    }
    set role(role){
        this.student._role = role
    }
}
// const student = new Student() // return undefiend at student object's properties (first, last, roll)

const student = new Student('A', 'B', 2)
console.log('getter', student.role)      // get role using getter
student.role = 1  // set role using setter
console.log('getter after setter', student.role)      // get role using getter

// --------------------------------- JSON -----------------------------------
let result

window.onload = function () {
    loadData('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    setTimeout(() => {
        console.log(result)
    }, 300)
}

function loadData(url, method = 'GET', async = true, responseType = 'json') {
    let req = new XMLHttpRequest()
        req.open(method, url, async)
        req.responseType = responseType  // enum field => ['json', 'text']
        req.send()

        req.onreadystatechange = function(e) {
            if (req.readyState === 4) {
                result = req.response
            }
        }
}

// --------------------------------- Practice -----------------------------------
