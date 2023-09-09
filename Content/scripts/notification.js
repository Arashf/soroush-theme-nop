

    function hiddenNotification() {
        const buttonDismiss = document.getElementById('button-dismiss')
        buttonDismiss.addEventListener('click', () => {
            const element = document.getElementById('notification')
            element.classList.remove('received')
            element.classList.remove('visibleNotification')
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
                    // console.log('@#@#@##@#notify', element.classList.contains('success'))
                    
            if (element.classList.contains('success')) {
                  notification.classList.add('received')
                notification.classList.add('visibleNotification')
                element.style.display = "none"
            } else {
                // console.log('Not Received')
                element.style.display = "none"
                 notification.classList.remove('received')
                notification.classList.remove('visibleNotification')
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



    let notificationExist = document.getElementById('notification').classList.contains('received')
    let hideNotify = document.getElementById('notification')
    if(notificationExist) {
        setTimeout(function () {
             hideNotify.classList.remove('received')
        }, 5000)
    }
    
    
