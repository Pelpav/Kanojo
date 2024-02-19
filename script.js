const alternatives = [
  {text:"", Images:"Images/cat-01.gif"},
  {text:"Je te promets que ce sera inoubliable", Images:"Images/cat-02.gif"},
  {text:"Réfléchis-y à nouveau", Images:"Images/cat-03.gif"},
  {text:"Allez, ose dire oui", Images:"Images/cat-04.gif"},
  {text:"Ne laisse pas la peur t'arrêter", Images:"Images/cat-05.gif"},
]
const ohyes = {text:"Je savais que tu accepterais", Images:"Images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.Images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Oui"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Non'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})