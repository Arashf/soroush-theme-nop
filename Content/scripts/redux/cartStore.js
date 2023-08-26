
const HTTP_METHODS_CARTREDUX = {POST: 'POST', GET: 'GET'}

const BUTTON_METHODS = {ADD: 'ADD', UPDATE: 'UPDATE'}
class RequestHandlerCart {
    static buildHeaders(method) {
        const contentTypes = {
            [HTTP_METHODS_CARTREDUX.POST]: 'application/json',
        }
        return {'Content-Type': contentTypes[method]}
    }

    static generateRequestOptions(method, data) {
        const headers = this.buildHeaders(method);
        const body = data ? JSON.stringify(data) : null;
        return {method, headers, body};
    }

    static async requestContentFrom(url, method, data = null) {
        const options = this.generateRequestOptions(method, data);
        try {
            const response = await fetch(url, options);
            if (method === 'GET') {
                return response.json();
            } else {
                return response
            }
        } catch (error) {
            ErrorHandler.logAndThrow(error, 'Fetch Error');
        }
    }
}



/** shoppingCartReducer  */



var store = Redux.createStore(shoppingCartReducer)
function shoppingCartReducer(state = [], action) {
    if (action.type === "SHOPPING_CART") {
        return  action.payload
    }
    return state
    // switch(action.type){
    //     case "SHOPPING_CART":
    //         return [...state, action.payload];
    //     default:
    //         return state;
    // }

}
store.subscribe(() => {
    console.log('Subscribes',store.getState())
    
    let data = []
    store.getState(
        data = store.getState()
    )
    let cartSide = document.getElementById('cartSideNav')
    let html = cartHeader(data.OrderTotalResponseModel?.SubTotal, data.Count)

    html = html + `<div >`
    data.Items.forEach((element) => {
        html = html + cartItemGenerator(element)
    })
    html = html + `</div>`
    
    html = html + cartFooterGenerator()
    cartSide.innerHTML = html
    data.Items.forEach((element) => {
        let cartItemquantity = document.getElementById(`quantity-${element.Id}`)
        ButtonsManagerCart.UpdateCard(element.ProductId,element.Id,element.Quantity);
    })
})

/** CartManager Class Inorder to Fetch API for Update Cart  */

class CartManagerRedux {
    static getUpdatedCartData = async () => {
        let response = await RequestHandlerCart.requestContentFrom('/api/ShoppingCart', HTTP_METHODS_CARTREDUX.GET)
        console.log('Update')
         store.dispatch({type: 'SHOPPING_CART', payload: response})
    }
    static UpdateCardRedux = async (cartId,productId,count,method) => {
        let btnLoading =document.getElementById(`cart-counterbox-${cartId}`)
        let svgDisable =document.querySelectorAll(`#cart-counterbox-${cartId} button svg`)
        svgDisable[0].classList.add('disableSvgCartBtn')
        svgDisable[1].classList.add('disableSvgCartBtn')
        btnLoading.classList.add("loading");
        document.getElementById(`cart-counterbox-${cartId}`).disabled = true;
        // document.getElementById(`cart-counterbox-${productId}`).classList.add('disableAddToCartPlus')
        
        const counts = count
        const idCart = cartId
        let cartContents = ''
        let productCount

        if (method === 'ADD')
        {
            cartContents =  [
                {key:`addtocart_${productId}.EnteredQuantity`, value:counts + 1},
                {key:`itemquantity${idCart}`, value:counts + 1},
                {key:`addtocart_${productId}.UpdatedShoppingCartItemId`, value:idCart}
            ]
        }
        else if (method === 'UPDATE')
        {
            if (counts > 1){
                cartContents =  [
                    {key:`addtocart_${productId}.EnteredQuantity`, value:counts - 1},
                    {key:`itemquantity${idCart}`, value:counts - 1},
                    {key:`addtocart_${productId}.UpdatedShoppingCartItemId`, value:idCart}
                ]
            }
            else {
                cartContents =  [
                    { value: 0, key: "itemquantity1" },
                    { value: `${idCart}`, key: "removefromcart" }
                ]
                // document.getElementById("productCount").value= 0;
            }
        }

        const options = RequestHandlerCart.generateRequestOptions(HTTP_METHODS_CARTREDUX.POST, cartContents);
        try {
            await fetch('/api/ShoppingCart/UpdateCart', options);
            // const response = await fetch('/api/ShoppingCart/UpdateCart', options);
            // return response
             await  CartManagerRedux.getUpdatedCartData()
             btnLoading.classList.remove("loading");
            svgDisable[0].classList.remove('disableSvgCartBtn')
            svgDisable[1].classList.remove('disableSvgCartBtn')
            document.getElementById(`cart-counterbox-${cartId}`).classList.remove('disableAddToCartPlus')
             
             document.getElementById(`cart-counterbox-${cartId}`).disabled = false;
             
            ///////////////////////////////////////////// UpDate CartItem
          
            // await  CartManagerRedux.getUpdatedCartData()
            // await ButtonsManagerCart.UpdateCard(productId,productCount)
        } catch (error) {
            // ErrorHandler.logAndThrow(error, 'Fetch Error');
        }
        // TODO: Update Redux
    }
}


CartManagerRedux.getUpdatedCartData()

/** Content Generator  */
function cartHeader(totalPrice, cartCountItems) {
    return `
    <div class="sticky top-0 w-full bg-[#f7f7f7] shadow-md z-[9999]">
        <div class="flex justify-between items-center gap-[60px] p-2 border-b-[1px] border-solid border-[#f0f0f0]">
            <div
                class="flex items-center">
                <span class="text-[14px] text-zinc-500 p-1">سبد خرید</span>
                <BsFillCaretLeftFill size={15} class="text-zinc-400"/>
                <div class="flex items-center pr-2">
                    <div class="flex items-center text-zinc-600 pl-5">
                        <span id='cartCountItems'>${cartCountItems}</span>
                        <span class="text-[12px] font-semibold pr-2">کالا</span>
                    </div>
                </div>
            </div>
            <div
               onclick="closeCartSideNav()"
                class="flex cursor-pointer">
                <svg class="fill-iconLightColor stroke-iconLightColor stroke-3" height="20px" width="20px"
                     id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                     xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            </div>
        </div>
    
    <div class="w-full bg-[#f7f7f7] shadow-md z-[999]">
        <div class="px-3 py-2">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <MdOutlinePriceChange class="text-xl text-zinc-500"/>
                    <span class="text-[14px] font-semibold text-zinc-400 pr-1">
                        مبلغ سفارش
                    </span>
                </div>
                <div class="text-[#12b886] text-[15px] font-semibold">
                    ${totalPrice}
                </div>
            </div>
            <div class="px-2">
            </div>
           <!--   <div class="flex items-center justify-between pt-2">
                <div class="flex items-center">
                    <MdOutlineDeliveryDining class="text-xl text-zinc-500"/>
                    <span class="text-[14px] font-semibold text-zinc-400 pr-1">
                        هزینه ارسال
                    </span>
                </div>
                    <div class="text-successSecondary text-[15px] font-semibold">رایگان</div>
            </div> -->
        </div>
    </div>
    </div>`
}

function cartItemGenerator(element) {
    return `
        <div id="cartProductBox-${element.Id}" class="h-110px border-b-[1px] border-solid border-gray-cardMobileborder mt-4 mb-4">
            <div class="flex h-[120px] pl-3 pr-1">
                <div class="flex-initial w-[30%]">
                    <a href="/product">
                        <div class="relative w-full h-[100px]">
                            <img title="${element.Picture.Title}" alt="${element.Picture.AlternateText}" loading="lazy" sizes="100vw" src="${element.Picture.ImageUrl}" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                        </div>
                    </a>
                </div>
                <div class="flex flex-initial w-[70%] flex-col">
                    <div class="text-[13px] leading-[20px] text-zinc-500 font-semibold">${element.ProductName}</div>
                    <div class="flex items-center justify-between h-full">
                        <div>
                            <div class="pt-2">
                                <span class="text-[16px] text-zinc-800 font-semibold">${element.SubTotal.replace('تومان', '')}</span><span class="text-[10px] pr-1">تومان</span>
                            </div>
                        </div>
                <!-- ///////////////////////////////////////////// ADD TO CART BUTTON-->
                            <div id="cart-counterbox-${element.Id}" class="cart-counterbox action-btn flex align-center justify-between w-[110px] h-[32px] rounded-[5px] during-300 font-bold">
                                <button class="flex flex-1 p-[7px] text-red-custRed"
                                 id="plus-button-${element.Id}"
                                 onclick="CartManagerRedux.UpdateCardRedux(${element.Id},${element.ProductId},${element.Quantity},BUTTON_METHODS.ADD);">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                                    </svg>
                                </button>
                                <div id="quantity-${element.Id}" class="product-quantity-cart flex flex-1 justify-center items-center duration-300 text-zinc-500">${element.Quantity}</div>
                                 <button class="changeState-btn flex flex-1 justify-end p-[7px] text-red-custRed"
                                 onclick="CartManagerRedux.UpdateCardRedux(${element.Id},${element.ProductId},${element.Quantity},BUTTON_METHODS.UPDATE);"
                                id="change-state-button-${element.Id}" 
                               >
<!--                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">-->
<!--                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>-->
<!--                                    </svg>-->
                                </button>
<!--                                <button class="hidden flex flex-1 p-[7px]">-->
<!--                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">-->
<!--                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>-->
<!--                                    </svg>-->
<!--                                </button>-->
                            </div>
                  </div>
              </div>
        </div>
    </div>`
}
function cartFooterGenerator() {
    return ` <div class="w-full mt-auto absolute bottom-0 left-0">
          <div
            class="bg-[#ffff] flex flex-col justify-between px-3 pb-[15px]
                border-t-[1px] border-solid border-gray-cardMobileborder"
          >
             <!-- <div
              class="bg-blue-50 p-2 w-full text-center rounded-[5px]">
              <span class="text-blue-cardMobile">
                <span class="text-[13px]">حداقل سفارش</span>
                <span class="pr-1 pl-[2px]"> 100,000</span>
                <span class="text-[10px]">تومان</span>
              </span>
            </div>
            <div
              class="bg-blue-50 px-3 py-2 mb-2 w-full text-[14px] rounded-[5px] flex items-center justify-between">
              <div class="flex items-center gap-1">
                <AiOutlineDollar size={20} class="text-blue-cardMobile" />
                <span class="text-blue-cardMobile">قابل پرداخت</span>
              </div>
              <div class="flex gap-[2px] items-center">
                <span class="text-[15px]">13,420,000</span>
                <span class="text-[10px]">تومان</span>
              </div>
            </div> -->
            <div>
                    <a href="/order/Checkout" class="buttons complete-button">
                                    <button type="submit"><span class="text-[14px] font-semibold">
                                    نهایی کردن سفارش
              </span>
                                    </button>
                                </a>
            </div>
          </div>
        </div>`}
///////////////////////////////////////////////////// ButtonsManager
class ButtonsManagerCart {
    static UpdateCard = function (productId,cartId,count) {
        let cartItemquantity = document.getElementById(`quantity-${cartId}`)
        
        cartItemquantity.innerHTML = count
        let productCount = count
        if (productCount < 1) {
            // document.getElementById(`cartProductBox-${productId}`).classList.add('inVisibleElement')
        } else if (productCount >= 1) {
            document.getElementById(`cartProductBox-${cartId}`).classList.remove('inVisibleElement')
            this.addToCardPlus(cartId,count)
        }
    }

    // static UpdateCard = function (count) {
    //     let productCount = count
    //     // if (UtilCart.getIdValue("productCount") === null || UtilCart.getIdValue("productCount") === undefined) {
    //     //     productCount = 0
    //     // } else {
    //     //     productCount = UtilCart.getIdValue("productCount")
    //     // }
    //     if (productCount < 1) {
    //         document.querySelector('.cart-counterbox').classList.add('inVisibleElement')
    //         // let counterBox = document.querySelector(".product-quantity-cart");
    //         // DOMManagerCart.setElementInnerText(counterBox, productCount ? productCount : 0)
    //         // document.querySelector(".AddToCardProduct-status").innerHTML = '<span class="trash-icon"></span>'
    //     } else if (productCount >= 1) {
    //         document.querySelector('.cart-counterbox').classList.remove('inVisibleElement')
    //         this.addToCardPlus(productId,count)
    //     }
    //     // let counterBox_value = count;
    //     // if (counterBox_value < 1) {
    //     //     document.querySelector('.addToCard-button').classList.remove('inVisibleElement');
    //     //     counterBox_value = 0;
    //     //     counterBox.innerText = counterBox_value;
    //     //     document.querySelector("button.AddToCardProduct-status").innerHTML = '';
    //     // } else if (counterBox_value === 1) {
    //     //     document.querySelector("button.AddToCardProduct-status").innerHTML = '<span class="trash-icon"></span>';
    //     // }
    // }

    static addToCardPlus = function (cartId,count) {
        let btnId = document.getElementById(`change-state-button-${cartId}`)
        let btnAttribureId = btnId.getAttribute('id')
        let counterBox = count;
        if (counterBox === 1) {
            document.getElementById(btnAttribureId).innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg>';
        } else if (counterBox > 1) {
            document.getElementById(btnAttribureId).innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>'
        }
    }
}


function closeCartSideNav() {
    console.log('closeCartSideNav')
    document.querySelector("html").classList.remove("remove-scrolling")
    document.getElementById("cartSideNav").classList.remove("cartNavbarActive")
    document.getElementById('backdrop-cart').style.display =
        "none"
}

function openCartSideNav() {
    console.log('click')
                CartManagerRedux.getUpdatedCartData()
                document.getElementById("cartSideNav").classList.add("cartNavbarActive")
                document.getElementById('backdrop-cart').style.display = "block"
                document.querySelector("html").classList.add("remove-scrolling")
}

// function openCartSideNav() {
//     const sideNav = document.querySelectorAll(".toggleCartSideNav")
//     if (sideNav !== null && sideNav !== undefined) {
//        
//         sideNav.forEach((element)=>{
//             element.addEventListener("click", () => {
//                 CartManagerRedux.getUpdatedCartData()
//                 document.getElementById("cartSideNav").classList.add("cartNavbarActive")
//                 document.getElementById('backdrop-cart').style.display = "block"
//                 document.querySelector("html").classList.add("remove-scrolling")
//             })
//         })
//     }
// }
// openCartSideNav()

// function closeCartSideNav() {
//     setTimeout(function () {
//         const closeSideNav = document.getElementById("closeCartSideNav")
//         console.log('closeSideNav',closeSideNav)
//         if (closeSideNav !== null && closeSideNav !== undefined) {
//             // closeSideNav.forEach((element)=>{
//             closeSideNav.addEventListener("click", () => {
//                 console.log('Click')
//                 document.getElementById("cartSideNav").classList.remove("cartNavbarActive")
//                 document.getElementById('backdrop-cart').style.display =
//                     "none"
//                 document.querySelector("html").classList.remove("remove-scrolling")
//             })
//             // })
//         }
//     },1000)
// }
