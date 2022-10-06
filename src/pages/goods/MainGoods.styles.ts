import styled from 'styled-components';

interface Props {
  isModalOpen?: boolean;
}
export const Page = styled.section`
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  position: relative;
`;
export const Filter = styled.div<Props>`
  height: 100%;
  width: 230px;
  position: absolute;
  left: 0;
  padding: 0px 5px;
  h3 {
    padding: 15px 10px;
  }
  @media screen and (min-width: 1024px) {
    display: ${(props) => (props.isModalOpen ? 'block' : 'none')};
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    display: none;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
