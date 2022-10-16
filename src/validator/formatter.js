const Name = "FunctionUp"

let Trim = function() {
    let Trim1 = Name.trim()
    return Trim1
 }

 let Lowercase = function() {
    let Lowercase1 = Name.toLowerCase()
    return Lowercase1
 }

 let Uppercase = function() {
    let Uppercase1 = Name.toUpperCase()
    return Uppercase1
 }


module.exports.TrimData = Trim
module.exports.Lowercase = Lowercase
module.exports.Uppercase = Uppercase
