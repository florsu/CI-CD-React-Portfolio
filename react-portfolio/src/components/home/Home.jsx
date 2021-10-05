import "./home.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer"],
        });
    }, []);

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer container-fluid">
                    <img src="assets/my-image.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Christian Flores</h1>
                    <h3>
                        Freelance <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
