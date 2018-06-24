function salary(pay, hours, days) {
    return pay*hours*days;
}

function taxedSalary (basicSalary, tax) {
    return (100-tax)* 0.01 * basicSalary;
}

function compute(){
    let pay = document.getElementById('hourly').value; //parseInt(prompt("Hourly rate"));
    let hours = document.getElementById('hours').value;//parseInt(prompt("Hours per day"));
    let days = document.getElementById('days').value;//parseInt(prompt("Days worked"));
   
    let tax = document.querySelector('input[name="radio"]:checked').value;
    let res = document.getElementById('result');
    res.innerHTML = taxedSalary (salary(pay, hours, days), tax);
    
        //let tax = //parseInt(prompt("Tax"));
        //alert(taxedSalary(salary(pay, hours, days), tax));

}