export function oneStepAway(str1: string, str2: string): boolean {
  function isOneDeleteAway(str1: string, str2: string): boolean {
    let index1 = 0;
    let index2 = 0;

    while (index1 < str1.length && index2 < str2.length) {
      if (str1[index1] !== str2[index2]) {
        if (index1 !== index2) {
          return false;
        }

        index2++;
      } else {
        index1++;
        index2++;
      }
    }

    return true;
  }

  function isOneReplaceAway(str1: string, str2: string): boolean {
    let foundDifference = false;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (foundDifference) {
          return false;
        }

        foundDifference = true;
      }
    }

    return true;
  }

  if (Math.abs(str1.length - str2.length) === 1) {
    if (str1.length > str2.length) {
      return isOneDeleteAway(str2, str1);
    }

    return isOneDeleteAway(str1, str2);
  }

  if (str1.length === str2.length) {
    return isOneReplaceAway(str1, str2);
  }

  return false;
}
