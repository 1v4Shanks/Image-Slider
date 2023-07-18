  const slides=document.querySelectorAll(".slide");
  var counter=0;
  console.log(slides);


  slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`;
    }
  )

  const showPrev=()=>{
    counter--;
    slideImage();
  }
  const showNext=()=>{
    counter++;
    slideImage();
  }

  
  const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            if(counter<slides.length){
                slide.style.transform=`translateX(-${counter*100}%)`;
            }else{
                counter=0;
                slide.style.transform=`translateX(-${counter*100}%)`;
            }
            
        }
    )
  }
