import styled from "@emotion/styled";
import { useState } from "react";

interface SelectedMenu {
  selected: String;
  setSelected: React.Dispatch<React.SetStateAction<String>>;
}

const DropDownSort = () => {
  const [selected, setSelected] = useState<String>("정렬순");
  return <Menu selected={selected} setSelected={setSelected} />;
};

const Menu = ({ selected, setSelected }: SelectedMenu) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const options: string[] = ["정렬순", "인기순", "가장 인기순"];

  return (
    <Wrap>
      <DropDownBtn onClick={e => setIsActive(!isActive)}>
        {selected}
        <i className="nav-bottom"></i>
      </DropDownBtn>
      <DropDownMenu>
        {isActive &&
          options.map(option => (
            <li
              className="dropdown-item"
              onClick={e => {
                setSelected(option);
                setIsActive(!isActive);
              }}
            >
              {option}
            </li>
          ))}
      </DropDownMenu>
    </Wrap>
  );
};

export default DropDownSort;

const Wrap = styled.div`
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
const DropDownMenu = styled.ul`
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
