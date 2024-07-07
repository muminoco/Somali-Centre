import { createScrollTrigger } from "./scrolltriggers/scrolltrigger.js";

/* 
Text Splitter 
Takes the text target (such as a heading),
and the types of split text (lines, words, chars).
*/
let createSplitText = function (textItem, splitTypes) {
  let newSplitText = new SplitType(textItem, splitTypes);

  //   let newSplitText = new SplitType(textItem, splitTypes);
};

/*
Text Animations
1). Split the text
2). Loop through them
3). Create a scroll trigger for the target
4). Do the animation
*/

/* 

Fade Animations 

*/

export function fadeInAnimation(item) {
  gsap.set(item, { opacity: 1 });
  let target = item;
  let tl = gsap.timeline({ paused: true });

  createScrollTrigger(target, tl);

  tl.from(target, {
    opacity: 0,
    duration: 0.75,
    stagger: { amount: 0.75 },
    ease: "power4.out",
  });
}

export function specialParagraphAnimation(textItem) {
  gsap.set(textItem, { opacity: 1 });

  // First split the appropriate text types
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetWord = target.find(".word");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetWord, {
      filter: "blur(3px)",
      opacity: 0,
      duration: 0.75,
      yPercent: 30,
      stagger: 0.06,
      ease: "sine.out",
    });
  });
}

export function sectionHeadingAnimation(textItem) {
  gsap.set(textItem, { opacity: 1 });

  // First split the appropriate text types
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetWord = target.find(".word");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetWord, {
      opacity: 0,
      duration: 0.75,
      yPercent: 30,
      stagger: 0.06,
      ease: "sine.out",
    });
  });
}
/* 

Delay Animations

*/
export function delayTextFadeInAnimation(textItem, delayInSeconds) {
  gsap.set(textItem, { opacity: 1 });

  // First split the appropriate text types
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetWord = target.find(".word");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetWord, {
      delay: delayInSeconds,
      filter: "blur(2px)",
      opacity: 0,
      duration: 1,
      stagger: { amount: 0.5 },
      ease: "power1.out",
    });
  });
}

// Non-Text Normal Fade
export function delayFadeInAnimation(item, delayInSeconds) {
  item.each(function (index) {
    let target = $(this);
    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(target, {
      delay: delayInSeconds,
      // filter: "blur(2px)",
      opacity: 0,
      yPercent: 10,
      duration: 0.75,
      ease: "sine.out",
    });
  });
}

export function linesFadeInAnimation(textItem) {
  createSplitText(textItem, { types: "lines, words" });

  textItem.each(function (index) {
    let target = $(this);
    let targetLine = target.find(".line");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetLine, {
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.out",
    });
  });
}

/*

Mask Animations

*/

export function linesMaskUpAnimation(textItem) {
  createSplitText(textItem, { types: "words, lines" });

  textItem.each(function (index) {
    let target = $(this);
    let targetWord = target.find(".word");
    let targetLine = target.find(".line");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetWord, {
      opacity: 0,
      yPercent: 150,
      duration: 1,
      stagger: 0.001,
      ease: "power1.out",
    });
  });
}

/* 

Blur Animations

*/

export function heroHeadingAnimation(textItem) {
  gsap.set(textItem, { opacity: 1 });
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetChar = target.find(".char");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetChar, {
      filter: "blur(4px)",
      color: "#0f54c2",
      autoAlpha: 0,
      scale: 0.9,
      transformOrigin: "center bottom",
      duration: 0.5,
      stagger: { each: 0.015, from: "left" },
      ease: "sine.out",
    });
  });
}

export function linesBlurInAnimation(textItem) {
  createSplitText(textItem, { types: "words, lines" });
  textItem.each(function (index) {
    let target = $(this);
    let targetLine = target.find(".line");

    // tl.set(targetLine, { overflow: hidden });
    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetLine, {
      filter: "blur(10px)",
      opacity: 0,
      yPercent: 50,
      duration: 1,
      stagger: { amount: 0.3 },
      ease: "power1.out",
    });
  });
}
