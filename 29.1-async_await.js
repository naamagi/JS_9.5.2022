

const getIDs = () =>
 new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });


  
const getRecipe = (recipeID) =>
  new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });




const callAllMethods=async ()=>{
  try{
  const arrayOfIds=await getIDs();
  console.log(arrayOfIds);
  const recipeDetailsString= await getRecipe(arrayOfIds[2]);
  console.log(recipeDetailsString);
  }
  catch(error){
    console.log("It is an error!",error);
  }
}


callAllMethods();


