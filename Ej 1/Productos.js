//Creador de productos
export default Producto;

class Producto{
constructor (title,description,price,thumbnail,code,stock){
    this.title=title;
    this.description=description;
    this.price=price;
    this.thumbnail=thumbnail;
    this.code=code;
    this.stock=stock;
    this.id++;
    }
}
