$(function () {
    $('#shop-name').click(function () {
        location.href = './index.html'
    })

    // Cart Value
    if (localStorage.getItem('cartValue') == 'NaN' || localStorage.getItem('cartValue') == null) {
        console.log(localStorage.getItem('cartValue'))
        localStorage.setItem('cartValue', 0);
    } else {
        $('#cart-item-count').text(localStorage.getItem('cartValue'));
    }



    // ItemList from local storage
    var productList = JSON.parse(localStorage.getItem('productList'))
    console.log(productList)


    var totalAmount = 0;
    if (productList != null && productList != "" && productList != undefined) {
        $('.item-count span').text(productList.length);
        for (var i = 0; i < productList.length; i++) {
            totalAmount += productList[i].count * productList[i].price;
            checoutItemCardGenerator(productList[i])
        }
    }

    // var totalAmountText
    function checoutItemCardGenerator(productItem) {
        var checkoutCardWrapper = $('<div>').addClass('checkout-card-wrapper');

        var checkoutCardImage = $('<img>').addClass('checkout-card-image').attr('src', productItem.preview);

        var checkoutCardContent = $('<div>').addClass('checkout-card-content');

        var checkoutCardHeader = $('<p>').addClass('checkout-card-header').text(productItem.name);

        var checkouItemCount = $('<p>').addClass('checkout-item-count').text('x' + productItem.count);

        var checkoutItemAmount = $('<p>').addClass('checkout-item-amount').text('Amount: Rs ' + (productItem.count * productItem.price));

        checkoutCardContent.append(checkoutCardHeader, checkouItemCount, checkoutItemAmount)
        checkoutCardWrapper.append(checkoutCardImage, checkoutCardContent)

        $('#left-section').append(checkoutCardWrapper);

    }

    // Right Section
    console.log(totalAmount)

    


    $('#checkout-total-amount span').text(totalAmount)

    $('#place-order-button').click(function () {
        productList = JSON.stringify([]);
        localStorage.setItem('cartValue', '0');
        localStorage.setItem('productList', productList);
        localStorage.setItem('promoCode', 'false')
        location.href = './thankyou.html'
    })


})
