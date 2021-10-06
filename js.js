const newText = document.querySelector('#converter');
const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const newResult = document.querySelector('p');
const one = document.querySelector('.one');
const two = document.querySelector('.two');



const celToFar = () =>{
if(newText.value !== ''){
const result = newText.value * 1.8 + 32;
result.toFixed(1)
newResult.textContent = `podana temperatura Celcjusza w stopniach Fahrenheita wynosi ${result}`
}else{
    newResult.textContent = 'podaj jakąś wartość';
}
}

const farToCel = () =>{
    if(newText.value !== ''){
    const result2 = newText.value -32 / 1.8;
    result2.toFixed(1);
    newResult.textContent = `podana temperatura Fahrenheita w stopniach Celcjusza wynosi ${result2}`;
}else {
    newResult.textContent = 'podaj jakąś wartość'
}
}

const fun2 = () =>{
    if(newText.value !== ''){
        newText.value = '';
        newResult.textContent = ''
        } 
}

const fun3 = () =>{
if(one.textContent === '°C'){
    one.textContent = '°F'
    two.textContent = '°C'
}else{
    one.textContent = '°C'
    two.textContent = '°F'
}

}




btnChange.addEventListener('click', fun3);
btnConv.addEventListener('click', celToFar);
btnReset.addEventListener('click', fun2);