// let title = document.querySelector('h5');
// let add = document.querySelector('.btn-add');
// add.addEventListener("click", ()=>{
//     title.innerHTML = "Known";
//     title.style.color = "green";
// });

// let remove = document.querySelector('.btn-remove');
// remove.addEventListener("click", ()=>{
//     title.innerHTML = "Unknown";
//     title.style.color = "red";
// })


let title = document.querySelector('h5');
let add = document.querySelector('.btn-add');
let check = 0;

add.addEventListener("click", () => {
    if (check == 0) {
        title.innerHTML = "Known";
        title.style.color = "green";
        add.innerHTML="Remove";
        check=1
    }else{
        title.innerHTML = "Unknown";
        title.style.color = "red";
        add.innerHTML="Add";
        check=0
    }
});


