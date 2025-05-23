//1. charAt(): Returns the character at a specified index.
var s = "Hello"
console.log(s.charAt(0));

//2. charCodeAt(): Returns the Unicode value of the character at a specified index.
console.log("A".charCodeAt())
console.log("ABCD".charCodeAt())
console.log("ABCD".charCodeAt(3))

//3. concat(): Joins two or more strings.
var c1 = "Hello"
var c2 =" Students"
console.log(c1.concat(c2))
c1 = c1.concat(c2)
console.log(c1)

//4. endsWith(): Checks if a string ends with a specified string.
console.log("Hello".endsWith("l"))

//5. startWith()
console.log("Avnish".startsWith("a"))

//6. includes(): Checks if a string contains a specified string.
console.log("Hello".includes("l"))

//7. indexOf(): Returns the index of the first occurrence of a value in a string, or -1 if not found.
console.log("Hello".indexOf("elel"))

//8. lastIndexOf(): Returns the index of the last occurrence of a value in a string, or -1 if not found.
console.log("Hello".lastIndexOf("l"))

//9. match(): Searches a string for a match against a regular expression, and returns the matches.
console.log("hello@gmail.com".match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
