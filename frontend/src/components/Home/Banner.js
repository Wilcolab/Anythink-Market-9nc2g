import React from "react";
import logo from "../../imgs/logo.png";

const div = styled.div `
  color: ${props => props.theme.main};`


div.defaultProps = {
  theme: {
    main: "dark theme"
  }
}
const theme = {
  main: "dark theme"
};

const Banner = () => {

  
  return (
    <ThemeProvider theme={theme}>
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Banner;
