import { useState } from 'react'
import { CarouselNextBtn, CarouselPreviousBtn, CarouselWrapper } from './style'
import chevronLeft from '../../assets/chevron-left.svg'
import chevronRight from '../../assets/chevron-right.svg'
import housings from '../../data/housings.json'

const Carousel = () => {
  const pictures = housings.pictures
  const [currentPictures, setCurrentPicture] = useState(0)
  const doNotShow = pictures.length > 1 ? true : false // do not display carousel items if there is only one image

  const handleClick = direction => {
    if (direction === 'previous') {
      if (currentPictures === 0) {
        // return to the last picture
        setCurrentPicture(c => c + pictures.length)
      }
      // swipe to previous picture
      setCurrentPicture(c => c - 1)
    } else {
      if (currentPictures === pictures.length - 1) {
        // return to the first picture
        setCurrentPicture(c => c - pictures.length)
      }
      // swipe to next picture
      setCurrentPicture(c => c + 1)
    }
  }

  return (
    <CarouselWrapper>
      {pictures.map(
        (picture, index) =>
          currentPictures === index && <img key={index} src={picture} alt={'Pièce de la maison'} />
      )}
      {doNotShow && (
        <>
          <CarouselPreviousBtn
            type='button'
            title='photo précédente'
            onClick={() => handleClick('previous')}
            data-testid='previous'>
            <img src={chevronLeft} alt='bouton précédent' />
          </CarouselPreviousBtn>
          <CarouselNextBtn
            type='button'
            title='photo suivante'
            onClick={() => handleClick('next')}
            data-testid='next'>
            <img src={chevronRight} alt='bouton suivant' />
          </CarouselNextBtn>
          <span data-testid='position'>
            {currentPictures + 1} / {pictures.length}
          </span>
        </>
      )}
    </CarouselWrapper>
  )
}

export default Carousel
