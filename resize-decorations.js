function resizeElementToScreenWidth(arr)
{
    
    if(!(arr instanceof HTMLCollection)){
        
        arr.style.borderLeftWidth = getComputedStyle(arr.parentNode).width
    }
    else{
        console.log(getComputedStyle(arr[0].parentNode).width)
        for(let i = 0; i < arr.length; i++){

            //Currently only expecting to have two different inputs any other changes will need to be added or only right border radius will change 

            if( arr[i].classList[0] === 'triangle-right'){
                arr[i].style.borderLeftWidth = getComputedStyle(arr[i].parentElement).width
            }
            else{
                arr[i].style.borderRightWidth = getComputedStyle(arr[i].parentElement).width
            }
            
        }
    }
}

const rightTriangles = document.getElementsByClassName("triangle-right")
const leftTriangles = document.getElementsByClassName("left-triangle")
resizeElementToScreenWidth(rightTriangles)
resizeElementToScreenWidth(leftTriangles)


window.addEventListener('resize', () => {
    console.log('resized')
    resizeElementToScreenWidth(rightTriangles)
    resizeElementToScreenWidth(leftTriangles)
})

