const requestUrl = "https://api.github.com/users/Sanj-bot";
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function () {
    // console.log(xhr.readyState);
    if (xhr.readyState===4) {
        // const data=this.responseText;
        const data=JSON.parse(this.responseText)
        console.log(typeof data)
        console.log(data);
        console.log(data.followers);
    }
}
// console.log(xhr.readyState);
xhr.send();
