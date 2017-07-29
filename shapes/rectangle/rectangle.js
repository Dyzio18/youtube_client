

import { Shape } from '../shape.js';
import * as d3 from 'd3';

export class Rectangle extends Shape {
  constructor(width, height) {
    super();
    if (width) this.width = width;
    if (height) this.height = height;
  }
  render() {
    const svg = d3.select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    svg.attr('width', this.width)
    .attr('height', this.height);

    svg.append('rect')
      .style('stroke', 'gray')
      .style('fill', 'white')
      .attr('width', this.width)
      .attr('height', this.height);

    this.svg = svg;
    return this.svg.node();
  }
  update() {}
  resize() {}

  get area() {
    return this.width * this.height;
  }
  get circumference() {
    return (this.width + this.height) * 2;
  }
}
