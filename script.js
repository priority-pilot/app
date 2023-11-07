const podawanie_czynnosci = document.getElementById("pole");
const waznePilne = document.getElementById("wazne-pilne");
const wazneNiepilne = document.getElementById("wazne-niepilne");
const niewaznePilne = document.getElementById("niewazne-pilne");
const niewazneNiepilne = document.getElementById("niewazne-niepilne");
let checkedSound = new Audio('zakonczono.mp3');
let deleteSound = new Audio('usunieto.mp3');
function addTask() {
    var waznosc = sprawdzWaznosc();
    var pilnosc = sprawdzPilnosc();
    var wprowadzono = "true";
    if(podawanie_czynnosci.value === ''){
        alert("Musisz wprowadzić czynność!");
        wprowadzono = "false";
    }else if(waznosc === ""){
        alert("Musisz określić ważność zadania!");
        wprowadzono = "false";
    }else if(pilnosc === ""){
        alert("Wskaż pilność! ");
        wprowadzono = "false";
    }
    if (!(podawanie_czynnosci.value === '') && (waznosc === "Ważne") && (pilnosc === "Pilne")){
        let li = document.createElement("li");
        li.innerHTML = podawanie_czynnosci.value;
        waznePilne.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }else if(!(podawanie_czynnosci.value === '') && (waznosc === "Ważne") && (pilnosc === "Niepilne")){
        let li = document.createElement("li");
        li.innerHTML = podawanie_czynnosci.value;
        wazneNiepilne.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    if (!(podawanie_czynnosci.value === '') && (waznosc === "Nieważne") && (pilnosc === "Pilne")){
        let li = document.createElement("li");
        li.innerHTML = podawanie_czynnosci.value;
        niewaznePilne.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }else if(!(podawanie_czynnosci.value === '') && (waznosc === "Nieważne") && (pilnosc === "Niepilne")){
        let li = document.createElement("li");
        li.innerHTML = podawanie_czynnosci.value;
        niewazneNiepilne.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    if(wprowadzono === "false"){
    }else {
    podawanie_czynnosci.value = "";

        let radio1 = document.getElementById("waznosc");
        let radio2 = document.getElementById("niewaznosc");
        let radio3 = document.getElementById("pilnosc");
        let radio4 = document.getElementById("niepilnosc");
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
    }

    saveDataWP();
    saveDataWNP();
    saveDataNWP();
    saveDataNWNP();
}

function sprawdzWaznosc(){
    var wybor = document.getElementsByName("stopien_waznosci");
    var dlugosc = wybor.length;
    zwrot = "";
    for(i=0;i<dlugosc;i++){
        if(wybor[i].checked){
            zwrot = wybor[i].value;
        }
    }
    return zwrot;
}
function sprawdzPilnosc(){
    var wybor = document.getElementsByName("stopien_pilnosci");
    var dlugosc = wybor.length;
    zwrot = "";
    for(i=0;i<dlugosc;i++){
        if(wybor[i].checked){
            zwrot = wybor[i].value;
        }
    }
    return zwrot;
}


waznePilne.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        checkedSound.play();
        saveDataWP();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        deleteSound.play();
        saveDataWP();
    }
}, false);

wazneNiepilne.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        checkedSound.play();
        saveDataWNP();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        deleteSound.play();
        saveDataWNP();
    }
}, false);

niewaznePilne.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        checkedSound.play();
        saveDataNWP();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        deleteSound.play();
        saveDataNWP();
    }
}, false);

niewazneNiepilne.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        checkedSound.play();
        saveDataNWNP();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        deleteSound.play();
        saveDataNWNP();
    }
}, false);


function saveDataWP(){
    localStorage.setItem("dataWP", waznePilne.innerHTML);
}
function saveDataWNP(){
    localStorage.setItem("dataWNP", wazneNiepilne.innerHTML);
}
function saveDataNWP(){
    localStorage.setItem("dataNWP", niewaznePilne.innerHTML);
}
function saveDataNWNP(){
    localStorage.setItem("dataNWNP", niewazneNiepilne.innerHTML);
}

function showTaskWP(){
    waznePilne.innerHTML = localStorage.getItem("dataWP");
}
function showTaskWNP(){
    wazneNiepilne.innerHTML = localStorage.getItem("dataWNP");
}
function showTaskNWP(){
    niewaznePilne.innerHTML = localStorage.getItem("dataNWP");
}
function showTaskNWNP(){
    niewazneNiepilne.innerHTML = localStorage.getItem("dataNWNP");
}

showTaskWP();
showTaskWNP();
showTaskNWP();
showTaskNWNP();

