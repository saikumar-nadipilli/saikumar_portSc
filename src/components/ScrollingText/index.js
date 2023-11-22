import { Component } from "react";
import "./index.css";

class ScrollingText extends Component {
  componentDidMount() {
    const textElement = this.textRef;
    const screenWidth = window.innerWidth;

    if (textElement) {
      const textWidth = textElement.offsetWidth;
      const duration = (textWidth + screenWidth) * 10; // Adjust speed here

      textElement.style.animation = `scrollText ${duration}ms linear infinite`;
    }
  }

  //   componentWillUnmount() {
  //     const textElement = this.textRef;

  //     if (textElement) {
  //       textElement.style.animation = "none";
  //     }
  //   }

  render() {
    return (
      <div>
        <div className="mobile-viewb">
          <div class="text-animation-container">
            <div class="text-animation">Immediate Joining</div>
          </div>
        </div>
        <div className="desktop-viewb">
          <div class="text-animation-container">
            <div class="text-animation">Immediate Joining</div>
            <div class="text-animation">Immediate Joining</div>
            <div class="text-animation">Immediate Joining</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollingText;
