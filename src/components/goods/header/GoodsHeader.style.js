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

  .select {
    display: inline-block;
    border: none;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  .select .selected {
    display: flex;
    justify-content: space-between;
    padding: 8px 5px;
  }

  .select .selected .selected-value {
    max-width: 90px;
    &:hover {
      color: gray;
    }
  }

  .select ul {
    opacity: ${(props) => (props.isFilterOpen ? 1 : 0)};
    width: 100px;
    position: absolute;
    background: #fff;
    right: 16px;
    margin: 1px 0 0 -1px;
    padding: 0 0px 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    z-index: 50;
    transition: all 0.3s ease-in-out;
  }

  .select ul li {
    padding: 8px 5px;
    overflow: hidden;
    text-align: right;
  }
  .select ul li:hover {
    color: gray;
  }
`;
