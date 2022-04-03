import Particles from "react-tsparticles";
function Landing() {
    const options = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3.945738208161363,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
            },
            "modes": {
                "grab": {
                    "distance": 215.7842157842158,
                    "line_linked": {
                        "opacity": 1
                    }
                },
            }
        },
        "fullScreen": { enable: false }
    }
    return (
        <div id="landing" className="landing main-cmp">
            <div className="content txt-container">
                <h1>
                    Hi,
                    <br />
                    I'm Or,
                    <br />
                    Web Developer
                </h1>
                <p>Full Stack / Front End Developer</p>
                <a href="#contact">
                    <div className="link-container btn">
                        Contact Me
                    </div>
                </a>
            </div>
            <Particles id="tsparticles" options={options}></Particles>
        </div>
    );
}

export default Landing;