/* Question 1 :
console.log(``)
Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.*/

let p_elements = document.getElementsByTagName("p")
console.log(`There are ${p_elements.length} p elements in this page`)


/* Question 2 :

Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.*/

let coucou = document.getElementById("coucou")
console.log(`The element's text avec id 'coucou' is: '${coucou.textContent}'`)

/* Question 3 :

Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.*/

let url_text = document.querySelectorAll("a")[2]
console.log(`The third url is : ${url_text}`)


/* Question 4 :

Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.*/

let compte_moi = document.getElementsByClassName("compte-moi").length

console.log(`There are ${compte_moi} elements with the class = 'compte-moi'`)


/* Question 5 :

Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.*/

let compte_moi_li = document.querySelectorAll("li.compte-moi").length

console.log(`There are ${compte_moi_li} li elements with the class = 'compte-moi'`)


/* Question 6 :

Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.*/

let compte_moi_ol_li = document.querySelectorAll("ol > li.compte-moi").length

console.log(`There are ${compte_moi_ol_li} ol>li elements with the class = 'compte-moi'`)

/* Question 7 :

Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.*/

let piste_ul = document.querySelectorAll("div > ul")[1]
let piste_ul_li= piste_ul.getElementsByTagName('li')[0]
console.log(`${piste_ul_li.textContent}`)