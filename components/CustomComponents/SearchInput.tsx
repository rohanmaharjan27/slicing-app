import { Input } from 'antd';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Props = {};

const CustomInput = styled(Input)`
  width: 209px;
  height: 36px;
  border: 1px solid #808080;
  border-radius: 5px;
`;

const SearchInput = (props: Props) => {
  return (
    <CustomInput
      placeholder='Search'
      suffix={
        <Image src='/search.svg' alt='search icon' width='14px' height='14px' />
      }
    />
  );
};

export default SearchInput;
