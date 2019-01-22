import React from 'react';
import Slide from '../molecules/Slide';
import RightArrow from '../molecules/RightArrow';
import LeftArrow from '../molecules/LeftArrow';

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide() {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide() {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.props.content.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth() {
     return document.querySelector('.slide').clientWidth
  }  

	render() {
		return (
			<div className="slider">
				<div className="slider-wrapper"
				style={{
					transform: `translateX(${this.state.translateValue}px)`,
					transition: 'transform ease-out 0.45s'
				}}>
					{
					  this.props.content.map((item, index) => (
					    <Slide key={index} item={item} />
					  ))
					}
				</div>

				<LeftArrow
					goToPrevSlide={this.goToPrevSlide.bind(this)}
				/>

				<RightArrow
					goToNextSlide={this.goToNextSlide.bind(this)}
				/>
			</div>			
		)
	}
}

/*
			<Slider className="slider-wrapper">
				{
					this.props.content.map((item, index) => (
						<div className="slider-content" key={index}>
							<div className="slider-inner-wrapper">
								<img className="portfolio-image" src={item.image} />

								<div className="inner-content">
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>						
							</div>							
						</div>
					))
				}			
			</Slider>

*/