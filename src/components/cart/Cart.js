import { SubmitButton } from "components/common/button/Button";
import styled from "styled-components";

const CartContainer = styled.div`
    display:flex;
    gap:10px;
    width:100%;
`
const ItemWrapper = styled.div`
flex:3;
border:1px solid black;

`
const ItemDetail = styled.div`
width:100%;
display:flex;

`
const ItemImg = styled.div`
display:flex;
    flex:5;
    height:150px;
    img {
        width:150px;
        height:100%;
    }
`
const ItemInfo = styled.div`

`
const ItemOptionChange = styled.div`
flex:1;
padding-right:20px;
border:1px solid black;
`
const ItemPriceDetail = styled.div`
flex:1;
padding:0px 30px;
`
const CheckoutWrapper = styled.div`
flex:1;
border:1px solid black;
`


const Cart = ({info}) => {
    return (
        <CartContainer>
            <ItemWrapper>
                <ItemDetail>
            <ItemImg>
                <img src={info[0].imgPath} alt="sd" />
                <ItemInfo>sdsd</ItemInfo>
            </ItemImg>
            <ItemOptionChange><SubmitButton size="md" color="gray" backcolor="white">옵션 변경</SubmitButton></ItemOptionChange>
            <ItemPriceDetail>a</ItemPriceDetail>
                </ItemDetail>

            </ItemWrapper>
            <CheckoutWrapper>s</CheckoutWrapper>
        </CartContainer>
    )
}

export default Cart;