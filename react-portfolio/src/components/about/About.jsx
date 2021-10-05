import "./about.scss";

export default function About() {
    return (
        <div className="about" id="about">
           <div className="left">
                <div className="imgContainer container-fluid">
                    <h1>ABOUT ME</h1>
                    <img src="assets/about-image.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <p>I am a solution-driven Developer with a passion for UX/UI design based in San Francisco, California.
                       I have tried different kind of careers, however, none of those gave me the fulfillment which I found in Web Development.
                       Having an innovative freedom on this profession makes me feel accomplished and have a strong impact regardless of the complexity that comes with it.I also have a background in customer service and earned a certificate in Front-End Web Development Bootcamp from the University of California, Riverside under Amazon Career Choice.
                       Everyday, I get excited of something new to learn and I am naturally curious and never-ending improving my creative side.
</p>
                </div>
            </div>
        </div>
    )
}
