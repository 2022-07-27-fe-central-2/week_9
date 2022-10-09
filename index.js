let cardIndex = 0
const resArray = [null, null, null, null, null]

let selectedCard = document.querySelector(`.card-${cardIndex + 1}`);

const nextButtonClick = () => {

  const radioElements = document.getElementsByName(`a-${cardIndex+1}`)

  for (let i=0; i <radioElements.length; i++) {
    if(radioElements[i].checked) {
      resArray[cardIndex] = radioElements[i].value
    }
  }

  selectedCard.classList.add('hidden')
  cardIndex += 1;
  selectedCard = document.querySelector(`.card-${cardIndex + 1}`);
  selectedCard.classList.remove('hidden')
  console.log(resArray)
}

const prevButtonClick = () => {

  const radioElements = document.getElementsByName(`a-${cardIndex+1}`)

  for (let i=0; i <radioElements.length; i++) {
    if(radioElements[i].checked) {
      resArray[cardIndex] = radioElements[i].value
    }
  }

  selectedCard.classList.add('hidden');
  cardIndex -= 1;
  selectedCard = document.querySelector(`.card-${cardIndex + 1}`)
  selectedCard.classList.remove('hidden')
  console.log(resArray)
}

document.querySelectorAll('.nextButton').forEach(element => {
  element.addEventListener('click', nextButtonClick)
})
document.querySelectorAll('.prevButton').forEach(element => {
  element.addEventListener('click', prevButtonClick)
})
