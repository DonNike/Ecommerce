const wrapper = document.querySelector(".sliderwrapper")
const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    });
})