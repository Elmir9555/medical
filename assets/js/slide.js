let leftIcon=document.querySelector(".left-icon")
let rightIcon=document.querySelector(".right-icon")
let hidden=document.querySelector(".hidden")

rightIcon.addEventListener("click",function(){
    
    let matrix = window.getComputedStyle(hidden).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum > -1344) {
        hidden.style.transform = "translateX(" + (translateXNum - 336) + "px)";
    }
    else{
        return;
    }
    
})



leftIcon.addEventListener("click",function(){
    
    
    let matrix = window.getComputedStyle(hidden).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum < 0) {
        hidden.style.transform = "translateX(" + (translateXNum + 336) + "px)";
    }
    else{
        return;
    }
    
})