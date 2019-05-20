
// listen fir submit
document.getElementById('loan-form').addEventListener('submit',function() {   
  // Hide results
  
  
  
  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calcultateResults, 2000);
e.preventDefault();
}); 
// Calculate Results
function calcultateResults(e){
console.log('Calculating...');
// UI Vars
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const CalculatedInterest = parseFloat(interest.value) / 100/ 12;
const calculatedPayments = parseFloat(years.value) * 12;

//compute monthly Payement 
const x = Math.pow(1 + CalculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value =(monthly * calculatedPayments).toFixed(2);
totalInterest.value =((monthly * calculatedPayments)-principal).toFixed(2);

document.getElementById('result').style.display='block';
}else{
showError('please check your numbers');
}
}
// show error 
function showError(error){

  // create a div
  const errorDIv  = document.createElement('div');
  // Get Element 
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //Add class
  errorDIv.className = 'alert alert-danger';  
  // create text node and append to div
  errorDiv. apprendchild(document.createTextNode(error ));
  //insert error above heading 
  card.insertBefore(errorDIv,heading);
  // cllear error after 3 seconds 
  setTimeout (clearError,3000);
}
//clear error
function clearError(){
 document.queryseleector('.alert').remove();
};