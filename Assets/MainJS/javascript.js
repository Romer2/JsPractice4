'use strict';

// 1 task

 let a = prompt("Введите первое число");
 let b = prompt("Введите второе число");

 if (a < b ) {
    for(let i = a; i <= b; i++) {
        alert(i);
    }
 } else {
    alert("a должно быть меньше b");
 }

// 2 task 

    let i = 0;
    while (i < 3) {
        alert (i);
        i++
    }

// 3 task 

    let number = +prompt("Введите число");
    do {
        number = +prompt("Введите число еще раз");
    } while(number < 10 && number)

// 4 task 

    let first = prompt("Введите первое чилсо");
    let second = prompt("Введите второе чилсо");

    function Min(first,second) {
        if (first < second){
            alert(`Меньшее число ${first}`);
        } else {
            alert(`Меньшее число ${second}`);
        }
    }
    
    Min(first,second);

// 5 task
    let ask = (question, yes, no) => {
        confirm(question) ? yes() : no();
    }

    ask(
        "Вы согласны?",
        () => alert("Вы согласились!"),
        () => alert("Вы отменили выполнение!")
    );

// 6 task
    let age = +prompt('Введите возраст');
    let checkAge = age => age >18 || confirm('Родители разрешили?');
    checkAge(age)

