const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

function calculateAmount(){
    const bill = parseFloat(document.querySelector('#bill').value);
    const people = parseFloat(document.querySelector('#people').value);
    const parking = parseFloat(document.querySelector('#parking').value);
    

    if (bill ===''|| people==='' || people<1){
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Please enter your information"
          });
    }

    let totalSum = (bill+parking)/people;
    totalSum = totalSum.toFixed(2);
    console.log(totalSum);
    
    document.querySelector('.dividedBill').textContent=totalSum;
}