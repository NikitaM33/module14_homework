window.addEventListener('load', function () {
  const input = document.querySelector('.query__input');
  const button = document.querySelector('.query__button');
  const h3 = document.querySelector('h3');
  const photos = document.querySelector('.photos');
  const xhr = new XMLHttpRequest();
  let result;
  let err = '';

  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (!input.value) return;

    if (input.value >= 1 && input.value <= 10) {
      result = xhr.open(
        'GET',
        `https://picsum.photos/v2/list?limit=${input.value}`
      );

      xhr.onload = () => {
        if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
        } else {
          console.log('Результат: ', JSON.parse(xhr.response));

          JSON.parse(xhr.response).map((photo) => {
            const img = document.createElement('img');
            img.setAttribute('src', photo.download_url);

            photos.appendChild(img);
          });
        }
      };

      xhr.onerror = () => {
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };

      xhr.send();
    } else {
      err = `Число вне диапазона от 1 до 10`;
      h3.innerHTML = err;
    }
  });
});
