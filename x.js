const th = [1, 1, 1, 1, 1];
const tns = 5;
let x = [{"0": 1}]; //a0
let fn = [];
for (let i = 1; i <= Math.pow(tns-1, 2); i++) {
    x[i] = {};
}
[{"0-0-1-1": 3}, {"1-2-2":1}] //3a0a0a1a1+a1a2a2*x
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
console.log(x);
for (let i = 0; i <= x.length; i++) {
    let func = "return ";
    for (let k in x[i]) {}
        const qm = k.split("-");
        func = func + x[i][k];
        for (let gp in qm) {
            func = func + "imd["+gp+"]*";
        }
        func[func.length - 1] = "+";
    }
    func[func.length - 1] = ";";
    console.log(i, func);
    fn[i] = new Function("imd", func);
}
////
////