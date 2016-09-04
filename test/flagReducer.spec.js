import { expect } from 'chai';
import makeFlagReducer from 'src/flagReducer.js';

describe('makeFlagReducer', () => {
  it('should throw an error if onActionsTypes and offActionsTypes share values', () => {
    const proxy = () => makeFlagReducer(true, false, ['FOO_ON'], ['FOO_OFF', 'FOO_ON']);
    expect(proxy).to.throw(Error, 'Invalid FlagReducer: Identical on and off actions found: ["FOO_ON"]');
  });

  describe('flagReducer as boolean', () => {
    it('should return false by default', () => {
      const reducer = makeFlagReducer(true, false, ['FOO_ON'], ['FOO_OFF']);
      expect(reducer()).to.equal(false);
    });

    it('should return false if an off action is given', () => {
      const reducer = makeFlagReducer(true, false, ['FOO_ON'], ['FOO_OFF']);
      const action = { type: 'FOO_OFF' };
      expect(reducer(true, action)).to.equal(false);
    });

    it('should return true if an on action is given', () => {
      const reducer = makeFlagReducer(true, false, ['FOO_ON'], ['FOO_OFF']);
      const action = { type: 'FOO_ON' };
      expect(reducer(false, action)).to.equal(true);
    });
  });

  describe('flagReducer as string', () => {
    it('should return "off" by default', () => {
      const reducer = makeFlagReducer('on', 'off', ['FOO_ON'], ['FOO_OFF']);
      expect(reducer()).to.equal('off');
    });

    it('should return "off" if an off action is given', () => {
      const reducer = makeFlagReducer('on', 'off', ['FOO_ON'], ['FOO_OFF']);
      const action = { type: 'FOO_OFF' };
      expect(reducer('on', action)).to.equal('off');
    });

    it('should return "on" if an on action is given', () => {
      const reducer = makeFlagReducer('on', 'off', ['FOO_ON'], ['FOO_OFF']);
      const action = { type: 'FOO_ON' };
      expect(reducer('off', action)).to.equal('on');
    });
  });
});
