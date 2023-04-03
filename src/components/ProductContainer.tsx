import styled from "styled-components";
import { Inner } from "./IntroContainer";
import suse_forest from "../images/suse_forest.jpeg";

const Product = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdfdf;
`;

const BuyLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
`;

const BuyLinkItemContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BuyLinkImgContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;
`;

const BuyLinkImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BuyLinkTextContainer = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const BuyLinkTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const ButLinkText = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: black;
  margin-bottom: 10px;
`;

const LinkBtn = styled.button`
  height: 50px;
  width: 200px;
  background-color: #3fe558;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #37b24d;
  }
`;

function ProductContainer() {
  return (
    <Product>
      <BuyLinkContainer>
        <BuyLinkItemContainer>
          <BuyLinkTextContainer>
            <BuyLinkTitle>누구나 다 처음이 있습니다.</BuyLinkTitle>
            <ButLinkText>
              저희의 패키지로 여러분의 시작을 도울 수 있습니다.
            </ButLinkText>
            <ButLinkText>SUSE와 함께</ButLinkText>
            <LinkBtn>시작하기</LinkBtn>
          </BuyLinkTextContainer>
        </BuyLinkItemContainer>
        <BuyLinkItemContainer>
          <BuyLinkImgContainer>
            <BuyLinkImg src={suse_forest} />
          </BuyLinkImgContainer>
        </BuyLinkItemContainer>
      </BuyLinkContainer>
    </Product>
  );
}

export default ProductContainer;
