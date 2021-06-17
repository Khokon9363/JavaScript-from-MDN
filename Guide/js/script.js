// ---------------------------------- Numbers | Date --------------------------------------

console.log('Decimal (10)', 10)
console.log('Octal (010)', 010)
console.log('Hexadecimal (0xC)', 0xC)
console.log('Binary (0b1010)', 0b1010)
console.log('Exponentiation of 1E3', 1E3)

// Number object and it's propertry
console.log('Number.MAX_VALUE', Number.MAX_VALUE)
console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Number.MIN_VALUE', Number.MIN_VALUE)
console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('Number.NaN', Number.NaN)

// methods
console.log('Number.parseFloat of 10.11', Number.parseFloat('10.10'))
console.log('Number.parseInt of 10.10', Number.parseInt('10.10'))
console.log('isFinite 1000', Number.isFinite(1000))
console.log('isInteger 1000', Number.isInteger(1000))
console.log('isNaN (Number.NaN)', Number.isNaN(Number.NaN))
console.log('isNaN 1000', Number.isNaN(1000))

// higher methods
console.log('toExponential', 5.73.toExponential())
console.log('toFixed of 5.73', 5.73.toFixed())
console.log('toFixed of 5.33', 5.33.toFixed())
console.log('toPrecision of 123.456', 123.456.toPrecision(3))
console.log('toPrecision of 123.456', 123.456.toPrecision(4))
console.log('toPrecision of 123.456', 123.456.toPrecision(5))

// Math object
console.log('PI', Math.PI)
console.log('sin(45)', Math.sin(45))

console.log('random())', Math.random()) // 0 - 1

console.log('abs', Math.abs(10.12)) // absolute value without exponentiation
console.log('pow()', Math.pow(3, 3))

console.log('floor() of 10.19', Math.floor(10.17))
console.log('floor() of 10.97', Math.floor(10.97))
console.log('ceil() of 10.19', Math.ceil(10.17))
console.log('ceil() of 10.97', Math.ceil(10.97))
console.log('round() of 10.19', Math.round(10.17))
console.log('round() of 10.97', Math.round(10.97))
console.log('trunc() of 10.97', Math.trunc(10.97)) // return the int part

console.log('min', Math.min(5,1,9,20))
console.log('max', Math.max(5,1,9,20))

console.log('sign() of -10', Math.sign(-10))
console.log('sign() of 0', Math.sign(0))
console.log('sign() of 10', Math.sign(10))

console.log('sqrt() of 10 (√)', Math.sqrt(10)) // root
console.log('cbrt() of 10 (3√)', Math.cbrt(10)) // root

// Date object
function JSClock() {
    let date = new Date()
    let hour = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    if(hour == 0)
        hour = 12
        hour += ((minute < 10) ? ':0' : ':') + minute
        hour += ((second < 10) ? ':0' : ':') + second
        hour += (hour >= 12) ? ' PM' : ' AM'
    return hour
}
setInterval(() => {
    document.querySelector('h1').textContent = JSClock()
}, 1000);

// -------------------------------- Text Formatting ------------------------------

// toLowerCase | toUpperCase | trim

// Number format
const price = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 3
})
console.log(price.format(120555)) // ১,২০,৫৫৫.০০০৳

// charAt
let paragraph = 'This is a paragraph'

    console.log('charAt()', paragraph.charAt('10')) // p
    console.log('charAt()', paragraph.charAt(paragraph.length - 1)) // h


// indexOf | indexOfLast
let line = 'This is a coconut tree. I like coconut'

    console.log('indexOf()', line.indexOf('coconutaaaaa')) // -1
    console.log('indexOf()', line.indexOf('coconut'))      // 10

    console.log('lastIndexOf()', line.lastIndexOf('coconutaaaaa')) // -1
    console.log('lastIndexOf()', line.lastIndexOf('coconut'))      // 31

    console.log('indexOf()', line.indexOf('coconut', line.indexOf('coconut') + 1)) // 31


// startsWith | endsWith | includes
let line2 = "I like to play football."

    console.log('startsWith()', line2.startsWith('I'))      // true
    console.log('startsWith()', line2.startsWith('I like')) // true
    console.log('startsWith()', line2.startsWith('like'))   // false

    console.log('endsWith()', line2.endsWith('.'))          // true
    console.log('endsWith()', line2.endsWith('football'))   // false
    console.log('endsWith()', line2.endsWith('play'))       // false

    console.log('includes()', line2.includes('like'))       // true

// concat
let str1 = 'Apple'
let str2 = 'Ball'
    console.log('concat()', str1.concat(' ', str2))
    console.log('concat()', str1.concat(', ', str2))

// split
let text = 'This is a fox'
    console.log('split()', text.split(' ')) // ["This", "is", "a", "fox"]
    console.log('split()', text.split(''))  // ["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "f", "o", "x"]
    console.log('split()', text.split())    // ["This is a fox"]

// slice
let text2 = 'I like to write codes using Vanilla JavaScript'
    console.log('slice()', text2.slice(0, text2.length))
    console.log('slice()', text2.slice(0, 10))
    console.log('slice()', text2.slice(1, 10))

// substring | substr
let text3 = 'I like Vanilla JavaScript'
    console.log(text3.substring(1, 10)) // include slash
    console.log(text3.substr(1, 10))    // don't include slash

// replace
let text4 = 'I live in in Bangladesh'
    console.log('replace()', text4.replace('in', 'innnnnn'))    // I live innnnnn in Bangladesh
    console.log('replaceAll()', text4.replaceAll('in', 'innnnnn')) // I live innnnnn innnnnn Bangladesh

// search
let text5 = 'A B C D E F G H I J K L'
    console.log('search()', text5.search('D')) // 6

// repeat
console.log('repeat()', 'I love my country. '.repeat(5))



// -------------------------------------------------------------------------------

/* JAVASCRIPT DOES NOT SUPPORT ASSOCIATIVE ARRAY */

// ---------------------------- Array methods ------------------------------------

let arr1 = ['A', 'B', 'C']
    console.log('concat', arr1.concat(['D', 'E', 'F']))   // ["A", "B", "C", "D", "E", "F"]

    console.log('join', arr1.join(', '))                  // A, B, C

    arr1.push('New Item')
    console.log('push', arr1)                             // ["A", "B", "C", "New Item"]

    arr1.pop()
    console.log('pop', arr1)                             // ["A", "B", "C"]

    arr1.unshift('New Item')
    console.log('push', arr1)                             // ["New Item", "A", "B", "C"]

    arr1.shift()
    console.log('pop', arr1)                             // ["A", "B", "C"]

    console.log('slice', arr1.slice(1, 3))               // ["B", "C"]
    
    arr1.forEach(function (e, key) {
        console.log('forEach', `${key} : ${e}`)
    })
    arr1.forEach((e, key) => {
        console.log('forEach', `${key} : ${e}`)
    })
    
    console.log('reverse', arr1.reverse())               // ["C", "B", "A"]


    let map = arr1.map((e) => {
        return e
    })
    console.log('map', map)

    let anotherArr = [1, '2', 3, '4', 5]

    let filter = anotherArr.filter((e) => {
        return typeof e === 'number'
    })
    console.log('filter', filter)

    let every = anotherArr.every((e) => {
        return typeof e === 'number'
    })
    console.log('every', every)           // return true if all items return true
    
    let some = anotherArr.some((e) => {
        return typeof e === 'number'
    })
    console.log('some', some)           // return true if at least one item return true

// ------------------------------- Map Object | Set Object ----------------------------------------

let mapObj = new Map()
    
    mapObj.set('dog', 'DOG')
    mapObj.set('cat', 'CAT')
    mapObj.set('cow', 'COW')

    console.log(mapObj)               // {"dog" => "DOG", "cat" => "CAT", "cow" => "COW"}
    
    console.log(mapObj.size)

    console.log(mapObj.get('dog'))
    console.log(mapObj.has('dog'))
    
    mapObj.delete('dog')
    console.log(mapObj.has('dog'))

    mapObj.clear()
    console.log(mapObj)

let setObj = new Set()
    
    setObj.add('Dog')
    console.log(setObj)

    console.log(setObj.has('Dog'))

    console.log(setObj.delete('Dog'))

    console.log(setObj.has('Dog'))

    console.log(setObj.size)
    