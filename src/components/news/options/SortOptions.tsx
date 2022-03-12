import styled from "@emotion/styled";
import { useState } from "react";
import React, { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { popular, latest } from "../../../redux/news/newsSortSlice";

const SortOptions = () => {
  const [newsCurOption, setNewsCurOption] = useState<String>("정렬순");
  return (
    <List newsCurOption={newsCurOption} setNewsCurOption={setNewsCurOption} />
  );
};

interface Props {
  newsCurOption: String;
  setNewsCurOption: React.Dispatch<React.SetStateAction<String>>;
}

const List = ({ newsCurOption, setNewsCurOption }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  // const newsSortState = useAppSelector(state => state.newsSorts);
  const dispatch = useAppDispatch();
  const options: string[] = ["정렬순", "최신순", "인기순"];

  function controlOption(option: string) {
    setNewsCurOption(option);
    setIsActive(!isActive);
    dispatch(popular());
  }

  return (
    <ListWrap>
      <DropDownBtn onClick={e => setIsActive(!isActive)}>
        {newsCurOption}
        <i className="nav-bottom"></i>
      </DropDownBtn>
      <DropDownList>
        {isActive &&
          options.map(option => (
            <li
              className="dropdown-item"
              onClick={(event: MouseEvent<HTMLElement>) =>
                controlOption(option)
              }
            >
              {option}
            </li>
          ))}
      </DropDownList>
    </ListWrap>
  );
};

export default SortOptions;

const ListWrap = styled.div`
  position: relative;
`;
const DropDownBtn = styled.div`
  width: 160px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  cursor: pointer;
  .nav-bottom {
    position: absolute;
    top: 20px;
    right: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-navi-bottom.svg");
    background-size: cover;
  }
`;
const DropDownList = styled.ul`
  position: absolute;
  top: 100%;
  background-color: #fff;
  .dropdown-item {
    width: 160px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border: 1px solid #dadada;
    box-sizing: border-box;
  }
  .sort-item {
    cursor: pointer;
  }
`;
