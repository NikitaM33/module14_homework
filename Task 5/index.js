// XHR запрос =======================
// window.addEventListener('load', function () {
//     const inputs = document.querySelectorAll('.query__input');
//     const btn = document.querySelector('.query__button');
//     const photos = document.querySelector('.photos');
//     let h3 = document.querySelector('h3');
//     const xhr = new XMLHttpRequest();
//     let err = '';
        
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();

//         inputs.forEach(input => {
//             if (!input.value) return;

//             if (input.value >= 100 && input.value <= 500) {
//                 xhr.open(
//                     'GET',
//                     `https://loremflickr.com/json/g/${inputs[0].value}/${inputs[1].value}/all`
//                 );

//                 xhr.onload = () => {
//                     if (xhr.status !== 200) {
//                         console.log('Статус ответа: ', xhr.status);
//                     } else {
//                         JSON.parse(xhr.result).map((photo) => {
//                             const img = document.createElement('img');

//                             img.setAttribute('src', photo.download_url);
//                             photos.appendChild(img);
//                         });
//                     }
//                 };

//                 xhr.onerror = () => {
//                     console.log('Ошибка! Статус ответа: ', xhr.status);
//                 };

//                 xhr.send();
//             } else {
//                 err = 'Число вне диапазона от 100 до 500';
//                 h3.innerHTML = err;
//             }
//         });
//     });
// });

// Fetch запрос =======================
window.addEventListener('load', function () {
    const inputs = document.querySelectorAll('.query__input');
    const btn = document.querySelector('.query__button');
    let h3 = document.querySelector('h3');
    let err = '';
        
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        inputs.forEach(input => {
            if (!input.value) return;

            if (input.value >= 100 && input.value <= 500) {
                fetch(`https://loremflickr.com/json/g/${inputs[0].value}/${inputs[1].value}/all`)
                    .then((response) => response.json())
                    .then(json => console.log(json))
            } else {
                err = 'Число вне диапазона от 100 до 500';
                h3.innerHTML = err;
            }
        });
    });
});
