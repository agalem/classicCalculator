const input = document.getElementById('input');
const numberBtns = document.getElementsByClassName('btn-number');
const operationBtn = document.getElementsByClassName('btn-count');
const clearBtn  = document.getElementById('btnClr');
const showBtn = document.getElementById('btnEql');
const sqrBtn = document.getElementById('btnSqr');
const squBtn = document.getElementById('btnSqu');

input.innerHTML = '';

function UserError(message) {
    this.message = message;
    this.name = 'UserError';
}

const writeNumber = (btn) => {
    input.innerHTML += btn.innerHTML;
};

const clearInput = () => {
    input.innerHTML = '';
};

const showSqrt = () => {
    let inputValue = input.innerHTML;
    let outputValue = Math.sqrt(eval(inputValue));
    input.innerHTML = String(outputValue);
};

const showSqu = () => {
    let inputValue = input.innerHTML;
    let outputValue = eval(inputValue);
    let outputSquare = outputValue * outputValue;
    input.innerHTML = String(outputSquare);
};

const showOutput = () =>{
    let inputValue = input.innerHTML;
    let outputValue = eval(inputValue);
    input.innerHTML = String(outputValue);
};

for(let i = 0; i<numberBtns.length; i++){
    numberBtns[i].addEventListener('click', function () {
        writeNumber(this);
    })
}

for(let i=0; i<operationBtn.length; i++){
    operationBtn[i].addEventListener('click', function () {
        writeNumber(this);
    })
}

clearBtn.addEventListener('click', function () {
    clearInput();
});

showBtn.addEventListener('click', function () {
    try {
        showOutput();
    } catch  (e) {
        error = new UserError('Invalid input');
        input.innerHTML = error.message;
    }
});

sqrBtn.addEventListener('click', function () {
    try {
        showSqrt();
    } catch  (e) {
        error = new UserError('Invalid input');
        input.innerHTML = error.message;
    }

});

squBtn.addEventListener('click', function () {
    try {
        showSqu();
    } catch  (e) {
        error = new UserError('Invalid input');
        input.innerHTML = error.message;
    }

});