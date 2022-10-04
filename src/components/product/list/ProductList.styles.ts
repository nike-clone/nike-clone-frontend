import styled from 'styled-components';
interface Props {
  isModalOpen?: boolean;
}
export const GoodsContainer = styled.div<Props>`
  margin-left: ${(props) => (props.isModalOpen ? '318px' : '0px')};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    margin: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px;
  }
  @media screen and (max-width: 479px) {
    margin: 0px;
  }
  transition: 0.2s all ease;
`;
export const GoodsItemWrapper = styled.div`
  width: 33%;
  margin-bottom: 10px;
  margin-right: 10px;

  img {
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 5px);
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: calc(33% - 5px);
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
`;
