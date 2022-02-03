let content = document.querySelector('.js-generated.content')
// create the header
let header = document.createElement('h1')
//add class dog-name
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
//append the header to the content
content.append(header)
//doggy image
let doggyImg = document.querySelector('dog-image')
doggyImg.setAttribute('dog-content','dog-image')
