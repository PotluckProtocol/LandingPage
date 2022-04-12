import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageCarousel } from './components/Carousel';
import { CaveCompounder } from './components/CaveCompounder';
import { PotluckLabs } from './components/PotluckLabs';
import { PotluckProtocol } from './components/PotluckProtocol';
import { SocialLinks } from './components/SocialLinks';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
`;

const MainContainer = styled.div`
    width: 100%;
`;

const SideContainer = styled.div`

`;

const BigImage = styled.img`
    
`;

const getWindowSize = (): 'mobile' | 'desktop' => {
    if (window.innerWidth < 640) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}

//        <BigImage className='max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-full mx-auto xl:mx-0' src='/images/Logo.png' />

const App: React.FC = () => {

    const [carouselHeight, setCarouselHeight] = useState(getWindowSize() === 'mobile' ? 280 : 530);

    const handleResize = () => {
        setCarouselHeight(getWindowSize() === 'mobile' ? 280 : 530)
    }

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });


    return (
        <Container className='xl:flex justify-between gap-12 mt-10 p-8'>
            <MainContainer className='mb-10 xl:mb-0'>
                <ImageCarousel
                    height={carouselHeight}
                    changeImageAfterMs={5000}
                    images={['/images/Logo.png', 'images/CzeptaZombieKing.jpg', '/images/Bitdaemons.png', '/images/LogoSellek.png', '/images/Upsidedown.png', '/images/LogoBoy.png']}
                />
                <SocialLinks className='mt-12 hidden xl:flex' />
            </MainContainer>
            <SideContainer className="grid gap-12 xl:block lg:grid-cols-3 sm:grid-cols-2">
                <PotluckProtocol className='xl:mb-12' />
                <PotluckLabs className='xl:mb-12' />
                <CaveCompounder className='xl:mb-12' />
            </SideContainer>
            <SocialLinks className='mt-12 grid grid-cols-2 md:flex xl:hidden' />
        </Container>
    );
}

export default App;
