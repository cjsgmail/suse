import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import naturalBg from "../images/naturalBg.jpg";

export const Inner = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
`;

const OpacityBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
`;

const Intro = styled(Inner)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${naturalBg});
`;

const Name = styled.h1`
  z-index: 999;
  margin-bottom: 20px;
  color: #3fe558;
  font-size: 70px;
  border-bottom: 2px solid white;
  @media screen and (max-width: 767px) {
    font-size: 50px;
  }
`;

const IntroTitle = styled.div`
  z-index: 999;
  margin-bottom: 5px;
  color: white;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    width: 80%;
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

function IntroContainer() {
  return (
    <Intro>
      <OpacityBg />
      <Name>SUSE</Name>
      <PC>
        <IntroTitle>우리는 지구를 닦습니다.</IntroTitle>
        <IntroTitle>친환경 그리고 제로웨이스트</IntroTitle>
        <IntroTitle>
          SUSE는 제품의 탄생부터 마지막까지 자연에 해를 끼치지 않고 일련의
          과정들이 지구를 위한 활동이 되기를 바랍니다.
        </IntroTitle>
      </PC>
      <Mobile>
        <IntroTitle>
          우리는 지구를 닦습니다. 친환경 그리고 제로웨이스트 SUSE는 제품의
          탄생부터 마지막까지 자연에 해를 끼치지 않고 일련의 과정들이 지구를
          위한 활동이 되기를 바랍니다.
        </IntroTitle>
      </Mobile>
    </Intro>
  );
}

export default IntroContainer;
