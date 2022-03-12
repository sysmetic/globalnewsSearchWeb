import styled from "@emotion/styled";
import { filterItem } from "./Search";

type Props = {
  filterItem: filterItem;
  isOpen: boolean;
  index: number;
  filterList: string[];
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
  index,
  filterList
}: Props) => {
  return (
    <FilterItem>
      <Label>{filterItem.label}</Label>
      <DefaultValue onClick={e => openFilterList(index, e)}>
        <strong>{filterItem.defaultValue}</strong>
        <img src="images/filterArrow.svg" alt="필터리스트 열기 아이콘" />
      </DefaultValue>
      <SelectList isOpen={isOpen}>
        {filterList.map(item => {
          return <SelectItem key={item}>{item}</SelectItem>;
        })}
      </SelectList>
    </FilterItem>
  );
};

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
  top: 60px;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
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
  transition: all 0.2s ease;
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
