import styled from "styled-components";
import { useRef, useEffect } from "react";
import IntroContainer from "../components/IntroContainer";
import ProductContainer from "../components/ProductContainer";
import BrandContainer from "../components/BrandContainer";

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Main() {
  const outerDivRef = useRef<any>(null);

  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; //100vh, 화면 세로 길이
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top:
              pageHeight * (Math.floor(Math.ceil(scrollTop) / pageHeight) + 1),
            behavior: "smooth",
          });
        } else if (
          Math.ceil(scrollTop) >= pageHeight &&
          Math.ceil(scrollTop) < pageHeight * 2
        ) {
          outerDivRef.current.scrollTo({
            top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
            behavior: "smooth",
          });
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && Math.floor(scrollTop) <= pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (
          Math.ceil(scrollTop) >= pageHeight &&
          Math.ceil(scrollTop) < pageHeight * 2
        ) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Outer ref={outerDivRef}>
      <IntroContainer />
      <BrandContainer />
      <ProductContainer />
    </Outer>
  );
}

export default Main;
