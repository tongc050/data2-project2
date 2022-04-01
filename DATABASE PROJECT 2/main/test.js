// const localStorageKey = "myData";
// const name = document.getElementById("name");
// const comment = document.getElementById("comment").value = getDataFromLocalStorage();
// const btn = document.getElementById("btn");
// const output2 = document.getElementById("output2");
// const output = document.getElementById("output1").innerHTML = getDataFromLocalStorage();

// function showInput() {
//     var user_input = document.getElementById("comment").value;
//     setDatatoLocalStorage(user_input);
//     document.getElementById('output').innerHTML = user_input;

// }

// function setDatatoLocalStorage(newData) {
//     localStorage.setItem(localStorageKey, newData);
// }

// function getDataFromLocalStorage() {
//     return localStorage.getItem(localStorageKey) || "";
// }

//ALSO WAS JUST TESTING OUT SOME STUFF HERE//
const name = document.getElementById("name");
const comment = document.getElementById("comment");
const title = document.getElementById("title");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const erase = document.getElementById("delete");

function showInput() {
    var user_input = document.getElementById("name").value;
    document.getElementById('title').innerHTML = user_input;

    var comment_input = document.getElementById("comment").value;
    document.getElementById("text").innerHTML = comment_input;
}

// function remove(el) {
//     var element = el;
//     element.remove();
// }


btn.addEventListener('click', function (e) {
    e.preventDefault();
    var T = document.getElementById("container");
    if (name.value == "" && comment.value == "") {
        T.hidden();
    } else {
        T.style.display = "block";
        showInput();
    }

})
