import React from 'react';

function About() {

    const age = (Date.now() - (new Date(1992, 12, 29).getTime()))

    return (
        <div id='about' className='about main-cmp'>
            <div className='about-container'>
                <h1>About</h1>
                <div>
                    <div className='txt-container'>
                        <p>Hii, I'm Or Ziskovich. I'm a Full-stack Developer.</p>
                        <p>Not too long ago, in the year 2021, I was first acquainted with the programing world and JS in particular in the full-stack bootcamp 'Coding Academy'. And I discoverd how much passion I have towards that way of creating and thinking.</p>
                        <p>Through the runtime of 4 monthes of intansive learning by a faculty of amazing programers and teachers, I've perfected my skills in JS, Html and CSS. Frameworks like Vue.js, React, Angular, node.js and more, had become my best friends, which I continue on exploring and learning them.</p>
                        <p>Though still "young" in that world, with every site and app that I'm building, I discover more and more ways to create and build a strong and intriguing projects.</p>
                        <p>Please feel free to <a href='#contact'>contact me</a> if you like my work and want to work together.</p>
                    </div>
                    <div className='details'>
                        <h4>Or Ziskovich / <span>Full-stack Developer</span></h4>
                        <ul>
                            <li><span>Birthday:</span> 29 December 1992</li>
                            <li><span>City:</span> Tel-Aviv, Israel</li>
                            <li><span>Age:</span> {new Date(age).getFullYear() - 1970}</li>
                            <li><span>Education:</span> Full-stack Dev & Music Production</li>
                        </ul>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={require('../assets/images/self.jpg')} />
                </div>
            </div>
        </div>
    );
}

export default About;