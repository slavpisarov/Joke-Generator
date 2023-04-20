const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')

const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

getJoke()
async function getJoke() {
    jokeContainer.classList.remove('fade')
    const res = await fetch(url)
    const data = await res.json()

    jokeContainer.textContent = data.joke
    jokeContainer.classList.add('fade')
}
btn.addEventListener('click',getJoke)