import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Carousel from './index'

describe('Carousel', () => {
  const pictures = ['image1', 'image2', 'image3']

  it('should render next button', () => {
    render(<Carousel pictures={pictures} />)
    const button = screen.getByTestId('next')
    expect(button).toBeInTheDocument()
  })

  it('should render previous button', () => {
    render(<Carousel pictures={pictures} />)
    const button = screen.getByTestId('previous')
    expect(button).toBeInTheDocument()
  })

  it('should render image position', () => {
    render(<Carousel pictures={pictures} />)
    const position = screen.getByTestId('position')
    expect(position).toBeInTheDocument()
  })

  it('button next should increment', () => {
    render(<Carousel pictures={pictures} />)

    const button = screen.getByTestId('next')
    const position = screen.getByTestId('position')

    expect(position.textContent).toBe('1 / 3')
    fireEvent.click(button)
    expect(position.textContent).toBe('2 / 3')
  })

  it('button previous should discrement', () => {
    const pictures = ['image1', 'image2', 'image3']
    render(<Carousel pictures={pictures} />)

    const button = screen.getByTestId('previous')
    const position = screen.getByTestId('position')

    expect(position.textContent).toBe('1 / 3')
    fireEvent.click(button)
    expect(position.textContent).toBe('3 / 3')
  })
})
