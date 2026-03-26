import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import LinkDocument from './components/LinkDocument';
import LinkSocial from './components/LinkSocial';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const socials = [
    {
      mainLink:"https://github.com/vitejs/vite", 
      iconLink:"/icons.svg#github-icon",
      textLink:"GitHub"
    },
    {
      mainLink:"https://chat.vite.dev/", 
      iconLink:"/icons.svg#discord-icon",
      textLink:"Discord"
    },
    {
      mainLink:"https://x.com/vite_js", 
      iconLink:"/icons.svg#x-icon",
      textLink:"X.com"
    },
    {
      mainLink: "https://bsky.app/profile/vite.dev",
      iconLink: "/icons.svg#bluesky-icon",
      textLink: "Bluesky"
    }
  ];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <p>Count is {count}</p>
        <ButtonCounter handleChangeCount={() => setCount((count) => count + 1)} />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <LinkDocument 
              link="https://vite.dev/"
              thumbnail={viteLogo}
              des="vite logo"
              textLink="Explore Vite"
            />

            <LinkDocument 
              link="https://react.dev/"
              thumbnail={reactLogo}
              des="detail vite"
              textLink="Learn more"
            />
          </ul>
        </div>
        {/* <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {socials.map((item, index) => (
              (<LinkSocial key={index} data={item} />)
            ))}
          </ul>
        </div> */}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;
