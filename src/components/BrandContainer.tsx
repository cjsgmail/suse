import styled from "styled-components";
import { Inner } from "./IntroContainer";
import suse_logo from "../images/suse_logo.jpeg";
import suse_product_1 from "../images/suse_product_1.jpeg";
import suse_product_2 from "../images/suse_product_2.jpeg";
import suse_pack from "../images/suse_pack.jpeg";
import suse_card from "../images/suse_card.jpeg";

const Brand = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef3ef;
`;

const BrandBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

const MainContainer = styled.div`
  display: flex;
  height: 80%;
  width: 50%;
  margin-right: 10px;
`;

const MainIntro = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SmallSection = styled.div`
  height: 80%;
  width: 50%;
`;

const SmallContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`;

const SmallContainerFlexEnd = styled(SmallContainer)`
  align-items: flex-end;
`;

const ItemContainer = styled.div`
  background-color: white;
  height: 98%;
  width: 48%;
  border-radius: 10px;
  margin-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  height: 70%;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
`;

const IntroText = styled.div`
  width: 80%;
`;

function BrandContainer() {
  return (
    <Brand>
      <BrandBox>
        <MainContainer>
          <MainIntro>
            <ImgContainer>
              <Img src={suse_logo} />
            </ImgContainer>
            <TextContainer>
              <IntroText>
                '우리는 지구를 닦습니다' 라는 슬로건을 가진 저희의 도전에
                동참해주셔서 감사합니다. 조금 불편하지만 지구를 위해.
              </IntroText>
            </TextContainer>
          </MainIntro>
        </MainContainer>
        <SmallSection>
          <SmallContainer>
            <ItemContainer>
              <ImgContainer>
                <Img src={suse_pack} />
              </ImgContainer>
              <TextContainer>
                <IntroText>SUSE's Paper Bag</IntroText>
              </TextContainer>
            </ItemContainer>
            <ItemContainer>
              <ImgContainer>
                <Img src={suse_product_1} />
              </ImgContainer>
              <TextContainer>
                <IntroText>SUSE's Loofah Sponge</IntroText>
              </TextContainer>
            </ItemContainer>
          </SmallContainer>
          <SmallContainerFlexEnd>
            <ItemContainer>
              <ImgContainer>
                <Img src={suse_product_2} />
              </ImgContainer>
              <TextContainer>
                <IntroText>SUSE's Package</IntroText>
              </TextContainer>
            </ItemContainer>
            <ItemContainer>
              <ImgContainer>
                <Img src={suse_card} />
              </ImgContainer>
              <TextContainer>
                <IntroText>SUSE's Card</IntroText>
              </TextContainer>
            </ItemContainer>
          </SmallContainerFlexEnd>
        </SmallSection>
      </BrandBox>
    </Brand>
  );
}

export default BrandContainer;
