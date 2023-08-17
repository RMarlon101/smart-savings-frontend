const apiResultsDiv = document.getElementById("results");
const search = document.getElementById("search-button");
const apiUrl = "https://smartsavings-backend.vs-code-cloud.repl.co/proxy?query=";
if (!localStorage.uid) {
  window.location.href = "signup.html";
}
document.getElementById("logout").addEventListener("click", function() {
  localStorage.removeItem("uid");
  window.location.href="index.html"
})
var loading = false;
let query = document.getElementById("item-name");
search.addEventListener("click", function() {
  if (loading==true) {return};
  apiResultsDiv.innerHTML = '';
  loading=true
  fetch(apiUrl+query.value)
    .then(response => response.json())
    .then(data => {
        for (let i=0; i<data.length; i++){
          let item = data[i]
          if (item.price) {
          let result = `
          <div class="C_item">
              <img style='margin: auto' src="${item.image}" alt="shown items">
              <p>${item.title}</p>
              <p>Price: $${item.price}</p>
              <p>${item.stars}</p>
              <p>Where to find:<a href="https://www.amazon.com/365-Whole-Foods-Market-Frozen/dp/B0812LP6PJ/ref=sr_1_5_f3_0o_wf?crid=37IABRUL1I734&keywords=pizza&qid=1692213762&sprefix=pizza%2Caps%2C124&sr=8-5">here</a></p>
          </div>
        `
        apiResultsDiv.innerHTML+=result
          }
        }}).then(x => loading=false)
})
