// вары
const min = 5;
const max = 15;
let total = 0;


// фор от мин до макс с шагом в 1

for (let i = min; i <= max; i += 1) {
    // console.log(i);


   // проверяем остаток от деления 
    if (i % 2 !== 0) {
        console.log('Не четное: ', i);   
        continue;
    }
    
    // пишем в сумму
    console.log('четное: ', i);
    total += i;
}



console.log('total: ', total);