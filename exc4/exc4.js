const resultDiv = document.querySelector(".resultDiv");
const sendButton = document.querySelector(".send-button");
const inputHeight = document.querySelector(".input-height");
const inputWidth = document.querySelector(".input-width");

function clickFunc(urlImg){
    if ( (inputHeight.value < 100 || inputHeight.value > 300) || (inputWidth.value < 100 || inputWidth.value > 300)){
      resultDiv.innerHTML = 'Одно из чисел вне диапазона 100-300'
    }
    else{
      return fetch(urlImg)
            .then((response)=>{
                console.log(response)
                result(response.url)
                return response
            })
            .catch(() => { console.log('Ошибка') })
    }
}

function result(urlImg){
  let box = ''
  box = box + `<img class="image" src="${urlImg}" alt="image">`
  resultDiv.innerHTML=box
}


sendButton.addEventListener('click', async (param)=>{
  param.preventDefault()
  const url=`https://dummyimage.com/${inputHeight.value}x${inputWidth.value}`
  const requestResult = await clickFunc(url)
  console.log(requestResult)
})