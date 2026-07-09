import { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: ReactNode;
}

const LinkRenderer = ({ href, children, ...props }: LinkProps) => {
  if (href?.startsWith('/')) {
    return (
      <HashLink to={href} {...props}>
        {children}
      </HashLink>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default LinkRenderer;