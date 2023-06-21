const countries = [
    { name: 'Китай', population: 1439323776 },
    { name: 'Индия', population: 1380004385 },
    { name: 'США', population: 331002651 },
    { name: 'Индонезия', population: 273523615 },
    { name: 'Пакистан', population: 220892340 },
    { name: 'Бразилия', population: 212559417 },
    { name: 'Нигерия', population: 206139589 },
    { name: 'Бангладеш', population: 164689383 },
    { name: 'Россия', population: 145934462 },
    { name: 'Мексика', population: 128932753 }
  ];

  const languages = [
    { name: 'Китайский', speakers: 918000000 },
    { name: 'Испанский', speakers: 460000000 },
    { name: 'Английский', speakers: 377000000 },
    { name:'Хинди', speakers :341000000},
    {name:'Арабский', speakers :315000000},
    {name:'Португальский', speakers :220000000},
    {name:'Бенгальский', speakers :228000000},
    {name:'Русский', speakers :258000000},
    {name:'Французский', speakers :78870000},
    {name:'Урду', speakers :70000000}
  ];

  const chartTitle = document.querySelector('#chart-title');
  const chart = document.querySelector('#chart');

  function drawChart(data, title) {
      chartTitle.textContent = title;

      chart.innerHTML = '';

      const maxValue = Math.max(...data.map(item => item.population || item.speakers));

      data.forEach(item => {
          const bar = document.createElement('div');
          bar.classList.add('bar');
          bar.style.width = `${(item.population || item.speakers) / maxValue * 100}%`;
          bar.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
          bar.textContent = item.name;

          chart.appendChild(bar);
      });
  }

  document.querySelector('#countries-button').addEventListener('click', () => {

    drawChart(countries, 'Самые густонаселенные страны');
});

document.querySelector('#languages-button').addEventListener('click', () => {
    drawChart(languages, 'Самые распространенные языки');
});