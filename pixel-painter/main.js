let colors=document.querySelectorAll(`.color`)
let currentColor=document.querySelector(`#current-color`)
// console.log(colors)

let main=document.querySelector(`#canvas`)

for(let i=0;i<100;i++){
    
    let cell=document.createElement(`div`)
    // cell.className(`.cell`)

    main.append(cell)
}


for(let color of colors){
    // console.log(color)
color.addEventListener(`click`,(event)=>{
     let square=event.target.parentNode.parentNode.querySelector(`#current-color`)

     let c=event.target.getAttribute(`style`)

     
     square.setAttribute(`style`,c)
    // square.getAttribute(`style background`)
     

   


})

}
let sqs=document.querySelectorAll(`#canvas div`)
for(let sq of sqs ){

    sq.addEventListener(`click`,(event)=>{


        let sqColor=event.target.parentNode.parentNode.querySelector(`#current-color`).getAttribute(`style`)

        event.target.setAttribute(`style`,sqColor)
        console.log(sqColor)
       
    })
}
