import styled from "@emotion/styled";

export const SearchFilterItem = () => {
  return (
    <FilterItem>
      <label htmlFor="press">언론사</label>
      <select name="press">
        <option value="언론사1">언론사1</option>
        <option value="언론사2">언론사2</option>
        <option value="언론사3">언론사3</option>
      </select>
    </FilterItem>
  );
};

const FilterItem = styled.div`
  padding: 4px 4px 4px 0;
  width: 165px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
  label {
    color: #717171;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 6px;
  }
  select {
    width: 140px;
    height: 30px;
    border: none;
    font-size: 16px;
    margin-left: -4px;
  }
`;
