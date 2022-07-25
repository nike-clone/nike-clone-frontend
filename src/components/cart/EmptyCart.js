import styled from "styled-components"
import cartIcon from 'assets/icons/cart.svg'
import StyledLink from "components/common/Link/StyledLink";
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

const EmptyCart = () => {
    return (
        <>
        <CartWrapper>
            <img src={cartIcon} alt="cart" />
            <CartStatus>장바구니에 담긴 상품이 없습니다.</CartStatus>
            <StyledLink target={'/'} size="md">계속 쇼핑하기</StyledLink>
        </CartWrapper>
        </>
    )
}

export default EmptyCart;