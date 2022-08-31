const base_url = 'https://api.jokes.one';

const button = document.getElementById('joke-of-the-day');
button.addEventListener('click', () => {
  fetch(base_url + '/jod')
    .then(res => res.json())
    .then(data => {
      const joke = data.contents.jokes[0].joke;
      console.log(joke);
      const display = document.getElementById('joke');
      display.innerHTML = joke.text;
    })
    .catch(e => console.error(e.message));
});


const chuck_base_url = 'https://api.chucknorris.io/jokes';
const randomJokeButton = document.getElementById('random-joke')
button.addEventListener('click', () => {
    fetch(base_url + '/jod')
      .then(res => res.json())
      .then(data => {
        const joke = data.contents.jokes[0].joke;
        console.log(joke);
        const display = document.getElementById('joke');
        display.innerHTML = joke.text;
      })
      .catch(e => console.error(e.message));
  });
  
  randomJokeButton.addEventListener('click', () => {
    fetch(chuck_base_url + '/random')
      .then(res => res.json())
      .then(data => {
        const display = document.getElementById('joke');
        display.innerHTML = data.value;
      })
      .catch(e => console.error(e.message));
  });