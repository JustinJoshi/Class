document.getElementById('check').addEventListener('click', check)

function check(){
  const day = document.getElementById('day').value
if(day === 'tuesday' || day === 'thursday'){
  document.getElementById('placeToSee').innerHTML = '<p>class</p>'
} else if(day === 'saturday' || day === 'sunday'){
  document.getElementById('placeToSee').innerHTML = '<p>weekend</p>'
} else{
  document.getElementById('placeToSee').innerHTML = '<p>boring</p>'
}
}