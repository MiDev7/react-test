import styled from "styled-components";
import { useLocation } from "react-router-dom";
import theme from "./defaultTheme";

const GetLocation = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  if (currentLocation === "/view") {
    return "90%";
  }
  return "600px";
};
const AppWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  display: block;
  background-color: #ffffff;
  width: ${GetLocation};
  border-radius: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export default AppWrapper;
