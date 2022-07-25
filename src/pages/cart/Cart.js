import styled from "styled-components";
import cartIcon from 'assets/icons/cart.svg'
import StyledLink from "components/common/Link/StyledLink";

const CartHeader = styled.h2`
font-weight:600;
font-size:30px;
padding-top:40px;
`

const CartCountWrapper = styled.div`
margin-top:15px;
`

const Page = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const CartWrapper = styled.div`
margin-top:30px;
width:100%;
padding:20px 10px;
border-top:1px solid black;
border-bottom:1px solid black;
display:flex;
flex-direction:column;
align-items:center;
gap:15px;
img {
    width:40px
}
`
const CartStatus = styled.div`
`

const Cart= () => {
    return (
        <Page>
        <CartHeader>
            장바구니
        </CartHeader>
        <CartCountWrapper>0개 상품</CartCountWrapper>
        <CartWrapper>
            <img src={cartIcon} alt="cart" />
            <CartStatus>장바구니에 담긴 상품이 없습니다.</CartStatus>
            <StyledLink target={'/'} size="md">계속 쇼핑하기</StyledLink>
        </CartWrapper>
        </Page>
    )
}

export default Cart;