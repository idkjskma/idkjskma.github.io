 const arr = new Array(50).fill(1);
 const bar = arr.map(() => Math.floor(Math.random()*50));
 // console.log(bar);
 bar.forEach((el)=>console.log(el));
 let bool1 = arr.every((el) => el==1);
 let bool2 = bar.every((el) => el==1);
 // console.log (`Каждый елемент массива arr равен единице ${bool1}`);
 // console.log (`Каждый елемент массива bar равен единице ${bool2}`);
 let bool3 = arr.some((el) => el>48);
 let bool4 = bar.some((a) => a>48);
 console.log (`В массиве arr есть элементы, которые больше 48 ${bool3}`);
 console.log (`В массиве bar есть элементы, которые больше 48 ${bool4}`);
 let s=bar.reduce(((prev,cur)=> prev+cur), 0);
 // 75+20= 95+12=107
 console.log(`Сумма всех элементов bar равна ${s}`);
 let max=bar.reduceRight(((prev,cur)=> prev > cur ? prev : cur), 0);
 console.log(`Максимальный элемент равен ${max}`);