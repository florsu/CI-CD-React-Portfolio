import { useEffect, useState } from "react";
import Works from "../works/Works";
import "./portfolio.scss"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];
    return (
        <div className="porfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <Works
                     title={item.title}
                     active={selected === item.id}
                     setSelected={setSelected} 
                     id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/foodiepal-brand-logo.jpg"
                     alt="" />
                    <h3>Food App</h3>
                </div>
                <div className="item">
                    <img src="assets/weather-app.jpg" alt="" />
                    <h3>Weather Dashboard</h3>
                </div>
                <div className="item">
                    <img src="assets/work-day-scheduler.jpg" alt="" />
                    <h3>Work Day Scheduler</h3>
                </div>
            </div>
        </div>
    )
}
