let sum = 0;
for (let index = 1; index < 6; index++) {
    let factor = 1;
    for (let index2 = 1; index2 <= index; index2++) {
        factor = factor * index2;
    }
    sum = sum + factor;
}
console.log(sum);
