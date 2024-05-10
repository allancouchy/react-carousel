import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  width: 100%;
  display: grid;

  > img {
    width: 100%;
    height: 415px;
    border-radius: 25px;

    @media screen and (max-width: 768px) {
      height: 255px;
    }
  }

  > span {
    align-self: flex-end;
    justify-self: center;
    color: white;
    position: absolute;
    margin: 25px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const CarouselChevron = styled.button`
  align-self: center;
  border: none;
  background-color: transparent;
  position: absolute;
  margin: 25px;

  > img {
    @media screen and (max-width: 768px) {
      height: 25px;
    }
  }
`

export const CarouselPreviousBtn = styled(CarouselChevron)``
export const CarouselNextBtn = styled(CarouselChevron)`
  justify-self: flex-end;
`
