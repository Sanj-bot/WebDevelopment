// // document.getElementById('owl').onclick=function(){
// //     alert("owl ko ku click kai")
// // }

// // document.getElementById('owl').addEventListener('click',function(){
// //     alert("owl clicked again");
// // },false)

// //attachEvent()

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
//   },
//   false
// );

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  // removeIt.parentNode.removeChild(removeIt);
});
