const th = [1, 1, 1/2, 1/6, 1/24, 1/120, 1/720, 1/5040, 1/40320, 1/362880]; //3*3+1
const tns = 4;
let x = [{"0": 1}]; //a0
let fn = [];
for (let i = 1; i <= Math.pow(tns-1, 2); i++) {
    x[i] = {};
}
for (let i = 0; i < tns; i++) {
    const p = [i, 1].sort().join("-");
    if (x[i][p]) {
        x[i][p]++;
    } else {
        x[i][p] = 1;
    }
}
for (let i = 0; i < tns; i++) {
    for (let j = 0; j < tns; j++) {
        const p = [i, j, 2].sort().join("-");
        const nm = i+j;
        if (x[nm][p]) {
            x[nm][p]++;
        } else {
            x[nm][p] = 1;
        }
    }
}
for (let i = 0; i < tns; i++) {
    for (let j = 0; j < tns; j++) {
        for (let k = 0; k < tns; k++) {
            const p = [i, j, k, 3].sort().join("-");
            const nm = i+j+k;
            if (x[nm][p]) {
                x[nm][p]++;
            } else {
                x[nm][p] = 1;
            }
        }
    }
}
/*
for (let i = 0; i < tns; i++) {
    for (let j = 0; j < tns; j++) {
        for (let k = 0; k < tns; k++) {
            for (let l = 0; l < tns; l++) {
                const p = [i, j, k, l, 4].sort().join("-");
                const nm = i+j+k+l;
                if (x[nm][p]) {
                    x[nm][p]++;
                } else {
                    x[nm][p] = 1;
                }
            }
        }
    }
}
*/
for (let i = 0; i < x.length; i++) {
    let func = "return ";
    for (let k in x[i]) {
        const qm = k.split("-");
        func = func + "+" + x[i][k].toString();
        for (let gp of qm) {
            func = func + "*imd["+gp+"]";
        }

    }
    func = func + ";";
    func = func.replace(/1\*/g, "").replace("+", "");
    fn[i] = new Function("imd", func);
}
let me = [];
for (let i = 0; i < tns; i++) {
    me[i] = 0;
}
console.log(x, fn, me);
function erf() {
    let re = 0;
    for (let i = 0; i < fn.length; i++) {
        re += Math.pow(fn[i](me) - th[i], 2);
    }
    return re;
}
console.log(erf());
//
//