import { useEffect } from "react";
import "./style.css";

export default function Drumkit() {

    useEffect(() => {

        const keys = Array.from(document.querySelectorAll(".key"));
        let keyState = {};
        // const audioElements = Array.from(document.querySelectorAll(".audio"));

        function removeTransition(e) {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        }

        function playSound(e) {
            let keyCode;

            if (e.type === "keydown" || e.type === "keyup") {
                keyCode = e.keyCode.toString();
            } else if (
                e.type === "mousedown" ||
                e.type === "mouseup" ||
                e.type === "mouseleave"
            ) {
                keyCode = e.target.dataset.key;
            } else {
                return;
            }

            const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
            const key = document.querySelector(`div[data-key="${keyCode}"]`);
            if (!audio) return;

            if (e.type === "keydown" || e.type === "mousedown" && !keyState[keyCode]) {
                keyState[keyCode] = true;
                key.classList.add('playing');
                audio.currentTime = 0;
                audio.play();
            } else if (e.type === "keyup" || e.type === "mouseup" || e.type === "mouseleave") {
                delete keyState[keyCode];
                key.classList.remove('playing');
                audio.pause();
                setTimeout(() => {
                    audio.currentTime = 0;
                }, 2);
            }
        }

        // function removePlayingClass() {
        //     keys.forEach((key) => key.classList.remove('playing'));
        //     keyState = {};
        //     audioElements.forEach((audio) => audio.pause());
        // }

        keys.forEach((key) => {
            key.addEventListener('transitionend', removeTransition);
            // key.addEventListener('keyup', removePlayingClass);
            key.addEventListener('mouseup', playSound);
            key.addEventListener('mousedown', playSound);
            key.addEventListener('mouseleave', playSound);
        });

        window.addEventListener('keydown', playSound);
        window.addEventListener('keyup', playSound);

        return () => {
            keys.forEach((key) => {
                key.removeEventListener('transitionend', removeTransition);
                // key.removeEventListener('keyup', removePlayingClass);
                key.removeEventListener('mouseup', playSound);
                key.removeEventListener('mousedown', playSound);
                key.removeEventListener('mouseleave', playSound);
            })

            window.removeEventListener('keydown', playSound);
            window.removeEventListener('keyup', playSound);
        }
    }, []);

    return (
        <>
            <div className="drumkit">
                <div className="keys">
                    <div data-key="65" className="key">
                        <kbd>A</kbd>
                        <span className="sound">clap</span>
                    </div>
                    <div data-key="83" className="key">
                        <kbd>S</kbd>
                        <span className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key">
                        <kbd>D</kbd>
                        <span className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key">
                        <kbd>F</kbd>
                        <span className="sound">openhat</span>
                    </div>
                    <div data-key="71" className="key">
                        <kbd>G</kbd>
                        <span className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key">
                        <kbd>H</kbd>
                        <span className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key">
                        <kbd>J</kbd>
                        <span className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key">
                        <kbd>K</kbd>
                        <span className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key">
                        <kbd>L</kbd>
                        <span className="sound">tink</span>
                    </div>
                </div>
            </div>

            <audio data-key="65" src="/assets/drumkit/sounds/clap.wav"></audio>
            <audio data-key="83" src="/assets/drumkit/sounds/hihat.wav"></audio>
            <audio data-key="68" src="/assets/drumkit/sounds/kick.wav"></audio>
            <audio data-key="70" src="/assets/drumkit/sounds/openhat.wav"></audio>
            <audio data-key="71" src="/assets/drumkit/sounds/boom.wav"></audio>
            <audio data-key="72" src="/assets/drumkit/sounds/ride.wav"></audio>
            <audio data-key="74" src="/assets/drumkit/sounds/snare.wav"></audio>
            <audio data-key="75" src="/assets/drumkit/sounds/tom.wav"></audio>
            <audio data-key="76" src="/assets/drumkit/sounds/tink.wav"></audio>
        </>
    );
}

