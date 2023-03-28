import styled from "styled-components";
import { GlobalStyles } from "./styleds";
import { useRef, useEffect } from "react";

const Header = styled.header`
  position: fixed;
  height: 50px;
  width: 100%;
  padding: 10px;
  color: #3fe558;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Outer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroTitle = styled.h1`
  margin-bottom: 5px;
`;

const ProductContainer = styled(IntroContainer)`
  background-color: #3fe558;
`;

function App() {
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
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Header>
        <h2>SUSE</h2>
      </Header>
      <Outer ref={outerDivRef}>
        <IntroContainer>
          <IntroTitle>우리는 지구를 닦습니다.</IntroTitle>
          <IntroTitle>친환경 그리고 제로웨이스트</IntroTitle>
          <div>
            SUSE는 제품의 탄생부터 마지막까지 자연에 해를 끼치지 않고 일련의
            과정들이 지구를 위한 활동이 되기를 바랍니다.
          </div>
        </IntroContainer>
        <ProductContainer>
          <IntroTitle>2</IntroTitle>
        </ProductContainer>
        <IntroContainer>
          <IntroTitle>3</IntroTitle>
        </IntroContainer>
      </Outer>
    </div>
  );
}

export default App;
