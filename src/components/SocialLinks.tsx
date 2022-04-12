import styled from "styled-components";

export type SocialLinksProps = {
    className?: string;
}

const LINKS: Array<{ image: string, name: string, url: string }> = [{
    name: 'Youtube',
    image: '/images/Youtube.png',
    url: 'https://www.youtube.com/channel/UCVvLbZzn6a-NDabTQAmDaMg'
}, {
    name: 'Twitter',
    image: '/images/Twitter.png',
    url: 'https://twitter.com/potluckprotocol'
}, {
    name: 'Discord',
    image: '/images/Discord.png',
    url: 'https://discord.gg/potluckprotocol'
}, {
    name: 'GitHub',
    image: '/images/GitHub.png',
    url: 'https://github.com/PotluckProtocol'
}, {
    name: 'GitBook',
    image: '/images/GitBook.png',
    url: 'https://potluckprotocol.gitbook.io'
}];

const Link = styled.a`
    display: block;
`;

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
    const internalClasses = `md:justify-between items-center gap-10 `;
    const classes = [internalClasses, className].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {LINKS.map((item, index) => (
                <Link key={index} href={item.url}>
                    <img className="mx-auto max-h-10 lg:max-h-12 xl:max-h-full" src={item.image} alt={item.name} />
                </Link>
            ))}
        </div>
    );
}