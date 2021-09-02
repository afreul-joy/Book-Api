const btn = () => {
  // getting input value 
  const inputFiled = document.getElementById('input-Filed')
  const inputFiledValue = inputFiled.value
  inputFiled.value = ""
  console.log(inputFiledValue);
  // fetch 
  const url = `https://openlibrary.org/search.json?q=${inputFiledValue}`
  // adding spinner 
  const spinner = document.getElementById('spinner')
  spinner.classList.remove("d-none")
  fetch(url)
  .then(res => res.json())
    .then(data => gettingResult(data.docs))
    .finally(() => {
    spinner.classList.add("d-none")
  })

}

const gettingResult = (data) => {
  // Book Search Result 
  document.getElementById('search-result').innerText = data.length  
  const book = document.getElementById('book')
  const validation = document.getElementById('valid')
  validation.textContent = "" 
  book.textContent = ""
  // Error Handling
  if (data.length === 0) {
  let errorHandle = document.createElement('div')
    errorHandle.innerHTML =
      `
       <h1>Result Not Found</h1>
       <p>Try Again</p>
      `
   validation.appendChild(errorHandle)
 
  }

  // using for Each loop 
  else {
    data.forEach(element => {
    console.log(element);
    // create new element
  const newBook = document.createElement('div')
  newBook.classList.add('col') 
  newBook.innerHTML =
    `
       <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="img-fluid " alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Book Name : ${element.title} </h5>
        <h6>Author Name : ${element.author_name} </h6>
        <h6>First Published in : ${element.publish_year} </h6>
        <h6>Publisher : ${element.publisher} </h6>
      </div>
  
    `
  book.appendChild(newBook)
  });
 
}
}