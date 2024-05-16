document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products-container');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const products = [
        { 
            id: 1, 
            name: 'Product 1', 
            price: 10, 
            description: `
            <b>Color:</b> Multicolor<br>
            <b>Style:</b> Boho<br>
            <b>Pattern Type:</b> Floral<br>
            <b>Type:</b> Cami<br>
            <b>Sleeve Length:</b> Sleeveless<br>
            <b>Neckline:</b> Spaghetti Strap<br>
            <b>Waist Line:</b> High Waist<br>
            <b>Hem Shaped:</b> Flared<br>
            <b>Length:</b> Short<br>
            <b>Fit Type:</b> Regular Fit<br>
            <b>Fabric:</b> Slight Stretch<br>
            <b>Care Instructions:</b> Machine wash or professional dry clean<br>
            <b>Chest pad:</b> No Padding<br>
            <b>Material:</b> Fabric
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/06/28/1624850560b8017039fb94d82f3e7872d85de207d5_thumbnail_405x552.jpg?fbclid=IwAR1N0IRpjnckt8U1ZtK_bSLcEZeq5oppyFXucLrCnDYk3gZA_tEear57sPA_aem_AYilEffr7dzyq7UhAf7o3ykJbsV9j4sbenTMyhECmtYinCY2IQdfvRldRLVs-C54TocHmgUMsXfIhp-Lj4-mXzlh' 
        },
        { 
            id: 2, 
            name: 'Product 2', 
            price: 20, 
            description: `
            <b>Color:</b> Yellow<br>
                <b>Style:</b> Casual<br>
                <b>Pattern Type:</b> Polka Dot<br>
                <b>Type:</b> A Line<br>
                <b>Details:</b> Ruffle Hem<br>
                <b>Neckline:</b> V neck<br>
                <b>Sleeve Length:</b> Cap Sleeve<br>
                <b>Sleeve Type:</b> Flounce Sleeve<br>
                <b>Waist Line:</b> High Waist<br>
                <b>Hem Shaped:</b> Flounce<br>
                <b>Length:</b> Short<br>
                <b>Fit Type:</b> Regular Fit<br>
                <b>Fabric:</b> Non-Stretch<br>
                <b>Material:</b> Fabric<br>
                <b>Care Instructions:</b> Machine wash or professional dry clean
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/04/13/16183145961b50761125faecb11d03cd692a5eee63_thumbnail_720x.jpg?fbclid=IwAR3bPqzpUVWMvW2RNkQlv4XPkPeEWsTpkrHVyiGF64xpVSoUUAHLHIPJMiE_aem_AYg53mobXGeMUf7mNMN8QeTMfbDgChMjLdUxftLzkYPyywoTHJ4XUUITs94EgpUgBhT2ZiYGy0Sdq9QYfcdHsSWQ' 
        },
        { 
            id: 3, 
            name: 'Product 3', 
            price: 30, 
            description: `
            <b>Color:</b> Black<br>
            <b>Style:</b> Boho<br>
            <b>Pattern Type:</b> Ditsy Floral<br>
            <b>Type:</b> A Line<br>
            <b>Details:</b> Ruffle, Ruched, Drawstring, Zipper<br>
            <b>Neckline:</b> Sweetheart<br>
            <b>Sleeve Length:</b> Short Sleeve<br>
            <b>Sleeve Type:</b> Puff Sleeve<br>
            <b>Waist Line:</b> High Waist<br>
                <b>Hem Shaped:</b> Flared<br>
                <b>Length:</b> Short<br>
                <b>Fit Type:</b> Regular Fit<br>
                <b>Fabric:</b> Non-Stretch<br>
                <b>Material:</b> Fabric<br>
                <b>Care Instructions:</b> Machine wash or professional dry clean
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/03/16/161586744236c87956fdf2fac0f148214336cf5942_thumbnail_720x.webp.jpg?fbclid=IwAR1SbeLeUNvc-uwVc0re7UgDgxelJs7CVtd4aRccIeZpBs9mDJV6k9nri7o_aem_AYjbr2IUOj9K0hMkmn4L7Jb6poj9vyk7NyG8ny8hUr7TDhhmoxC9BYzgWbDMDhy9Tuko0lTol8TUaksLnSCyN_2W' 
        },
        { 
            id: 4, 
            name: 'Product 4', 
            price: 40, 
            description: `
            <b>Color:</b> Multicolor<br>
            <b>Pattern Type:</b> Plain<br>
            <b>Type:</b> Track Shorts<br>
            <b>Closure Type:</b> Elastic Waist<br>
            <b>Details:</b> Contrast Binding<br>
            <b>Waist Line:</b> Natural<br>
            <b>Pants Length:</b> Short<br>
            <b>Fit Type:</b> Regular Fit<br>
            <b>Fabric:</b> Slight Stretch<br>
            <b>Care Instructions:</b> Machine wash or professional dry clean<br>
            <b>Pants Material:</b> Knitted Fabric
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/11/01/01/1698805073297b1f30eeccd7d61c3a6daae497bc4c_thumbnail_336x.jpg' 
        },
        { 
            id: 5, 
            name: 'Product 5', 
            price: 50, 
            description: `
            <b>Color:</b> Grey<br>
            <b>Pattern Type:</b> Plain<br>
            <b>Type:</b> Straight Leg<br>
            <b>Closure Type:</b> Zipper Fly<br>
            <b>Details:</b> Button, Pocket, Raw Hem, Zipper<br>
            <b>Waist Line:</b> Natural<br>
            <b>Length:</b> Short<br>
            <b>Fit Type:</b> Regular Fit<br>
            <b>Fabric:</b> Non-Stretch<br>
            <b>Material:</b> Denim<br>
            <b>Care Instructions:</b> Machine wash, do not dry clean
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2022/03/11/1646960390c1a07c42f88d44a2a7adb91962142a24_thumbnail_720x.webp' 
        },
        { 
            id: 6, 
            name: 'Product 6', 
            price: 60, 
            description: `
            <b>Color:</b> Black<br>
            <b>Heel Height:</b> Low Heel<br>
            <b>Upper Material:</b> PU Leather<br>
            <b>Lining Material:</b> Suedette<br>
            <b>Insole Material:</b> PU Leather<br>
            <b>Outsole Material:</b> Phylon
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/06/05/16859442180f5898414aee5d52edf76217fd70555f_thumbnail_336x.jpg' 
        },
        { 
            id: 7, 
            name: 'Product 7', 
            price: 70, 
            description: `
            <b>Color:</b> White<br>
            <b>Type:</b> Thong Sandals<br>
            <b>Style:</b> Fashionable<br>
            <b>Toe:</b> Toe Post<br>
            <b>Pattern Type:</b> Plain<br>
            <b>Heels:</b> Stiletto<br>
            <b>Heel Height:</b> High Heel (9.5cm/3.7inch)<br>
            <b>Upper Material:</b> PU Leather<br>
            <b>Lining Material:</b> PU Leather<br>
            <b>Insole Material:</b> PU Leather<br>
            <b>Outsole Material:</b> Rubber
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2022/02/10/1644492073cc2dcbab7d29bbaafe11415a7992368a_thumbnail_336x.jpg' 
        },
        { 
            id: 8, 
            name: 'Product 8', 
            price: 80, 
            description: `
            <b>Color:</b> Multicolor<br>
            <b>Style:</b> Cute<br>
            <b>Pattern Type:</b> Colorblock<br>
            <b>Details:</b> Ruffle, Belted<br>
            <b>Neckline:</b> Round Neck<br>
            <b>Sleeve Length:</b> Cap Sleeve<br>
            <b>Top Type:</b> Tee<br>
            <b>Bottom Type:</b> Skirt<br>
            <b>Skirts & Tops Material:</b> Fabric<br>
            <b>Length:</b> Regular<br>
            <b>Sleeve Type:</b> Flounce Sleeve<br>
            <b>Fit Type:</b> Regular Fit<br>
            <b>Fabric:</b> Medium Stretch<br>
            <b>Care Instructions:</b> Hand wash, do not dry clean
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/12/08/1638954025e15d826a62de3dfba0497b89e29f7ab9_thumbnail_720x.jpg' 
        },
        { 
            id: 9, 
            name: 'Product 9', 
            price: 90, 
            description: `
            <b>Color:</b> Beige<br>
            <b>Style:</b> Vacation<br>
            <b>Pattern Type:</b> Plain<br>
            <b>Toe:</b> Open Toe<br>
            <b>Size Fit:</b> True To Size<br>
            <b>Upper Material:</b> Suedette<br>
            <b>Lining Material:</b> PU Leather<br>
            <b>Insole Material:</b> PU Leather
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2021/05/25/162193506113f56dacf5c55cb2af87a23f42fc95d6_thumbnail_720x.webp' 
        },
        { 
            id: 10, 
            name: 'Product 10', 
            price: 100, 
            description: `
            <b>Color:</b> White<br>
            <b>Style:</b> Casual<br>
            <b>Pattern Type:</b> Plain<br>
            <b>Neckline:</b> Square Neck<br>
            <b>Details:</b> Asymmetrical, Ruched<br>
            <b>Sleeve Length:</b> Long Sleeve<br>
            <b>Sleeve Type:</b> Flounce Sleeve<br>
            <b>Length:</b> Crop<br>
            <b>Fit Type:</b> Slim Fit<br>
            <b>Fabric:</b> Slight Stretch<br>
            <b>Material:</b> Knitted Fabric
            `, 
            imageUrl: 'https://img.ltwebstatic.com/images3_pi/2023/06/09/168627547864be537f26cf11d4e695b5196b412f32_thumbnail_336x.jpg' 
        },
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: ₱${product.price.toFixed(2)}</p>
            <button onclick="showProductDetails(${product.id})">View Details</button>
            <div class="product-details" id="product-details-${product.id}" style="display: none;">
                <p>${product.description}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    });

    window.showProductDetails = function (productId) {
        const productDetails = document.getElementById(`product-details-${productId}`);
        if (productDetails.style.display === 'none') {
            productDetails.style.display = 'block';
        } else {
            productDetails.style.display = 'none';
        }
    };

    window.addToCart = function (id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${name} - ₱${price.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        const currentTotal = parseFloat(cartTotal.innerText);
        cartTotal.innerText = (currentTotal + price).toFixed(2);
    };

    window.checkout = function () {
        alert('Checkout function triggered!');
    };
});
