import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


      
      const CarouselComponent = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);

        let { items:elements } = useSelector(state => state.items)
         // console.log(elements);

       let result = elements.map(element => {
          return {
           image: window.innerWidth >= 640 && element.images[0]  ||  window.innerWidth <= 640 && element.images[1],
           url: element.href,
           id: element.id,
           name: element.name
          }
       }) 

      // console.log(result);
       //console.log(window.innerWidth);

         let items = result.map(element => {
           return {      //eset es el objeto de elementso a renderiar en el carusel
             src:element.image,
             id: element.id,
             url: element.url,
           altText:element.name,
           caption: element.name } 

         })
        // console.log(items);
       


        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src.url}
              
              
            >
              
              <img src={item.src.url} alt={items.altText} width="100%" height={item.src.height}/>
             
             <Link to={ `./body/card/${item.id}` } className="link" > 
                Ver Detalles
             </Link >
           
             
              <CarouselCaption captionText={item.caption} captionHeader={item.caption}  />
              
                 
            </CarouselItem>
            
          );
        });

      
       
      
        return (
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carusel-container"
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
           
         
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
      }
      
     export default CarouselComponent;
    





