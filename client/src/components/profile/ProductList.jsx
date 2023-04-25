import React from 'react';
import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Image, Text } from '@mantine/core';
import productThumbnail from '../../constants/productThumbnail';
import { productTypes } from '../../constants/productList';

const Container = styled.div`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const Wrapper = styled.div`
  max-width: 1024px;
`;

const Title = styled.h2`
  color: var(--font-color);
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: justify;
`;

const NoProduct = styled(Container)`
  font-size: 1.4rem;
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
  padding: 30px 0;
`;

const ProductCarousel = styled(Carousel)`
  padding: 40px;
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);

  .mantine-Carousel-indicator {
    background-color: var(--footer-font-color);
    &[data-active='true'] {
      background-color: var(--hover-font-color);
    }
    border: 1px solid var(--opacity-border-color);
  }
`;

const ProductImage = styled(Image)`
  img {
    width: 100% !important;
    height: 250px !important;
    object-fit: scale-down !important;
  }

  .mantine-Image-imageWrapper {
    display: flex;
  }
`;

const ProductName = styled(Text)`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 20px;
  user-select: none;
  color: var(--font-color);
`;

const ProductList = ({ products }) => (
  <Container>
    <Wrapper>
      <Title>고객님의 기기</Title>
      {products.length > 0 ? (
        <ProductCarousel
          withIndicators={true}
          slideGap="xl"
          slideSize="33.333333%"
          align="start"
          controlsOffset="xs"
          slidesToScroll={3}
          controlSize={50}>
          {products.map(({ type }, idx) => (
            <Carousel.Slide key={idx} w="200px" h="300px">
              <ProductImage src={productThumbnail[type]} />
              <ProductName>{productTypes[type]}</ProductName>
            </Carousel.Slide>
          ))}
        </ProductCarousel>
      ) : (
        <NoProduct>
          <Text>등록된 기기 정보가 없습니다.</Text>
        </NoProduct>
      )}
    </Wrapper>
  </Container>
);

export default ProductList;
