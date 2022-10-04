import logo from 'assets/images/logo.png';
import searchIcon from 'assets/icons/search.png';
import heartIcon from 'assets/icons/heart.svg';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import bagIcon from 'assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { StyledInput } from 'components/common/Input/Input';
import { useScroll } from 'hooks/useScroll';
import { SideModal } from 'components/common/Modal/Modal';
import SideMenu from '../Side/SideMenu';
import useModal from 'hooks/useModal';
import useCart from 'hooks/query/useCart';
import * as Styled from './MainHeader.styles';
interface Props {
  refetch: () => void;
}
const MainHeader = ({ refetch }: Props): JSX.Element => {
  // const { data: categoryList } = useQuery('categories', getCategories, {
  //   enabled: true,
  //   refetchOnWindowFocus: false,
  // });
  // const { data, refetch } = useQuery(['cart-counts'], getCart, {
  //   enabled: true,
  //   refetchOnWindowFocus: false,
  // });
  const { data: cartCount } = useCart();

  const [isModalOpen, modalOpenHandler] = useModal(false);
  const active: boolean = useScroll();

  return (
    <>
      <Styled.Container active={active}>
        <Link to="/">
          <img className="main-logo" src={logo} alt="logo" />
        </Link>
        <Styled.MenuWrapper>
          <Styled.Menu>
            <Link to="/category?gender=Men">Men</Link>
          </Styled.Menu>
          <Styled.Menu>
            <Link to="/category?gender=Women">Women</Link>
          </Styled.Menu>
          <Styled.Menu>
            <Link to="/category?gender=Unisex">Unisex</Link>
          </Styled.Menu>
        </Styled.MenuWrapper>
        <Styled.GatherWrapper>
          <StyledInput icon={searchIcon} placeholder="검색" />
          <Styled.IconWrapper>
            <img className="heart" src={heartIcon} alt="heart" />
            <Styled.CartBag>
              <Link to="/cart">
                <img src={bagIcon} alt="bag" />
                {cartCount?.length! > 0 && (
                  <Styled.CartCounter>{cartCount?.length}</Styled.CartCounter>
                )}
              </Link>
            </Styled.CartBag>
            <img className="menu" src={hamburgerIcon} alt="menu" onClick={modalOpenHandler} />
          </Styled.IconWrapper>
        </Styled.GatherWrapper>
      </Styled.Container>
      {isModalOpen && (
        <SideModal showModal={modalOpenHandler}>
          {<SideMenu showModal={modalOpenHandler} refetch={refetch} />}
        </SideModal>
      )}
    </>
  );
};

export default MainHeader;
