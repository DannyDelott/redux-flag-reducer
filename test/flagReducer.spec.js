import { expect } from 'chai';
import makeFlagReducer from 'src/flagReducer.js';

describe('makeFlagReducer', () => {
  it('should throw an error if onActionsTypes and offActionsTypes share values', () => {
    const proxy = () => makeFlagReducer('foo', ['FOO_ON'], ['FOO_OFF', 'FOO_ON'], false);
    expect(proxy).to.throw(Error, 'Invalid FlagReducer foo: Duplicate actions found: ["FOO_ON"]');
  });

  it('should return a flagReducer', () => {
    expect(makeFlagReducer).to.be.a('function');
  });

  describe('flagReducer', () => {
    it('should return false by default', () => {
      const reducer = makeFlagReducer('foo', ['FOO_ON'], ['FOO_OFF'], false);
      expect(reducer()).to.equal(false);
    });

    it('should return false if an off action is given', () => {
      const reducer = makeFlagReducer('foo', ['FOO_ON'], ['FOO_OFF'], false);
      const action = { type: 'FOO_OFF' };
      expect(reducer(true, action)).to.equal(false);
    });

    it('should return true if an on action is given', () => {
      const reducer = makeFlagReducer('foo', ['FOO_ON'], ['FOO_OFF'], false);
      const action = { type: 'FOO_ON' };
      expect(reducer(false, action)).to.equal(true);
    });
  });
});
