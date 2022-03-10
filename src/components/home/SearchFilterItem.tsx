import styled from "@emotion/styled";
import { filterItem } from "./Search";

type Props = {
  filterItem: filterItem;
  isOpen: boolean;
  index: number;
  openFilterList: (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

type SelecListProps = {
  isOpen: boolean;
};

export const SearchFilterItem = ({
  filterItem,
  isOpen,
  openFilterList,
  index
}: Props) => (
  <FilterItem>
    <Label>{filterItem.label}</Label>
    <DefaultValue onClick={e => openFilterList(index, e)}>
      <strong>{filterItem.defaultValue}</strong>
      <img src="images/filterArrow.svg" alt="필터리스트 열기 아이콘" />
    </DefaultValue>
    <SelectList isOpen={isOpen}>
      {filterItem.list.map(item => {
        return <SelectItem>{item}</SelectItem>;
      })}
    </SelectList>
  </FilterItem>
);

const Label = styled.span`
  color: #717171;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 6px;
`;

const DefaultValue = styled.div`
  margin-top: 8px;
  height: 30px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectList = styled.ul<SelecListProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
  border: 1px solid black;
  padding: 11px 0;
`;

const SelectItem = styled.li`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  height: 36px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  &:hover {
    background: rgba(72, 192, 183, 0.1);
  }
`;

const FilterItem = styled.div`
  position: relative;
  padding: 4px 4px 4px 0;
  width: 165px;
  height: 100%;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
`;
