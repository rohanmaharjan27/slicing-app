import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AlignedCol, CenteredCol } from './CustomComponents/CenteredCol';
import SearchInput from './CustomComponents/SearchInput';
import Image from 'next/image';
import { CurrentTabText, TabText } from './CustomComponents/Typography';
import { SellBtn } from './CustomComponents/Buttons';

type Props = {};

const TopRow = styled(Row)`
  width: 100%;
  height: 41px;
  background: #333333;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

const MiddleRow = styled(Row)`
  width: 100%;
  background: #fff;
  padding: 20px 80px;
`;

const BottomRow = styled(Row)`
  width: 100%;
  height: 45px;
  background: #000;
  padding: 15px 169px;
`;

const Header = (props: Props) => {
  const [tabState, setTabState] = useState<string>('New In');

  const onTabClick = (key: string) => {
    setTabState(key);
  };

  const tabs = [
    'New In',
    'Designers',
    'Dresses',
    'Bags',
    'Shoes',
    'Jewelry & Accessories',
    'Explore',
    'Trending',
    'We love',
    'Real Bride Story',
  ];

  console.log(tabState);

  return (
    <Row style={{ height: '20vh' }}>
      <TopRow justify='center' align='middle'>
        Join the community
      </TopRow>
      <MiddleRow>
        <AlignedCol xs={6}>
          <SearchInput />
        </AlignedCol>
        <CenteredCol xs={12}>
          <Image src='/logo.svg' alt='logo' width='195px' height='63.32px' />
        </CenteredCol>
        <AlignedCol xs={6}>
          <Row style={{ width: '100%' }} justify='space-between'>
            <SellBtn>Sell an Item</SellBtn>
            <Image src='/user.svg' alt='user icon' width='24px' height='24px' />
            <Image src='/bell.svg' alt='bell icon' width='24px' height='24px' />
            <Image
              src='/shopping.svg'
              alt='shopping icon'
              width='24px'
              height='24px'
            />
          </Row>
        </AlignedCol>
      </MiddleRow>
      <BottomRow justify='space-between'>
        {tabs.map((item, idx) => (
          <CenteredCol key={idx}>
            {item === tabState ? (
              <CurrentTabText onClick={() => onTabClick(item)}>
                {item}
              </CurrentTabText>
            ) : (
              <TabText onClick={() => onTabClick(item)}>{item}</TabText>
            )}
          </CenteredCol>
        ))}
      </BottomRow>
    </Row>
  );
};

export default Header;
