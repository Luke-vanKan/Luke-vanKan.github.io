/*function capitalize (sentence){ 
  let sentenceArray = sentence.split(' ')
  let newArray = sentenceArray.map(element => element.slice(0,1).toUpperCase() + element.slice(1))
  return newArray
}

function capitalize (sentence){ 
  let sentenceArray = sentence.split(' ')
  let newArray = []
  for(let i=0; i<sentenceArray.length;i++){
    let word = sentenceArray[i]
    let newWord = word[0].toUpperCase() + word.slice(1)
    newArray.push(newWord)
  }
  return newArray.join(' ')
} */

function capitalize (sentence){ 
  let sentenceArray = sentence.split(' ')
  let newArray = sentenceArray.map(element => {
    element.slice(0,1).toUpperCase() + element.slice(1)})
  return newArray
}


console.log( capitalize('i can type many sentences'))

let list = [1, 2, 3, 4]
list.forEach(x => {console.log(x)})