function odliczanie()
{
    var aktualna_data = new Date();
    var dzien = aktualna_data.getDate();
    var miesiac = aktualna_data.getMonth()+1;
    var rok = aktualna_data.getFullYear();    
    var godzina = aktualna_data.getHours();
    var minuta = aktualna_data.getMinutes();
    var sekunda = aktualna_data.getSeconds();

    if(godzina<10){
        godzina = "0"+godzina;
    }
    if(minuta<10){
        minuta = "0"+minuta;
    }
    if(sekunda<10){
        sekunda = "0"+sekunda;
    }

    document.getElementById("zegar").innerHTML = "|" + godzina + ":" + minuta + ":" + sekunda;

    setTimeout("odliczanie()", 1000);
}