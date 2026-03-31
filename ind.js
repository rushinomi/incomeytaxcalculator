const income= document.getElementById("number");
const form= document.querySelector("form");
const result= document.getElementById("result");    
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const incomeValue= parseFloat(income.value);
    let tax=0;
    if(incomeValue<=250000){
        tax=0;
    }
    else if(incomeValue>250000 && incomeValue<=500000){
        tax=0.05*(incomeValue-250000);
    }
    else if(incomeValue>500000 && incomeValue<=750000){
        tax=0.1*(incomeValue-500000)+12500;
    }
    else if(incomeValue>750000 && incomeValue<=1000000){
        tax=0.15*(incomeValue-750000)+37500;
    }
    else if(incomeValue>1000000 && incomeValue<=1250000){
        tax=0.2*(incomeValue-1000000)+75000;
    }
    else if(incomeValue>1250000 && incomeValue<=1500000){
        tax=0.25*(incomeValue-1250000)+125000;
    }
    else{
        tax=0.3*(incomeValue-1500000)+187500;
    }
    result.textContent=`Total Tax: ₹${tax.toFixed(5)}`;})