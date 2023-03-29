import styled from "styled-components";
import { Inner } from "./IntroContainer";

const Product = styled(Inner)`
  background-color: #3fe558;
`;

function ProductContainer() {
  return <Product>ProductContainer</Product>;
}

export default ProductContainer;
