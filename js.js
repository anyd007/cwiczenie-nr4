const newText = document.querySelector('#converter');
const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.change');
const newResult = document.querySelector('p');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


const change = () =>{
    if(one.textContent === '°C'){
        one.textContent = '°F';
        two.textContent = '°C';
    }else{
        one.textContent = '°C';
        two.textContent = '°F'
    }
    newResult.textContent = '';
}
console.log('h1');


const conve1 = () =>{
const fare = newText.value * 1.8 + 32;
fare.toFixed(1);
newResult.textContent = `${newText.value} °C, będzie odpowiadać ${fare.toFixed(1)} °F`
newText.value = '';
}
const conve2 = () =>{
const celc = (newText.value -32) / 1.8;
newResult.textContent = `${newText.value} °F, będzie odpowiadać ${celc.toFixed(1)} °C`
newText.value = '';
}

const convert = () =>{
if(newText.value !== ''){
    if(one.textContent === '°C'){
        conve1();
    }else{
        conve2();
    }
}else{
    newResult.textContent = 'podaj odpowiednią wartość';
}
}

const res = () =>{
    newText.value = '';
    newResult.textContent = '';
}

btnConv.addEventListener('click', convert);
btnChange.addEventListener('click', change);
btnReset.addEventListener('click', res);






