document.addEventListener('DOMContentLoaded', function () {
  const w = 1400;
  const h = 800;
  const scale = d3.scaleLinear();
  const output = scale(50);
  d3.json(
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
  ).then((data) => {
    const dataset = data.data;
    const from_date = data.from_date;
    const to_date = data.to_date;
    console.log(data);
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 26)
      .attr('y', (d, i) => h - 4 * d[1])
      .attr('width', 25)
      .attr('height', (d, i) => {
        return d[1] * 3;
      })
      .attr('fill', '#19BDFF')
      .attr('class', 'bar')
      .append('title')
      //todo  work with date change Q1 Q2 Q3 Q4
      .text((d) => {
        return `${d[0]} \n ${d[1]}`;
      })
      .style('font-size', '25px');
    console.log(svg);
    d3.select('ul')
      .selectAll('li')
      .data(dataset)
      .enter()
      .append('li')
      .style('color', 'blue')
      .text((data) => data[0]);
  });
});
