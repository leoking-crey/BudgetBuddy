const render = (function () {
  const svg = d3.select('svg')
  const vis = svg.select('#vis')
  const width = +svg.attr('width')
  const height = +svg.attr('height')

  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width])

  // append wrap
  const wrap = vis.append('g')
    .attr('class', 'ratio-wrap')

  // append first rect
  const firstRect = wrap.append('rect')
    .attr('height', 88)
    .attr('x', 0)
    .attr('y', height / 2 - 50)
    .style('fill', '#c48811')

  // append second rect
  const scndRect = wrap.append('rect')
    .attr('height', 88)
    .attr('x', 0)
    .attr('y', height / 2 - 50)
    .style('fill', '#0095a3')

  // append values
  const label = vis.append('text')
    .attr('class', 'ratio-label')
    .attr('y', height / 2 + 5)
    .style('text-anchor', 'middle')
      // .style('dominant-baseline', 'central')
    .style('font-size', '36px')
    .style('fill', '#dddddd')

  function update (data) {
      // update the first rect
    firstRect.attr('width', xScale(data[0]))
      // update the second rect
    scndRect.attr('width', xScale(data[1]))
          // start the first rect after the first ends
        .attr('x', xScale(data[0]))
      // append the label
    label
        .attr('x', function () {
              // ensure there is enough space to display numbers
          console.log('xScale(data[0])', xScale(data[0]))
          if (xScale(data[0]) < 90 || xScale(data[0]) > (width - 90)) {
            return width / 2
          } else {
            return xScale(data[0])
          }
        })
        .text(data[0] + '%')
  }
  // expose the update
  return update
})()
