export class Product {


    shortName: string;
    desc: string;
    imageUrl: string;
    department: string[];   
    price: number;


    constructor(shortName:string, description:string, url:string, department:string[], price:number) {
        this.shortName = shortName;
        this.desc = description;
        this.imageUrl = url;
        this.department = department;
        this.price = price;
    }

}