var upperCase = "HELLO!"{
  upperCase.toUpperCase()===upperCase
}
var lowerCase = "hello!"{
  lowerCase.toLowerCase()===lowerCase
}
function shout(string) {
  return string.toUpperCase() 
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  if(string === lowerCase){
    return "I can't hear you!"
  }
}
