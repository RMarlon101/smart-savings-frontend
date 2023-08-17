const apiResultsDiv = document.getElementById("results");
const search = document.getElementById("search-button");
const apiUrl = "https://smartsavings-backend.vs-code-cloud.repl.co/proxy?query=";
if (!localStorage.uid) {
  window.location.href = "signup.html";
}
document.getElementById("logout").addEventListener("click", function() {
  localStorage.clear();
  window.location.href="index.html"
})
function AddToCart(el, item) {
  console.log('moving owrk', el, item)
  let curr = localStorage.getItem('currCart')
  localStorage.setItem('currCart', curr.push(dict))
}
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
              <form action="${item.link}" target="_blank">
                <button value="submit" class="btn btn-primary shadow">Buy It!</button>
              </form>
                <button id="form${i}"class="btn btn-primary shadow" style="margin-bottom: 20px">Add to Cart</button>
          </div>
        `
        apiResultsDiv.innerHTML+=result
        let element = document.getElementById(`form${i}`)
        console.log('get el', element)
        element.addEventListener("click", function() {
          console.log('war clikced')
          AddToCart(data[i])
          el.innerHTML = "Added!"
        })
        }
        }}).then(x => loading=false)
})
