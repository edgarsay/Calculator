window.onload= function(){

    let prev = document.getElementById("prev");
    let curr = document.getElementById("curr");


}

function clr(){
    curr.innerHTML = 0;
}

function numbers( n ){
    let s = curr.innerHTML;
    if(curr.innerText.length > 10){
        return;
    } 
    if(curr.innerText == "0" || curr.innerText == "00"){
        if(n == 00)
            return;
        curr.innerHTML = n;
        return;
    }
    if(s.endsWith("+0") || s.endsWith("-0") || s.endsWith("*0") || s.endsWith("/0")){
        if(n == "00")
            return;
        curr.innerHTML = curr.innerHTML.slice(0,curr.innerHTML.length-1);
    }
    curr.innerText += n;
}

function operators( o ){
    let r = "";
    let part = [0, 0];
    let ops = ['+', '-', '*', '/'];
    let op = '';
    for(let i = 0;i < ops.length;++i){
        if(curr.innerHTML.indexOf(ops[i]) != -1){
            op = ops[i];
            part = curr.innerHTML.split(op);
            r = cal(part[0], op, part[1]);
            curr.innerHTML = r;
            break;
        }
    }
    curr.innerHTML += (o+"0");
}

function cal( part1, op, part2 ){
    if(op == '+'){
        return Number( Number(part1) + Number(part2) )
    }else if(op == '-'){
        return Number( Number(part1) - Number(part2) )
    }if(op == '*'){
        return Number( Number(part1) * Number(part2) )
    }else{
        return Number( Number(part1) / Number(part2) )
    }
}

function eq(){
    let s = curr.innerHTML;
    let r = "";
    let part = [0, 0];
    let ops = ['+', '-', '*', '/'];
    let op = '';
    for(let i = 0;i < ops.length;++i){
        if(curr.innerHTML.indexOf(ops[i]) != -1){
            op = ops[i];
            part = curr.innerHTML.split(op);
            r = cal(part[0], op, part[1]);
            break;
        }
    }
    prev.innerHTML = r;
    curr.innerHTML = r;
}