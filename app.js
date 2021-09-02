const btn = () => {
  const inputFiled = document.getElementById('input-Filed')
  const inputFiledValue = inputFiled.value
  inputFiled.value = ""
  console.log(inputFiledValue);

  const url = `http://openlibrary.org/search.json?q=${inputFiledValue}`
  fetch(url)
  .then(res => res.json())
  .then(data=>gettingResult(data.docs))

}

const gettingResult = (data) => {
  // console.log(data);
  document.getElementById('search-result').innerText = data.length  
  const book = document.getElementById('book')

  data.forEach(element => {
    // console.log(element);
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
 