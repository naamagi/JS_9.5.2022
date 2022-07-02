const getJoke = async (event) => {
  const parent = event.target.parentNode;
  try {
    const res = await fetch("https://api.jokes.one/jod");
    const res2 = await res.json();
    const name = document.getElementsByClassName("title")[0];
    if (name) {
      const tempParent = name.parentElement;
      tempParent.removeChild(name);
    }
    const content = document.getElementsByClassName("content")[0];
    if (content) {
      const tempParent = content.parentElement;
      tempParent.removeChild(content);
    }
    const jokeTitleDiv = document.createElement("div");
    jokeTitleDiv.className = "title";
    jokeTitleDiv.innerText = res2.contents.jokes[0].joke.title;
    const jokeContentDiv = document.createElement("div");
    jokeContentDiv.className = "content";
    jokeContentDiv.innerText = res2.contents.jokes[0].joke.text;
    parent.appendChild(jokeTitleDiv);
    parent.appendChild(jokeContentDiv);
  } catch (err) {
    console.log("problem: ",err);
  }
};
const button = document.querySelector("button");
button.addEventListener("click", getJoke);
