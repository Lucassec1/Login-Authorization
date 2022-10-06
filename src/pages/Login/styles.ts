import styled from 'styled-components';

import illustrationLeft from '../../assets/illustration_left.svg';
import illustrationBottomRight from '../../assets/illustration_bottom_right.svg';
import illustrationTopRight from '../../assets/illustration_top_right.svg';

export const Container = styled.div`
    position: relative;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
`;

export const Form = styled.div`
    border: 2px solid red;

    margin-top: 200px;
    width: 360px;
    height: 444px;
    padding: 20px;

    z-index: 5;

    div {
        width: 320px;
        height: 63px;

        margin-bottom: 16px;

        p {
            font-weight: 600;
            font-size: 16px; 
            
            color: var(--white);
        }
    }

    button {
        border-radius: 8px;
        border: 2px solid red;
        width: 320px;
        height: 40px;
    }

`;

export const Input = styled.input`
    width: 320px;
    height: 40px;

    padding: 16px 12px 12px 12px;
    margin-top: 5px;

    border-radius: 8px;
    border: 2px solid var(--green1);

    &:hover {
        border: 2px solid var(--green2);
    }
    
    font-weight: 600;
    font-size: 16px;
    
    color: var(--base-color);
    
    ::-webkit-input-placeholder {
        color: var(--grey2);
    }
    
`;

export const Title = styled.h6`
    font-weight: 600;
    font-size: 50px;

    text-align: center;

    color: var(--white);

    margin-bottom: 20px;
`;

export const Imgleft = styled.div`
    background-image: url(${illustrationLeft});
    background-repeat: no-repeat;

    position: absolute;
    left: 0px;

    width: 50vw;
    height: 100vh;
`;

export const ImgTopRight = styled.div`
    background-image: url(${illustrationTopRight}); 
    background-repeat: no-repeat;

    position: absolute;
    top: 0px;
    right: 0px;

    width: 27vw;
    height: 50vh;
`;

export const ImgBottomRight = styled.div`
    background-image: url(${illustrationBottomRight}); 
    background-repeat: no-repeat;

    position: absolute;
    bottom: 0px;
    right: 0px;

    width: 26vw;
    height: 44.5vh;
`;
