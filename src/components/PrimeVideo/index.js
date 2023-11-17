// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  console.log(actionMoviesList)
  console.log(comedyMoviesList)

  return (
    <div className="prime-video-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-section">
        <h1>Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider list={actionMoviesList} />
        </div>
        <h1>Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider list={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
