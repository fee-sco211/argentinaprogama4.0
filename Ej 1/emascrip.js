//controlador de los produsctos

import Producto from './Productos.js'

class PoductManager{
    constructor(){
        this.producto=[];
    }

    addProduct(title,description,price,thumbnail,code,stock){
        let parametros= [title,description,price,thumbnail,code,stock];
        if((!Array.prototype.includes(code))&&(parametros !==undefined ||parametros !==null)){
            const prod= new Producto(title,description,price,thumbnail,code,stock);
            this.producto.push(prod);
        }
    }

    getProdusctos(){
        return this.producto;
    }
    getProdusctosById(id){
        let productoId=id;
        if(productoId.includes(Productos())){
            return this.producto();
        }
            return "Not found";
    }
}

export default PoductManager;