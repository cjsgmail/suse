import styled from "styled-components";
import { useRef, useEffect } from "react";
import IntroContainer from "../components/IntroContainer";
import ProductContainer from "../components/ProductContainer";
import BrandContainer from "../components/BrandContainer";
import { useMediaQuery } from "react-responsive";

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Mobile = ({ children }: { children?: any }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const PC = ({ children }: { children: any }) => {
  const isPC = useMediaQuery({ minWidth: 768 });
  return isPC ? children : null;
};

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
          console.log(["scrollTop", scrollTop]);
          console.log(["pageHeight", pageHeight]);
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
    <>
      <PC>
        <Outer ref={outerDivRef}>
          <IntroContainer />
          <BrandContainer />
          <ProductContainer />
        </Outer>
      </PC>
      <Mobile>
        <Outer>
          <IntroContainer />
          <BrandContainer />
          <ProductContainer />
        </Outer>
      </Mobile>
    </>
  );
}

export default Main;
