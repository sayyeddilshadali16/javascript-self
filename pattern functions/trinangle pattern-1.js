let row = 10;
let pattern = "";
 for(let n = 1; n<=row; n++){
    for(let num=1;num<=n; num++){
        pattern +=num;
    }
    pattern +="\n";
 }
 console.log(pattern);