let rows = 4;
let variable =1;
let pattern="";

for(let n=1;n<=rows;n++){
    for(let num=1; num<=n; num++){
        pattern+=variable+"";
        variable++;
    }
    pattern+="\n";
}
console.log(pattern);