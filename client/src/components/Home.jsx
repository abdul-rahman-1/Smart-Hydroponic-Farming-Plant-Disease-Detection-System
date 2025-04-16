import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import banner from "../img/banner.png";
import { Link } from "react-router-dom";

class TxtType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toRotate: props.toRotate,
      loopNum: 0,
      period: parseInt(props.period, 10) || 1000,
      txt: "",
      isDeleting: false,
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  tick = () => {
    const { toRotate, loopNum, period, isDeleting } = this.state;
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      this.setState((prevState) => ({
        txt: prevState.txt.substring(0, prevState.txt.length - 1),
      }));
    } else {
      this.setState((prevState) => ({
        txt: fullTxt.substring(0, prevState.txt.length + 1),
      }));
    }

    const { txt } = this.state;
    this.el.innerHTML = `<span class="wrap">${txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === "") {
      this.setState((prevState) => ({
        isDeleting: false,
        loopNum: prevState.loopNum + 1,
      }));
      delta = 500;
    }

    this.timeout = setTimeout(() => {
      this.tick();
    }, delta);
  };

  render() {
    return (
      <span
        ref={(el) => {
          this.el = el;
        }}
      ></span>
    );
  }
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    // Trigger type animation on initial render
    type();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run only once after initial mount

  const type = () => {
    const elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");

      if (toRotate) {
        const rootElement = elements[i];
        let root = createRoot(rootElement); // Create root for the first time

        // Render only once. On subsequent renders, reuse root
        root.render(
          <TxtType toRotate={JSON.parse(toRotate)} period={period} />
        );
      }
    }
  };

  return (
    <div className="App">
      <div className="row d-flex justify-content-center align-item-center vanishIn row h-100">
        <div className="col-md-5 mx-4 my-2 p-2 j">
          <div className="img-c w-100 my-2">
            <img src={banner} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-md-5 m-4 d-flex justify-content-center align-items-center">
          <div className="w-100">
            <div className="type">
              <span
                className="typewrite w-100"
                data-period="100"
                data-type='[ 
                  "   Welcome to Hydroponic Farming!         ", 
                  "Empowering the Future of Sustainable Agriculture!         ", 
                  "Join Us in Revolutionizing Food Production!         ", 
                  " Grow | Innovate | Sustain | Thrive         "
              ]'
              ></span>
            </div>
            <p className="w-100 banner-text">
              Hydroponic Farming Project is a sustainable agriculture initiative
              revolutionizing food production through soil-free, water-efficient
              farming. With interactive dashboards, real-time monitoring, and
              data-driven insights, we empower individuals and communities to
              optimize crop yield and resource use. Whether you're new or
              experienced in farming technology, our platform helps you grow
              fresh produce while promoting a sustainable future.
            </p>
            <br />
            <Link className="glowing-btn" to="/Events">
              <span className="glowing-txt">
                <span className="faulty-letter">Temperature</span>
              </span>
            </Link>
          </div>
        </div>
        {isMobile && <div className="col-md-12 h-5"> </div>}
      </div>
      <br />
    </div>
  );
}

export default App;
