let transition = document.querySelector("#transition");
let string = transition.textContent;
let boxes = document.querySelectorAll("button");
let show = document.querySelector("#input-display");

let array = Array.from(boxes);
let string2 = "";

transition.textContent = "";

const transitionText = () =>{
    for(let i=0; i<string.length; i++){
        setTimeout(() => {
            transition.textContent += string[i];
        }, i*250);
    };
};
transitionText();



console.log(show);
array.forEach(btns => {
    btns.addEventListener("click", (event) => {
        if(event.target.innerHTML == "DEL"){
            string2 = string2.substring(0, string2.length-1);
            show.innerText = string2;
        } else if(event.target.innerHTML == "AC"){
            string2 = "";
            show.innerText = string2;
        } else if(event.target.innerHTML == "="){
            let result = eval(string2);
            string2 = result.toString();
            show.innerText = string2;
        } else {
            string2 += event.target.innerHTML;
            show.innerText = string2;
        }
    });
});