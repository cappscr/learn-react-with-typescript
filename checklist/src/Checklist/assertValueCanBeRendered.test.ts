import { assertValueCanBeRendered } from './assertValueCanBeRendered';

test('should raise an exception when not a string or number', () => {
  expect(() => {
    assertValueCanBeRendered(true);
  }).toThrow('value is not a string or a number');
});

test('should not raise an exception when string', () => {
  expect(() => {
    assertValueCanBeRendered('something');
  }).not.toThrow();
});

test('should not raise an exception when number', () => {
  expect(() => {
    assertValueCanBeRendered(42);
  }).not.toThrow();
});
