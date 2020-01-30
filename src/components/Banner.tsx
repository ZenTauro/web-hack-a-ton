import React from 'react';
import styled from 'styled-components';

interface IBannerProps {
    height: number,
}

const Aside = styled.aside<{ height: number, background_url: string }>`
    background-image: url(${props => props.background_url});
    background-size: cover;
    background-repeat: no-repeat;
    height: ${props => props.height}vh;

    @media only screen and (max-width: 768px) {
        background-position: right top;
    }
`;

const Envelope = styled.div`

`;

function Banner({ height }: IBannerProps) {
    return (
        <Aside height={height} background_url="https://hack-a-ton.net/static/media/pan-grad.1cae7d57.png">
            <Envelope></Envelope>
        </Aside>
    )
}

export default Banner;