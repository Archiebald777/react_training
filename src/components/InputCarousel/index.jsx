import { Component } from "react";import Carousel from "../Carousel";
import PropTypes from 'prop-types'
import styles from "./InputCarousel.module.scss"

class InputCarousel extends Component{
    render(){
      const { intervalTimer } = this.props
        return(
            <div className={styles.timerInput}>
              <p>Change interval</p>
                <input className={styles.input} onChange={(e) => {intervalTimer(e.target.value)} } type={Number} />
            </div>
        )
    }
}

InputCarousel.propTypes = {
intervalTimer: PropTypes.number
}

export default InputCarousel