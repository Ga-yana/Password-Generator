const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    let length=lengthEl.value;
    let lower=lowercaseEl.checked;
    let upper=uppercaseEl.checked;
    let number=numbersEl.checked;
    let symbol=symbolsEl.checked;
    generatePassword(lower, upper, number, symbol, length);
})

function generatePassword(lower, upper, number, symbol, length) {
    
    let item=[];
    if(lower){
      item.push(randomFunc.lower);
    }
    if(upper){
      item.push(randomFunc.upper);
    }
    if(number){
      item.push(randomFunc.number);
    }
    if(symbol){
      item.push(randomFunc.symbol);
    }

    let passWord=item[Math.floor(Math.random()*(item.length))]();
    for(let i=0; i<(length-1); i++){
      passWord=passWord+item[Math.floor(Math.random()*(item.length))]();
    }
    document.querySelector("#result").innerHTML=passWord;
}

function getRandomLower() {
    let group=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return(group[Math.floor(Math.random()*26)]);
}

function getRandomUpper() {
    let group=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return(group[Math.floor(Math.random()*26)]);
}

function getRandomNumber() {
    let group=[0,1,2,3,4,5,6,7,8,9];
    return(group[Math.floor(Math.random()*10)]);
}

function getRandomSymbol() {
    let group=['!','@','#','%','&','*','$'];
    return(group[Math.floor(Math.random()*7)]);
}
