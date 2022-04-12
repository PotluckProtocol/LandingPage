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
    background-color: #023232;
    color: #5efdff;
    box-shadow: 0px 0px 6px 1px ${hexToRgb('#023232', 0.25)};
`;

const Placeholder = styled.div`
    height: 40px;
`;

const Text = styled.p`
    color: #023132;
`;

export type PotluckProtocolProps = {
    className?: string;
}

export const PotluckProtocol: React.FC<PotluckProtocolProps> = ({ className }) => {
    return (
        <SubAppContainer
            bgColorStart='#002e2f'
            bgColorEnd='#66f8fa'
            className={className}
        >
            <div className='flex items-center justify-center mb-4'>
                <img style={{ minHeight: 40, maxHeight: 40 }} src='/images/Logo_PotluckProtocol.png' />
            </div>

            <Text className='mb-4'>AMM And Suite Of Defi Products</Text>

            <Placeholder />
            <Link href="https://potluckprotocol.com/" target="_blank">
                <StyledRoundedButton>DEGEN</StyledRoundedButton>
            </Link>
        </SubAppContainer>
    )
}