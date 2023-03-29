import styled from "styled-components";

const StyledHeader = styled.header`
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

function Header() {
  return (
    <StyledHeader>
      <h2>SUSE</h2>
    </StyledHeader>
  );
}

export default Header;
