let ol = document.querySelector("#infi-list");

let list;
for(let i=1; i<=10; i++){
    list = document.createElement("li");
    list.innerText = "Item"+" "+i;
    list.className = "listt";
    ol.append(list);
}

let counter = 10; // Counter to keep track of the last list item number
ol.addEventListener("scroll", function() {
    if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight-5) {
        addTwo();
    }
});

function addTwo(){
    for(let i=0; i<2; i++){
        counter++;
        let newlist = document.createElement("li");
        newlist.innerText = "Item"+" "+counter;
        ol.append(newlist);
    }
}