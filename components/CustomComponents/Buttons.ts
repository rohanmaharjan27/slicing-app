import { Button } from 'antd';
import styled from 'styled-components';

export const SellBtn = styled(Button)`
  width: 110px;
  height: 31px;
  background: #000000;
  border-radius: 3px;
  color: #fff;

  &:hover {
    border: 1px solid #000;
    background: #fff;
    color: #000;
  }

  &:focus {
    border: 1px solid #000;
    background: #fff;
    color: #000;
  }
`;

export const ShopBtn = styled(Button)`
  box-sizing: border-box;
  width: 150px;
  height: 45px;
  background: #000000;
  border: 1px solid #ffffff;
  border-radius: 3px;
  color: #fff;

  &:hover {
    border: 1px solid #000;
    background: #fff;
    color: #000;
  }

  &:focus {
    border: 1px solid #000;
    background: #fff;
    color: #000;
  }
`;

export const SellBtnWhite = styled(Button)`
  width: 150px;
  height: 45px;
  background: #ffffff;
  border-radius: 3px;

  &:hover {
    background: #000000;
    border: 1px solid #ffffff;
    color: #fff;
  }

  &:focus {
    background: #000000;
    border: 1px solid #ffffff;
    color: #fff;
  }
`;
