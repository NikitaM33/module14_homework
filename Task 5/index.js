window.addEventListener('load', function () {
  const form = document.querySelector('.form');
  const field1 = document.querySelector('.field1');
  const field2 = document.querySelector('.field2');
  const error1 = document.querySelector('.error1');
  const error2 = document.querySelector('.error2');
  const photos = document.querySelector('.photos');
  const errorElement = document.querySelector('.errorElement');
  let lastRequest = localStorage.getItem('lastRequest');

  function doRequest (request) {
    return fetch(lastRequest)
      .then((response) => response.json())
      .then((data) => {
        data.map((image) => {
          const img = document.createElement('img');
          img.setAttribute('src', image.download_url);
          img.setAttribute('alt', image.download_url);
          photos.appendChild(img);
        });
      });
  };

  if (lastRequest) {
    doRequest(lastRequest);
  }

  form.addEventListener('submit', (e) => {
    let errors = [];
    let fld1 = '';
    let fld2 = '';

    if (!field1.value || !field2.value) {
      errors.push('Номер страницы и лимит вне диапазона от 1 до 10');
    }

    if (
      (field1.value >= 1 && field1.value <= 10) ||
      typeof field1.value === 'number'
    ) {
      e.preventDefault();
      fld1 = field1.value;
    } else {
      e.preventDefault();
      error1.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    }

    if (
      (field2.value >= 1 && field2.value <= 10) ||
      typeof field2.value === 'number'
    ) {
      e.preventDefault();
      fld2 = field2.value;
    } else {
      e.preventDefault();
      error2.innerHTML = 'Лимит вне диапазона от 1 до 10';
    }

    if (errors.length > 0) {
      e.preventDefault();

      errorElement.innerHTML = errors.join(', ');
    }

    fetch(`https://picsum.photos/v2/list?page=${fld1}&limit=${fld2}`)
      .then((response) => response.json())
      .then((data) => {
        while(photos.firstChild) {
          photos.removeChild(photos.firstChild)
        }

        data.map((image) => {
          const img = document.createElement('img');
          img.setAttribute('src', image.download_url);
          img.setAttribute('alt', image.download_url);
          photos.appendChild(img);
        });
        localStorage.setItem(
          'lastRequest',
          `https://picsum.photos/v2/list?page=${fld1}&limit=${fld2}`
        );
      })
      .catch(() => console.error('An error'));
  });
});
