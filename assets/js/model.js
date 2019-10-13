function Item(category,id, name, price,discountprice, image) {
    this.category =  category;
    this.id = id;
    this.name = name;
    this.price = price;
    this.discountprice = discountprice;
    this.image = image;
    this.selected = false;
}

var obj = {
    "viewproductItem" : [],
    "itemList" : [],

    addItem : function(category,id,name,price,discountprice,image){
        var item = new Item(category,id,name,price,discountprice,image);
        this.itemList.push(item);
        console.log(item);
        console.log(this.itemList);
    },

    viewItem : function(category,id,name,price,discountprice,image){
        var item = new Item(category,id,name,price,discountprice,image);
        this.viewproductItem.push(item);
        console.log("product item: ");
        console.log(this.viewproductItem);
        // location.href="../pages/cart.html";
    }
}