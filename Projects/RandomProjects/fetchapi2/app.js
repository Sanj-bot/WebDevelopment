const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const factPara2 = document.querySelector("#fact2");
const getFacts = async () => {
  console.log("getting data.....");
  let response = await fetch(URL);
  console.log(response); // JSON FORMAT
  console.log("json response");
  let data = await response.json();
  console.log(data[0].text);
  factPara.innerText = data[0].text;
  factPara2.innerText = data[1].text;
};
