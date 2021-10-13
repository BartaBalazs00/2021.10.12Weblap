function general() {
    let szoveg = document.getElementById("szoveg").value;
    if(szoveg == ""){
        alert("nem lehet üres a szöveg!");
        return;
    }
    
    let li = document.createElement("li");
    li.setAttribute("class","list-group-item");
    let chechkbox = document.createElement("input");
    chechkbox.addEventListener("change", athuzas)
    chechkbox.setAttribute("type", "checkbox");
    let x = document.createElement("span");
    x.addEventListener("click",torol);
    x.style.marginLeft="200px";
    x.innerHTML = "X";
    li.appendChild(chechkbox);
    li.append(szoveg);
    li.appendChild(x);
    document.getElementById("lista").appendChild(li);
}
function athuzas(e) {
    if(e.target.checked){
        e.target.parentElement.style.textDecoration="line-through";
    }else{
        e.target.parentElement.style.textDecoration="none";
    }
}
function torol(e) {
    e.target.parentElement.remove();
}
function init() {
    document.getElementById("generalasGomb").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded",init);