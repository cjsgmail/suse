import styled from "styled-components";

export const Inner = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
`;

const Intro = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroTitle = styled.h1`
  margin-bottom: 5px;
`;

function IntroContainer() {
  return (
    <Intro>
      <IntroTitle>우리는 지구를 닦습니다.</IntroTitle>
      <IntroTitle>친환경 그리고 제로웨이스트</IntroTitle>
      <div>
        SUSE는 제품의 탄생부터 마지막까지 자연에 해를 끼치지 않고 일련의
        과정들이 지구를 위한 활동이 되기를 바랍니다.
      </div>
    </Intro>
  );
}

export default IntroContainer;
