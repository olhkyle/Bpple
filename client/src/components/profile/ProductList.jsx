import React from 'react';
import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Image, Text } from '@mantine/core';
import productThumbbnail from '../../constants/productThumbnail';
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
  background-color: white;
`;

const CarouselSlide = styled(Carousel.Slide)`
  background-color: white;
`;

const ProductImage = styled(Image)`
  img {
    width: 100% !important;
    height: 300px !important;
    object-fit: scale-down !important;
  }
`;

const ProductName = styled(Text)`
  font-size: 1.4rem;
  color: black;
  font-weight: 500;
  margin-top: 20px;
  user-select: none;
`;

const ProductList = ({ products }) => (
  <Container>
    <Wrapper>
      <Title>고객님의 기기</Title>
      {products.length > 0 ? (
        <ProductCarousel
          withIndicators={false}
          height={350}
          slideGap="xl"
          slideSize="33.333333%"
          align="start"
          controlsOffset="xs"
          slidesToScroll={2}
          controlSize={50}>
          {products.map(({ type }, idx) => (
            <CarouselSlide key={idx}>
              <ProductImage src={productThumbbnail[type]} />
              <ProductName>{productTypes[type]}</ProductName>
            </CarouselSlide>
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
