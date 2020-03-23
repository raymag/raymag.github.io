import React, {useState, useEffect} from 'react';

import './styles.css';

export default function Slideshow({images=[], interval=3000}){
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [fade, setFade] = useState(false);

    useEffect(()=>{
        setThumnails(images);
        setFade(true);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')",
        });
        
        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 
        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop);   
    }, [images, currentSlide, interval]);

    function previous(){
        setCurrentSlide(getPreviousSlide());
    }
    function next(){
        setCurrentSlide(getNextSlide());
    }
    function getNextSlide(){
        if(currentSlide === thumbnails.length-1){
            return 0;
        }else{
            return currentSlide+1;
        }
    }
    function getPreviousSlide(){
        if(currentSlide>0){
            return currentSlide-1;
        }else{
            return thumbnails.length-1;
        }
    }
    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>

                <section className="slide current-slide">
                    <div 
                        style={currentSlideStyle}
                        className={fade? 'slide-thumbnail fade':'slide-thumbnail'}
                        onAnimationEnd={()=>{setFade(false)}}
                    >
                    </div>
                </section>

                <section className="slide next-slide">
                <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>
            <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    )
}