import styled from "styled-components";
import { Inner } from "./IntroContainer";

const Brand = styled(Inner)`
  display: flex;
  align-items: center;
  background-color: black;
`;

function BrandContainer() {
  return <Brand></Brand>;
}

export default BrandContainer;
