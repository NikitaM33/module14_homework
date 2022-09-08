function usePromise () {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 100);

            if (randomNum % 2 === 0) {
                resolve(`Завершено успешно. Сгенерированное число — ${randomNum}`)
            } else {
                reject(`Завершено с ошибкой. Сгенерированное число — ${randomNum}`)
            }
        }, 3000);
    });

    promise
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error);
        })
}

usePromise()
