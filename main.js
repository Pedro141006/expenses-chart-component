let grafico = document.querySelector('.grafico')

const data = fetch('copy_data.json').then(response => {
  response.json().then(days => {
    days.map(content => {
      console.log(content)

      let chart = document.createElement('div')
      chart.classList.add('chart')

      const height = content.amount / 6

      chart.innerHTML = `
      
      <div class="chart-wrapper">
      <div class="chart-value" style="--height:${height}em" title="${content.amount}"></div>
      </div>
       <div class="chart-title">${content.day}</div>
       

      `
      grafico.appendChild(chart)
    })
  })
})
