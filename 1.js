let image = document.getElementById("photo")
let message=document.getElementById("message")

image.style.width="80px"
image.style.height="80px"
a=80;
// let message=document.getElementById("message")

function increase() {
    if (a<=200) {
        a+=5
        image.style.width=a+"px"
        image.style.height=a+"px"
    }
    else {
        message.textContent="image reached to maximum and cannot be increased";
        
    }
    
    
}
function decrease() {
    if (a>=50) {
    a-=5
    image.style.width=a+"px"
    image.style.height=a+"px"
    }
    else{
        message.textContent="image reached to minimum height and cannot be decreased"
    }
   
}