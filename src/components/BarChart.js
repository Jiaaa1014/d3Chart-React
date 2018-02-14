import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
export default class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      yScale: '',
      xScale: ''
    }
  }

  static get defaultProps() {
    return {
      height: 500,
      width: 500,
      chartBg: '#f4f4f4',
      barColor: 'steelBlue',
      barWidth: 40,
      barOffset: 5
    }
  }

  /* 設定scale */


  setYScale = () => {
    let y = d3.scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, this.props.height])

    this.setState({ yScale: y })
  }

  setXScale = () => {
    let x = d3.scaleBand()
      .domain(d3.range(0, this.state.data.length))
      .range([0, this.props.width])

    this.setState({ xScale: x })
  }

  componentWillMount() {
    this.setYScale()
    this.setXScale()
  }
  render() {
    const chart = ReactFauxDOM.createElement('div')

    // 游標經過顯示數值
    let tooltip = d3.select('body').append('div')
      .style('position', 'absolute')
      .style('background', '#444')
      .style('opacity', '0')
      .style('color', '#fff')
      .style('padding', '10px')
      .style('border', '1px #000 solid')
      .style('border-radius', '5px')

    d3.select(chart).append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('background', this.props.chartBg)
      .selectAll('rect')
      .data(this.state.data)
      .enter().append('rect')
      /* 每個<reat> */
      .style('fill', this.props.barColor)
      .attr('width', this.props.barWidth)
      .attr('height', (d) => {
        return this.state.yScale(d)
      })
      .attr('x', (d, i) => {
        // return i * (this.props.barWidth + this.props.barOffset)
        return this.state.xScale(i)
      })
      .attr('y', (d) => {
        // return this.props.height - d 
        return this.props.height - this.state.yScale(d)
      })
      // 新增事件，滑鼠動到tooltip會顯示格子
      .on('mouseover', d => {
        tooltip.style('opacity', 1)
        tooltip.html(d)
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY) + 'px')
      })
      // 也要新增離開的事件，不然格子不會消失
      .on('mouseout', () => {
        tooltip.style('opacity', 0)
      })
    return chart.toReact()
  }
}

