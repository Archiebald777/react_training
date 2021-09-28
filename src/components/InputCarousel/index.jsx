import { Component } from "react";import Carousel from "../Carousel";
import PropTypes from 'prop-types'

class InputCarousel extends Component{
    render(){
      const { intervalTimer } = this.props
        return(
            <div>
              <span>Change interval</span>
                <input onChange={(e) => {intervalTimer(e.target.value)} } type={Number} />
            </div>
        )
    }
}

InputCarousel.propTypes = {
intervalTimer: PropTypes.number
}

export default InputCarousel