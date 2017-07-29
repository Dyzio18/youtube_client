// import chai as our assertion library
import chai from 'chai';
// import our library
import { Circle } from './circle';
// initialize chai should
chai.should();
chai.expect();
const expect = chai.expect;
require('jsdom-global')();

describe('get area for circle with given radius', () => {
  it('should return correct value', () => {
    const circle_test = new Circle(100);
    expect(circle_test.area).to.be.equal(31415.926535897932);
  });
});

describe('get circumference for circle with given radius', () => {
  it('should return correct value', () => {
    const circle_test = new Circle(100);
    expect(circle_test.circumference).to.be.equal(628.3185307179587);
  });
});

describe('render circle', () => {
  it('should be an object', () => {
    const circle_test = new Circle();
    circle_test.render();
    expect(circle_test.svg.should.be.an('object'));
  });
});
