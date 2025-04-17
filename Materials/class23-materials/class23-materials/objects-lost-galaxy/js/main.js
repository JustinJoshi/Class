//Create a dog object that has four properties and three methods
let dog = {
    dog.name = 'Pete'
    dog.breed = 'Rotwiler'
    dog.numOfLegs = '4'
    dog.personality = 'Happy'
    dog.gofetch = function(throw){
        throw === true ? console.log('RUNNNN') : console.log('Sit')
    }
    dog.eating = function(food){
        food === 'meat' || food === 'treats' ? console.log('SCHLOP SCHLOP SCHLOP SCHLOP') : console.log('sad')
    }
}
