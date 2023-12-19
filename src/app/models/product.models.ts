export class Product {
date: any;
    constructor (
       public title: string,
       public description: string,
       public imageUrl: string,
       public price: number,
       public creationDate: Date,
       public likes: number,
       public hasLiked: boolean,
       public size?:Array<string>
    ) {}
}