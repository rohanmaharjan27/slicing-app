import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import '../styles/Home.module.css';
import { SellBtnWhite, ShopBtn } from './CustomComponents/Buttons';
import { CenteredCol } from './CustomComponents/CenteredCol';
import {
  BannerSubTitle,
  BannerSubTitle2,
  BannerTitle,
} from './CustomComponents/Typography';

type Props = {};

const BannerWrapper = styled(Row)`
  background-image: url('/bannerImg.svg');
  background-size: cover;
  background-repeat: none;
  background-position: initial;
  height: 80vh;
  color: #fff;
  padding: 20px 80px;
`;

const Banner = (props: Props) => {
  return (
    <BannerWrapper>
      <Col style={{ margin: '149px 0px 127px 0px' }}>
        <Row style={{ width: '100%' }} align='middle'>
          <BannerTitle>
            A PREMIUM MARKETPLACE
            <br />
            FOR WEDDING FASHION
          </BannerTitle>
        </Row>
        <Row style={{ width: '100%', marginTop: '30px' }} align='middle'>
          <BannerSubTitle>
            A PREMIUM WEDDING RESALE DESTINATION WHERE YOU <br />
            CAN EXTEND THE PRODUCT LIFECYCLE & MINIMISE YOUR
            <br /> CARBON FOOTPRINT.
          </BannerSubTitle>
        </Row>
        <Row style={{ width: '100%', marginTop: '15px' }} align='middle'>
          <BannerSubTitle2>
            SHARE THE LOVE AND FIND Something New AT REVEILED.
          </BannerSubTitle2>
        </Row>

        <Row style={{ marginTop: '60px' }}>
          <ShopBtn>SHOP</ShopBtn>
          <SellBtnWhite style={{ marginLeft: '30px' }}>SELL</SellBtnWhite>
        </Row>
      </Col>
    </BannerWrapper>
  );
};

export default Banner;
