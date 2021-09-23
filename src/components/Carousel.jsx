import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button } from "@material-ui/core";

const CarouselSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const CarouselSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const CarouselSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;   

  --tx:0;
  --color:grey;
  --total: 1
  --nav-item-hover-offset: 2%;
  --easing: cubic-bezier(.8, 0, .2, 1);
  --duration: .6s;
  
  
  transition: transform var(---duration) var(--easing); 
  
  overflow: hidden;
  
  transform: translateX(var(--tx));
  
  z-index: calc(var(--total) - var(--i));
  
  padding-right: 1vw;
  
  &:hover:not(:focus):after {
    transform: none;
  }
  
  &:focus {
    transform: translateX(-2vw);
    outline: none;    
  }
  
  &:focus-within {
    transform: translateX(-2vw);   
  }
  
  
  &:before {
    counter-increment: list;
    content: counter(list) ".";
    display: block;
    grid-column: 3 / 4;
    text-align: right;
    font-size: 8vmin;
    padding: 1vw;
    padding-top: 10vh;
    mix-blend-mode: soft-light;
    z-index: 1;
    animation: inherit;
    animation-name: slide-up;
    
    @keyframes slide-up {
      from { transform: translateY(130%); }
      to { transform: translateY(0); }
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 1vw;
    width: 100%;
    height: 100%;
    background-color: var(--color);
    transform: translateX(-1vw);
    transition: transform var(--easing) var(--duration);
  }
  
  animation: slide-down 1s cubic-bezier(.5,0,.3,1);
  animation-delay: calc(var(--i) * .15s);
  animation-fill-mode: backwards;
  
  @keyframes slide-down {
    from {
      transform: translateY(-100%) translateX(var(--tx));
      pointer-events: none;
    }
    to {
      transform: translateY(0) translateX(var(--tx));
      pointer-events: none;
    }
  }  

`;

const CarouselContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0ms.3s;
  transform: translateX();

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Carrossel = ({ slides, slideLenght }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slideLenght;

  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === lenght - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, lenght]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <CarouselSection>
      <CarouselWrapper>
        {slides.map((slide, index) => {
          return (
            <CarouselSlide key={index}>
              {index === current && (
                <CarouselSlider>
                  <CarouselImage src={slide.image} alt={slide.alt} />
                  <CarouselContent>
                   {/* <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>*/}
                  </CarouselContent>
                </CarouselSlider>
              )}
            </CarouselSlide>
          );
        })}
        {/*<SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>*/}
      </CarouselWrapper>
    </CarouselSection>
  );
};

export default Carrossel;
