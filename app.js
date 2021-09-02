const btn = () => {
  // getting input value 
  const inputFiled = document.getElementById('input-Filed')
  const inputFiledValue = inputFiled.value
  inputFiled.value = ""
  /// Error Handling
  if (inputFiledValue === "") {
    let validation = document.getElementById('valid')
    validation.innerText =  'No Result Found !!!.'
  }
  // fetch 
  const url = `http://openlibrary.org/search.json?q=${inputFiledValue}`
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
  // Error Handling
  console.log(data);
  if (data.length === 0) {
    let validation = document.getElementById('valid')
    validation.innerText =  'No Result Found !!!'
  }
  // Book Search Result 
  document.getElementById('search-result').innerText = data.length  
  const book = document.getElementById('book')
  book.textContent = ""
  // using for Each loop 
  data.forEach(element => {
    // create new element
  const newBook = document.createElement('div')
  newBook.classList.add('col') 
  newBook.innerHTML =
    `
       <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="img-fluid " alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Book Name : ${element.title} </h5>
        <h5>Author Name : ${element.author_name} </h5>
        <h6>First Published in : ${element.publish_year} </h6>
      </div>
  
    `
  book.appendChild(newBook)
  });
 
}
 