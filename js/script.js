const inputPeople = document.getElementById('inputPeople')
const error = document.getElementById('error')

inputPeople.addEventListener('input', (e) => {
  if(e.target.value === '0') {    
    error.classList.remove('hidden')
    error.classList.add('block')
  } else {
    error.classList.remove('block')
    error.classList.add('hidden')
    //...
  }
})

function clickCustomRemoveOtherCheck() {  
  const otherRadioChecked = document.querySelector(".custom-radio:checked")
    
  if(otherRadioChecked != null) {
    otherRadioChecked.checked = false
  }
}