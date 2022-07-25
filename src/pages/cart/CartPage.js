import EmptyCart from "components/cart/EmptyCart";
import styled from "styled-components";


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



const Cart= () => {
    return (
        <Page>
        <CartHeader>
            장바구니
        </CartHeader>
        <CartCountWrapper>0개 상품</CartCountWrapper>
        <EmptyCart />
        </Page>
    )
}

export default Cart;