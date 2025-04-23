//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

 class NetflixCreate{
    constructor(title,genre,length,appeal){
        this.title = title
        this.genre = genre
        this.length = length
        this.appeal = appeal
    }
    play(){
        console.log('play')
    }
    pause(){
        console.log('pause')
    }
    speedup(){
        console.log('speedup')
    }
   
 }

 let cyberpunk = new NetflixCreate('cyberpunk', 'anime', '15ep', 'weebs')