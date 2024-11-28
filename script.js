function validateForm(e){
  e.preventDefault()
  let accountBalance = document.getElementById('accountBalance').value
  let loanAmount = document.getElementById('loanAmount').value
  let lastDepo = document.getElementById('lastDepo').value
  let lastColl = document.getElementById('lastColl').value
  let loanRep = document.getElementById('loanRep').value
  let accType = document.getElementById('accType').value
  let acctype = accType.toLowerCase()

  



  let accB = parseInt(accountBalance)
  let loanA = parseInt(loanAmount)
  let lDepo = parseInt(lastDepo)

  let accountBalance_err = document.getElementById('accountBalance_err')
  let loanAmount_err = document.getElementById('loanAmount_err')
  let lastDepo_err = document.getElementById('lastDepo_err')
  let lastColl_err = document.getElementById('lastColl_err')
  let loanRep_err = document.getElementById('loanRep_err')
  let accType_err = document.getElementById('accType_err')


  let loan = document.getElementById('loan')


  accountBalance_err.textContent = ''
  loanAmount_err.textContent = ''
  lastDepo_err.textContent = ''
  lastColl_err.textContent = ''
  loanRep_err.textContent = ''
  accType_err.textContent = ''
  
  let isValid = true
  let points = 0


  if(accountBalance === ''){
    // alert('Account balance is required')
    accountBalance_err.textContent = 'Account balance is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }
  
  if(loanAmount === ''){
    // alert('Loan Amount is required')
    loanAmount_err.textContent = 'Loan Amount is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }else if(accB > loanA){
    points += 10
    isValid = true
  }else if (accB <= loanA){
    points -= 10
    isValid = false
  }


  if(lastDepo === ''){
    // alert('Last deposit date is required')
    lastDepo_err.textContent = 'Last deposit date is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }else if(lDepo <= 31){
    points += 5
    isValid = true
  }else if(lDepo > 31){
    isValid = false
  }


  if(lastColl === ''){
    // alert('Last loan collection date is required')
    lastColl_err.textContent = 'Last loan collection date is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }else if(lastColl >= 6){
    points += 10
    isValid = true
  }else if(lastColl < 6){
    isValid = false
  }


  if(loanRep === ''){
    // alert('Loan repayment period is required')
    loanRep_err.textContent = 'Loan repayment period is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }else if(loanRep <= 6){
    points += 5
    isValid = true
  }else if(loanRep > 6){
    isValid = false
  }


  if(acctype === ''){
    // alert('Account type is required')
    accType_err.textContent = 'Account type is required'
    loan.textContent = 'Loan unavailable'
    isValid = false
  }else if(acctype === 'savings'){
    points += 5
    isValid = true
  }else if(acctype === 'current'){
    points += 10
    isValid = true
  }


  console.log(points)


 if(isValid = true && points >= 30 && accountBalance !== '' && loanAmount !== '' && lastDepo !== '' && lastColl !== '' && loanRep !== '' && acctype !== ''){
    loan.textContent = 'Loan awarded successfuly'
  }else{
    loan.textContent = 'Loan unavailable'
  }
}