const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//   console.log("getting data.....");
//   let response = await fetch(URL);
//   console.log(response); // JSON FORMAT
//   let data = await response.json();
//   factPara.innerText = data[0].text;
// };
// promise training
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[0].text;
    });
}
btn.addEventListener("click", getFacts);
