

    const HTTP_METHODS = {POST: 'POST', GET: 'GET'}

    class RequestHandler {
        static buildHeaders(method) {
            const contentTypes = {
                [HTTP_METHODS.POST]: 'application/json',
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
    let cartData


/////////////////////////////////////////////////  Set Redux State 
function shoppingCartReducer(state = [] , action) {
    if (action.type === "SHOPPING_CART") {
        return [...state, action.payload]
    }
    return state

}

var store = Redux.createStore(shoppingCartReducer)
    
// function render() {
//     console.log('###########',store.getState())
//      shoppingCartCount.innerHTML = store.getState()
// }

// render()
    class CartManager {
        static getUpdatedCartData = async () => {
            let response = await RequestHandler.requestContentFrom('/api/ShoppingCart', HTTP_METHODS.GET)
            
            store.dispatch({type: 'SHOPPING_CART', payload: response})
          
        }
    }
    
 CartManager.getUpdatedCartData()

  ///////////////////////////////////////////////////// Using Redux State inside App  
    var shoppingCartCount = document.getElementById('cartquantity')
    
    store.subscribe(() => {
        let data =[]
        store.getState(
            data = store.getState()[0]
        )
        let cartSide = document.getElementById('cartSideNav')
        let html = cartHeader(data.OrderTotalResponseModel?.SubTotal) 
        data.Items.forEach((element)=>{
            html = html + cartItemGenerator(element)
            // console.log('Element',element)
        })
        cartSide.innerHTML = html
    })
    
    // shoppingCartCount.innerHTML = store.getState()
    
    // let el = document.querySelectorAll('.cartquantity')
    // el.forEach((element) => {
    //     element.addEventListener('click', function () {
    //     })
    // })

function cartHeader(totalPrice)
{
    return `<div class="sticky top-0 w-full bg-[#f7f7f7] shadow-md z-[9999]">
        <div class="flex justify-between items-center gap-[60px] px-3 p-2 border-b-[1px] border-solid border-[#f0f0f0]">
            <div
                class="flex items-center">
                <span class="text-[14px] text-zinc-500 p-1">سبد خرید</span>
                <BsFillCaretLeftFill size={15} class="text-zinc-400"/>
                <div class="flex items-center pr-2">
                    <div class="flex items-center text-zinc-600 pl-5">
                        <span></span>
                        <span class="text-[12px] font-semibold pr-2">کالا</span>
                    </div>
                </div>
            </div>

            <div
                class="closeCartSideNav flex cursor-pointer">
                <svg class="fill-iconLightColor stroke-iconLightColor stroke-3" height="20px" width="20px"
                     id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                     xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            </div>
        </div>
    </div>
    <div class="w-full bg-[#f7f7f7] shadow-md z-[999]">
        <div class="px-3 py-3">
            <div class="flex items-center justify-between pb-2">
                <div class="flex items-center">
                    <MdOutlinePriceChange class="text-xl text-zinc-500"/>
                    <span class="text-[15px] font-semibold text-zinc-400 pr-1">
                        مبلغ سفارش
                    </span>
                </div>
                <div class="text-[#12b886] text-[15px]">
                    ${totalPrice}
                </div>
            </div>
            <div class="px-2">
            </div>
            <div class="flex items-center justify-between pt-2">
                <div class="flex items-center">
                    <MdOutlineDeliveryDining class="text-xl text-zinc-500"/>
                    <span class="text-[15px] font-semibold text-zinc-400 pr-1">
                        هزینه ارسال
                    </span>
                </div>
                <div class="text-successSecondary text-[16px]">رایگان</div>
            </div>
        </div>
    </div>`
}

function cartItemGenerator(element){
    return `<div id="content">
        <div class="h-110px border-b-[1px] border-solid border-gray-cardMobileborder mt-4 mb-4">
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
                                <span class="text-[18px] text-zinc-800 font-semibold">${element.SubTotal.replace('تومان','')}</span><span class="text-[10px] pr-1">تومان</span>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex align-center justify-between w-[110px] h-[32px] rounded-[5px] during-300 font-bold
                         cardCounterBox">
                                <button class="flex flex-1 justify-start p-[7px] text-red-custRed" onclick="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                    </svg>
                                </button>
                                <button class="hidden flex flex-1 p-[7px]">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                </button>
                                <div class="flex flex-1 justify-center items-center duration-300 text-zinc-500">1</div>
                                <button class="flex flex-1 justify-end p-[7px]">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>`
}