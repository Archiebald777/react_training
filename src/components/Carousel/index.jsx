import { Component } from "react";
import { myPicturesCollection } from "../../App";
import InputCarousel from "../InputCarousel";
import styles from "./Carousel.module.scss";
import PropTypes from 'prop-types'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0, interval: 1000 };
    this.intervalId = null;
  }

  clickHandler = (e) => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1) % myPicturesCollection.length,
    });
  };

  
 
slideShow = () => {
 this.intervalId =  setInterval(() => {
    this.clickHandler()
  }, this.state.interval)
}

intervalTimer = (newInterval) => {
  this.setState({
    interval: newInterval
  })
}





stopSlideShow = () => {
  clearInterval(this.intervalId)
}

  render() {
    const { currentIndex } = this.state;
    return (
      <div>
        <section className={styles.slider}>
          <div className={styles.imgWrapper}>
            <button className={styles.button} onClick={this.clickHandler}>
              Click to change picture
            </button>
            <button className={styles.button} onClick={this.slideShow}> Start Slideshow </button>
            <button className={styles.button} onClick={this.stopSlideShow}> Stop Slideshow </button>
            <InputCarousel  intervalTimer = {this.intervalTimer} />
            <img
              className={styles.img}
              src={myPicturesCollection[currentIndex].imgPath}
              alt={myPicturesCollection.label}
            />
          </div>
        </section>
      </div>
    );
  }
  
}


Carousel.propTypes = {
  className:  PropTypes.func,
  
}


export default Carousel;
