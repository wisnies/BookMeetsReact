import { MainContainer, MainInnerContainer } from './Main.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

interface IMainProps {
  children: React.ReactNode;
}
const Main: React.FC<IMainProps> = ({ children }: IMainProps) => {
  useScrollToTop();
  return (
    <MainContainer>
      <MainInnerContainer>{children}</MainInnerContainer>
    </MainContainer>
  );
};

export default Main;
