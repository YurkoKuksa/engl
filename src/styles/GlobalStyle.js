import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family:'Roboto', sans-serif,  'Segoe UI', -apple-system, BlinkMacSystemFont,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


`;

// .autour-one-regular {
//   font-family: "Autour One", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .dm-serif-text-regular {
//   font-family: "DM Serif Text", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .dm-serif-text-regular-italic {
//   font-family: "DM Serif Text", serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .merriweather-light {
//   font-family: "Merriweather", serif;
//   font-weight: 300;
//   font-style: normal;
// }

// .merriweather-regular {
//   font-family: "Merriweather", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .merriweather-bold {
//   font-family: "Merriweather", serif;
//   font-weight: 700;
//   font-style: normal;
// }

// .merriweather-black {
//   font-family: "Merriweather", serif;
//   font-weight: 900;
//   font-style: normal;
// }

// .merriweather-light-italic {
//   font-family: "Merriweather", serif;
//   font-weight: 300;
//   font-style: italic;
// }

// .merriweather-regular-italic {
//   font-family: "Merriweather", serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .merriweather-bold-italic {
//   font-family: "Merriweather", serif;
//   font-weight: 700;
//   font-style: italic;
// }

// .merriweather-black-italic {
//   font-family: "Merriweather", serif;
//   font-weight: 900;
//   font-style: italic;
// }

// .stix-two-text-<uniquifier> {
//   font-family: "STIX Two Text", serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }

// .spectral-extralight {
//   font-family: "Spectral", serif;
//   font-weight: 200;
//   font-style: normal;
// }

// .spectral-light {
//   font-family: "Spectral", serif;
//   font-weight: 300;
//   font-style: normal;
// }

// .spectral-regular {
//   font-family: "Spectral", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .spectral-medium {
//   font-family: "Spectral", serif;
//   font-weight: 500;
//   font-style: normal;
// }

// .spectral-semibold {
//   font-family: "Spectral", serif;
//   font-weight: 600;
//   font-style: normal;
// }

// .spectral-bold {
//   font-family: "Spectral", serif;
//   font-weight: 700;
//   font-style: normal;
// }

// .spectral-extrabold {
//   font-family: "Spectral", serif;
//   font-weight: 800;
//   font-style: normal;
// }

// .spectral-extralight-italic {
//   font-family: "Spectral", serif;
//   font-weight: 200;
//   font-style: italic;
// }

// .spectral-light-italic {
//   font-family: "Spectral", serif;
//   font-weight: 300;
//   font-style: italic;
// }

// .spectral-regular-italic {
//   font-family: "Spectral", serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .spectral-medium-italic {
//   font-family: "Spectral", serif;
//   font-weight: 500;
//   font-style: italic;
// }

// .spectral-semibold-italic {
//   font-family: "Spectral", serif;
//   font-weight: 600;
//   font-style: italic;
// }

// .spectral-bold-italic {
//   font-family: "Spectral", serif;
//   font-weight: 700;
//   font-style: italic;
// }

// .spectral-extrabold-italic {
//   font-family: "Spectral", serif;
//   font-weight: 800;
//   font-style: italic;
// }
// .radley-regular {
//   font-family: "Radley", serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .radley-regular-italic {
//   font-family: "Radley", serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .vollkorn-<uniquifier> {
//   font-family: "Vollkorn", serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }
