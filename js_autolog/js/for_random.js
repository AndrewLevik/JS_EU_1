// сделать вары

const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;

// перебрать работников в цикле
// сгенерировать случайную ЗП
for (let i = 1; i <= employees; i += 1) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary);
    
    console.log(`ЗП работника номер ${i} - ${salary}`);

// прибавить к тоталу
    totalSalary += salary;
}
// лог
    console.log('totalSalary: ', totalSalary);





