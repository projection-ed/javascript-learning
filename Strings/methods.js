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

//10. toUpperCase()
console.log("Hello".toUpperCase())

//11. toLowerCase()
console.log("Hello".toLowerCase())

//12. trim()
let a = " hello        world a    "
console.log(a.trim())

//13. trimStart()
console.log("   Hello   ".trimStart())

//14. trimStart()
console.log("   Hello   ".trimEnd())

//15. padStart()
console.log("1234567890".padStart(15,"x")) 
console.log("1234567890".padEnd(15,"x"))

//16. repeat()
console.log("X".repeat(30))

//17. replace(), replaceAll()
console.log("Hello, World!, World, World".replaceAll("World", "India"))

//18. split()
console.log("Hello, World!, My name is harsh".split(""))

//19. slice()
                        
console.log("Hello, World!".slice(-20))

//20. substring()
console.log("Hello, World!".substring(-20))

//21. substr
console.log("Apple, Banana, Kiwi".substr(7,6))