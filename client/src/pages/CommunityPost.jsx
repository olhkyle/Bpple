import React from 'react';
import styled from '@emotion/styled';
import { Badge, Button, Chip, Container, Divider, Flex, List, Text, Textarea, Title } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { BsArrowUpRightSquare } from 'react-icons/bs';

import { AppleRecommendIcon, CheckedCircleIcon } from '../components/community';
import { COMMUNITY_PATH } from '../routes/routePaths';
import formattedDate from '../utils/formattedDate';
import { ProfileAvatar } from '../components/common';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const PostSection = styled.section`
  margin-top: 2.5rem;
`;

const PostTitle = styled(Title)`
  width: 720px;
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
`;

const PostContent = styled(Text)`
  margin: 2rem auto;
  width: 90%;
  font-size: 18px;
  line-height: 2rem;
  text-align: justify;
  word-break: keep-all;
`;

const CommentsContainer = styled.section`
  margin-top: 2.5rem;
`;

const Comments = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Comment = styled(List.Item)`
  .mantine-List-itemWrapper {
    min-width: 1024px;
  }

  span > div {
    border: '1px solid #e1e1e1';
    box-shadow: ${({ isMine }) => isMine && 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'};
  }
`;

const CommentHeader = styled(Flex)`
  align-items: center;
  height: 32px;
  padding: 3px 0 4px 20px;
  font-weight: 500;
  border-bottom: 1px solid var(--body-bg-color);
  border-radius: 10px 10px 0 0;
  background: ${({ certified }) => (certified ? '#238BE680' : 'var(--secondary-bg-color)')};
`;

const CommentBody = styled.div`
  min-width: 500px;
  display: flex;
  gap: 20px;
  padding: 1.5rem;
`;

const CommentWrapper = styled(Flex)`
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const CommentContent = styled(Text)`
  margin-top: 16px;
  color: var(--font-color);
  font-size: 1rem;
  text-align: justify;
  word-break: keep-all;
`;

// 현재 로그인된 사용자와 해당 답글의 작성자가 같은 경우 display block
// 게시글 작성자가 아닌 경우 -> 유용한 답변 채택 버튼이 보이지 않을 예정
const UsefulCommentButton = ({ commentEditable }) => {
  // 포스트별 답글의 useful 프로퍼티 상태 비동기 요청 필요
  const [checked, setChecked] = React.useState(false);
  console.log(commentEditable);
  return (
    <Chip
      onClick={() => {
        if (commentEditable === false) {
          console.log(1);
          return setChecked(!checked);
        }
      }}
      mb="4px"
      ml="auto"
      size="md"
      fw="500"
      radius="xl"
      variant={checked ? 'outline' : 'filled'}>
      유용한 답변으로 채택
    </Chip>
  );
};

const CommentEditButton = ({ commentEditable, setCommentEditable }) => (
  <Button onClick={() => setCommentEditable(!commentEditable)} mb="4px" h="32px" radius="xl">
    {commentEditable ? '편집 취소' : '답글 편집'}
  </Button>
);

const CommunityPost = () => {
  const commentTextArea = React.useRef(null);
  const { id } = useParams();
  const [commentEditable, setCommentEditable] = React.useState(false);

  const post = {
    id: '8',
    title: '맥북의 경우 trade in 어떻게 가능한가요?',
    content: '',
    author: 'cooljp95@naver.com',
    createAt: new Date('2023-02-01'),
    updateAt: new Date(),
    category: 'Mac',
    completed: true,
    comments: [1, 2, 3],
  };

  return (
    <Wrapper>
      <Link to={`${COMMUNITY_PATH}/${'mac'}`}>
        <Flex gap="5px" align="center" fz="15px" fw="600" td="none" c="var(--font-color)">
          <Text>{post.category}</Text>
          <BsArrowUpRightSquare />
        </Flex>
      </Link>
      <PostSection>
        <Flex gap="1rem" mb="0.5rem" ml="auto" h="30px">
          <CheckedCircleIcon completed={true} />
          <AppleRecommendIcon />
        </Flex>

        <PostTitle>{post.title}</PostTitle>

        <Text mt="0.5rem" ml="0.2rem" fz="15px" c="grey">
          {formattedDate(post.createAt)}
        </Text>
        <AuthorProfile>
          <ProfileAvatar avatarId={'avatar-10'} />
          <Flex display="flex" gap="10px" direction="column">
            <Text mt="-3px" ml="2px" fz="21px" fw="500">
              {'Steven'}
            </Text>
            <Flex gap="8px" align="center">
              <Badge variant="outline" size="lg" fz="14px">
                레벨 {'1'}
              </Badge>
              <Badge variant="outline" size="lg" fz="14px">
                포인트 {'40'}
              </Badge>
            </Flex>
          </Flex>
        </AuthorProfile>
        <PostContent>
          워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사보험을 사용하지 않고있습니다. 물에 빠트리거나, 간단한
          충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론
          데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 {'새 제품'}으로 교체가 되었다고
          말씀하더군요. (작년 여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지 않았음) 그 같은 증상이 지난
          4월20일, 수리한지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고
          하네요. 결국 58만7천원을 수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드결함은 있다고 들었는데
          어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요.
          60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리
          못하고있습니다. 6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다. 어떤사람은 6년.. 5년.. 같은제품을 써도 이런
          증상이 없다고 하는데, 이런일이 있을수 있나요? 워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사보험을
          사용하지 않고있습니다. 물에 빠트리거나, 간단한 충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함
          판정 후 무상수리, 메인보드 교체받았습니다. 물론 데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고
          전체 {'새 제품'}으로 교체가 되었다고 말씀하더군요. (작년 여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후
          켜지지 않았음) 그 같은 증상이 지난 4월20일, 수리한지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요.
          메인보드 교체 후 90일 이내 무상이라고 하네요. 결국 58만7천원을 수리비로 내야한다고 합니다. 너무 어이가 없고
          억울하네요. 사운드결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체
          한 메인보드 조차 결함이 있던건 아닐까요. 60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면
          또 60만원이라는 큰 돈이 나가겠지요. 수리 못하고있습니다. 6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다.
          어떤사람은 6년.. 5년.. 같은제품을 써도 이런 증상이 없다고 하는데, 이런일이 있을수 있나요? 워낙 휴대폰을
          애지중지 사용하고있느라, 애플케어 및 통신사보험을 사용하지 않고있습니다. 물에 빠트리거나, 간단한 충격조차
          없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론 데이터는
          1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 {'새 제품'}으로 교체가 되었다고 말씀하더군요. (작년
          여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지 않았음) 그 같은 증상이 지난 4월20일, 수리한지 1년도
          되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고 하네요. 결국 58만7천원을
          수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드결함은 있다고 들었는데 어떻게하면 새 제품이
          1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요. 60만원이라는 거금을
          투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리 못하고있습니다.
          6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다. 어떤사람은 6년.. 5년.. 같은제품을 써도 이런 증상이 없다고
          하는데, 이런일이 있을수 있나요?
        </PostContent>
      </PostSection>

      <Divider variant="dashed" />

      <CommentsContainer>
        <Flex gap="10px" mb="20px" align="center" fw="600">
          <Text fz="2rem">답글</Text>
          <Text c="blue" fz="2.5rem">
            {post.comments.length}
          </Text>
        </Flex>
        <Comments>
          <Comment>
            <CommentWrapper>
              <CommentHeader certified={true}>
                <AppleRecommendIcon color="white" />
              </CommentHeader>

              <CommentBody>
                <ProfileAvatar avatarId={'avatar-10'} />
                <Flex direction="column" w="100%">
                  <Flex display="flex" gap="10px" mb="10px">
                    <Text mt="-3px" ml="2px" fz="21px" fw="500" c="var(--font-color)">
                      {'Steven'}
                    </Text>
                    <Flex gap="8px" align="center" mb="1rem">
                      <Badge variant="outline" size="lg" fz="14px">
                        레벨 {'1'}
                      </Badge>
                      <Badge variant="outline" size="lg" fz="14px">
                        포인트 {'40'}
                      </Badge>
                    </Flex>

                    {/* 게시글 작성자와 현재 로그인한 사용자가 같을 경우 보여줌 */}
                    <UsefulCommentButton commentEditable={commentEditable} />
                    <CommentEditButton commentEditable={commentEditable} setCommentEditable={setCommentEditable} />
                  </Flex>
                  <Divider variant="dashed" />
                  {commentEditable ? (
                    <>
                      {/* textEditor 활용 */}
                      <Textarea
                        ref={commentTextArea}
                        placeholder="답글을 작성해주세요"
                        mt="20px"
                        minRows={1}
                        autosize
                      />
                      {/*onClick으로 답글 삭제 비동기 요청 -> textEditor 활용 */}
                      <Button onClick={() => {}} ml="auto" mt="1rem" h="32px" radius="xl" color="dark">
                        답글 삭제
                      </Button>
                    </>
                  ) : (
                    <CommentContent>{commentTextArea.current?.value}</CommentContent>
                  )}
                </Flex>
              </CommentBody>
            </CommentWrapper>
          </Comment>
        </Comments>
      </CommentsContainer>
    </Wrapper>
  );
};

export default CommunityPost;
