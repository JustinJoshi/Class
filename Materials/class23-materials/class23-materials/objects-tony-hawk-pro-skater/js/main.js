//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkatingCharacter(helmet,kneepads,athletic,radaf){
    this.helmet = true
    this.kneepads = true
    this.athletic = true
    this.radaf = true
    this.kickflip = () => console.log('FLIPP')
    this.ollie = () => console.log('Ollie time')
    this.wipeout = () => console.log('FAILLLLLLUREEE')
}