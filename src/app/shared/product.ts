export class Product {

    id:number;
    code: string;
    name: string;
    price: number;
    quantity:number;
    image?:string;

    constructor(id:number, 
                code: string,
                name: string,
                price: number,
                quantity:number,
                image?: string){
        this.id=id;
        this.name=name;
        this.code=code;
        this.price=price;
        this.quantity=quantity
        this.image=image;

    }
}
