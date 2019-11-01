// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
{/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div> */}



// Create a card for each of the articles and add the card to the DOM.

const card = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (response => {
    console.log(response)

response.data.articles.javascript.forEach((e) => {
    card.appendChild(createArticle(e))
})

response.data.articles.bootstrap.forEach((data) => {
    card.appendChild(createArticle(data))
})

response.data.articles.technology.forEach((data) => {
    card.appendChild(createArticle(data))
})

response.data.articles.jquery.forEach((data) => {
    card.appendChild(createArticle(data))
})

response.data.articles.node.forEach((data) => {
    card.appendChild(createArticle(data))
})
  
})
 


function createArticle (data) {
    const createCard = document.createElement('div');
    const createHeadline = document.createElement('div');
    const createAuthor = document.createElement('div');
    const img = document.createElement('div');
    const imgLink = document.createElement('img');
    const span = document.createElement('span');


    createCard.appendChild(createHeadline);
    createCard.appendChild(createAuthor);
    createAuthor.appendChild(img);
    img.appendChild(imgLink)
    createAuthor.appendChild(span);

    // ClassList
    createCard.classList.add('card');
    createHeadline.classList.add('headline');
    createAuthor.classList.add('author');
    img.classList.add('img-container');


createHeadline.textContent = data.headline;
imgLink.textContent = data.authorPhoto;
span.textContent = data.authorName





    return createCard
}