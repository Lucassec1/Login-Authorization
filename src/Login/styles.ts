import styled from 'styled-components';

import allIllustration from '../assets/all_illustration.svg'
import illustrationLeft from '../assets/illustration_left.svg'
import illustrationRight from '../assets/illustration_right.svg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${allIllustration});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
`;