import SlidingTextBanner from './Bottom/SlidingTextBanner';
import MainHeader from './Main/MainHeader';
import SubHeader from './Sub/SubHeader';
interface Props {
  refetch: () => void;
}
const Header = ({ refetch }: Props): JSX.Element => {
  return (
    <>
      <SubHeader refetch={refetch} />
      <MainHeader refetch={refetch} />
      <SlidingTextBanner />
    </>
  );
};

export default Header;
