const product=
[
    {
        id    :  0,
        image : './image/galaxy.jpg',
        title : 'Samsung galaxy' ,
        price : 10000000 ,
    },

    {
        id    :  1,
        image : './image/iPhone 2.jpg',
        title : 'Iphone',
        price : 12300000,
    },

    {
        id    :  2,
        image : './image/iphone.jpg',
        title : ' Iphone 2',
        price : 230000000, 
    },

    {
        id    :  3,
        image : './image/Sam.jpg',
        title : 'Samsung',
        price : 4300000, 
    },

];


const categories = [... new Set(product.map((item)=>
    {return item}))]


let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price}=item;
    return(
        `<div class= 'box'>
        <div class = 'img-box'>
            img class = 'images' src=${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>   
        `+
        "<bottom onclick = 'addtocart("+(i++)+")'>Add to cart<?button>"+
        `</div>
        </div>`
    )
}). join('')  


var cart =[];

function addtocart(a)
{
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a)
{
    cart.splice(a, 1);
    displaycart();
}

function displaycart()
{
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0)
    {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else
    {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    
}



























