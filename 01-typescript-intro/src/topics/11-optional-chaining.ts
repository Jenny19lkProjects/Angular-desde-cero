
export interface Passenger{
    name:string;
    children?:string[];

}
const passenger1:Passenger={
    name:'Jennyfer',
}

const passenger2:Passenger={
    name:'Javier',
    children:['Natalia','Elizabeth'],

}
const printChildren=(passenger:Passenger)=>{
   // const howManyChildren=passenger.children?.length || 0;
   const howManyChildren=passenger.children?.length ;
    console.log(passenger.name, howManyChildren);
}
printChildren(passenger2);