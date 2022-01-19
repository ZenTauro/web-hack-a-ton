import React from 'react';
import styled from 'styled-components';
import CountdownTimer from 'react-countdown';

import { theme } from '../config/theme';

interface IBannerProps {
    height: number,
}

const Aside = styled.aside<{ height: number, background_url: string }>`
    background-image: url(${props => props.background_url});
    background-size: fill;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: ${props => props.height}vh;

    @media only screen and (max-width: 768px) {
        background-position: right top;
    }
`;

const Envelope = styled.div`
    padding-top: 3em;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;

    @media only screen and (min-width: 768px) {
        margin-left: 3em;
        margin-right: 3em;
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;
        flex-flow: column nowrap;
    }
`;

const Img = styled.img`
    width: 30vw;

    @media only screen and (max-width: 768px) {
        width: 70vw;
    }
`;

const Countdown = styled(Renderer)`
    color: ${theme['grey-lighter']};
    background-color: ${theme.brand};
`;

function renderer({hours, minutes, seconds, completed}: {hours: number, minutes: number, seconds: number, completed: boolean}) {
    return (
        <Countdown>
            {hours}:{minutes}:{seconds}
        </Countdown>
    )
}

function Banner({ height }: IBannerProps) {
    return (
        <Aside height={height} background_url="https://hack-a-ton.net/static/media/pan-grad.1cae7d57.png">
            <Envelope>
                <Img src="https://hack-a-ton.net/static/media/ht.7900ba35.png" alt="HackATon logo"/>
                <CountdownTimer date={ Date.UTC(2020, 2, 25) } renderer={ renderer } />
            </Envelope>
        </Aside>
    )
}

export default Banner;
