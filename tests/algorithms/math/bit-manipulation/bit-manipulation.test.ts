import { bitManipulation } from '../../../../algorithms/math/bit-manipulation/bit-manipulation';

const {
  convertToBinary, getBit, setBit, clearBit, updateBit, switchBit, isEven, isPositive, switchSign, multiplyByTwo,
  divideByTwo, multiply, multiplyUnsigned, divide, countSetBits, bitsDiff, bitLength, isPowerOfTwo,
} = bitManipulation;

describe('Bit manipulation', () => {
  it('convertToBinary should return the binary representation of the decimal number', () => {
    expect(convertToBinary(5)).toBe('101');
    expect(convertToBinary(10)).toBe('1010');
    expect(convertToBinary(15)).toBe('1111');
  });

  it('getBit should return the correct bit value', () => {
    expect(getBit(5, 0)).toBe(1);
    expect(getBit(5, 1)).toBe(0);
    expect(getBit(5, 2)).toBe(1);
  });

  it('setBit should set the bit at the specified position', () => {
    expect(setBit(5, 0)).toBe(5);
    expect(setBit(5, 1)).toBe(7);
    expect(setBit(5, 2)).toBe(5);
  });

  it('clearBit should clear the bit at the specified position', () => {
    expect(clearBit(5, 0)).toBe(4);
    expect(clearBit(5, 1)).toBe(5);
    expect(clearBit(5, 2)).toBe(1);
  });

  it('updateBit should update the bit at the specified position', () => {
    expect(updateBit(5, 0, 0)).toBe(4);
    expect(updateBit(5, 1, 1)).toBe(7);
    expect(updateBit(5, 0, 1)).toBe(5);
  });

  it('switchBit should switch the bit at the specified position', () => {
    expect(switchBit(5, 1)).toBe(7);
    expect(switchBit(5, 0)).toBe(4);
    expect(switchBit(5, 4)).toBe(21);
  });

  it('isEven should return true if the number is even, false otherwise', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('isPositive should return true if the number is positive, false otherwise', () => {
    expect(isPositive(5)).toBe(true);
    expect(isPositive(-5)).toBe(false);
    expect(isPositive(0)).toBe(false);
  });

  it('switchSign should switch the sign of the number', () => {
    expect(switchSign(5)).toBe(-5);
    expect(switchSign(-5)).toBe(5);
    expect(switchSign(0)).toBe(0);
  });

  it('multiplyByTwo should multiply the number by two', () => {
    expect(multiplyByTwo(5)).toBe(10);
    expect(multiplyByTwo(4)).toBe(8);
    expect(multiplyByTwo(0)).toBe(0);
  });

  it('divideByTwo should divide the number by two', () => {
    expect(divideByTwo(5)).toBe(2);
    expect(divideByTwo(4)).toBe(2);
    expect(divideByTwo(0)).toBe(0);
  });

  it('multiply should multiply two numbers', () => {
    expect(multiply(5, 3)).toBe(15);
    expect(multiply(4, 2)).toBe(8);
    expect(multiply(0, 3)).toBe(0);
    expect(multiply(4, -3)).toBe(-12);
  });

  it('multiplyUnsigned should multiply two integers numbers', () => {
    expect(multiplyUnsigned(5, 3)).toBe(15);
    expect(multiplyUnsigned(4, 3)).toBe(12);
    expect(multiplyUnsigned(0, 3)).toBe(0);
  });

  it('divide should divide two numbers', () => {
    expect(divide(5, 3)).toBe(1);
    expect(divide(12, 3)).toBe(4);
    expect(divide(0, 3)).toBe(0);
    expect(divide(-20, 2)).toBe(-10);
  });

  it('countSetBits should return the number of set bits in the binary representation of the number', () => {
    expect(countSetBits(5)).toBe(2);
    expect(countSetBits(3)).toBe(2);
    expect(countSetBits(15)).toBe(4);
    expect(countSetBits(0)).toBe(0);
  });

  it('bitsDiff should return the number of bits that need to be flipped to convert a number to another', () => {
    expect(bitsDiff(5, 3)).toBe(2);
    expect(bitsDiff(4, 3)).toBe(3);
    expect(bitsDiff(0, 3)).toBe(2);
    expect(bitsDiff(0, 0)).toBe(0);
  });

  it('bitLength should return the number of bits in the binary representation of the number', () => {
    expect(bitLength(5)).toBe(3);
    expect(bitLength(3)).toBe(2);
    expect(bitLength(15)).toBe(4);
    expect(bitLength(0)).toBe(0);
  });

  it('isPowerOfTwo should return true if the number is a power of two, false otherwise', () => {
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(0)).toBe(false);
  });
});
