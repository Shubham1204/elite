window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#search").addEventListener("keyup", searchProduct);
    displayAllProducts();
}

function searchProduct(){
    var toSearch = event.srcElement.value;
    productArray = productArray.filter(function(obj){
        return obj.name.toLowerCase().includes(toSearch.toLowerCase());
    });
    displayAllProducts();
}

function displayAllProducts(){
    var ul = document.querySelector("#main-product");
    ul.innerHTML="";
     for(var i=0;i< productArray.length;i++){
        var li = document.createElement("li");
        li.className = "product";    
        var div1 = document.createElement("div");
        div1.className = "img";
        var a1 = document.createElement("a");
        // a1.href="cart.html";
        // a1.addEventListener("click",viewProduct);
        var img = document.createElement("img");
        img.src=productArray[i].image;
        img.alt=productArray[i].id;
        
        li.title = productArray[i].id;
        // console.log("id : "+img.alt);
        a1.appendChild(img);
        var div2  =document.createElement("div");
        div2.className="view";
        var span1 = document.createElement("span");
        span1.innerHTML="Quick View";
        div2.appendChild(span1);
        div1.appendChild(a1);
        div1.appendChild(div2);

        var div3 = document.createElement("div");
        div3.className="desc";
        var h4 = document.createElement("h4");
        var a2 = document.createElement("a");
        a2.href="#";
        a2.innerHTML=productArray[i].name;
        var p = document.createElement("p");
        p.innerHTML="₹"+productArray[i].discountprice;
        var span2 = document.createElement("span");
        span2.innerHTML="₹"+productArray[i].price;
        if(span2.innerHTML=="undefined"){
            span2.innerHTML="";
        }else if(span2.innerHTML=="₹0"){
            span2.innerHTML="";
        }
        p.appendChild(span2);
        h4.appendChild(a2);
        h4.appendChild(p);
        div3.appendChild(h4);

        var cart_btn = document.createElement("button");
        cart_btn.className="btn";
        cart_btn.innerHTML="Add to Cart";
        
        
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(cart_btn);
        ul.appendChild(li);
        // cart_btn.baseURI="../pages/cart.html";
        cart_btn.addEventListener("click", addtoCart);
        div1.addEventListener("click",viewProduct);    
    }
    
}

function viewProduct(){
    var id = event.srcElement.parentElement.title;
    // console.log(productArray[id]);
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.viewItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].image);
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            break
        }
    }

    // window.location,href="../pages/cart.html;  
    
    // console.log(id);   
}

function addtoCart(){
    var id = event.srcElement.parentElement.title;
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.addItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].image);
            
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            break
        }
    }
    // addtoCart.href="../pages/cart.html";
    // location.href="../pages/cart.html";
    
    // console.log(id);
    // console.log(id.innerHTML);
    // displayCart()
    window.location="../elite/assets/pages/cart.html";
    
    console.log("added to cart");
    
}


function displayCart(){
    
    var ul = document.querySelector("#cart-product");
    ul.innerHTML="";
    obj.itemList.forEach(function(x){
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        span.innerHTML=x.name;
        img.src=x.image;

        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
    })
    
}