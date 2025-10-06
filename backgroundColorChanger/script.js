
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(button =>{
    button.addEventListener("mouseover",(e) => {
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        // body.setAttribute("id", "grey")
    } else if(e.target.id === "white"){
        body.style.backgroundColor = e.target.id
        // body.setAttribute("id", "white")
    } else if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
        // body.setAttribute("id", "blue")
    } else if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
        // body.setAttribute("id", "yellow")
    } 
    })
});
























// const buttons = document.querySelectorAll(".button")
// console.log(buttons)
// let body = document.querySelector("body")
// console.log(body)
// // for(button of buttons){
// //     button.addEventListener("click",(e) => {
// //         if(e.targetValue == "grey"){
// //             body.setAttribute("ID","grey")
// //         }
// //     })
// // }

//  buttons.addEventListener("click",(e) => {
//         if(e.target.value == "grey"){
//             body.setAttribute("id","grey")
//         }
//     })


// let body = document.querySelector("body")
// const buttons = document.querySelectorAll(".button")
// buttons.forEach(button => {
//     console.log(button.id)
// });


















// grey.addEventListener("click", (event) => {
//     body.setAttribute("id","grey")
//     console.log(event.target.id === "grey")
// })

