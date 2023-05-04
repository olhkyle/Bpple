import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Badge, Button, Flex, Text, Title } from '@mantine/core';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import formattedDate from '../../utils/formattedDate';
import { AvatarIcon, CompletedIcon, AppleRecommendIcon, DeletePostModal } from '..';
import { COMMUNITY_CATEGORY_PATH, COMMUNITY_PROFILE_PATH } from '../../routes/routePaths';
import userState from '../../recoil/atoms/userState';

const BreadCrumb = styled(Link)`
  width: 100px;
  cursor: pointer;
`;

const PostSection = styled.section`
  margin-top: 2.5rem;
`;

const PostTitle = styled(Title)`
  width: 980px;
  font-size: 2.5rem;
  word-break: keep-all;
`;

const AuthorProfile = styled.header`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const Content = styled(Text)`
  margin: 2rem auto;
  width: 90%;
  font-size: 18px;
  line-height: 2rem;
  text-align: justify;
  word-break: keep-all;
`;

const PostContent = ({
  post: { id, author, title, category, createAt, content, completed, avatarId, certified, nickName, level, point },
}) => {
  const { email } = Recoil.useRecoilValue(userState);
  const [opened, { close: closeModal, open: openModal }] = useDisclosure(false);

  return (
    <>
      <BreadCrumb to={`${COMMUNITY_CATEGORY_PATH}/${category.toLowerCase()}`}>
        <Flex gap="5px" align="center" fz="15px" fw="600" td="none" c="var(--font-color)">
          <Text>{category}</Text>
          <BsArrowUpRightSquare />
        </Flex>
      </BreadCrumb>
      <PostSection>
        <Flex justify="space-between" w="100%" mb="1rem">
          <Flex gap="1rem" mt="0.2rem" mb="0.5rem" h="30px">
            <CompletedIcon completed={completed} />
            {certified && <AppleRecommendIcon />}
          </Flex>
          {author === email && (
            <Button radius="xl" color="red" variant="outline" onClick={openModal}>
              질문 삭제하기
            </Button>
          )}
        </Flex>

        <PostTitle>{title}</PostTitle>

        <Text mt="0.5rem" ml="0.2rem" fz="15px" c="grey">
          {formattedDate(new Date(createAt))}
        </Text>
        <Link to={`${COMMUNITY_PROFILE_PATH}/${nickName}`}>
          <AuthorProfile>
            <AvatarIcon avatarId={avatarId} />
            <Flex display="flex" gap="10px" direction="column">
              <Text mt="-3px" ml="2px" fz="21px" fw="500" c="var(--font-color)">
                {nickName}
              </Text>
              <Flex gap="8px" align="center">
                <Badge variant="outline" size="lg" fz="14px">
                  레벨 {level}
                </Badge>
                <Badge variant="outline" size="lg" fz="14px">
                  포인트 {point}
                </Badge>
              </Flex>
            </Flex>
          </AuthorProfile>
        </Link>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
        <DeletePostModal postId={id} opened={opened} onClose={closeModal} />
      </PostSection>
    </>
  );
};

export default PostContent;
