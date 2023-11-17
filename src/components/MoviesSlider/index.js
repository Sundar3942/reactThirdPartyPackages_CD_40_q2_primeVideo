// Write your code here
import Slider from 'react-slick'
// import Slider from 'slick-carousel'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {list} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {list.map(each => (
        <MovieItem key={each.id} item={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
