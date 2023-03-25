import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            © 2022 MegaloMedia / megaDoug{"  "}
            <Link
                className="social-link"
                to="https://www.instagram.com/megadoug_roussin/"
                target="_blank"
            >
                <img src="./images/instagram.png" alt="instagram logo" />
            </Link>
            <Link
                className="github-link social-link"
                to="https://github.com/dougMR/DougMR.github.io"
                target="_blank"
            >
                <img src="./images/github_logo_512x512.png" alt="github logo" />
            </Link>
        </footer>
    );
};
export default Footer;
