import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

const App = () => {
    const [animationPhase, setAnimationPhase] = useState('initial'); // initial, slide-in, show-content

    useEffect(() => {
        // After 1 second, slide in the name
        const slideInTimeout = setTimeout(() => {
            setAnimationPhase('slide-in');
        }, 1000);

        // After 3 seconds, show the content
        const showContentTimeout = setTimeout(() => {
            setAnimationPhase('show-content');
        }, 2000);

        // Cleanup timeouts
        return () => {
            clearTimeout(slideInTimeout);
            clearTimeout(showContentTimeout);
        };
    }, []);

    return (
        <div className="main-section">
            {/* Black screen overlay */}
            {animationPhase !== 'show-content' && (
                <div className={`overlay ${animationPhase === 'slide-in' ? 'slide-in' : ''}`}>
                    <h1>Kshantu Syon</h1>
                </div>
            )}

            {/* Main content */}
            {animationPhase === 'show-content' && (
                <>
                    <Header />
                    <div className="main">
                        <About />
                        <Projects />
                    </div>
                </>
            )}
        </div>
    );
};

export default App;