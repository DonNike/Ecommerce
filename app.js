const wrapper = document.querySelector(".sliderwrapper")
const menuItem = document.querySelectorAll(".menuItem")


const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "darkblue",
                img: "Images/airforce1.png",
            },
            {
                code: "white",
                img: "Images/airforce2.png",
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 99,
        colors: [
            {
                code: "red",
                img: "Images/jordan2.png",
            },
            {
                code: "black",
                img: "Images/jordan1.png",
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 79,
        colors: [
            {
                code: "black",
                img: "Images/blazer1.png",
            },
            {
                code: "red",
                img: "Images/blazer2.png",
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "Images/crater1.png",
            },
            {
                code: "#654321",
                img: "Images/crater2.png",
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 89,
        colors: [
            {
                code: "yellow",
                img: "Images/hippie1.png",
            },
            {
                code: "white",
                img: "Images/hippie2.png",
            }
        ]
    }
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        // change the choosen product
        choosenProduct = products[index]

        // change texts of currentProducts
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
})

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
        size.style.backgroundColor= "white"
        size.style.color="black"
        })
        size.style.backgroundColor= "black"
        size.style.color="white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})