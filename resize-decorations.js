function resizeElementToScreenWidth(arr)
{
    
    if(!(arr instanceof HTMLCollection)){
        
        arr.style.borderLeftWidth = getComputedStyle(arr.parentNode).width
    }
    else{
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
function resizeIframe(iframeWrapperArray){
    console.log('ran')
    const width = iframeWrapperArray[0].clientWidth
    const height = Math.floor(width / (16/9))
    for(let x = 0; x < iframeWrapperArray.length; x++){
        
        iframeWrapperArray[x].style.height = `${height}px`
    }
}
const iframeWrapperArray = document.getElementsByClassName('iframe-wrapper')
console.log(iframeWrapperArray)
const rightTriangles = document.getElementsByClassName("triangle-right")
const leftTriangles = document.getElementsByClassName("left-triangle")
resizeElementToScreenWidth(rightTriangles)
resizeElementToScreenWidth(leftTriangles)


resizeIframe(iframeWrapperArray)


window.addEventListener('resize', () => {
    resizeElementToScreenWidth(rightTriangles)
    resizeElementToScreenWidth(leftTriangles)
    resizeIframe(iframeWrapperArray)
})

