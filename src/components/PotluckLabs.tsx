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
    background-color: #00f79d;
    color: #003a26;
    box-shadow: 0px 0px 6px 1px ${hexToRgb('#00f79d', 0.25)};
`;

const Placeholder = styled.div`
    height: 40px;
`;

const Text = styled.p`
    color: #00f79d;
`;

export type PotluckLabsProps = {
    className?: string;
}

export const PotluckLabs: React.FC<PotluckLabsProps> = ({ className }) => {
    return (
        <SubAppContainer
            bgColorStart='#001910'
            bgColorEnd='#003a26'
            className={className}
        >
            <div className='flex items-center justify-center mb-4 mt-1'>
                <img style={{ minHeight: 40, maxHeight: 40 }} src='/images/Logo_PotluckLabs.png' />
            </div>

            <Text className='mb-4'>Potluck NFT Projects And Cross-Chain Incubator</Text>

            <Placeholder />
            <Link href="https://www.potluck-labs.com/" target="_blank">
                <StyledRoundedButton>APE</StyledRoundedButton>
            </Link>
        </SubAppContainer>
    )
}