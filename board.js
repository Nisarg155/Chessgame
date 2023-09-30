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
    //! condition for all other pieces
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

function visl_biop(id,flag=0) {
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

    if(check(id) && flag==0)
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

function visl_rook(id,flag=0) {
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

    if(check(id) && flag==0)
    {
        undraw(front);
        undraw(back);
        undraw(right);
        undraw(left);
    }
    else{
    draw(right);
    draw(left);
    draw(back);
    draw(front);
    }
}

function visl_king(id)
{
    let row=parseInt(id[0]);
    let col=parseInt(id[1]);

    let movement = [];
    
    if(row-1>=0 && col-1>=0)
    {
        row--;
        col--;
        movement.push('' +  row + col);
    }   

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(col-1>=0)
    {
        col--;
        movement.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(row+1<=7 && col-1>=0)
    {
        row++;
        col--;
        movement.push('' + row + col);    
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(row-1>=0)
    {
        row--;
        movement.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(row+1<=7)
    {
        row++;
        movement.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(row-1>=0 && col+1<=7)
    {
        row--;
        col++;
        movement.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(col+1<=7)
    {
        col++;
        movement.push('' + row + col);
    }

    row=parseInt(id[0]);
    col=parseInt(id[1]);

    if(col+1<=7 && row+1<=7)
    {
        row++;
        col++;
        movement.push('' + row + col);
    }

    if(check(id))
    {
        undraw(movement);
    }
    else
    {
        draw(movement);
    }
}

function visl_queen(id,flag){
    visl_biop(id,flag);
    visl_rook(id,flag);
}

function visl_pawn(id,color)
{
    let movement = [];
    
    let row = parseInt(id[0]);
    let col = parseInt(id[1]);
    if(row==1 && color=='B')
    {
        row++;
        movement.push('' + row + col);
        row++;
        movement.push('' + row + col);
    }
    else if(row==6 && color=='W')
    {
        row--;
        movement.push('' + row + col);
        row--;
        movement.push('' + row + col);
    }
    else if(color=='B' && row+1<=7)
    {
        row++;
        movement.push('' + row + col);
    }
    else
    {
        if(row-1>=0)
        {
            row--;
            movement.push('' + row + col);
        }
    }

    if(check(id))
    {
        undraw(movement);
    }
    else
    {
        draw(movement);
    }
}

function visl_knight(id) {
    let delrc = [[-1,-2],[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2]];
    let array = [];    
    delrc.forEach(element =>{
        let [l,r] = element;
        let delr = l + parseInt(id[0]);
        let delc = r + parseInt(id[1]);

        if(delr>= 0 && delc >= 0 && delr <= 7 && delc <= 7)
        {
            array.push('' + delr + delc);
        }
    });
    if(check_knight(id,array))
    {
        undraw(array);
    }
    else
    {
        draw(array);
    }
}

    

document.addEventListener('DOMContentLoaded', () => {

    let Bknight1=document.getElementById('Bknight1');
    let Bknight2=document.getElementById('Bknight2');
    let Wknight1=document.getElementById('Wknight1');
    let Wknight2=document.getElementById('Wknight2');

    Bknight1.parentNode.addEventListener('click',()=>{
        visl_knight(Bknight1.parentElement.id);
    })
    
    Bknight2.parentNode.addEventListener('click',()=>{
        visl_knight(Bknight2.parentElement.id);
    })

    Wknight1.parentNode.addEventListener('click',()=>{
        visl_knight(Wknight1.parentElement.id);
    })

    Wknight2.parentNode.addEventListener('click',()=>{
        visl_knight(Wknight2.parentElement.id);
    })

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

    let Bking = document.getElementById('Bking');
    let Wking = document.getElementById('Wking');

    Bking.parentNode.addEventListener('click' ,()=>{
        visl_king(Bking.parentElement.id);
    })

    Wking.parentNode.addEventListener('click', ()=>{
        visl_king(Wking.parentElement.id);
    })

    let Bqueen = document.getElementById('Bqueen');
    let Wqueen = document.getElementById('Wqueen');
    
    let flag1=1;
    Bqueen.parentNode.addEventListener('click', ()=>{
        if(flag1>0)
            visl_queen(Bqueen.parentNode.id,flag1--);
        else
            visl_queen(Bqueen.parentNode.id,flag1++);
    })

    let flag2=1;
    Wqueen.parentNode.addEventListener('click',()=>{
        if(flag2>0)
            visl_queen(Wqueen.parentNode.id,flag2--);
        else
            visl_queen(Wqueen.parentNode.id,flag2++);
    })

    let Bpawn1=document.getElementById('Bpawn1');
    let Bpawn2=document.getElementById('Bpawn2');
    let Bpawn3=document.getElementById('Bpawn3');
    let Bpawn4=document.getElementById('Bpawn4');
    let Bpawn5=document.getElementById('Bpawn5');
    let Bpawn6=document.getElementById('Bpawn6');
    let Bpawn7=document.getElementById('Bpawn7');
    let Bpawn8=document.getElementById('Bpawn8');

    let Wpawn1=document.getElementById('Wpawn1');
    let Wpawn2=document.getElementById('Wpawn2');
    let Wpawn3=document.getElementById('Wpawn3');
    let Wpawn4=document.getElementById('Wpawn4');
    let Wpawn5=document.getElementById('Wpawn5');
    let Wpawn6=document.getElementById('Wpawn6');
    let Wpawn7=document.getElementById('Wpawn7');
    let Wpawn8=document.getElementById('Wpawn8');

    Bpawn1.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn1.parentNode.id,'B');
    })
    Bpawn2.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn2.parentNode.id,'B');
    })
    Bpawn3.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn3.parentNode.id,'B');
    })
    Bpawn4.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn4.parentNode.id,'B');
    })
    Bpawn5.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn5.parentNode.id,'B');
    })
    Bpawn6.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn6.parentNode.id,'B');
    })
    Bpawn7.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn7.parentNode.id,'B');
    })
    Bpawn8.parentNode.addEventListener('click',()=>{
        visl_pawn(Bpawn8.parentNode.id,'B');
    })

    Wpawn1.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn1.parentNode.id,'W');
    })
    Wpawn2.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn2.parentNode.id,'W');
    })
    Wpawn3.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn3.parentNode.id,'W');
    })
    Wpawn4.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn4.parentNode.id,'W');
    })
    Wpawn5.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn5.parentNode.id,'W');
    })
    Wpawn6.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn6.parentNode.id,'W');
    })
    Wpawn7.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn7.parentNode.id,'W');
    })
    Wpawn8.parentNode.addEventListener('click',()=>{
        visl_pawn(Wpawn8.parentNode.id,'W');
    })

});