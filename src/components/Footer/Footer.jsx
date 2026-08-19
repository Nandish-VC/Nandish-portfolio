import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <p>
        &copy; {year} Nandish.
        All rights reserved.
      </p>

      <nav aria-label="Social links">

        <a
          href="https://github.com/Nandish-VC"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nandish-v-c"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:Nandishvc3@gmail.com">
          Nandishvc3@gmail.com
        </a>

      </nav>

    </footer>
  );
}

export default Footer;