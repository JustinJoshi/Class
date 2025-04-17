document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if(day === 'tuesday' || day === 'thursday'){
  alert('class')
} else if(day === 'saturday'|| day === 'sunday'){
  alert('weekend')
} else{
  alert('boring')
}

}
