import { useEffect, useState } from "react";
import "./Navbar.css";
 
function Navbar() {
 
  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
 const [menuOpen, setMenuOpen]=
  useState(false);
  // Apply theme whenever it changes
  useEffect(() => {
 
    document.body.dataset.theme = theme;
 
    localStorage.setItem(
      "theme",
      theme
    );
 
  }, [theme]);
 
 
  // Toggle dark/light mode
  const toggleTheme = () => {
 
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";
 
    setTheme(newTheme);
  };
 
 
  return (
    <header className="site-header">
 
      <nav className="navbar">
 
        {/* Logo */}
        <div className="logo">
            <img src="Nandish passport.jpeg" />
                    <span>Nandish</span>
        </div>
 
 
        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
<li>
<a href="#about" onClick={() => setMenuOpen(false)}>
      About
</a>
</li>
 
  <li>
<a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
</a>
</li>
 
  <li>
<a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
</a>
</li>
 
  <li>
<a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
</a>
</li>
</ul>
 
 
        {/* Theme button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
 
 
        {/* Mobile menu */}
        <button
  type="button"
  className="menu-toggle"
  aria-label="Toggle navigation"
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(prev => !prev)}
>
  ☰
</button>
 
      </nav>
 
    </header>
  );
}
 
export default Navbar;
 