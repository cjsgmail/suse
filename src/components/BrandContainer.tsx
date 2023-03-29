import styled from "styled-components";
import { Inner } from "./IntroContainer";

const Brand = styled(Inner)`
  display: flex;
  align-items: center;
  background-color: #97bb9e;
`;

function BrandContainer() {
  return <Brand></Brand>;
}

export default BrandContainer;
