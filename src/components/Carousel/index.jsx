import { Component } from "react";
import { myPicturesCollection } from "../../App";
import styles from "./Carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
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
  }, 2000)
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

export default Carousel;
