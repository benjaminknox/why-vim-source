import styled from "styled-components";
import { useEffect, ReactElement, ReactText, useRef } from "react";

import ReactHlsPlayer from "react-hls-player";

import "reveal.js/dist/reveal.css";

import Reveal from "reveal.js";

// Colorscheme: https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46

const Section = styled.section`
  background: #2f3e46;
  width: 100%;
  height: 100%;
  color: #cad2c5;
`;

const Image = styled.img`
  border-radius: 10px;
  border: 1px solid #1f292e;
`;

const SlideStack = Section;

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

const Header2 = styled.h2`
  font-size: 25px;
  margin: 0;
  padding: 0;
  line-height: 2em;
  box-sizing: border-box;
`;

const Timeline = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Dates = styled.div`
  width: 38.2%;
  height: 100%;
  border-right: 2px solid #84a98c;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DateLine = styled(Header2)`
  text-align: right;
  width: 100%;
  padding-right: 25px;
  margin-top: 18px;
  margin-bottom: 18px;
  &:nth-of-type(even) {
    color: #93a489;
  }
`;

const Details = styled(Timeline)`
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-left: 25px;
`;

const Detail = styled(Header2)`
  margin-top: 18px;
  margin-bottom: 18px;
  &:nth-of-type(even) {
    color: #93a489;
  }
`;

const VideoWrapper = styled.div`
  padding: 0 80px;
`;

const Slide = ({
  children,
  transition = "slide",
}: {
  children: ReactElement | ReactText;
  transition?: string;
}) => (
  <Section data-transition={transition}>
    <Container>{children}</Container>
  </Section>
);

function App() {
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize();
    return () => {
      deck.destroy();
    };
  });

  return (
    <div className="reveal">
      <div className="slides">
        <Slide>
          <Header>
            Why Vim is the Best Text Editor <br />
            You're Not Using (Yet)
          </Header>
        </Slide>
        <SlideStack>
          <Slide>
            <HeaderWithEmoji>
              🤨
              <br />
              Why would you listen
              <br />
              to me about Vim?
            </HeaderWithEmoji>
          </Slide>
          <Slide>
            <div>
              <Header>I've used vim...</Header>
              <Header2 className="fragment fade-up">
                for my entire career.
              </Header2>
              <Header2 className="fragment fade-up">
                at Physna for almost everything.
              </Header2>
              <Header2 className="fragment fade-up">
                on Windows, Linux, and Macos.
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>I've written...</Header>
              <Header2 className="fragment fade-up">
                a lot of my code in vim.
              </Header2>
              <Header2 className="fragment fade-up">
                my own configuration for vim several times.
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>Although...</Header>
              <Header2 className="fragment fade-up">
                there are people who may do more than me.
              </Header2>
            </div>
          </Slide>
        </SlideStack>
        <SlideStack>
          <Slide>
            <Header>A Brief Vim History</Header>
          </Slide>
          <Slide>
            <Timeline>
              <Dates>
                <DateLine>1976</DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="1"
                >
                  1985
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="2"
                >
                  1987
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="3"
                >
                  1988
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="4"
                >
                  1990
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="5"
                >
                  1991
                </DateLine>
              </Dates>
              <Details>
                <Detail>
                  Vi (visual) Started by Bill Joy at Berkeley, based on ed
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="1">
                  Vi closed sourced because of its roots in ed on unix
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="2">
                  Limited Vi clone STEVIE created
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="3">
                  Vim created by Bram Moolenaar ported from STEVIE
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="4">
                  Vi clone elvis created which ships with slackware today
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="5">
                  Vim 1st public release v1.14
                </Detail>
              </Details>
            </Timeline>
          </Slide>
          <Slide>
            <Timeline>
              <Dates>
                <DateLine>1991</DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="1"
                >
                  1996
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="2"
                >
                  2002
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="3"
                >
                  2016
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="4"
                >
                  2021
                </DateLine>
                <DateLine
                  className="fragment fade-left"
                  data-fragment-index="5"
                >
                  2022
                </DateLine>
              </Dates>
              <Details>
                <Detail>Vim 1st public release v1.14</Detail>
                <Detail className="fragment fade-right" data-fragment-index="1">
                  Vim 4 released, comes with a Gui, gvim
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="2">
                  Original Vi source code released as OSS
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="3">
                  Vi celebrates its 40 year anniversary
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="4">
                  Vim celebrates its 30 year anniversary
                </Detail>
                <Detail className="fragment fade-right" data-fragment-index="5">
                  Vim 9.0 released
                </Detail>
              </Details>
            </Timeline>
          </Slide>
          <Slide>
            <div>
              <Header>Usage Stats in 2022</Header>
              <br />
              <br />
              <br />
              <Image src="/usage-stats.png" />
              <br />
              <br />
              <br />
              <br />
              <a href="https://survey.stackoverflow.co/2022/#section-most-popular-technologies-integrated-development-environment" target="blank">Stack Overflow</a>
            </div>
          </Slide>
          <Slide>
            <Header>A Brief Vim History</Header>
          </Slide>
        </SlideStack>
        <SlideStack>
          <Slide>
            <div>
              <Header>Why Vim?</Header>
              <Header2>The Philosophy of Vim</Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>Portability</Header>
              <Header2 className="fragment fade-up">
                Customizations are easy to write with{" "}
                <a href="https://devhints.io/vimscript" target="blank">
                  vimscript
                </a>
              </Header2>
              <Header2 className="fragment fade-up">
                Configurable by default, for example,{" "}
                <a
                  href="https://github.com/benjaminknox/vim/blob/master/.vimrc"
                  target="blank"
                >
                  my config on github
                </a>
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>Plugin Ecosystem</Header>
              <Header2 className="fragment fade-up">
                Plugins are Open Source,{" "}
                <a href="https://vimawesome.com" target="blank">
                  VimAwesome
                </a>
              </Header2>
              <Header2 className="fragment fade-up">
                There are plugin managers, I use{" "}
                <a href="https://github.com/junegunn/vim-plug" target="blank">
                  vim-plug
                </a>
                , but there are others
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Setting it up</Header2>
              <GetVimGoingVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>By devs, for devs</Header>
              <Header2 className="fragment fade-up">
                Linting has wide support, I use{" "}
                <a href="https://github.com/dense-analysis/ale">ale</a> but
                there are others
              </Header2>
              <Header2 className="fragment fade-up">
                <a
                  href="https://github.com/rafi/awesome-vim-colorschemes"
                  target="blank"
                >
                  Colorschemes
                </a>{" "}
                have wide support
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>Finally: Vim is an editor not a writer</Header>
              <Header2 className="fragment fade-up">
                You manipulate the code
              </Header2>
              <Header2 className="fragment fade-up">
                Your hands don't leave the keyboard
              </Header2>
              <Header2 className="fragment fade-up">
                <a href="https://devhints.io/vim" target="blank">
                  Commands Cheat Sheet
                </a>
              </Header2>
            </div>
          </Slide>
          <Slide>
            <div>
              <Header>That's Why We Vim</Header>
            </div>
          </Slide>
        </SlideStack>
        <SlideStack>
          <Slide>
            <Header>Vim Basics</Header>
          </Slide>
          <Slide>
            <div>
              <Header2>Normal Mode - Moving around</Header2>
              <NormalModeMovingAroundVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Insert Mode - Writing</Header2>
              <InsertModeVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Visual Mode - Selecting</Header2>
              <VisualModeVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Command Mode</Header2>
              <CommandModeVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Macros</Header2>
              <MacrosVideo />
            </div>
          </Slide>
          <Slide>
            <div>
              <Header2>Undo / Redo</Header2>
              <UndoRedoVideo />
            </div>
          </Slide>
        </SlideStack>
        <Slide>
          <div>
            <Header>How do I get started?</Header>
            <Header2>Install Vim keybindings in your editor, most have them</Header2>
            <Header2>Tutorials, <a href="https://www.openvim.com/" target="blank">openvim.com</a>, <a href="https://vim-adventures.com/">Vim Adventures</a></Header2>
            <Header2>But I suggest jumping right in!</Header2>
          </div>
        </Slide>
      </div>
    </div>
  );
}

const GetVimGoingVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/vim-get-going.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const NormalModeMovingAroundVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/normal-mode-moving-around.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const InsertModeVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/insert-mode.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const VisualModeVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/visual-mode.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const CommandModeVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/command-mode.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const MacrosVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/macros.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
};

const UndoRedoVideo = () => {
  const player = useRef<HTMLVideoElement>(null);

  return (
    <VideoWrapper>
      <ReactHlsPlayer
        playerRef={player}
        src="/undo-redo.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </VideoWrapper>
  );
}

export default App;
