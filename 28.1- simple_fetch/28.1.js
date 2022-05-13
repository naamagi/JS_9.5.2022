const getJoke = (event) => {
  const parent = event.target.parentNode;
  fetch("https://api.jokes.one/jod")
    .then((response) => {
      if (response.status != 200) {
        console.log("Problem");
        return;
      }
      return response.json();
    })
    .then((data) => {
        console.log(data);
      const jokeTitleDiv = document.createElement("div");
      jokeTitleDiv.className = "title";
      jokeTitleDiv.innerText = data.contents.jokes[0].joke.title;
      const jokeContentDiv = document.createElement("div");
      jokeContentDiv.className = "content";
      jokeContentDiv.innerText = data.contents.jokes[0].joke.text;
      parent.appendChild(jokeTitleDiv);
      parent.appendChild(jokeContentDiv);
    })
    .catch((err) => {
      console.log(err);
    });
};
const button = document.querySelector("button");
button.addEventListener("click", getJoke);
