const Contact = () => {
    return(
        <section id="contact">
                <h1>Contact</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="section-copy">
                            I'd love to hear from you! Send me an&nbsp;
                            <a href="mailto:doug@dougroussin.com">email</a> or
                            fill out the contact form.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <form
                            id="contact-form"
                            action="https://mailthis.to/droussin356@gmail.com"
                            method="POST"
                        >
                            <div className="row">
                                <div className="col-6">
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        required
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        required
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input
                                        type="text"
                                        id="email"
                                        name="_replyto"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="4"
                                        placeholder="What's on your mind..."
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button
                                        type="submit"
                                        className="submit-button btn"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    )
}

export default Contact;