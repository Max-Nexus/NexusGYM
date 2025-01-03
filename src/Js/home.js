let count = 1;


document.getElementById('radio1').checked = true;

setInterval(() => {
    Carrosel();
}, 5000);

function Carrosel() {
    count++;
    const totalRadios = 2; 

    if (count > totalRadios) {
        count = 1;
    }

    document.getElementById(`radio${count}`).checked = true;
}