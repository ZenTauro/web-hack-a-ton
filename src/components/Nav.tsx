import React from 'react';
import styled from 'styled-components';
import isdevice from 'current-device';
import { FiMenu } from 'react-icons/fi';

import { theme } from '../config/theme';

const Nav = styled.nav<{height: number}>`
    height: ${props => props.height}vh;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.brand};
`;

const UList = styled.ul<{vertical?: boolean}>`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.brand};

    ${props => props.vertical ?
        'flex-flow: column nowrap;' : '' }
`;

const A = styled.a<{vertical?: boolean}>`
    display: block;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    height: 100%;
    padding-left: 1em;
    padding-right: 1em;
    ${props => props.vertical? 'padding: 1em;' : ''}
    text-decoration: none;

    color: ${theme["grey-lighter"]};
`;

const LinkNode = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;

    text-decoration: none;
    height: 100%;
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    margin: 0;
    padding-left: 1em;
    padding-right: 1em;
    background: transparent;
`;

const MenuIcon = styled(FiMenu)`
    color: ${theme["grey-lighter"]};
`;

/**
 * A simple block composed of a <li> completely filled with a <a> tag
 * @param props.to The url
 * @param props.children The children item to display
 */
function Link(props: {to: string, children: any, vertical?: boolean}) {
    return (
        <LinkNode>
            <A href={ props.to } vertical={ props.vertical } >{props.children}</A>
        </LinkNode>
    )
}

/**
 * The function used to display the content of the NavBar
 * @param props.left The items displayed on the left of the bar
 * @param props.right The items displayed on the right of the bar
 */
function Content({left, right }: { left: JSX.Element[], right: JSX.Element[] }) {
    return (
        <>
            <UList>
                { left }
            </UList>
            <UList>
                { right }
            </UList>
        </>
    )
}

/**
 * The props to be passed to the Navigation component
 */
interface INavigationProps {
    height: number
    links: {
        left: string[],
        right: string[]
    }
}

/**
 * The state of the component, it tracks wether it's collapsed and
 * if it is being displayed in a mobile or desktop.
 */
interface INavigationState {
    is_collapsed: boolean;
    is_mobile: boolean;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor(props: INavigationProps) {
        // This is necessary for React to work
        super(props);

        const is_collapsed = true;
        const is_mobile = isdevice.mobile(); // We detect whether we're on mobile or not

        // To be able to use the `this` object we need to rebind the methods
        this.handleOrient = this.handleOrient.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            is_collapsed,
            is_mobile,
        }
    }

    componentDidMount() {
        // We set an orientation change callback to detect changes
        isdevice.onChangeOrientation((_orient) => {
            this.handleOrient();
        });
    }

    /**
     * Whenever the orientation is changed, this will be called
     * and it will try to detect if the device has changed. This
     * is useful for development.
     */
    handleOrient() {
        const is_mobile = isdevice.mobile();

        this.setState({
            is_mobile
        });
    }

    /**
     * Collapses or expands the menu on mobile.
     */
    handleToggle() {
        this.setState({
            is_collapsed: !this.state.is_collapsed
        });
    }

    render() {
        let content;

        const left = this.props.links.left.map((item) => (
            <Link key={item} to={`#${item}`}>{ item }</Link>
        ));
        const right = this.props.links.right.map((item) => (
            <Link key={item} to={`#${item}`} vertical={ isdevice.mobile() }>{ item }</Link>
        ));

        const button = [ <MenuButton key="0" onClick={this.handleToggle}> <MenuIcon /> </MenuButton> ];

        if (isdevice.mobile()) {
            if (this.state.is_collapsed) {
                content = <Content
                    left={ left }
                    right={ button }
                />
            } else {
                content = <Content
                    left={ left }
                    right={ button }
                />
            }
        } else {
            content = <Content
                left={ left }
                right={ right }
            />
        }

        return (
            <>
                <Nav height={this.props.height}>
                    { content }
                </Nav>
                {
                    ( isdevice.mobile() && !this.state.is_collapsed ) ?
                        <UList vertical={ true }>
                            { right }
                        </UList> :
                        <></>
                }
            </>
        )
    }
}

export default Navigation;