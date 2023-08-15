$(document).ready(function () {
  $('.js-example-basic-single').select2();
});


///////////////////////////////////////////////////******** */=======>  Onload JavaScript Functions
// window.addEventListener("load", function () {
function scrollToTop() {
  const element = document.getElementById("scrollToTop")
  if (element !== null && element !== undefined) {
    element.addEventListener("click", () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    })
  }
}

function changeInnerTag() {
  element = document.querySelectorAll(".products-mobile-navigation-select")
  if (element != null && element != undefined) {
    element.forEach((elements) => {
      elements.outerHTML = elements.outerHTML.replace(/select/g, "div")
    })
  }
}
//////////////////////////////////////////////////////// BackDrop-overlay
// function backDropOverlay() {
//   const backDropOverlay = document.getElementById("backDropOverlay")
//   if (backDropOverlay !== undefined && backDropOverlay !== null) {
//     backDropOverlay.addEventListener("click", (e) => {
//       // document.onclick = function (e) {
//       const elementSideNav = document.getElementById("mobileSideNav")
//       const elementToggleSideNav = document.getElementById(
//         "toggleMobileSideNav"
//       )
//       if (
//         !elementSideNav.contains(e.target) &&
//         !elementToggleSideNav.contains(e.target)
//       ) {
//         document
//           .getElementById("mobileSideNav")
//           .classList.remove("navBarActive")
//         document.querySelector("header div.backDrop-overlay").style.display =
//           "none"
//         document.querySelector("html").classList.remove("remove-scrolling")
//       }
//       ///////////////////////////////////////////////////////// Profile Menu
//       const elementprofileMenuBox = document.getElementById("profileMenuBox")
//       const elementToggleProfileMenu =
//         document.getElementById("toggleProfileMenu")
//       if (elementToggleProfileMenu !== null && elementToggleProfileMenu !== undefined) {
//         if (
//           !elementprofileMenuBox.contains(e.target) &&
//           !elementToggleProfileMenu.contains(e.target)
//         ) {
//           document
//             .getElementById("profileMenuBox")
//             .classList.remove("profileMenuActive")
//           document.querySelector("header div.backDrop-overlay").style.display =
//             "none"
//           document.querySelector("html").classList.remove("remove-scrolling")
//         }
//       }
//     })
//   }
// }
//////////////////////////////////////////////////////// handleMobile Menu And SubMenu
function handleMobileMenu() {
  let sideNavSub = document.querySelectorAll("div.optionHead-sideNav")
  if (sideNavSub) {
    for (let i = 0; i < sideNavSub.length; i++) {
      sideNavSub[i].addEventListener("click", (e) => {
        const element = e.target.parentElement
        if (element.classList.contains("mainOptionHead")) {
          if (
            element.parentElement.parentElement.classList.contains("open")
          ) {
            element.parentElement.parentElement.classList.remove("open")
          } else {
            element.parentElement.parentElement.classList.add("open")
          }
        } else if (element.classList.contains("dropDown-icon")) {
          if (
            element.parentElement.parentElement.classList.contains("open")
          ) {
            element.parentElement.parentElement.classList.remove("open")
          } else {
            element.parentElement.parentElement.classList.add("open")
          }
        } else {
          if (element.classList.contains("open")) {
            element.classList.remove("open")
          } else {
            element.classList.add("open")
          }
        }
      })
    }
  }
}
/////////////////////////////////////////////////////

// function userMenu() {
//   const elementContent = document.getElementById("userMenu")
//   const element = document.querySelector(".userMenuToggle")
//   console.log("Element", element)
//   if (element !== null && element !== undefined) {
//     element.addEventListener("click", () => {
//       console.log("#####Click")
//       if (elementContent.classList.contains("userMenuclose")) {
//         console.log("Remove")
//         elementContent.classList.remove("userMenuclose")
//       } else {
//         console.log("Add")
//         elementContent.classList.add("userMenuclose")
//       }
//     })
//   }
// }

//////////////////////////////////////////////////////// Profile Menu Mobile

function openMobileSideNav() {
  const element = document.getElementById("toggleMobileSideNav")
  if (element !== null && element !== undefined) {
    element.addEventListener("click", () => {
      document.getElementById("mobileSideNav").classList.add("navBarActive")
      document.querySelector("header div.backDrop-overlay").style.display =
        "block"
      document.querySelector("html").classList.add("remove-scrolling")
    })
  }
}
function closeMobileSideNav() {
  const element = document.getElementById("closeBtnMobileSideNav")
  if (element !== null && element !== undefined) {
    element.addEventListener("click", () => {
      document.getElementById("mobileSideNav").classList.remove("navBarActive")
      document.querySelector("header div.backDrop-overlay").style.display =
        "none"
      document.querySelector("html").classList.remove("remove-scrolling")
    })
  }
}
///////////////////////////////////////////////////////////////////////////////

function userMenu() {
  const element = document.querySelectorAll(".userMenuToggle")
  element.forEach((el) => {
    const elementContent = el.querySelector("#userMenu")
    el.addEventListener("click", () => {
      if (elementContent.classList.contains("userMenuclose")) {
        elementContent.classList.remove("userMenuclose")
      } else {
        elementContent.classList.add("userMenuclose")
      }
    })
  })
}

//////////////////////////////////////////////////////// Profile Menu Desktop
function openProfileMenu() {
  const element = document.querySelector("#toggleProfileMenu")
  contentElement = document.querySelector("#profileMenuBox")
  element?.addEventListener("click", () => {
    contentElement.classList.add("profileMenuActive")
    document.querySelector("header div.backDrop-overlay").style.display =
      "block"
    document.querySelector("html").classList.add("remove-scrolling")
  })
}

function closeProfileMenu() {
  const element = document.getElementById("closebtnProfileMenuMobile")
  element?.addEventListener("click", () => {
    document
      .getElementById("profileMenuBox")
      .classList.remove("profileMenuActive")
    document.querySelector("header div.backDrop-overlay").style.display =
      "none"
    document.querySelector("html").classList.remove("remove-scrolling")
  })
}

/////////////////////////////////////////////
// function topHeaderBoxDesktop() {
//   const desktopHeader = document.getElementById("desktopHeader")
//   if (desktopHeader) {
//     var currentScrollPos = window.pageYOffset
//     if (currentScrollPos < 20) {
//       desktopHeader.classList.remove("stickyHeader")
//       desktopHeader.classList.add("fixedHeader")
//     }
//     else {
//       // setTimeout(() => {
//       desktopHeader.classList.remove("fixedHeader")
//       desktopHeader.classList.add("stickyHeader")
//       // }, 200);
//     }
//     // firstScrollPos = currentScrollPos
//   }
// }


// function topHeaderBoxMobile() {
//   const mobileHeader = document.getElementById("mobileHeader")
//   if (mobileHeader) {
//     var currentScrollPos = window.pageYOffset
//     var firstScrollPos = 150
//     if (currentScrollPos < firstScrollPos) {
//       mobileHeader.classList.remove("stickyHeader")
//     } else {
//       mobileHeader.classList.add("stickyHeader")
//     }
//   }
// }

// function stopScrolling() {
//   var subMenuLi = document.querySelectorAll(".desktopMenu ul .subMenu")
//   var overlayBackground = document.getElementById("overlayBackground")
//   if (subMenuLi) {
//     for (let i = 0; i < subMenuLi.length; i++) {
//       subMenuLi[i].addEventListener("mouseover", () => {
//         document.querySelector("html").classList.add("remove-scrolling")
//       })
//       subMenuLi[i].addEventListener("mouseleave", () => {
//         document.querySelector("html").classList.remove("remove-scrolling")
//       })
//     }
//   }
// }


///////////////////////////////////////////////////////////// End of Onload JavaScript Functions

userMenu()
// backDropOverlay()
openProfileMenu()
changeInnerTag()
handleMobileMenu()
scrollToTop()
openMobileSideNav()
closeMobileSideNav()
closeProfileMenu()
// })

/////////////////////////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  function topHeaderBoxDesktop() {
    const desktopHeader = document.getElementById("topHeaderBanner");
    // const sticky = desktopHeader.offsetTop;
    if (desktopHeader != null && desktopHeader != undefined) {
      if (window.pageYOffset > 50) {
        desktopHeader.classList.add("headerBanner")
      } else {
        desktopHeader.classList.remove("headerBanner");
      }
    }
  }

  function topHeaderBoxMobile() {
    const mobileHeader = document.getElementById("mobileHeader")
    if (mobileHeader) {
      var currentScrollPos = window.pageYOffset
      var firstScrollPos = 150
      if (currentScrollPos < firstScrollPos) {
        mobileHeader.classList.remove("stickyHeader")
      } else {
        mobileHeader.classList.add("stickyHeader")
      }
    }
  }

  function stopScrolling() {
    var subMenuLi = document.querySelectorAll(".desktopMenu ul .subMenu")
    var overlayBackground = document.getElementById("overlayBackground")
    if (subMenuLi) {
      for (let i = 0; i < subMenuLi.length; i++) {
        subMenuLi[i].addEventListener("mouseover", () => {
          document.querySelector("html").classList.add("remove-scrolling")
        })
        subMenuLi[i].addEventListener("mouseleave", () => {
          document.querySelector("html").classList.remove("remove-scrolling")
        })
      }
    }
  }

  topHeaderBoxDesktop()
  topHeaderBoxMobile()
  stopScrolling()

})


jQuery(document).ready(function ($) {
  var add_to_cart = $("button.add-to-cart-plus")
  var plus = $("button.add-to-cart-plus")
  var minus = $("button.add-to-cart-minus")

  $(add_to_cart).each(function () {
    $(this).on("click", function () {
      $(this).parent().addClass("active")
      $(this).parent().find(".add-to-cart-minus").html(`
            <svg width="20px" id="Layer_1" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <g fill="#fff" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
                    <polygon class="st0" id="Fill-6" points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1"/>
                    <polygon class="st0" id="Fill-7" points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1"/>
                    <polygon class="st0" id="Fill-8" points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1"/>
                    <polygon class="st0" id="Fill-9" points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1"/>
                    <path class="st0" d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6" id="Fill-10"/><path class="st0" d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" id="Fill-11"/>
                    </g>
                </g>
            </svg>
            `)
    })
    ////////////////////////////////////
    // if ($("#mobileSideNav").is(":active")) {
    //   console.log("active")
    //   $("body").addClass("fixed-position")
    // } else {
    //   $("body").removeClass("fixed-position")
    // }
  })

  $(plus).on("click", function (e) {
    e.preventDefault()
    var counter = $(this).parent().find(".add-to-cart-counter")
    var counter_value = parseInt($(counter).html())
      ? parseInt($(counter).html())
      : 0
    if (counter_value >= 1) {
      $(this).parent().find(".add-to-cart-minus").html(`
            <svg width="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <line stroke-width="3px" class="cls-1" x1="7" x2="25" y1="16" y2="16" />
                </g>
            </svg>
        `)
    }
    $(counter).html(parseInt(counter_value) + 1)
  })
  $(minus).on("click", function (e) {
    e.preventDefault()
    var counter = $(this).parent().find(".add-to-cart-counter")
    var counter_value = parseInt($(counter).html())
    if (counter_value == 1) {
      $(this).parent().removeClass("active")
      $(this).parent().find(".add-to-cart-plus").html(`
           <svg width="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <line stroke-width="3px" x1="16" x2="16" y1="7" y2="25" />
                    <line stroke-width="3px" x1="7" x2="25" y1="16" y2="16" />
                </g>
            </svg>
            `)
    }
    if (counter_value == 2) {
      $(this).parent().find(".add-to-cart-minus").html(`
             <svg width="20px" id="Layer_1" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <g fill="#fff" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
                    <polygon class="st0" id="Fill-6" points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1"/>
                    <polygon class="st0" id="Fill-7" points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1"/>
                    <polygon class="st0" id="Fill-8" points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1"/>
                    <polygon class="st0" id="Fill-9" points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1"/>
                    <path class="st0" d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6" id="Fill-10"/><path class="st0" d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" id="Fill-11"/>
                    </g>
                </g>
            </svg>
            `)
    }
    $(counter).html(parseInt($(counter).html()) - 1)
  })
})

///////////////////////////////////////////////////////// JavaScript onload Methods
window.addEventListener("load", function () {
  ///////////////////////////////////////////////////// Home Page Sliders
  function homePageSlider() {
     if (typeof Swiper !== "undefined" && typeof Swiper !== null) {
    const swiper = new Swiper("#bannerSwiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
     }
  }
  function specialOffersCarousel() {
    if (typeof Swiper !== "undefined" && typeof Swiper !== null) {
      const swiper = new Swiper("#specialOffersSwiper", {
        direction: "horizontal",
        // slidesPerView: 1,
        spaceBetween: 10,
        // loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      })
    }
  }
  function productsCarousel() {
    if (typeof Swiper !== "undefined" && typeof Swiper !== null) {
      const swiper = new Swiper("#ProductsCarousel", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 10,
        // loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      })
    }
  }
  ////////////////////////////////////////////// CatrgoryListHomepage
  function expand() {
    let element = document.getElementById("elementBlur")
    let pseudo = window.getComputedStyle(element, "::before")
    if (catagoryStatus === false) {
      setCategoryCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      element.style.setProperty("--afterDisplay", "none")
      element.setAttribute("beforeContent", "بسته -")
      setCatagoryStatus(true)
    } else if (catagoryStatus == true) {
      setCategoryCount([1, 2, 3, 4, 5, 6])
      element.setAttribute("beforeContent", "مشاهده همه +")
      element.style.setProperty("--afterDisplay", "block")
      setCatagoryStatus(false)
    }
  }
  function collapse() {
    let element = document.getElementById("elementBlur")
    element.setAttribute("beforeContent", "مشاهده همه +")
  }
  ////////////////////////////////////////////////////////////////// ImageLoading And loading Blur
  function imageLoading() {
    const blurDivs = document.querySelectorAll(".blur-load")
    blurDivs.forEach((div) => {
      const img = div.querySelector("img")
      function loaded() {
        div.classList.add("loaded")
      }
      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded)
      }
    })
  }
  /////////////////////////////////////////////////////// search input
  /////////////////////////////////////////////
  imageLoading()
  homePageSlider()
  specialOffersCarousel()
  productsCarousel()
})

jQuery(document).ready(function ($) {
  const sorts = $("div.sortItem-selected-mobile div")
  $("#seletedSortItemName").text(sorts.first().text().replace(/\s/g, ""))
  var selectedSortItem = ""
  //Desktop Sort
  sorts.first().addClass("selected-SortItem")
  $(sorts).map(function (index, item) {
    $(item).on("click", function (e) {
      $(sorts).removeClass("selected-SortItem")
      $(this).addClass("selected-SortItem")
    })
  })

  //Mobile Sort
  const sortItemContent = $("div.sortItem-selected-mobile")
  var temp = `<svg class="fill-iconLightColor stroke-iconLightColor stroke-2" height="23px" width="23px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" />
  </svg>`
  sorts.parent().first().append(temp)
  sorts.map(function (index, item) {
    $(item).on("click", function () {
      $(sorts).parent().find("svg").remove()
      $(item).parent().append(temp)
      selectedSortItem = $(item).text()
      selectedSortItem = selectedSortItem.replace(/\s/g, "")
      $("#seletedSortItemName").text(selectedSortItem)
      closeSidenavSortBySelected()
    })
  })

  //////////////////////////////////////////////////////// Add to Cart Counter
  var add_to_cart = $("button.addToCard-plus-category")
  var plus = $("button.addToCard-plus-category")
  var minus = $("button.addToCard-minus-category")

  $(add_to_cart).each(function () {
    $(this).on("click", function () {
      $(this).parent().addClass("active")
      $(this).parent().find(".addToCard-minus-category").html(`
            <svg width="20px" id="Layer_1" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <g fill="#fff" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
                    <polygon class="st0" id="Fill-6" points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1"/>
                    <polygon class="st0" id="Fill-7" points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1"/>
                    <polygon class="st0" id="Fill-8" points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1"/>
                    <polygon class="st0" id="Fill-9" points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1"/>
                    <path class="st0" d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6" id="Fill-10"/><path class="st0" d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" id="Fill-11"/>
                    </g>
                </g>
            </svg>
            `)
    })
  })

  $(plus).on("click", function (e) {
    e.preventDefault()
    var counter = $(this).parent().find(".add-to-cart-counter")
    var counter_value = parseInt($(counter).html())
      ? parseInt($(counter).html())
      : 0
    if (counter_value >= 1) {
      $(this).parent().find(".addToCard-minus-category").html(`
            <svg width="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <line stroke-width="3px" class="cls-1" x1="7" x2="25" y1="16" y2="16" />
                </g>
            </svg>
        `)
    }
    $(counter).html(parseInt(counter_value) + 1)
  })
  $(minus).on("click", function (e) {
    e.preventDefault()
    var counter = $(this).parent().find(".add-to-cart-counter")
    var counter_value = parseInt($(counter).html())
    if (counter_value == 1) {
      $(this).parent().removeClass("active")
      $(this).parent().find(".addToCard-plus-category").html(`
           <svg width="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <line stroke-width="3px" x1="16" x2="16" y1="7" y2="25" />
                    <line stroke-width="3px" x1="7" x2="25" y1="16" y2="16" />
                </g>
            </svg>
            `)
    }
    if (counter_value == 2) {
      $(this).parent().find(".addToCard-minus-category").html(`
             <svg width="20px" id="Layer_1" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <g fill="#fff" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
                    <polygon class="st0" id="Fill-6" points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1"/>
                    <polygon class="st0" id="Fill-7" points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1"/>
                    <polygon class="st0" id="Fill-8" points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1"/>
                    <polygon class="st0" id="Fill-9" points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1"/>
                    <path class="st0" d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6" id="Fill-10"/><path class="st0" d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" id="Fill-11"/>
                    </g>
                </g>
            </svg>
            `)
    }
    $(counter).html(parseInt($(counter).html()) - 1)
  })
})

////////////////////////////////////////////////////////////////////// Filter
function opentogglefilterOption(element) {
  if (
    // element.parentElement.parentElement.parentElement.classList.contains("open")
    element.parentElement.classList.contains("open")
  ) {
    //  element.parentElement.parentElement.parentElement.classList.remove("open")
    element.parentElement.classList.remove("open")
  } else {
    // element.parentElement.parentElement.parentElement.classList.add("open")
    element.parentElement.classList.add("open")
  }
  var elements = brandFilter.querySelectorAll(".subMenu input")
  elements.forEach((checkBox) => {
    if (checkBox.checked) {
      console.log("checked")
    }
  })
}

function setBackgroundColors(element) {
  let AllOptionContainer = document.getElementsByClassName("OptionContainer")
  for (let index = 0; index < AllOptionContainer.length; index++) {
    let OptionContainer = AllOptionContainer[index]
    var elsParentClasses = []
    while (OptionContainer) {
      if (OptionContainer.classList) {
        for (
          let index2 = 0;
          index2 < OptionContainer.classList.length;
          index2++
        ) {
          const className = OptionContainer.classList[index2]
          elsParentClasses.unshift(className)
        }
        OptionContainer = OptionContainer.parentNode
      } else {
        break
      }
    }

    let r = 0
    let g = 21
    let b = 40
    let factor = elsParentClasses.filter((x) => x == "OptionContainer").length
    r = r * factor
    g = g * factor
    b = b * factor
    AllOptionContainer[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  }
}
/////////////////////////////////////////////// Send Query to Params
function addOrUpdateURLParam(key) {
  const searchParams = new URLSearchParams(window.location.search)
  let newRelativePathQuery

  const brandFilter = document.getElementById(key)
  var elements = brandFilter.querySelectorAll(".subMenu input")

  // searchParams.forEach((value, key) => {
  //   console.log(value, key)
  // })
  const seletedItems = []

  elements.forEach((checkBox) => {
    if (checkBox.checked) {
      seletedItems.push(checkBox.id)
    }
  })
  searchParams.delete(key)
  if (seletedItems.length > 0) {
    searchParams.append(key, seletedItems)
    var searchParamsString = searchParams.toString().replaceAll("%2C", "!##!")
    newRelativePathQuery = window.location.pathname + "?" + searchParamsString
  } else {
    searchParams.delete(key)
    newRelativePathQuery = window.location.pathname + searchParams.toString()
  }

  history.pushState(null, "", newRelativePathQuery)
}
////////////////////////////////////////////////

function openFilternav() {
  const filterElement = document.getElementById("opentogglefilter")
  if (filterElement !== null && filterElement !== undefined) {
    filterElement.addEventListener("click", function () {
      document.getElementById("filterSidenav").classList.add("activeCatFilSort")
    })
  }
}
function closeSidenavFilter() {
  const filterElement = document.getElementById("closebtnfilterSidenav")
  if (filterElement !== null && filterElement !== undefined) {
    filterElement.addEventListener("click", function () {
      document
        .getElementById("filterSidenav")
        .classList.remove("activeCatFilSort")
    })
  }
}
////////////////////////////////////////////////
function openSortSidenav() {
  const sortElement = document.getElementById("opentoggleSort")
  if (sortElement !== null && sortElement !== undefined) {
    sortElement.addEventListener("click", function () {
      document.getElementById("sortSidenav").classList.add("activeCatFilSort")
    })
  }
}
function closeSidenavSortBySelected() {
  document.getElementById("sortSidenav").classList.remove("activeCatFilSort")
}
function closeSidenavSort() {
  const sortElement = document.getElementById("closebtnSortSideNav")
  if (sortElement !== null && sortElement !== undefined) {
    sortElement.addEventListener("click", function () {
      document
        .getElementById("sortSidenav")
        .classList.remove("activeCatFilSort")
    })
  }
}
////////////////////////////////////////////////////////
function openFilterBoxDrawer() {
  // document.addEventListener("click", function (e) {

  //   e.target.id !== "filterSidenav" && e.target.id !== "opentogglefilter" ? closeNav() : null
  // })

  document.onclick = function (e) {
    e.target.id !== "filterSidenav" || e.target.id !== "opentogglefilter"
      ? closeNav()
      : null
  }
}
///////////////////////////////////////////////////////////// Sort Category
function sortCategory() {
  const person = {
    itemOne: "مرتبط‌ترین",
    itemTwo: "پربازدیدترین",
    itemThree: "جدیدترین",
    itemFour: "پرفروش‌ترین‌",
    itemFive: "ارزان‌ترین",
    itemFive: "گران‌ترین",
    itemSix: "منتخب",
  }

  let txt = ""
  for (let x in person) {
    txt += person[x]
  }

  document.getElementById("sortItem").innerHTML = txt
}

///////////////////////////////////////////////////////////// selectedSortCategoryItem by javascript
function selectedSortCategoryItem() {
  const ul = document.getElementById("sortList")
  // Array.from allows us to use array methods on DOM lists
  if (ul !== null && ul !== undefined) {
    const listItems = Array.from(ul.getElementsByTagName("div"))
    const setThisOneToActive = (event) => {
      // identify the element we just clicked
      const thisLi = event.target
      // omit that particular element from the list
      const allOtherLis = listItems.filter((li) => {
        return li !== thisLi
      })
      // loop through resultant list and remove "active" class
      allOtherLis.forEach((li) => {
        li.classList.remove("selected-SortItem")
      })

      // add our "active" class
      thisLi.classList.add("selected-SortItem")
    }
    listItems.forEach((li) => {
      li.addEventListener("click", setThisOneToActive)
    })
  }
}
/////////////////////////////////////////////////////

window.addEventListener("load", function () {
  ////////////////////////////////////////////////////////
  function closeFiltersOption() {
    var filterElementBox = document.getElementById("filterSidenav")
    const filterElement = document.getElementById("filterContainer")
    if (filterElement !== null && filterElement !== undefined) {
      var filterOption = filterElement.querySelectorAll(".optionHead")
    }
    if (filterOption !== null && filterOption !== undefined) {
      filterOption.forEach((element) => {
        element.addEventListener("click", function () {
          if (element.parentElement.classList.contains("open")) {
            var elements =
              element.parentElement.querySelectorAll(".subMenu input")
            elements.forEach((checkBox) => {
              checkBox.addEventListener("change", function () {
                if (checkBox.checked) {
                  filterElementBox.classList.remove("activeCatFilSort")
                } else if (!checkBox.checked) {
                  filterElementBox.classList.remove("activeCatFilSort")
                }
              })
            })
          }
        })
      })
    }
  }
  // ////////////////////////////// HTTP REQUEST //////////////////////////////

  // function reqListener() {

  //   window.alert(this.responseText)
  // }

  // const req = new XMLHttpRequest()
  // req.addEventListener("load", reqListener)
  // req.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
  // req.send()

  /////////////////////////////////////////////// addToCardStickyBtn

  //////////////////////////////////////////////
  function imageLoading() {
    const blurDivs = document.querySelectorAll(".blur-load")
    blurDivs.forEach((div) => {
      const img = div.querySelector("img")
      function loaded() {
        div.classList.add("loaded")
      }
      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded)
      }
    })
  }

  // //////////////////////////////////////////////////////////
  function handlerSwitchToggle() {
    const isStockFilter = document.getElementById("isStockFilter")
    if (isStockFilter !== null && isStockFilter !== undefined) {
      isStockFilter.addEventListener("change", function () {})
    }
  }
  // //////////////////////////////////////////////////////////

  function handlerSelectedWeightItem() {
    const blurDivs = document.querySelectorAll(".weight-item")
    blurDivs.forEach((label) => {
      const input = label.querySelector("input")
      const span = label.querySelector("span")
      input.addEventListener("change", function () {
        // console.log("checked", this.checked, span.innerText)
      })
    })
  }
  // //////////////////////////////////////////////////////////

  // function handlerSelectedBrandItem() {
  //   const blurDivs = document.querySelectorAll(".brand-item")
  //   blurDivs.forEach((label) => {
  //     const input = label.querySelector("input")
  //     const span = label.querySelector("span")
  //     input.addEventListener("change", function () {
  //       if (this.checked) {
  //         addOrUpdateURLParam("brand", span.innerText)
  //       } else {
  //         addOrUpdateURLParam("brand", "")
  //       }
  //     })
  //   })
  // }

  // $.ajax({
  //   url: "https://jsonplaceholder.typicode.com/todos/1",
  //   type: "GET",
  //   data: {
  //     name: "hadi",
  //     family: "hadi",
  //   },
  //   success: function (result) {
  //   },
  //   error: function (error) {
  //   },
  //   complete: function () {
  //   }
  // })

  imageLoading()
  setBackgroundColors()
  // closeNav()
  // openFilterBoxDrawer()
  handlerSwitchToggle()
  handlerSelectedWeightItem()
  closeFiltersOption()
  openFilternav()
  closeSidenavFilter()
  openSortSidenav()
  closeSidenavSort()
})
