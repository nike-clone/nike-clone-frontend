import { SubmitButton } from 'components/common/Button/Button';
import { StyledFormInput } from 'components/common/Input/Input';
import PALETTE from 'constants/palette';
import useOrder from 'hooks/query/useOrder';
import useInput from 'hooks/useInput';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { validatePhoneNumber } from 'util/validation';
const fadeUp = keyframes`
from {
  height: 30%;
}
to {
  height: 0px;
}
`;
const StyledForm = styled.form``;
const NameAndPhone = styled.div`
  display: flex;
  gap: 10px;
`;
const InputName = styled.span`
  font-size: 14px;
  color: ${PALETTE.GRAY[0]};
  flex: 1;
`;
const GrayBorderOutline = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: white;
`;
const GrayBorderOutlineTop = styled.div`
  border-top: 2px solid ${PALETTE.GRAY[1]};
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: white;
  display: ${(props) => (props.isFormOpen ? 'block' : 'none')};
`;
const Wrapper = styled.div`
  ${(props) => {
    if (!props.isFormOpen) {
      return css`
        animation: ${fadeUp} 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
      `;
    }
  }}
  //animation: ${fadeUp} 1s ease forwards;
  display: flex;
  flex-direction: column;

  gap: 15px;
  margin: 15px 0;
  overflow: hidden;
`;

const PayWrapper = styled.div`
  display: ${(props) => (props.isFormOpen ? 'none' : 'hidden')};
  margin-top: 40px;
  padding-bottom: 30px;
  span {
    background-color: ${PALETTE.ORANGE[0]};
    padding: 15px 25px;
    color: white;
    margin-bottom: 30px;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
`;

const OrderForm = ({ totalPrice, info }) => {
  const anonymousId = localStorage.getItem('NC_GUEST_ID');
  //payData에 들어갈 상품 정보 만들기
  const items = useMemo(
    () =>
      info.reduce((result, item) => {
        result.push({
          goodsId: item.id,
          size: item.goodsItem.size,
          color: item.goodsItem.color.colorCode,
          quantity: item.quantity,
        });
        return result;
      }, []),
    [info]
  );

  const [{ name, phone, address }, onChange] = useInput({
    name: '',
    phone: '',
    address: '',
  });
  const productName = useMemo(
    () =>
      info.map((info) => info.goodsItem.goods.name)[0] +
      (info.length > 1 ? ` 외 ${info.length - 1}건` : ''),
    [info]
  );
  const data = useOrder();
  const [isFormOpen, setIsFormOpen] = useState(true);
  const onClickNextStep = (e) => {
    e.preventDefault();
    const phoneMsg = validatePhoneNumber(phone);
    if (!name || !phone || !address) {
      alert('내용을 채워주세요!');
      return;
    }

    if (phoneMsg) {
      alert('핸드폰 형식을 확인해주세요!');
      return;
    }

    setIsFormOpen((prev) => !prev);
  };

  function callback(response) {
    console.log(response);
    const resp = response;
    if (resp.success) {
      const payData = {
        success: resp.success,
        impUid: resp.imp_uid,
        merchantUid: resp.merchant_uid,
        payMethod: resp.pay_method,
        paidAmount: resp.paid_amount,
        status: resp.status,
        name: resp.name,
        pgProvider: resp.pg_provider,
        embPgProvider: 'test',
        pgTid: 'test',
        buyerName: resp.buyer_name,
        buyerEmail: 'test@test.com',
        buyerTel: resp.buyer_tel,
        buyerAddr: resp.buyer_addr,
        buyerPostcode: resp.buyer_postcode,
        customData: {
          items: items,
          isLoggedIn: anonymousId ? false : true,
          anonymousId: anonymousId,
        },
        paidAt: new Date().getTime(),
        receiptUrl: 'test',
        anonymousId: anonymousId || null,
      };
      data.mutate(payData);
    } else {
      alert('error');
    }
  }
  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp45286492');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: productName, // 주문명
      buyer_name: sessionStorage.getItem('user')?.name || '비회원구매', // 구매자 이름
      buyer_tel: phone, // 구매자 전화번호
      buyer_addr: address, // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
      custom_data: { goodsId: 1 },
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  return (
    <>
      <StyledForm>
        주문 고객
        <GrayBorderOutline></GrayBorderOutline>
        <Wrapper isFormOpen={isFormOpen}>
          <InputName>받으시는 분</InputName>
          <NameAndPhone>
            <StyledFormInput
              placeholder="이름"
              name="name"
              type="text"
              value={name}
              width="50%"
              onChange={onChange}
            />
            <StyledFormInput
              placeholder="전화번호 -없이 입력"
              name="phone"
              type="text"
              value={phone}
              width="50%"
              onChange={onChange}
            />
          </NameAndPhone>
          <StyledFormInput
            placeholder="주소"
            name="address"
            type="text"
            value={address}
            onChange={onChange}
          />
          <SubmitButton size="lg" backcolor="black" color="white" onClick={onClickNextStep}>
            다음 단계
          </SubmitButton>
        </Wrapper>
        <GrayBorderOutlineTop isFormOpen={isFormOpen}></GrayBorderOutlineTop>
        결제 수단
        <GrayBorderOutline></GrayBorderOutline>
        <PayWrapper isFormOpen={isFormOpen}>
          <span onClick={onClickPayment}>결제하기</span>
          <SubmitButton size="lg" backcolor="black" color="white" onClick={onClickNextStep}>
            이전 단계
          </SubmitButton>
        </PayWrapper>
      </StyledForm>
    </>
  );
};

export default OrderForm;
