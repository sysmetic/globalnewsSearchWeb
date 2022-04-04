import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { ChildProps } from "../../../../types/Common";
import { logout } from "../../../../redux/user/auth";
import { useNavigate } from "react-router-dom";
interface Confirm extends ChildProps {
  message: string;
}

export default function LoginConfirmButton({ children, message }: Confirm) {
  const { isLogin } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const navigtate = useNavigate();
  function handleClick() {
    if (!isLogin && window.confirm(`${message}`)) navigtate("/login");

    if (isLogin && window.confirm(`${message}`)) dispatch(logout());
  }
  return (
    <Button role="button" onClick={handleClick}>
      {children}
    </Button>
  );
}
const Button = styled.div`
  background: none;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
