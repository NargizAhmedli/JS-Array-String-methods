
function avgArrElement(numArr){
    let sum=0;
    for (let i = 0; i < numArr.length; i++) {
        sum+=numArr[i];
    }
    return sum/numArr.length;
}
console.log(avgArrElement([1,2,3,4,5,6,7,8,8]))


function addElementToArr(arr,addEl){
    arr.push(addEl);
    return arr;
}
console.log(addElementToArr([1,9,67,19],20))



function getRange(arr,min,max){
    for (let i = 0; i < arr.length; i++) {
         let newArr=arr.filter(e=>e>=min&&e<=max)
         return newArr;
    }
}
console.log(getRange([1,5,7,8,9,3,6,4,2],4,9))

function checkWord(word){
    let isUpper=false;
    let isLower=false;
    
        for (let i = 0; i < word.length; i++) {
            if(word[i]==word[i].toUpperCase()){
                isUpper=true;
            }

            else if(word[i]==word[i].toLowerCase()){
                isLower=true;
            }

            if(isUpper && isLower){

                return true;
            }
        }
    return false
    
}


console.log(checkWord("Nergiz"))

function chrCount(word,chr){
    let count=0;
    for (let i = 0; i < word.length; i++) {
        if(word[i]==chr){
            count++;
        }
    }
    return count;
}
console.log(chrCount("Salam Code","l"))
