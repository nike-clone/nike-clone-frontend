import SlidingTextBanner from './Bottom/SlidingTextBanner';
import MainHeader from './Main/MainHeader';
import SubHeader from './Sub/SubHeader';

const Header = ({ refetch }) => {
  return (
    <>
      <SubHeader refetch={refetch} />
      <MainHeader />
      <SlidingTextBanner />
    </>
  );
};

export default Header;
