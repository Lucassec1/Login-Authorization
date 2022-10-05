import styled from 'styled-components';

import allIllustration from '../assets/all_illustration.svg'
import illustrationLeft from '../assets/illustration_left.svg';
import illustrationBottomRight from '../assets/illustration_bottom_right.svg'
import illustrationTopRight from '../assets/illustration_top_right.svg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.div`
    background-color: white;
    width: 30%;
    height: 50%;
`;

export const Imgleft = styled.div`
    background-image: url(${illustrationLeft});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: 0px;
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
