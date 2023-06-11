function useRequest (url, callback) {
    const xhr = new XMLHttpRequest ();
    xhr.open ('GET', url, true);

    //обработчик на результат запроса 
    xhr.onload= function () {
        if (xhr.status != 200) {
            console.log ('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse (xhr.response);
            if (callback) {
                callback (result);
            }
        }
    };

    xhr.onerror = function () {
        console.log ('Error! The response status: ', xhr.status);
    };

    xhr.send();
};




//Вставка результата 
const resultNode = document.querySelector ('.result');
const btnNode = document.querySelector ('.btn-req');

//Функция для формирования результата 
function displayResult (apiData) {
    let cards = '';

    apiData.forEach (item => {
        const cardBlock = `
            <div class="card">
            <img src = "${item.url}" class="card-image" />
            <p>${item.title}</p>
        </div>
        `;
        cards += cardBlock;
    });

    resultNode.innerHTML = cards;
};

//обработчик на кнопку
btnNode.addEventListener ('click', () => {
    const value = document.querySelector('input').value; 
    if (value < 1 || value > 10) {
        resultNode.innerHTML = `<p>Число вне диапозона от 1 до 10</p>`;  
    } else {
        url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
    }
    useRequest (url, displayResult)
});

