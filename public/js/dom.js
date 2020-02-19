const submit = document.querySelector('#submit');
const search = document.querySelector('#search-bar');

function renderItem(results) {
  const container = document.querySelector('.container');
  const article = document.createElement('article');
  const link = document.createElement('a');
  const image = document.createElement('img');
  const itemDetails = document.createElement('div');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  h3.textContent = results.artist;
  h2.textContent = results.name;
  link.target = 'blank';
  link.href = results.url;
  itemDetails.classList.add('item-details');
  article.classList.add('item');
  image.src = results.image[3]['#text'];

  itemDetails.appendChild(h3);
  itemDetails.appendChild(h2);
  link.appendChild(image);
  article.appendChild(link);
  article.appendChild(itemDetails);
  container.appendChild(article);
}

submit.addEventListener('click', () => {
  const data = { input: search.value };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch('/search', options).then((res) => res.json()).then((res) => {
    if (res.length !== 0) {
      const container = document.querySelector('.container');
      container.textContent = '';
      res.forEach((element) => renderItem(element));
    }
  }).catch((err) => console.error(err));
});
