

const isValueGreaterThan10 = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("resolved");
    } else if (number < 10) {
      reject("rejected");
    }
  });
};

isValueGreaterThan10(12)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

isValueGreaterThan10(8)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
