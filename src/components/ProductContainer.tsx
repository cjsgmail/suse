import styled from "styled-components";
import { Inner } from "./IntroContainer";

const Product = styled(Inner)`
  background-color: #dfdfdf;
`;

function ProductContainer() {
  return <Product></Product>;
}

export default ProductContainer;
