const inputPeople = document.getElementById('inputPeople')
const inputCustom = document.getElementById('inputCustom')
const error = document.getElementById('error')
const zero = /^0+$/

const labelTipAmount = document.getElementById('labelTipAmount')
const labelTotal = document.getElementById('labelTotal')  

const resetButton = document.getElementById('resetButton')
const form = document.getElementById('form')

inputPeople.addEventListener('input', (e) => {  
  if(zero.test(e.target.value)) {    
    showErrorZero()
  } else {
    hideErrorZero()  

    let valueBill = document.getElementById('inputBill').value
    let numberPeople = e.target.value    
    let checked = document.querySelector('.custom-radio:checked')    
    let tipSelected

    if(checked == null) {
      tipSelected = inputCustom.value      
    } else {
      tipSelected = checked.value
    }

    calculateTip(valueBill, tipSelected, numberPeople)
    showResetButton()
  }
})

inputCustom.addEventListener('change', (e) => {
  e.target.value = e.target.value + '%'  
  e.target.classList.add('text-[var(--Very-dark-cyan)]')
})

function calculateTip(valueBill, tipSelected, numberPeople) {    
  valueBill = parseFloat(valueBill)
  tipSelected = parseFloat(tipSelected)
  numberPeople = parseFloat(numberPeople)    

  const tip = (tipSelected / 100) * valueBill
  const total = valueBill + tip                

  let tipAmountPerson = tip / numberPeople
  const totalPerson = total / numberPeople
  
  tipAmountPerson = Math.floor(tipAmountPerson * 100) / 100  

  labelTipAmount.innerText = '$' + tipAmountPerson.toFixed(2)
  labelTotal.innerText = '$' + totalPerson.toFixed(2)
}

function clickCustomRemoveOtherCheck() {  
  const otherRadioChecked = document.querySelector(".custom-radio:checked")
    
  if(otherRadioChecked != null) {
    otherRadioChecked.checked = false
  }
}

function showErrorZero() {
  error.classList.remove('hidden')
  error.classList.add('block')
  inputPeople.classList.remove('focus:border-[var(--Strong-cyan)]')
  inputPeople.classList.add('focus:border-red-500')
}

function hideErrorZero() {
  error.classList.remove('block')
  error.classList.add('hidden')
  inputPeople.classList.remove('focus:border-red-500')
  inputPeople.classList.add('focus:border-[var(--Strong-cyan)]')
}

function showResetButton() {
  resetButton.disabled = false
}

form.addEventListener('reset', () => {
  labelTipAmount.innerText = '$0.00'
  labelTotal.innerText = '$0.00'
  resetButton.disabled = true
})