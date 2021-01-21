import React from "react";
import styled from "styled-components";
import Animator from "../../components/scroll_animator/Animator";
import ScrollContainer from "../../components/scroll_animator/ScrollContainer";
import ScrollPage from "../../components/scroll_animator/ScrollPage";
import { batch } from "../../utils/animations/AnimationTool";
import { Fade, FadeIn } from "../../utils/animations/FadeAnimation";
import { Move, MoveIn, MoveOut } from "../../utils/animations/MoveAnimation";
import { Sticky, StickyIn, StickyOut } from "../../utils/animations/StickyAnimation";
import { Zoom, ZoomIn } from "../../utils/animations/ZoomAnimation";

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LargeText = styled.div`
  font-size: 3em;
`;

const MediumText = styled.div`
  font-size: 2em;
`;

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <MediumText>Let't me show you scroll animation 😀</MediumText>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <LargeText>I'm FadeUpScrollOut ✨</LargeText>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <LargeText>I'm FadeUp ⛅️</LargeText>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <FlexCenter>
          <LargeText>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Seonghyeok - 
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </LargeText>
        </FlexCenter>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <LargeText>Done</LargeText>
          <MediumText>There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation</MediumText>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Presenter;
