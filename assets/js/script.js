window.addEventListener("load", function(){
    const slideShow = document.querySelector(".content-saleoff__slideshow");
    const slideMain = document.querySelector(".saleoff-slideshow-main");
    const slideItems = document.querySelectorAll(".saleoff-slideshow__item");
    const slidePrev = document.querySelector(".saleoff-slideshow-prevbtn");
    const slideNext = document.querySelector(".saleoff-slideshow-nextbtn");
    
    const slideDotItem = document.querySelectorAll(".slide-dot-item");
  
    let positionX = 0;
    let index = 0;

    const slideItemWidth = slideItems[0].clientWidth;
    const slideLenght = slideItems.length;
    

    slideNext.addEventListener("click", function (){
        changeSlideshow(1);
    });

    slidePrev.addEventListener("click", function (){
        changeSlideshow(-1);
    });


    [ ... slideDotItem].forEach( (item) =>  
        item.addEventListener("click", function(e) {
            [...slideDotItem].forEach(el => el.classList.remove("active"));

            e.target.classList.add("active");

            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex ;
            positionX = -1 * index * slideItemWidth
            slideMain.style = `transform: translateX(${positionX}px)`;
           
        })
    );



    function changeSlideshow (direction){
        if (direction === 1)
        {   
            if(index >= slideLenght - 1){
                index = slideLenght - 1;
                return;
            }
            
            positionX = positionX - slideItemWidth;
            
            slideMain.style = `transform: translateX(${positionX}px)`;
            index ++;
        }        
        else if(direction === -1)
        {
            if(index <= 0)
            {
                index = 0;
                return;
            } 
            positionX = positionX + slideItemWidth;
            
            slideMain.style = `transform: translateX(${positionX}px)`;
            
            index--;
        }
        
        [...slideDotItem].forEach(el => el.classList.remove("active"));
        slideDotItem[index].classList.add("active");
    }

    
});