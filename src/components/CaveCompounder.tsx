import styled from "styled-components"
import { hexToRgb } from "../utils";
import { RoundedButton } from "./RoundedButton"
import { SubAppContainer } from "./SubAppContainer"

const Link = styled.a`
    bottom: 1rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
`;

const StyledRoundedButton = styled(RoundedButton)`
    background-color: #c71616;
    color: #fffdfd;
    box-shadow: 0px 0px 6px 1px ${hexToRgb('#c71616', 0.25)};
`;

const Placeholder = styled.div`
    height: 40px;
`;

const Text = styled.p`
    color: #ffb6b6;
`;

export type CaveCompounderProps = {
    className?: string;
}

export const CaveCompounder: React.FC<CaveCompounderProps> = ({ className }) => {
    return (
        <SubAppContainer
            bgColorStart='#040000'
            bgColorEnd='#9e0707'
            className={className}
        >
            <div className='flex items-center justify-center mb-4'>
                <img style={{ minHeight: 40, maxHeight: 40 }} src='/images/Logo_CaveCompounder.png' />
            </div>

            <Text className='mb-4'>Autocompounding Vaults For Your Favorite Projects</Text>

            <Placeholder />

            <Link href="https://thecavecompounder.com/" target="_blank">
                <StyledRoundedButton>EARN</StyledRoundedButton>
            </Link>
        </SubAppContainer>
    )
}