// code your solution here
function saturdayFun(word ="roller-skate"){
    return (`This Saturday, I want to ${word}!`);
} 
function mondayWork(newWord ="go to the office"){
    return (`This Monday, I will ${newWord}.`)
}
let wrapAdjective = function(wrap="*") {
     return function (adjective="special") {
        return `You are ${wrap}${adjective}${wrap}!`
     }
}
