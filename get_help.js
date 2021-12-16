var list= document.getElementById("name_medicines").value;
var price= document.getElementById("price_medicines").value;
localStorage.setItem("medicines", list);
localStorage.setItem("price", price);

function publish(){
    window.location="get_help2.html";
}