const skill:string[]=['Bash','Counter','Healing'];

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string ;
}


const strider:Character={
    name:'strider',
    hp:100,
    skills:['Bash','Counter'],
    hometown:undefined
};

strider.hometown='Fuentes';

console.table(strider);