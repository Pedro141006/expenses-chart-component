let ul_grafico = document.querySelector('.lista_grafico')

fetch('copy_data.json').then(response => {
  response.json().then(days => {
    days.map(content => {
      ul_grafico.innerHTML += `<li class="">${content.day} ${content.amount} </li>`
    })
  })
})
