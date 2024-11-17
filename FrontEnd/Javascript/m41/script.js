
fetch('https://api.github.com/users/Sanj-bot')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))