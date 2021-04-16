const brojPregleda = document.getElementById("brojPregleda");
const ukupnaCena = document.getElementById("ukupnaCena");

const slider1 = document.getElementById("myRange");
const checkbox = document.getElementById("checkbox");

const dugme = document.getElementById("dugme");


/*Event za pocetnu cenu i preglede*/
window.addEventListener("load", ubaciPregledeiCenu);

function ubaciPregledeiCenu(){
    brojPregleda.innerHTML = slider1.value;
    odgovarajucaCena();
}

/*funkcija za pocetnu cenu*/
function odgovarajucaCena(){ 
    if(checkbox.checked){
        if(slider1.value < 10000){
            ukupnaCena.innerHTML = 0;
        }
        else if (10000 <= slider1.value && slider1.value < 50000) {
            ukupnaCena.innerHTML = 8*0.75;
        }
        else if (50000 <= slider1.value && slider1.value < 100000) {
            ukupnaCena.innerHTML = 12*0.75;
        }
        else if (100000 <= slider1.value && slider1.value < 500000) {
         ukupnaCena.innerHTML = 16*0.75;
        }
        else if (500000 <= slider1.value && slider1.value < 1000000) {
            ukupnaCena.innerHTML = 26*0.75;
        }
        else if (slider1.value >= 1000000) {
            ukupnaCena.innerHTML = 36*0.75;
        }
    } 
    else {
        if(slider1.value < 10000){
            ukupnaCena.innerHTML = 0;
        }
        else if (10000 <= slider1.value && slider1.value < 50000) {
            ukupnaCena.innerHTML = 8;
        }
        else if (50000 <= slider1.value && slider1.value < 100000) {
            ukupnaCena.innerHTML = 12;
        }
        else if (100000 <= slider1.value && slider1.value < 500000) {
            ukupnaCena.innerHTML = 16;
        }
        else if (500000 <= slider1.value && slider1.value < 1000000) {
            ukupnaCena.innerHTML = 26;
        }
        else if (slider1.value >= 1000000) {
            ukupnaCena.innerHTML = 36;
        }
    }
}


/*Event za traku*/
slider1.addEventListener("input", azuriraj);

function azuriraj(){
    brojPregleda.innerHTML = slider1.value;
    boja();
    odgovarajucaCena();
}

/*Funkcija za menjanje boje na slajderu*/
function boja (){
    const x = (slider1.value/1000000)*100;
    console.log(x);
    slider1.style.background = `linear-gradient(90deg, #00ccff ${x}%, #d6d6c2 ${x}%)`;
}


/*Event za cekiranje popusta.*/

checkbox.addEventListener("change", cekirano);
    
function cekirano(){
    odgovarajucaCena();
}


