let A1=[]
let N1 = Number(prompt("Nhập vào số phần tử của mảng 1: "));
for (let i = 0; i < N1; i++) {
    A1[i] = prompt(`Nhập vào phần tử thứ ${i+1} của mảng 2`);    
}
let A2=[]
let N2 = Number(prompt("Nhập vào số phần tử của mảng 2: "));
for (let i = 0; i < N2; i++) {
    A2[i] = prompt(`Nhập vào phần tử thứ ${i+1} của mảng 2`);    
}

var A3 = A1.concat(A2);
console.log("Ban đầu: ");
console.log(A1);
console.log(A2);
const set = new Set(A3);
var re = Array.from(set);
console.log("Sau khi lọc: ");
console.log(re);