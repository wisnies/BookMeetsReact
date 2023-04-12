import { StyledInlineExternalLink, StyledInlineLink } from './InlineLink.style';

interface IInlineLinkProps {
  external?: boolean;
  target: string;
  color:
    | 'primary'
    | 'secondary'
    | 'accentPrimary1'
    | 'accentPrimary2'
    | 'accentSecondary1';
  weight?: 300 | 400 | 700;
  children: React.ReactNode;
}

const InlineLink: React.FC<IInlineLinkProps> = ({
  external,
  target,
  color,
  weight = 400,
  children,
}: IInlineLinkProps) => {
  if (external) {
    return (
      <StyledInlineExternalLink
        target='_blank'
        rel='external'
        href={target}
        color={color}
        weight={weight}
      >
        {children}
      </StyledInlineExternalLink>
    );
  }
  return (
    <StyledInlineLink to={target} color={color} weight={weight}>
      {children}
    </StyledInlineLink>
  );
};

InlineLink.defaultProps = {
  external: false,
  weight: 400,
};
export default InlineLink;
