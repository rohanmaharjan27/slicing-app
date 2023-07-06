import { Col, Typography } from 'antd';
import styled, { css } from 'styled-components';

const { Text } = Typography;

const sharedTabTextStyled = css`
  font-family: 'Skin';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const TabText = styled(Text)`
  ${sharedTabTextStyled}
`;

export const CurrentTabText = styled(Text)`
  ${sharedTabTextStyled}
  text-decoration: underline #fff;
  text-decoration-thickness: 3px;
  text-underline-position: under;
`;

export const BannerTitle = styled.h2`
  font-family: 'Astralaga';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 55px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const BannerSubTitle = styled(Text)`
  font-family: 'Florencesans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
  color: #fafafa;
`;

export const BannerSubTitle2 = styled(Text)`
  font-family: 'Florencesans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #fafafa;
`;
