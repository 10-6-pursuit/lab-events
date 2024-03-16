let squares=document.querySelectorAll(`.tic-tac-toe div`)
let bool=true
let array1=[]
let array2=[]

for(let square of squares){
    square.classList.add(`.square`)
square.addEventListener(`click`,(event)=>{
    
   
       
    if(square.textContent===``){

        if(bool){
            square.textContent=`o`
            bool=false
            array1.push(+event.target.getAttribute(`class`))
            console.log(array1)
        }
        else {square.textContent=`x`
    bool=true
    array2.push(+event.target.getAttribute(`class`))
    

    console.log(array2)}
    if((array1.includes(1)&&array1.includes(2)&&array1.includes(3))||(array1.includes(4)&&array1.includes(5)&&array1.includes(6))||(array1.includes(7)&&array1.includes(8)&&array1.includes(9))||
    (array1.includes(1)&&array1.includes(4)&&array1.includes(7))||(array1.includes(2)&&array1.includes(5)&&array1.includes(8))||(array1.includes(3)&&array1.includes(6)&&array1.includes(9))||
    (array1.includes(1)&&array1.includes(5)&&array1.includes(9))||(array1.includes(3)&&array1.includes(5)&&array1.includes(7))){
        window.alert(`o wins`)
        array1=[]
        array2=[]

    }
    else if((array2.includes(1)&&array2.includes(2)&&array2.includes(3))||(array2.includes(4)&&array2.includes(5)&&array2.includes(6))||(array2.includes(7)&&array2.includes(8)&&array2.includes(9))||
    (array2.includes(1)&&array2.includes(4)&&array2.includes(7))||(array2.includes(2)&&array2.includes(5)&&array2.includes(8))||(array2.includes(3)&&array2.includes(6)&&array2.includes(9))||
    (array2.includes(1)&&array2.includes(5)&&array2.includes(9))||(array2.includes(3)&&array2.includes(5)&&array2.includes(7))){
        window.alert(`x wins`)
        array1=[]
        array2=[]

    }
   else if (array1.length+array2.length===9){
    window.alert(`it's a draw`)
        

    }
            
    }
   
   

    // event.target.setAttribut1(`color`,`.a:hover`)
})

}
let button=document.querySelector(`button`)
button.addEventListener(`click`,(event)=>{
    const divs=document.querySelectorAll(`.tic-tac-toe div`)
for(let div of divs){
    div.innerText=``
}
})
