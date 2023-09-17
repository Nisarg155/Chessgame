
function draw(array)
{
    array.forEach(element => {
        let div = document.getElementById(element);
        div.classList.add('highlight');
    });
}

function undraw(array)
{
    array.forEach(element => {
        let li = document.getElementById(element);
        li.classList.remove('highlight');
    });
}


function check(id)
{
    for(let i = -1;i<=1;i++)
    {
        for(let j = -1 ;j<=1;j++)
        {
            let delr = i + parseInt(id[0]);
            let delc = j + parseInt(id[1]);

            if(delr>=0 && delr<=7 && delc>=0 && delc<=7)
            {
                let div = document.getElementById('' + delr + delc);
                if(div.classList.contains('highlight'))
                {
                    return true;
                }
            }
        }
    }

    return false;
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

    let row = parseInt(id[0]);
    let col = parseInt(id[1]);

    while(row>=0 && col<=7 && row<7 && col>0)
    {
        col--;
        row++;
        bottom_left.push('' + row + col);
    }

    row = parseInt(id[0]);
    col = parseInt(id[1]);

    while(row>=0 && col>=0 && row<7 && col<7) {
        row++;
        col++;
        bottom_right.push('' + row + col);
    }

    row = parseInt(id[0]);
    col = parseInt(id[1]);

    while(row>0 && col<7 && row<=7 && col>=0)
    {
        col++;
        row--;
        top_right.push('' + row + col);
    }

    if(check(id))
    {
        undraw(top_left);
        undraw(top_right);
        undraw(bottom_right);
        undraw(bottom_left);
    }
    else{
    draw(top_left);
    draw(top_right);
    draw(bottom_right);
    draw(bottom_left);
    }
}

function visl_rook(id) {
    let front = [];
    let back = [];
    let right = [];
    let left = [];

    let row=parseInt(id[0]); 
    let col=parseInt(id[1]); 

    while(row>0 && row<=7 && col>=0 && col<=7)
    {
        row--;
        front.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    while(row>=0 && row<7 && col>=0 && col<=7)
    {
        row++;
        back.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    while(row>=0 && row<=7 && col>0 && col<=7)
    {
        col--;
        left.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    while(row>=0 && row<=7 && col>=0 && col<7)
    {
        col++;
        right.push('' + row + col);
    }

    draw(right);
    draw(left);
    draw(back);
    draw(front);
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

    let Brook1 = document.getElementById('Brook1');
    let Brook2 = document.getElementById('Brook2');
    let Wrook1 = document.getElementById('Wrook1');
    let Wrook2 = document.getElementById('Wrook2');
    
    Brook1.parentNode.addEventListener('click',()=>{
        visl_rook(Brook1.parentElement.id);
    })
    Brook2.parentNode.addEventListener('click',()=>{
        visl_rook(Brook2.parentElement.id);
    })
    Wrook1.parentNode.addEventListener('click',()=>{
        visl_rook(Wrook1.parentElement.id);
    })
    Wrook2.parentNode.addEventListener('click',()=>{
        visl_rook(Wrook2.parentElement.id);
    })

});