const button = document.querySelector(".send-button");
const result = document.querySelector(".resultDiv");

function requestFunc() {

button.addEventListener('click', () => {   
 
  const input = document.querySelectorAll(".input-number");
  
  let wrongNumber = document.querySelector(".resultDiv");

  
  input.forEach(input => {

if (input.value >= 1 && input.value <= 10) {
  
  input.classList.add("valid")
} else {
  input.classList.remove("valid")
}
})

  const elem1 = document.querySelector("#input-page");
  const elem2 = document.querySelector("#input-limit");

if (!(elem1.classList.contains("valid")) && elem2.classList.contains("valid")) {
  wrongNumber.textContent = "Номер страницы вне диапазона от 1 до 10";
//return
}

if (!(elem2.classList.contains("valid")) && elem1.classList.contains("valid")) {
  wrongNumber.textContent = "Лимит вне диапазона от 1 до 10";
//return
}

if (!(elem1.classList.contains("valid")) && !(elem2.classList.contains("valid"))) {
  wrongNumber.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
//return
} 

if (elem1.classList.contains("valid") && elem2.classList.contains("valid")) {
     
          const input = document.querySelectorAll(".input-number")
          const input1 = document.querySelector("#input-page").value;
          const input2 = document.querySelector("#input-limit").value; 
      
    fetch(`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`)
    .then(response => {
      return response.json();
    }) 
    .then(data => {
      let box = '';
      data.forEach(item => {
        let result = `
          <div class="box">
            <img
              src="${item.download_url}"
              class="box-image"
            />
            <p>${item.author}</p>
          </div>
        `;
        box = box + result;
      });
      
      result.innerHTML = box;
   localStorage.setItem('myJSON', JSON.stringify(data));
  });
  }  
})         
}

function repeatOnLoad () {
    
  const myJSON = localStorage.getItem('myJSON');
  if (myJSON) { 
  const JSONData = JSON.parse(myJSON);
  
 const jsonOutput = document.querySelector(".resultDiv");
    let box = '';
    JSONData.forEach(item => {
      
      let jsonOutput = `
        <div class="box">
          <img
            src="${item.download_url}"
            class="box-image"
          />
          <p>${item.author}</p>
        </div>
      `;
     
      box = box + jsonOutput;
      
    });
    
    jsonOutput.innerHTML = box;
    
  }
  } 

  window.addEventListener('load', repeatOnLoad);
  button.addEventListener('click', function() {    
    localStorage.clear();
  })

document.addEventListener("DOMContentLoaded", requestFunc);