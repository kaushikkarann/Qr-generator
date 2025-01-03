const inputBox=document.querySelector(".input-value");
const submit=document.querySelector("button");
const img=document.querySelector(".img-gen")
const download=document.querySelector("#download")

submit.addEventListener("click",function(){
const input=inputBox.value
if(input.length>1){     
    const url= img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input;

   
   
}else{
    inputBox.classList.add("error");
    setTimeout(()=>{
        inputBox.classList.remove("error")
    },5000)
    console.log(inputBox)
}
    
});

