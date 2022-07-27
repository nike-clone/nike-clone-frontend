import styled from 'styled-components';
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  align-items: center;
`;
export const CategoryInfo = styled.div`
  h2 {
    font-size: 20px;
    letter-spacing: -1px;
    line-height: 34px;
  }
`;
export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const OptionFilter = styled.div`
  margin-right: 25px;
  span {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  & > img {
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;
export const SlidingFilter = styled.div`
  display: flex;
  align-items: center;
  & > img {
    cursor: pointer;
  }

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
