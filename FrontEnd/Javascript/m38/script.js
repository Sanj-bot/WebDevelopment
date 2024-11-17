
const changeText=function () {
document.querySelector('h1').innerHTML="Best js series";    
}

const changeMe=setTimeout(
    changeText
, 2000);


document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
})