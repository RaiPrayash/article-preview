
const popup = document.querySelector("#popUp");
const trgr = document.querySelector("#triger");


// trgr.addEventListener("click",function(){
//     this.classlist
// })
// console.log(trgr);

trgr.addEventListener("click", () => {
    popup.classList.toggle('hidde');
})

// rateAgain.addEventListener("click", () => {
//     thanksContainer.classList.add("hidden");
//     mainContainer.style.display = "block";
// })
