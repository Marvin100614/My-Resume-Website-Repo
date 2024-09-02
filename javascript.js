
    const allEl = document.querySelector(".all");
    const alternativeEl = document.querySelector(".alternative");
    const lovesongsEl = document.querySelector(".lovesongs");
    const lovesonscontainerEl = document.querySelector(".lovesons-container");
    const alternativecontainerEl = document.querySelector(".alternative-container");

    allEl.addEventListener("click", ()=>{
        lovesonscontainerEl.classList.remove("active");
        alternativecontainerEl.classList.remove("active");
    });
    alternativeEl.addEventListener("click", ()=>{
        lovesonscontainerEl.classList.add("active");
        alternativecontainerEl.classList.remove("active");
    });

    lovesongsEl.addEventListener("click", ()=>{
        lovesonscontainerEl.classList.remove("active");
        alternativecontainerEl.classList.add("active");
    });


    //------ image slider ------//

    const nextEl = document.querySelector(".next");
    const prevEl = document.querySelector(".prev");
    const imagecontainerEl = document.querySelector(".image-container");

    let count = 0
    let timeout;

    nextEl.addEventListener("click", ()=>{
        count++
        clearTimeout(timeout)
        updateImage()
    })
    prevEl.addEventListener("click", ()=>{
        count--
        clearTimeout(timeout)
        updateImage() 
    })

   
    updateImage()
    function updateImage(){
        if(count > 4){
            count = 0
        }else if(count < 0){
            count = 4
        }
        imagecontainerEl.style.transform = `translateX(-${count * 800}px)`

        timeout = setTimeout(()=>{
            count++
            updateImage()
        }, 3000)
    }

// ------ Arrow Up  - go TO TOP SCREEN---- //

const arrowupEl = document.querySelector(".arrow-up");

arrowupEl.addEventListener("click", ()=>{
    window.scrollTo(0, 0)
})