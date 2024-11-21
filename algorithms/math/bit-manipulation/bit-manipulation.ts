/**
 * Converts a decimal number to its binary representation.
 * 
 * @param num - The decimal number to convert.
 * @returns The binary representation of the decimal number.
 */
function convertToBinary(num: number) {
  return num.toString(2);
}

/**
 * This function shifts the relevant bit to the zeroth position. Then we perform `AND` operation with 1 which has bit
 * patter like `0001`. This clears all bits from the original number except the relevant one. If the relevant bit is one,
 * the result is 1, otherwise the result is 0.
 * 
 * @param num Number to set bit
 * @param bitPosition Position of bit to set - 0 based
 * @returns Number with bit set
 */
function getBit(num: number, bitPosition: number) {
  return (num >> bitPosition) & 1;
}

/**
 * This function shifts 1 over by `bitPosition` bits, creating a value that looks like `00100`. Then we perform `OR`
 * operation that sets specific bit to 1, but it does not affect on other bits of the number.
 * 
 * @param num - The number in which to set the bit.
 * @param bitPosition - The position of the bit to set.
 * @returns The number with the bit set at the specified position.
 */
function setBit(num: number, bitPosition: number) {
  return num | (1 << bitPosition);
}

/**
 * This method shifts 1 over by `bitPosition` bits, creating a value that looks like `00100`. Than it inverts this mask to
 * get the number that looks like `11011`. Then AND operation is being applied to both the number and the mask.
 * That operation unsets the bit.
 * 
 * @param num - The number in which the bit needs to be cleared.
 * @param bitPosition - The position of the bit to be cleared.
 * @returns The number with the specified bit cleared.
 */
function clearBit(num: number, bitPosition: number) {
  return num & ~(1 << bitPosition);
}

/**
 * This method is a combination of "Clear Bit" and "Set Bit" methods.
 * Updates a bit at a specific position in a number.
 * 
 * @param num - The number in which the bit needs to be updated.
 * @param bitPosition - The position of the bit to be updated.
 * @param bitValue - The new value of the bit (0 or 1).
 * @returns The updated number with the bit at the specified position modified.
 */
function updateBit(num: number, bitPosition: number, bitValue: 0 | 1) {
  const mask = ~(1 << bitPosition);

  return (num & mask) | (bitValue << bitPosition);
}

/**
 * Switches the value of a bit at the specified position in a number.
 * 
 * @param num - The number whose bit needs to be switched.
 * @param bitPosition - The position of the bit to be switched (0-based index).
 * @returns The number with the bit switched at the specified position.
 */
function switchBit(num: number, bitPosition: number) {
  return num ^ (1 << bitPosition);
}

/**
 * Checks if a number is even. It is based on the fact that odd numbers have their last right bit to be set to 1.
 * 
 * @param num - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
function isEven(num: number) {
  return (num & 1) === 0;
}

/**
 * Checks if a number is positive. It is based on the fact that all positive numbers have their leftmost bit to be set
 * to 0. However, if the number provided is zero or negative zero, it should still return false.
 * 
 * @param num - The number to check.
 * @returns `true` if the number is positive, `false` otherwise.
 */
function isPositive(num: number) {
  if (num === 0) {
    return false;
  }

  return ((num >> 31) & 1) === 0;
}

/**
 * Switches the sign of a number.
 * @param num - The number to switch the sign of.
 * @returns The number with the sign switched.
 */
function switchSign(num: number) {
  return ~num + 1;
}

/**
 * Multiplies a number by two using bitwise left shift operation.
 *
 * @param num - The number to be multiplied.
 * @returns The result of multiplying the number by two.
 */
function multiplyByTwo(num: number) {
  return num << 1;
}

/**
 * Divides a number by two using bitwise right shift operator.
 * @param num - The number to be divided.
 * @returns The result of dividing the number by two.
 */
function divideByTwo(num: number) {
  return num >> 1;
}

/**
 * This method multiplies two signed integer numbers using bitwise operators. This method is based on the following
 * facts:
 * 
 * ```
 a * b can be written in the below formats:
  0                     if a is zero or b is zero or both a and b are zeroes
  2a * (b/2)            if b is even
  2a * (b - 1)/2 + a    if b is odd and positive
  2a * (b + 1)/2 - a    if b is odd and negative
  * ```
  * The advantage of this approach is that in each recursive step one of the operands reduces to half its original value.
  * Hence, the run time complexity is `O(log(b))` where `b` is the operand that reduces to half on each recursive step.
 */
function multiply(num: number, multiplier: number): number {
  if (num === 0 || multiplier === 0) {
    return 0;
  }

  function multiplyByOddPositive(): number {
    return multiply(multiplyByTwo(num), divideByTwo(multiplier - 1)) + num;
  }

  function multiplyByOddNegative(): number {
    return multiply(multiplyByTwo(num), divideByTwo(multiplier + 1)) - num;
  }

  function multiplyByEven(): number {
    return multiply(multiplyByTwo(num), divideByTwo(multiplier));
  }

  function multiplyByOdd(): number {
    return isPositive(multiplier) ? multiplyByOddPositive() : multiplyByOddNegative();
  }

  return isEven(multiplier) ? multiplyByEven() : multiplyByOdd();
}

/**
 * Multiplies two unsigned numbers using bit manipulation. This method is based on that "Every number can be denoted as
 * the sum of powers of 2".
 * The main idea of bitwise multiplication is that every number may be split to the sum of powers of two:
 * `19 = 2^4 + 2^1 + 2^0`.
 * Now we need to remember that `x * 2^y = x << y`.
 *
 * @param num - The first number to multiply.
 * @param multiplier - The second number to multiply.
 * @returns The product of the two numbers.
 */
function multiplyUnsigned(num: number, multiplier: number) {
  let product = 0;
  let bitIndex = 0;

  while (multiplier !== 0) {
    if (multiplier & 1) {
      product += (num << bitIndex);
    }

    bitIndex++;
    multiplier >>= 1;
  }

  return product;
}

/**
 * Divides two numbers and returns the quotient.
 * 
 * @param dividend - The number to be divided.
 * @param divisor - The number to divide by.
 * @returns The quotient of the division.
 */
function divide(dividend: number, divisor: number) {
  let quotient = 0;
  const isNegativeResult = (dividend < 0) !== (divisor < 0);

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    let temp = divisor;
    let multiple = 1;

    while (dividend >= (temp << 1)) {
      temp <<= 1;
      multiple <<= 1;
    }

    dividend -= temp;
    quotient += multiple;
  }

  return isNegativeResult ? switchSign(quotient) : quotient;
}

/**
 * Counts the number of set bits (bits with value 1) in a given number. The main idea is that we shift the number right
 * by one bit at a time and check the result of `&` operation that is `1` if bit is set and `0` otherwise.
 * 
 * @param num - The number to count the set bits in.
 * @returns The count of set bits in the given number.
 */
function countSetBits(num: number) {
  let counter = 0;

  while (num) {
    counter += num & 1;
    num >>= 1;
  }

  return counter;
}

/**
 * Calculates the number of different bits between two numbers. This makes use of property that when numbers are
 * `XOR`-ed the result will be number of different bits.
 * 
 * @param originalNumber - The original number.
 * @param newNumber - The new number.
 * @returns The count of different bits between the two numbers.
 */
function bitsDiff(originalNumber: number, newNumber: number) {
  return countSetBits(originalNumber ^ newNumber);
}

/**
 * Calculates the number of bits required to represent a given number. To calculate the number of valuable bits we need
 * to shift `1` one bit left each time and see if shifted number is bigger than the input number.
 * 
 * @param num - The number to calculate the bit length for.
 * @returns The number of bits required to represent the given number.
 */
function bitLength(num: number) {
  let bits = 0;

  while ((1 << bits) <= num) {
    bits++;
  }

  return bits;
}

/**
 * Checks if a given number is a power of two. It uses the following property. Let's say that `powerNumber` is a number
 * that has been formed as a power of two (i.e. 2, 4, 8, 16 etc.). Then if we'll do `&` operation between `powerNumber`
 * and `powerNumber - 1` it will return `0` (in case if number is power of two).
 * 
 * @param num - The number to check.
 * @returns `true` if the number is a power of two, `false` otherwise.
 */
function isPowerOfTwo(num: number) {
  return num !== 0 && (num & (num - 1)) === 0;
}

export const bitManipulation = {
  convertToBinary, getBit, setBit, clearBit, updateBit, switchBit, isEven, isPositive, switchSign, multiplyByTwo,
  divideByTwo, multiply, multiplyUnsigned, divide, countSetBits, bitsDiff, bitLength, isPowerOfTwo,
};
