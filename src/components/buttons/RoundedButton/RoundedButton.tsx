import { RoundedBtn, RoundedLinkBtn } from './RoundedButton.style';

interface IRoundedButtonProps {
  children: React.ReactNode;
  target?: string | null;
  color:
    | 'primary'
    | 'secondary'
    | 'accentPrimary1'
    | 'accentPrimary2'
    | 'accentSecondary1';
}

const RoundedButton: React.FC<IRoundedButtonProps> = ({
  children,
  target,
  color,
}: IRoundedButtonProps) => {
  if (target) {
    return (
      <RoundedLinkBtn to={target} color={color}>
        {children}
      </RoundedLinkBtn>
    );
  }
  return <RoundedBtn color={color}>{children}</RoundedBtn>;
};

RoundedButton.defaultProps = {
  target: null,
};

export default RoundedButton;
