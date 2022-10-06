import styled from 'styled-components';

import allIllustration from '../assets/all_illustration.svg'
import illustrationLeft from '../../assets/illustration_left';
import illustrationBottomRight from '../assets/illustration_bottom_right.svg'
import illustrationTopRight from '../assets/illustration_top_right.svg'

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        position: absolute;
        left: 0px;
    }
`;

export const Form = styled.div`
    background-color: white;
    width: 30%;
    height: 50%;
`;

export const Imgleft = styled(illustrationLeft)`
    position: absolute;
    border: 5px solid red;
    left: 0px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
`;

// export const ImgTopRight = styled.div`
//     background-image: url(${illustrationTopRight}); 
//     width: 100%;
//     height: 100%;
//     background-repeat: no-repeat;
//     position: absolute;
// `;

// export const ImgBottomRight = styled.div`

// `;
