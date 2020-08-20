
/* Modification n°1 */

function changeTitles(){
  document.getElementsByTagName('h1')[0].innerHTML = "Ce que j'ai appris à THP"
  document.getElementsByTagName('p')[1].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"

  console.log("*".repeat(50))
  console.log("Title and Subtitle has been updated")
  console.log("*".repeat(50))
}

// changeTitles()

/* Modification n°2 */

function changeCallToActions(){
  /* 2.1 */
  link = document.querySelectorAll("main > section > div > p > a")[0]
  link.innerHTML = "OK je veux tester !"

  /* 2.2 */
  link.href = "http://www.thehackingproject.org"

  /* 2.3 */
  link_2 = document.querySelectorAll("main > section > div > p > a")[1]
  link_2.innerHTML = "Non Merci"

  /* 2.4 */
  link_2.href = "https://www.pole-emploi.fr/accueil/"
 

  console.log("*".repeat(50))
  console.log("Main Buttons has been updated")
  console.log("*".repeat(50))
}

// changeCallToActions()



/* Modification n°3 */


function changeLogoName(text){
  let header = document.querySelector("header").getElementsByTagName("div")[5].getElementsByTagName("a")[0].getElementsByTagName("strong")[0]
  
  header.innerHTML = text
  header.style.fontSize = "2em"

  console.log("*".repeat(50))
  console.log("Main Logo has been updated")
  console.log("Main Logo size been updated")
  console.log("*".repeat(50))
}

// changeLogoName("The THP Experience")



    /* Long version */
    function changeLogoName_long_version(){
      let header = document.querySelector("header")
      let div = header.getElementsByTagName("div")[5]
      let a = div.getElementsByTagName("a")[0]
      let strong = a.getElementsByTagName("strong")[0]
      
      strong.innerHTML = "The THP Experience"

      console.log("*".repeat(50))
      console.log("Main Logo has been updated")
      console.log("*".repeat(50))
    }
    /* Long version */


/* Modification n°4 */
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages(){
  let img
  let l = imagesArray.length - 1
  console.log("*".repeat(50))
  for(let i = l; i >= 0; i--){
    img = document.querySelectorAll("div.card")[i].getElementsByTagName("img")[0]
    img.src = imagesArray[i]
    console.log(img.src)
  }
  
  console.log("*** All Images has been updated")
  console.log("*".repeat(50))
}

// populateImages()


/* Modification n°5 */
function deleteLastCards(){
  card = document.querySelectorAll("div.card")
  let i
  let l = card.length - 1
  let n = 3
  let m = l - n
  for(i = l; i > m; i--){
    
    card_to_remove = card[i]
    card_to_remove.remove()
    console.log("*".repeat(50))
    console.log("1 Card deleted")
    console.log(`There are ${document.querySelectorAll("div.card").length} cards`)
    console.log("*".repeat(50))
  }
}


// deleteLastCards()


/* Modification n°6 */
let data = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
]
function changeCardsText(array){
  card_text = document.querySelectorAll("div.card p")
  let l = data.length

  for(i = 0; i < l; i ++){
    card_text[i].innerHTML = array[i]

    console.log("*".repeat(50))
    console.log(`Card ${i + 1} updated`)
    console.log("*".repeat(50))
  }
}

// changeCardsText(data)


/* Modification n°7 */

function changeViewButtons(car){
  let cards = document.querySelectorAll("div.card")

  let l = cards.length
  let i
  for(i = 0; i < l; i ++){
    cards[i].getElementsByClassName("btn")[0].classList.add('btn-success')
    cards[i].getElementsByClassName("btn")[0].classList.remove('btn-outline-secondary')

    console.log("*".repeat(50))
    console.log(`Button ${i + 1} => class has been updated`)
    console.log("*".repeat(50))
  }
  
}

// changeViewButtons()

/* Modification n°8 */

function move_card(number){
  let new_div = document.createElement('div')
  new_div.classList.add('row')

  let parent = document.getElementsByClassName('container')[3]
  parent.appendChild(new_div)

  let card_to_move = parent.getElementsByClassName('col-md-4')[number]
  
  new_div = parent.getElementsByClassName('row')[1]
  new_div.appendChild(card_to_move)
  
  console.log("*".repeat(50))
  console.log(`Div ${number} has been moved`)
  console.log("*".repeat(50))
}


// move_card(2)
