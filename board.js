
function draw(array)
{
    array.forEach(element => {
        let div = document.getElementById(element);
        div.classList.add('highlight');
    });
}


function visl_biop(id) {
    let top_left = [];
    let top_right = [];
    let bottom_left = [];
    let bottom_right = [];

    let l = parseInt(id[0]);
    let r = parseInt(id[1]);

    while (l >0  && r >0 && l <= 7 && r <= 7) {
        l--;
        r--;
        top_left.push('' + l + r);
    }

    draw(top_left);
}

document.addEventListener('DOMContentLoaded', () => {
    
    let Bbishop1 = document.getElementById('Bbishop1');
    let Bbishop2 = document.getElementById('Bbishop2')
    let Wbishop1 = document.getElementById('Wbishop1')
    let Wbishop2 = document.getElementById('Wbishop2')

    Bbishop1.parentNode.addEventListener('click', ()=>{
        visl_biop(Bbishop1.parentElement.id);
    });
    Bbishop2.parentNode.addEventListener('click', ()=>{
        visl_biop(Bbishop2.parentElement.id);
    });
    Wbishop1.parentNode.addEventListener('click', ()=>{
        visl_biop(Wbishop1.parentElement.id);
    });
    Wbishop2.parentNode.addEventListener('click', ()=>{
        visl_biop(Wbishop2.parentElement.id);
    });




    
    

});