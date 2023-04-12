import styled from 'styled-components';
import { useEffect, ReactElement, ReactText } from "react";

import "reveal.js/dist/reveal.css";

import Reveal from "reveal.js";

// Colorscheme: https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46

const Section = styled.section`
  background: #2F3E46;
  width: 100%;
  height: 100%;
  color: #CAD2C5;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
  line-height: 2em;
`;

const HeaderWithEmoji = styled(Header)`
  margin-top: -2rem;
`;

const Slide = ({
  children,
  transition = "slide",
}: {
  children: ReactElement | ReactText;
  transition?: string;
}) => <Section data-transition={transition}><Container>{children}</Container></Section>;

function App() {
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize();
    return () => {
      deck.destroy()
    }
  });

  return (
    <div className="reveal">
      <div className="slides">
        <Slide><Header>Why Vim is the Best Text Editor <br />You're Not Using (Yet)</Header></Slide>
        <Slide><HeaderWithEmoji>🤨<br />Why would you listen<br />to me about Vim?</HeaderWithEmoji></Slide>
        <Slide><Header>Vim History</Header></Slide>
        <Slide><Header>Why Vim?</Header></Slide>
        <Slide><Header>Vim Basics</Header></Slide>
        <Slide><Header>Resources</Header></Slide>
      </div>
    </div>
  );
}

export default App;
