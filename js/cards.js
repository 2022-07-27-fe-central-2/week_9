
export const getCard = (data, cardIndex) => {
  const card = $('<div></div>').addClass(`card text-primary hidden card-${cardIndex}`)
  const cardHeader = $('<div></div>').text(data.question).addClass('card-header')
  const cardBody = $('<div></div>').addClass('card-body')

  const answers = data.answers.map((answer, answerIndex) => {
    const formCheck = $('<div></div>').addClass('form-check')
    const formCheckInput = $('<input>')
    .addClass('form-check-input')
    .attr('type', 'radio')
    .attr('name', `a-${cardIndex}`)
    .attr('id', `a-${cardIndex}-${answerIndex}`)
    .attr('value', answer.value)
    const formCheckLabel = $('<label></label>').text(answer.text).attr('for', `a-${cardIndex}-${answerIndex}`)
    return formCheck.append(formCheckInput).append(formCheckLabel)
  })
  cardBody.append(answers)
  card.append(cardHeader).append(cardBody)
  return card
}