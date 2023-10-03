function move_to(id1,id2)
{
    let d1 = document.getElementById(id1);
    let d2 = document.getElementById(id2);
    let img = d1.querySelector('img');
    // visl_biop(id1);
    // d1.removeChild(img);
    let length = img.id.length;
    let p1 ;
    if( !isNaN(img.id[length - 1]) )
    {
        p1 = (img.id).slice(1,img.id.length - 1);
    }
    else{
        p1 = (img.id).slice(1);
    }
    switch(p1)
    {
        case 'bishop':
            visl_biop(id1);
            d1.removeChild(img);
            break;
        case 'rook':
            visl_rook(id1);
            d1.removeChild(img);
            break;
        case 'king':
            visl_king(id1);
            d1.removeChild(img);
            break;
        case 'queen':
            visl_queen(id1);
            d1.removeChild(img);
            break;
        case 'pawn':
            visl_pawn(id1,img.id[0]);
            d1.removeChild(img);
            break;
        case 'knight':
            visl_knight(id1);
            d1.removeChild(img);
            break;
    }
    let p2 = d2.querySelector('img');
    if(p2)
    {
        d2.onclick = null;
        d2.removeChild(p2);
    }
    d2.appendChild(img);
    d2.classList.remove('clicked');
    d1.onclick = null;
    d2.classList.remove('clicked');
    console.log(p1);
    switch(p1)
    {
        case 'bishop':
            d2.onclick = function() {visl_biop(id2);};
            break;
        case 'rook':
            d2.onclick = function() {visl_rook(id2);};
            break;
        case 'king':
            d2.onclick = null;
            d2.onclick = function() {visl_king(id2);};
            break;
        case 'queen':
            d2.onclick = null;
            d2.onclick = function() {visl_queen(id2);};
            break;
        case 'pawn':
            d2.onclick = function() {visl_pawn(id2,img.id[0]);};
            break;
        case 'knight':
            d2.onclick = function() {visl_knight(id2);};
            break;
    }
}

function modify(cross,idm,id)
{
    let clr=idm[0];
    let ans=[];
    cross.forEach(element=>{
        let div=document.getElementById(element);
        let cid=div.querySelector('img');
        if(cid)
        {
            let op=cid.id[0];
            if(clr=='W' && op=='B')
                ans.push(element);
            else if(clr=='B' && op=='W')
                ans.push(element);
        }
    });
    return ans;
}

function draw(array,idm,id)
{
    let clr = idm[0];
    let name=idm.slice(1,idm.length-1);
    let flag = false;
    array.forEach(element => {
        let div = document.getElementById(element);
        let cid = div.querySelector('img');
        if(cid)
        {
            let cclr = (cid.id)[0];
            if(cclr == clr)
            {
                flag = true;
            }
            else if(clr != cclr && flag == false)  {
                if(name!='pawn'){
                    flag = true;
                    div.style.backgroundColor = 'rgba(255, 0, 0, 0.85)';
                    div.onclick  = function() {move_to(id,element);};
                }
                else if(id[1]!=(div.id)[1])
                {
                    div.style.backgroundColor = 'rgba(255, 0, 0, 0.85)';
                    div.onclick  = function() {move_to(id,element);};
                }
                
            }
            
        }
        else if(flag == false)  {
            div.style.backgroundColor = 'rgba(0, 128, 0, 0.90)'
            div.onclick  = function() {move_to(id,element);};
        }
    });
}

function draw_s(array,idm,id)
{
    let clr = idm[0];
    let flag = false;
    array.forEach(element => {
        let div = document.getElementById(element);
        let cid = div.querySelector('img');
        if(cid)
        {
            let cclr = (cid.id)[0];
            if(cclr != clr)
            {
                div.style.backgroundColor = 'rgba(255, 0, 0, 0.85)';
                div.onclick  = function() {move_to(id,element);};
            }
        }
        else if(flag == false)  {
            div.style.backgroundColor = 'rgba(0, 128, 0, 0.90)'
            div.onclick  = function() {move_to(id,element);};
        }
    });
}

function undraw(array)
{
    array.forEach(element => {
        let li = document.getElementById(element);
        let row = parseInt(element[0]);
        let col = parseInt(element[1]);
        if(li.querySelector('img') == null)
        li.onclick = null;
        else{
            let piece = (li.querySelector('img').id);
            let name = piece.slice(1,piece.length - 1);
            switch(name)
            {
                case 'bishop':
                    li.onclick = function() {visl_biop(element);};
                    break;
                case 'rook':
                    li.onclick = function() {visl_rook(element);};
                    break;
                case 'king':
                    li.onclick = function() {visl_king(element);};
                    break;
                case 'queen':
                    li.onclick = function() {visl_queen(element);};
                    break;
                case 'pawn':
                    li.onclick = function() {visl_pawn(element,piece[0]);};
                    break;
                case 'knight':
                    li.onclick = function() {visl_knight(element);};
                    break;
            }
        }
        if(col %2 == 0)
        {
            if(row%2 == 0) li.style.backgroundColor = '#7c330c';
            else li.style.backgroundColor = '#ddb180';
        }
        else{
            if(row%2 == 0) li.style.backgroundColor = '#ddb180';
            else li.style.backgroundColor = '#7c330c';
        }
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

    let ele = document.getElementById(id);
    let idm = ele.querySelector('img').id;

    if(ele.classList.contains('clicked'))
    {
        ele.classList.remove('clicked');
        undraw(top_left);
        undraw(top_right);
        undraw(bottom_right);
        undraw(bottom_left);
    }
    else{
        ele.classList.add('clicked');
    draw(top_left,idm,id);
    draw(top_right,idm,id);
    draw(bottom_right,idm,id);
    draw(bottom_left,idm,id);
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

    let div=document.getElementById(id);
    let idm = div.querySelector('img').id;
    if(div.classList.contains('clicked'))
    {
        undraw(front);
        undraw(left);
        undraw(right);
        undraw(back);
        div.classList.remove('clicked');
    }
    else
    {
        draw(front,idm,id);
        draw(back,idm,id);
        draw(right,idm,id);
        draw(left,idm,id);
        div.classList.add('clicked');
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
    let ele = document.getElementById(id);
    let idm=ele.querySelector('img').id;
    if(ele.classList.contains('clicked'))
    {
        ele.classList.remove('clicked');
        undraw(movement);
    }
    else
    {
        ele.classList.add('clicked');
        draw_s(movement,idm,id);
    }
}

function visl_queen(id){
    // visl_biop(id);
    // visl_rook(id);
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
    let front = [];
    let back = [];
    let right = [];
    let left = [];

    row=parseInt(id[0]); 
    col=parseInt(id[1]); 

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

    let div=document.getElementById(id);
    let idm = div.querySelector('img').id;
    if(div.classList.contains('clicked'))
    {
        div.classList.remove('clicked');
        undraw(front),undraw(back),undraw(right),undraw(left);
        undraw(bottom_left),undraw(bottom_right),undraw(top_left),undraw(top_right);
    }
    else
    {
        div.classList.add('clicked');
        draw(front,idm,id),
        draw(back,idm,id),draw(right,idm,id),draw(left,idm,id);
        draw(bottom_left,idm,id),draw(bottom_right,idm,id),draw(top_left,idm,id),draw(top_right,idm,id);
    }
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
    row=parseInt(id[0]);
    let cross=[];
    if(color=='B') row++;
    else row--;
    if(col>0)
    {
        col--;
        cross.push('' + row + col);
        col++;
    }
    if(col<7)
    {
        col++;
        cross.push('' + row + col);
        col--;
    }

    let div=document.getElementById(id);
    let idm = div.querySelector('img').id;

    cross=modify(cross,idm,id);

    if(div.classList.contains('clicked'))
    {
        div.classList.remove('clicked');
        undraw(movement);
        undraw(cross);
    }
    else
    {
        div.classList.add('clicked')
        draw(movement,idm,id);
        draw(cross,idm,id);
        console.log(movement);
        console.log(cross);
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
    let div=document.getElementById(id);
    let idm = div.querySelector('img').id;
    if(div.classList.contains('clicked'))
    {
        div.classList.remove('clicked');
        undraw(array);
    }
    else
    {
        div.classList.add('clicked');
        draw_s(array,idm,id);
    }
}

    

document.addEventListener('DOMContentLoaded', () => {

    let Bknight1=document.getElementById('Bknight1');
    let Bknight2=document.getElementById('Bknight2');
    let Wknight1=document.getElementById('Wknight1');
    let Wknight2=document.getElementById('Wknight2');

    Bknight1.parentNode.onclick = function() {visl_knight(Bknight1.parentElement.id);};
    Bknight2.parentNode.onclick = function() {visl_knight(Bknight2.parentElement.id);};

    Wknight1.parentNode.onclick = function() {visl_knight(Wknight1.parentElement.id);};
    Wknight2.parentNode.onclick = function() {visl_knight(Wknight2.parentElement.id);};

    let Bbishop1 = document.getElementById('Bbishop1');
    let Bbishop2 = document.getElementById('Bbishop2')
    let Wbishop1 = document.getElementById('Wbishop1')
    let Wbishop2 = document.getElementById('Wbishop2')

    Bbishop1.parentNode.onclick = function() {visl_biop(Bbishop1.parentElement.id);};
    Bbishop2.parentNode.onclick = function() {visl_biop(Bbishop2.parentElement.id);};
    Wbishop1.parentNode.onclick = function() {visl_biop(Wbishop1.parentElement.id);};
    Wbishop2.parentNode.onclick = function() {visl_biop(Wbishop2.parentElement.id);};

    let Brook1 = document.getElementById('Brook1');
    let Brook2 = document.getElementById('Brook2');
    let Wrook1 = document.getElementById('Wrook1');
    let Wrook2 = document.getElementById('Wrook2');
    
    Brook1.parentNode.onclick = function() {visl_rook(Brook1.parentElement.id);};
    Brook2.parentNode.onclick = function() {visl_rook(Brook2.parentElement.id);};
    Wrook1.parentNode.onclick = function() {visl_rook(Wrook1.parentElement.id);};
    Wrook2.parentNode.onclick = function() {visl_rook(Wrook2.parentElement.id);};

    let Bking = document.getElementById('Bking');
    let Wking = document.getElementById('Wking');

    Bking.parentNode.onclick = function() {visl_king(Bking.parentElement.id);};
    Wking.parentNode.onclick = function() {visl_king(Wking.parentElement.id);};

    let Bqueen = document.getElementById('Bqueen');
    let Wqueen = document.getElementById('Wqueen');

    Bqueen.parentNode.onclick = function() {visl_queen(Bqueen.parentElement.id);};
    Wqueen.parentNode.onclick = function() {visl_queen(Wqueen.parentElement.id);};

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

    Bpawn1.parentNode.onclick = function() {visl_pawn(Bpawn1.parentElement.id,'B');};
    Bpawn2.parentNode.onclick = function() {visl_pawn(Bpawn2.parentElement.id,'B');};
    Bpawn3.parentNode.onclick = function() {visl_pawn(Bpawn3.parentElement.id,'B');};
    Bpawn4.parentNode.onclick = function() {visl_pawn(Bpawn4.parentElement.id,'B');};
    Bpawn5.parentNode.onclick = function() {visl_pawn(Bpawn5.parentElement.id,'B');};
    Bpawn6.parentNode.onclick = function() {visl_pawn(Bpawn6.parentElement.id,'B');};
    Bpawn7.parentNode.onclick = function() {visl_pawn(Bpawn7.parentElement.id,'B');};
    Bpawn8.parentNode.onclick = function() {visl_pawn(Bpawn8.parentElement.id,'B');};

    Wpawn1.parentNode.onclick = function() {visl_pawn(Wpawn1.parentElement.id,'W');};
    Wpawn2.parentNode.onclick = function() {visl_pawn(Wpawn2.parentElement.id,'W');};
    Wpawn3.parentNode.onclick = function() {visl_pawn(Wpawn3.parentElement.id,'W');};
    Wpawn4.parentNode.onclick = function() {visl_pawn(Wpawn4.parentElement.id,'W');};
    Wpawn5.parentNode.onclick = function() {visl_pawn(Wpawn5.parentElement.id,'W');};
    Wpawn6.parentNode.onclick = function() {visl_pawn(Wpawn6.parentElement.id,'W');};
    Wpawn7.parentNode.onclick = function() {visl_pawn(Wpawn7.parentElement.id,'W');};
    Wpawn8.parentNode.onclick = function() {visl_pawn(Wpawn8.parentElement.id,'W');};

});