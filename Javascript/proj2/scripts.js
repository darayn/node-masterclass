const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")


const center = document.querySelector(".center")


// console.log(window.getComputedStyle(red).background);



const getBGColor  = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor

}

// var color = getBGColor(pink)


// pink.addEventListener('mouseenter', ()=>{
//     center.style.background = color;
// });



const colorChanger = (element, color) => {
    return element.addEventListener('mouseenter', ()=>{
        center.style.background = color;
    });
    
};


colorChanger(red, getBGColor(red))
colorChanger(cyan, getBGColor(cyan))
colorChanger(violet, getBGColor(violet))
colorChanger(orange, getBGColor(orange))
colorChanger(pink, getBGColor(pink))