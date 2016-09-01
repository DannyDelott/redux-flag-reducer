import expect from 'expect';
import FlagReducer from 'src/flagReducer.js';

describe('FlagReducer', () => {
  it('should return a function', () => {
    const reducer = FlagReducer();
    expect(reducer).toBeA('function');
  });
});
