//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(fighterHeight,fighterWeight,fighterSpeed,fighterDex){
    this.Height = fighterHeight
    this.Weight = fighterWeight
    this.Speed = fighterSpeed
    this.Dex = fighterDex
    this.punch = function(){
      alert('Punched')
    }
    this.jump = function(){
      alert('Jumped')
    }
    this.block = function(){
        alert('Blocking')
    }
  }