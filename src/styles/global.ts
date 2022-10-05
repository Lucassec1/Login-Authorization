import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #27262C;
        --secondary: #00C48C;
        --base-color: #141414;
        --green1: #11D29B; 
        --green2: #64C48C;
        --grey1: #DBDBDB;
        --grey2: #9C9C9C;
        --grey3: #6C6D6D;
        --red: #FF7171;
        --orange: #FFA26B;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--primary);
    }

`;

export default GlobalStyle;