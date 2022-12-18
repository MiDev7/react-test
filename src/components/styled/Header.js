import styled from "styled-components";
import Box from "./Box";
import theme from "./defaultTheme";

const Header = styled(Box)`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: ${theme.spacings.md};
`;

export default Header;
