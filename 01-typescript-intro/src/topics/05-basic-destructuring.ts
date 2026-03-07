interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details{
    author:string;
    year:number;
}
const audioPlayer:AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Jennyfer Lopez',
        year:2015
    }
}

const{song}=audioPlayer;
const{song:anotherSong,     
      songDuration:duration,
      details
     }=audioPlayer;

const {author}=details;

console.log('Song:',song);
console.log('Duration :',duration);
console.log(`Author:`, audioPlayer.details.author);
console.log(`Author:`,author);


//Destructuracion de arreglos
const [, , trunks]:string[]=['Goku','Vegueta','Trunks'];
console.error('Personaje 3:', trunks);

