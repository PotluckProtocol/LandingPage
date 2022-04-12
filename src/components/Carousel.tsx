import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import useInterval from "../hooks/useInterval";
import { useLoadMultipleImagesBackground } from "../hooks/useLoadMultipleImagesBackground";

const IMAGE_PADDING_PX = 16;

export type ImageCarouselProps = {
    images: string[];
    height: number;
    changeImageAfterMs?: number;
}

const LookupWindow = styled.div`
    overflow-x: hidden;
    width: 100%;
    position: relative;
`;

const ImageContainer = styled.div`
    white-space: nowrap;
    transition: transform 500ms ease-in-out;
`;

const NoStyleButton = styled.button`
    border: none;
    background: none;
`;

type BallProps = {
    active: boolean;
}

const Ball = styled.span<BallProps>`
    display: inline-block;
    background-color: ${props => props.active ? '#5dffff' : '#e5e5e5'};
    border-radius: 50%;
    width: .9rem;
    height: .9rem;
    margin: 0 .5rem;

    &:hover {
        background-color: #0c6947;
    }
`;

type ImageProps = ComponentPropsWithoutRef<'image'> & {
    active: boolean;
}

const Image = styled.img<ImageProps>`
    max-height: 100%;
    border-radius: 2rem;
    display: inline-block;
    padding: 0 ${IMAGE_PADDING_PX}px;
    transition: opacity 300ms ease-in-out;
    margin: 0 auto;
    opacity: 1;

    &.fade {
        opacity: 0;
    }
`;

export const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState<null | number>(null);
    const [fadingOut, setFadingOut] = useState(false);
    const containerRef = useRef(null);
    const images = useLoadMultipleImagesBackground(props.images);
    const intervalMs = props.changeImageAfterMs || null;

    const moveToIndex = (index: number) => {
        setFadingOut(true);
        setNextImageIndex(index);
    }

    const callback = () => {

        console.log('cb');
        if (images === null) {
            return;
        }

        const nextIndex = selectedImageIndex + 1;
        moveToIndex(nextIndex < images.length ? nextIndex : 0);
    }

    const resetInterval = useInterval(callback, intervalMs);

    const handleAnimationEnd = () => {
        setFadingOut(false);
        if (typeof nextImageIndex === 'number') {
            setSelectedImageIndex(nextImageIndex);
        }
        setNextImageIndex(null);
    }

    const handleBallButton = (index: number) => {
        if (index === selectedImageIndex) {
            return;
        }

        moveToIndex(index);
        resetInterval();
    }

    if (images === null) {
        return null;
    }

    const styleObject: CSSProperties = {
        height: props.height
    }

    const activeImage = images[selectedImageIndex];
    const imageClasses = fadingOut ? 'fade' : undefined;

    return (
        <div>
            <LookupWindow>

                <ImageContainer ref={containerRef} style={styleObject} className="flex items-center">
                    <Image className={imageClasses} active={true} src={activeImage} onTransitionEnd={handleAnimationEnd} />
                </ImageContainer>

            </LookupWindow>

            <div className="mt-4 flex justify-center items-center">
                {images.map((_, index) => (
                    <NoStyleButton key={index} onClick={() => handleBallButton(index)}>
                        <Ball active={index === selectedImageIndex} />
                    </NoStyleButton>
                ))}
            </div>

        </div >
    );

} 