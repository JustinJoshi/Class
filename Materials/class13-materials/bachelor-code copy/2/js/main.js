const andi = document.querySelector('#andi')
const sharleen = document.querySelector('#sharleen')
const claire = document.querySelector('#claire')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
	document.getElementById('p').innerHTML = 'why'
}

function claireNext(){
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	document.getElementById('p').innerHTML = 'reasonable'
}

function sharleenNext(){
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	document.getElementById('p').innerHTML = 'poggers'
}

//show andi on click
//show sharleen on click
//show claire on click
//hide other imgs on click