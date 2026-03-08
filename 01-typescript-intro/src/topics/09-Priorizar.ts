export class Person{
    constructor(
         public firstName : string,
         public lastName : string,
         private address: string = 'No Address'
        
    ){}
}

export class Hero {
    //public person:Person;
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
       // this.person=new Person(realName);
       
    }
}

const jennyfer=new Person('Jennyfer','Dayana','New York');
const ironman=new Hero('Iroman',45, 'Tonny', jennyfer);
console.log(ironman);