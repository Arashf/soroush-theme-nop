
window.addEventListener("load", function () {
    function hiddenNotification() {
        const buttonDismiss = document.getElementById('notification')
        buttonDismiss.addEventListener('click', () => {
            const element = document.getElementById('notification')
            element.classList.remove('received')
        })
    }

    function checkBarNotification() {
        const addToCartButton = document.querySelectorAll('.addToCard-plus-category')
        const notification = document.getElementById('notification')

        addToCartButton.forEach((elementValue)=>{
            
            elementValue.addEventListener('click', () => {
                const element = document.querySelector("#bar-notification .success")[0]
                console.log('element',element)
                if(element !== null && element !== undefined){
                    console.log('@#@#@##@#notify', element.classList.contains('success'))
                    
            if (element.classList.contains('success')) {
                  notification.classList.add('received')
                element.style.display = "none"
            } else {
                // console.log('Not Received')
                element.style.display = "none"
                 notification.classList.remove('received')
              }
                }
          })
        })
    }
    // function myGreeting() {
    //     element.style.display = "none"
    //     notification.classList.remove('received')
    // }
  
    checkBarNotification()
    hiddenNotification()
    // const myTimeout = setTimeout(hiddenByTime, 5000);
    // function myStopFunction() {
    //     clearTimeout(myTimeout);
    // }
    
})