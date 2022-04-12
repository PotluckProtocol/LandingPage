import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { hexToRgb } from "../utils";

export type SubAppContainerProps = {
    bgColorStart: string;
    bgColorEnd: string;
    className?: string;
}

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
    bgColorStart: string;
    bgColorEnd: string;
}

const Container = styled.div<ContainerProps>`
    background: ${props => props.bgColorStart};
    background: ${props => `linear-gradient(180deg, ${props.bgColorStart} 0%, ${props.bgColorEnd} 100%)`};
    box-shadow: 0px 3px 7px 0px ${props => hexToRgb(props.bgColorEnd, 0.25)};
    padding: .25rem 2rem 1rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    position: relative;
`;

export const SubAppContainer: React.FC<SubAppContainerProps> = ({
    bgColorEnd,
    bgColorStart,
    children,
    className
}) => {
    return (
        <Container className={className} bgColorStart={bgColorStart} bgColorEnd={bgColorEnd}>
            {children}
        </Container>
    )
}