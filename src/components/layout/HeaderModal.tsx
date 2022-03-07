import styled from '@emotion/styled';

const HeaderModal = () => {
  return (
    <Dropdown>
      <li>마이페이지</li>
      <li>키워드 관리</li>
      <li>로그아웃</li>
    </Dropdown>
  );
};

export default HeaderModal;

const Dropdown = styled.div`
  width: 183px;
  box-shadow: 0px 4px 7px rgba(196, 195, 195, 0.25);
  border-radius: 5px;
  li {
    padding:15px 0;
    border-bottom:1px solid #D9D9D9;
  }
  li:last-child {
    border: none;
  }
`