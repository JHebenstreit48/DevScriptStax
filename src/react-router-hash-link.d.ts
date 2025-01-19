declare module 'react-router-hash-link' {
    import { LinkProps } from 'react-router-dom';
    import { ReactNode } from 'react';

    export interface HashLinkProps extends LinkProps {
        smooth?: boolean; // For smooth scrolling
        scroll?: (el: HTMLElement) => void; // Optional custom scroll handler
        children?: ReactNode;
    }

    export const HashLink: React.FC<HashLinkProps>;
    export const NavHashLink: React.FC<HashLinkProps>;
}
