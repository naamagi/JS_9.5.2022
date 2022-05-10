

const makeAllCaps = (arrayOfWords) => {
  return new Promise((resolve, reject) => {
    const arrOfUpper = [];
    let notString = false;
    for (const word of arrayOfWords) {
      if (typeof word !== "string") {
        notString = true;
        break;
      } else {
        arrOfUpper.push(word.toUpperCase());
      }
    }
    if (notString) {
      reject(arrayOfWords);
    } else {
      resolve(arrOfUpper);
    }
  });
};

const sortWordsArr = (arrayOfUnsortedWords) => {
  return new Promise((resolve, reject) => {
    const notString = false;
    arrayOfUnsortedWords.forEach((word) => {
      if (typeof word !== "string") {
        notString = true;
      }
    });
    if (notString) {
      reject(arrayOfUnsortedWords);
    } else {
      arrayOfUnsortedWords.sort();

      resolve(arrayOfUnsortedWords);
    }
  });
};

makeAllCaps(["duck", "Eagle", "capibarA"])
  .then((capitalizedArr) => sortWordsArr(capitalizedArr))
  .then((sortedArr) => {
    console.log("Resolved: "+sortedArr);
  })
  .catch((array) => {
    console.log("Rejected. Following array contains value that is not string: " + array);
  });

makeAllCaps(["duck", 1, "capibarA"])
  .then((capitalizedArr) => sortWordsArr(capitalizedArr))
  .then((sortedArr) => {
    console.log("Resolved: "+sortedArr);
  })
  .catch((array) => {
    console.log("Rejected. Following array contains value that is not string: " + array);
  });

