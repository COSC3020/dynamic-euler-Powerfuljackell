function factorial(n) {
    var final = 1;
    if(n === 0) return final;
    for(let i = 2; i <= n; i++){
        final *= i;
    }
    return final;
}
//console.log(factorial(2));

function e(n) {
    var final = 1;
    var factTemp = 1;
    if(n === 0) return final;
    for(let i = 1; i <=n; i++){
        final += 1/(factTemp*=i);
    }
   return final;
}
//console.log(e(10000));