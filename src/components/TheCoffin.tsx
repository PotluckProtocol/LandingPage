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
    background-color: #be9ad5;
    color: #370156;
    box-shadow: 0px 0px 6px 1px ${hexToRgb('#be9ad5', 0.25)};
`;

const Placeholder = styled.div`
    height: 40px;
`;

const Text = styled.p`
    color: #dfc7ee;
`;

export type TheCoffinProps = {
    className?: string;
}

export const TheCoffin: React.FC<TheCoffinProps> = ({ className }) => {
    return (
        <SubAppContainer
            bgColorStart='#0d010d'
            bgColorEnd='#39015a'
            className={className}
        >
            <div className='flex items-center justify-center mb-4'>
                <img style={{ minHeight: 40, maxHeight: 40 }} src='/images/Logo_TheCoffin.png' />
            </div>

            <Text className='mb-4'>Bury your NFTs for staking</Text>

            <Placeholder />

            <Link href="https://thecoffin.potluckprotocol.com/" target="_blank">
                <StyledRoundedButton>STAKE</StyledRoundedButton>
            </Link>
        </SubAppContainer>
    )
}