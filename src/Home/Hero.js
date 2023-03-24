const Hero = () => {
    return(
        <section
        id="intro"
        className="d-flex flex-column justify-content-center align-items-center"
    >
        <div id="intro-title">
           <img className="logo-img" src="images/megadoug_bolt_in_circle_cutout_orange.svg" alt="megaDoug logo orange" />
            <h1>Doug Roussin</h1>
        </div>
        <h3>Coder, artist, animator, potter, musician, writer, coder<a
                        href="#footnote"
                        style={{textDecoration: "none", fontSize: "1.5em"}}
                        >*</a></h3>
        <code>const fun = playWith(Javascript);</code>
        <a className="more" href="#about">
            <span className="material-symbols-outlined"> expand_more </span>
        </a>
    </section>
    )
}

export default Hero;