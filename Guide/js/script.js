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

// Number format
const price = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 3
})

console.log(price.format(120555)) // ১,২০,৫৫৫.০০০৳