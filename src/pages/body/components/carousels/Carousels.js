import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Carousels.css'

const Carousels = () => {
    const [index, setIndex] = useState(0)

    const onClickPrev = () => {
        if (index === 0) {
            setIndex(2)
        } else {
            setIndex(index - 1)
        }
    }

    const onClickNext = () => {
        if (index === 2) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const renderArrowPrev = () => {
        return (
            <div className='leftChevron' onClick={onClickPrev}>
                <FontAwesomeIcon icon={faChevronLeft} color='white' size='3x' />
            </div >
        )
    }

    const renderArrowNext = () => {
        return (
            <div className='rightChevron' onClick={onClickNext}>
                <FontAwesomeIcon icon={faChevronRight} color='white' size='3x' />
            </div >
        )
    }

    return (
        <Carousel autoplay={true} infiniteLoop={true} renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} selectedItem={index} useKeyboardArrows={true}>
            <div>
                <img src={require("../../../../assets/images/MEAN-stack-vs-MERN-stack.png")} />
                <p className="legend">Landing 1</p>
            </div>
            <div>
                <img src={require("../../../../assets/images/MEAN-stack-vs-MERN-stack.png")} />
                <p className="legend">Landing 2</p>
            </div>
            <div>
                <img src={require("../../../../assets/images/MEAN-stack-vs-MERN-stack.png")} />
                <p className="legend">Landing 3</p>
            </div>
        </Carousel>
    )
}

export default Carousels
