if (!localStorage.uid) {
    window.location.href = "signup.html";
}
document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("uid");
    window.location.href="index.html"
})
const database = firebase.database().ref();
database.on("child_added", addItem);

const shopping_list = document.getElementById("shopping_l");

function addItem(localStorage) {
    const row = localStorage.val();
    const source_val = row.source;
    const message_val = row.message;

    const post_frame = document.createElement("div");
    const image_container = document.createElement("div");
    const post_image = document.createElemenet("img");
    const text_container = document.createElement("div");

    post_frame.className = "post";
    post_image.src = source_val;
    image_container.src = source_val;
    text_container.innerHTML = message_val;

    shopping_list.appendChild(post_frame);
    post_frame.appendChild(post_image);
    post_frame.appendChild(text_container);
}

console.log("Cheack your items");
