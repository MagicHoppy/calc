let numbers=[];
let znak;
function inputNumber(number){
    document.getElementById("results").innerHTML +=number;
}
function inputButton(z){
    document.getElementById("results").innerHTML +=z;
    znak = z;
}
function calculate(){
    let input = document.getElementById("results").textContent;
    let result;
    input = input.split(znak);
    console.log(input);
    input[0] = Number(input[0]);
    input[1] = Number(input[1]);
    console.log(input);
    switch(znak){
        case '+':
            result = input[0]+input[1];
            document.getElementById("results").innerText=result;
            break;
        case '–':
            result = input[0]-input[1];
            document.getElementById("results").innerText=result;
            break;
        case '*':
            result = Math.round((input[0]*input[1])*100000000)/100000000;
            document.getElementById("results").innerText=result;
            break;
        case '/':
            result = Math.round((input[0]/input[1])*100000000)/100000000
            document.getElementById("results").innerText=result;
            break;
    }
    znak=undefined;
}
function clearCalc(){
    document.getElementById("results").innerText="";
}
function deleteCalc(){
    let inp = document.getElementById("results").innerText;
    let ret = inp.slice(0,-1);
    document.getElementById("results").innerText=ret;
}
function changeSign(){
    let inp = document.getElementById("results").innerText;
    console.log(inp)
    if(znak==undefined){
        inp=inp*-1;
        document.getElementById("results").innerText=inp;
    }
    else{
        inp=inp.split(znak);
        if(inp[1]==""){
            inp[0]=inp[0]*-1;
            document.getElementById("results").innerText=inp[0]+znak;
        }
        else{
            inp[1]=inp[1]*-1;
            document.getElementById("results").innerText=inp[0]+znak+inp[1];
        }
    }
}