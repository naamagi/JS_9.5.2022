

const isValueGreaterThan10 = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve();
    } else if (number < 10) {
      reject();
    }
  });
};

isValueGreaterThan10(12)
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });

isValueGreaterThan10(8)
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
