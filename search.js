const apiResultsDiv = document.getElementById("results");
const search = document.getElementById("search-button");
const apiUrl = "https://smartsavings-backend.vs-code-cloud.repl.co/proxy?query=";

let query = document.getElementById("item-name");
search.addEventListener("click", function() {
  console.log('query', query, query?.value)
  fetch(apiUrl+query.value)
    .then(response => response.json())
    .then(data => {
        for (let i=0; i<data.length; i++){
            let result = `
            <div class="result-item">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <p>${item.price}</p>
        </div>
        `
        apiResultsDiv.innerHTML+=result
        }})
})
