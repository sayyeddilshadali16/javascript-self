// setTimeout(function(){
//     console.log('to run the function after three function')
// },3000);

//first class function

function abcd(a){
    a();
}
abcd(function(){console.log('hey')});