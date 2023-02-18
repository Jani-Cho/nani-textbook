import React, {
useRef,
useState,
useEffect } from
"https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { motion } from "https://cdn.skypack.dev/framer-motion@4.1.17";
import cx from "https://cdn.skypack.dev/classnames@2.3.1";

const slides = [
  "./src/國中社會7上課本.jpg",
  "./src/國中科技8上課本.jpg",
  "./src/國中國文7上課本.jpg",
  "./src/國中綜合8上課本.jpg",
  "./src/國中數學7上課本.jpg",
"./src/國中自然7上課本.jpg",
"./src/國中健體8上課本.jpg",
];

// const slides = [
//   ["./src/國中社會7上課本.jpg","sco"]
//   ["./src/國中科技8上課本.jpg","technology"]
//   ["./src/國中國文7上課本.jpg","chinese"]
//   ["./src/國中綜合8上課本.jpg","ch"]
//   ["./src/國中數學7上課本.jpg","ch"]
// ["./src/國中自然7上課本.jpg","ch"]
// ["./src/國中健體8上課本.jpg","ch"]
// ];


function Carousel({ degrees, diameter }) {
  const slidesRef = useRef([]);

  const [isDragging, setIsDragging] = useState(false);
  const [active, setActive] = useState(0);
  const [coordX, setCoordX] = useState(0);

  const slideWidth = diameter / slides.length;
  const centerIndex = Math.round(slides.length / 2);

  const onUpdate = latest => {
    setCoordX(latest.x);
  };

  const handleModifyTarget = target => {
    const snapTarget = Math.round(target / slideWidth) * slideWidth;

    return snapTarget;
  };

  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, slides.length);
  }, [slides]);

  useEffect(() => {
    const activeIndex = slidesRef.current.findIndex(
    (slide, index) =>
    getComputedStyle(slide).getPropertyValue("transform") === "none");


    if (!isDragging) {
      setActive(activeIndex);
    }
  }, [isDragging]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "root" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement(motion.div, {
      drag: "x",
      onUpdate: onUpdate,
      dragElastic: 0,
      dragConstraints: {
        right: slideWidth * centerIndex,
        left: -(slideWidth * (slides.length - (centerIndex + 1))) },

      dragTransition: {
        power: 0.01,
        timeConstant: 200,
        modifyTarget: handleModifyTarget } }, /*#__PURE__*/


    React.createElement("div", { className: "subjects-container" },
    slides.map((slide, index) => {
      const isActive = active === index;
      const rotate = (index - centerIndex) * degrees;
      const divider = slideWidth / degrees;

      return /*#__PURE__*/(
        React.createElement(motion.div, {
          key: index,
          ref: el => slidesRef.current[index] = el,
          className: cx("subject", { active: isActive }),
          animate: {
            rotate: coordX / divider + rotate,
            transformOrigin: `50% ${diameter}px` },

          transition: {
            ease: "easeOut",
            duration: 0.5 },

          onAnimationStart: () => setIsDragging(true),
          onAnimationComplete: () => setIsDragging(false) }, /*#__PURE__*/

        React.createElement("img", { src: slide, alt: "" })));


    }))))));





}
ReactDOM.render( /*#__PURE__*/
React.createElement(Carousel, { degrees: 15, diameter: 1600 }),
document.getElementById("root"));
ReactDOM.render( /*#__PURE__*/
React.createElement(Carousel, { degrees: 10, diameter: 1600 }),
document.getElementById("phone"));