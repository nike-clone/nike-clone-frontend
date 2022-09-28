import React from 'react';
import styled from 'styled-components';
import PALETTE from 'constants/palette';
import JoinForm from 'components/form/join/JoinForm';
import { useJoin } from 'hooks/useJoin';
const JoinContainer = styled.div`
  margin: 0 auto;
  max-width: 420px;
  margin-top: 70px;
  text-align: center;
`;

const JoinHeader = styled.div`
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 15px;
  }
  p {
    color: ${PALETTE.GRAY[2]};
    font-size: 14px;
    line-height: 20px;
  }
`;

const Join = (): JSX.Element => {
  const data = useJoin();
  return (
    <JoinContainer>
      <JoinHeader>
        <h2>나이키 멤버 가입</h2>
        <p>
          멤버가 되어 나이키가 제공하는 <br />
          최고의 제품과 혜택을 만나보세요.
        </p>
      </JoinHeader>
      <JoinForm data={data} />
    </JoinContainer>
  );
};

export default Join;
