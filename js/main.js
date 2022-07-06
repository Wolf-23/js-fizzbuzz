// document.getElementById('send').addEventListener('click', 
//     function() {
//         let containerDom = document.getElementById('container');
//         containerDom.className = 'block';
//         containerDom.innerHTML = '';
//         const numberMin_Dom = parseInt(document.getElementById('number_min').value);
//         const numberMax_Dom = parseInt(document.getElementById('number_max').value);
//         if (numberMin_Dom > numberMax_Dom) {
//             alert ('Inserisci due valori validi!')
//         } else {

//             for (let x = numberMin_Dom; x <= numberMax_Dom; x++ ) {
//                 let boxDom = document.createElement('div');
//                 boxDom.className = 'box';
//                 containerDom.append(boxDom);
//                 if ((x % 3 == 0) && (x % 5 == 0)) {
//                     boxDom.innerHTML = 'FizzBuzz';
//                     boxDom.classList.add('bg_red');
//                 } else if (( x % 3 == 0)) {
//                     boxDom.innerHTML = 'Fizz';
//                     boxDom.classList.add('bg_green');
//                 } else if (( x % 5 == 0)) {
//                     boxDom.innerHTML = 'Buzz';
//                     boxDom.classList.add('bg_orange');
//                 } else {
//                     boxDom.innerHTML= x;
//                 }
//             }
//         }
//     }
// );

// document.getElementById('restart').addEventListener('click', 
//     function() {
//         document.getElementById('container').className = 'none';
//         document.getElementById('number_min').value = '';
//         document.getElementById('number_max').value = '';
//     }
// );

let numberMin_Dom = document.getElementById('number_min');
let numberMax_Dom = document.getElementById('number_max');

document.getElementById('send').addEventListener('click', 
    function() {
        let containerDom = document.getElementById('container');
        containerDom.className = 'block';
        containerDom.innerHTML = '';
        numberMin = parseInt(numberMin_Dom.value);
        numberMax = parseInt(numberMax_Dom.value);
        if (numberMin > numberMax) {
            alert ('Inserisci due valori validi!')
        } else {
            for (let x = numberMin; x <= numberMax; x++ ) {
                let boxDom = document.createElement('div');
                boxDom.className = 'box';
                containerDom.append(boxDom);
                if ((x % 3 == 0) && (x % 5 == 0)) {
                    boxDom.innerHTML = 'FizzBuzz';
                    boxDom.classList.add('bg_red');
                } else if (( x % 3 == 0)) {
                    boxDom.innerHTML = 'Fizz';
                    boxDom.classList.add('bg_green');
                } else if (( x % 5 == 0)) {
                    boxDom.innerHTML = 'Buzz';
                    boxDom.classList.add('bg_orange');
                } else {
                    boxDom.innerHTML= x;
                }
                console.log('ciao');
            }
        }
    }
);

document.getElementById('restart').addEventListener('click', 
    function() {
        document.getElementById('container').className = 'none';
        numberMin_Dom.value = '';
        numberMax_Dom.value = '';
    }
);

