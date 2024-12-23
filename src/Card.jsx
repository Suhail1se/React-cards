import React, { useState, useEffect } from 'react';
import Astra from './assets/Astra_-_Avatar.webp';
import Fade from './assets/Fade_-_Avatar.webp';
import Gekko from './assets/Gekko_-_Avatar.webp';
import Harbor from './assets/Harbor_-_Avatar.webp';
import Jett from './assets/Jett_-_Avatar.webp';
import KAY_O from './assets/KAY_O_-_Avatar.webp';
import Killjoy from './assets/Killjoy_-_Avatar.webp';
import Neon from './assets/Neon_-_Avatar.webp';
import Omen from './assets/Omen_-_Avatar.webp';
import Phoenix from './assets/Phoenix_-_Avatar.webp';
import Raze from './assets/Raze_icon.webp';
import Reyna from './assets/Reyna_-_Avatar.webp';
import Sage from './assets/Sage_-_Avatar.webp';
import Skye from './assets/Skye_-_Avatar.webp';
import Sova from './assets/Sova_-_Avatar.webp';
import Viper from './assets/Viper_-_Avatar.webp';
import Yoru from './assets/Yoru_-_Avatar.webp';
import Deadlock from './assets/Deadlock_icon.webp';
import backgroundMusic from './assets/background-music.mp3';


function Card() {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const audio = document.getElementById('background-music');
        audio.play();
        audio.loop = true;

        return () => {
            audio.pause();
        };
    }, []);
    const toggleMusic = () => {
        const audio = document.getElementById('background-music');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
        <audio id="background-music" src={backgroundMusic} />
        <div className="mute-button" onClick={toggleMusic}>
                <div className="slider">
                    {isPlaying ? 'Mute' : 'Play'}
                </div>
            </div>
        <div className="card">
            <img src={Astra} alt="profile picture" />
            <h2>Astra</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Fade} alt="profile picture" />
            <h2>Fade</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Gekko} alt="profile picture" />
            <h2>Gekko</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Harbor} alt="profile picture" />
            <h2>Harbor</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Jett} alt="profile picture" />
            <h2>Jett</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={KAY_O} alt="profile picture" />
            <h2>KAY_O</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Killjoy} alt="profile picture" />
            <h2>Killjoy</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Neon} alt="profile picture" />
            <h2>Neon</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Omen} alt="profile picture" />
            <h2>Omen</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Phoenix} alt="profile picture" />
            <h2>Phoenix</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Raze} alt="profile picture" />
            <h2>Raze</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Reyna} alt="profile picture" />
            <h2>Reyna</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Sage} alt="profile picture" />
            <h2>Sage</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Skye} alt="profile picture" />
            <h2>Skye</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Sova} alt="profile picture" />
            <h2>Sova</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Viper} alt="profile picture" />
            <h2>Viper</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Yoru} alt="profile picture" />
            <h2>Yoru</h2>
            <p>I make YouTube videos and play video games</p>
        </div>
        <div className="card">
            <img src={Deadlock} alt="profile picture" />
            <h2>Deadlock</h2>
            <p>I make YouTube videos and play video games</p>
        </div>

        </>
    );
}

export default Card;
