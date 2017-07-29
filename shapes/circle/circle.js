

import { Shape } from '../shape.js';
import * as d3 from 'd3';

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius || 40;
    this.width = this.radius * 2 + 10;
    this.height = this.radius * 2 + 10;
  }
  render() {
    const svg = d3.select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    svg.attr('width', this.width)
    .attr('height', this.height);

    svg.append('circle')
      .style('stroke', 'gray')
      .style('fill', 'white')
      .attr('r', this.radius)
      .attr('cx', this.width / 2)
      .attr('cy', this.height / 2);

    this.svg = svg;
    return this.svg.node();
  }
  update() {}
  resize() {}

  get area() {
    // 1px = 0.02645833 cm if you need as cm
    return Math.PI * this.radius ** 2;
  }
  get circumference() {
    return 2 * this.radius * Math.PI;
  }
}
