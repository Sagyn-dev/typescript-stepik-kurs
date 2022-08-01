// Необходимо сделать корзину (Cart) на сайте,
//
//     которая имееет список продуктов (Product), добавленных в корзину
//
// и переметры доставки (Delivery). Для Cart реализовать методы:
//
//     - Добавить продукт в корзину
//
// - Удалить продукт из корзины по ID
//
// - Посчитать стоимость товаров в корзине
//
// - Задать доставку
//
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
//
// Product: id, название и цена
//
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart{
   private productList:Product[]=[];
   private delivery:DeliveryOptions;

    addCart(product:Product):void{
        this.productList.push(product);
    }

    deleteProduct(productId:number):void{
        this.productList = this.productList.filter((p:Product)=>p.id !== productId);
    }

    getSumPrice():number{
       return this.productList.map((p:Product)=>p.price).reduce((p1:number,p2:number)=>p1+p2);
    }
    setDelivery(delivery:DeliveryOptions){
        this.delivery = delivery;
    }
    checkOut(){
        if(this.productList.length == 0){
            throw new Error('Нет товара в корзине');
        }
        if(!this.delivery){
            throw new Error('Не указан способ доставки');
        }
        return {success:true};
    }
}


class Product{
    id:number;
    name:string;
    price:number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Delivery {
    constructor(dateDeliver:Date) {
    }
}

class HomeDelivery extends Delivery {
    constructor(date:Date,address:string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId:number) {
        super(new Date);
    }
}


const cart = new Cart();
cart.addCart(new Product(1,'Печенье',10));
cart.addCart(new Product(2,'Торт',30));
cart.addCart(new Product(3,'Шоколад',50));
cart.deleteProduct(1);
// cart.setDelivery(new HomeDelivery(new Date(),''));
// console.log(cart.getSumPrice());
//console.log(cart.checkOut());
