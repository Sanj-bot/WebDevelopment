const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
}

parent.children[1].style.color="orange";
const d1=document.querySelector('.day');
console.log(d1);
console.log(parent.childNodes);