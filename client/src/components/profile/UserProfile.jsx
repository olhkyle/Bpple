import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Divider, Flex, Grid, Text } from '@mantine/core';
import { ProfileAvatar } from '../common';
import formattedDate from '../../utils/formattedDate';
import { PROFILE_EDIT_PATH } from '../../routes/routePaths';

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
  width: 1024px;
`;

const ProfileWrapper = styled.div`
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
`;

const ColorDivider = styled(Divider)`
  border-color: var(--body-bg-color);
`;

const AvatarWrapper = styled(Flex)`
  padding: 30px;
`;

const SummaryWrapper = styled(Flex)`
  flex-direction: column;
  margin-left: 30px;
  width: 100%;
`;

const SummaryRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const NickName = styled(Text)`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Name = styled(Text)`
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 10px;
`;

const PointInfo = styled(Text)`
  font-size: 1.1rem;
  font-weight: 300;
  margin-right: 20px;
`;

const EditButton = styled(Button)`
  margin-top: 5px;
  width: fit-content;
`;

const InfoGrid = styled(Grid)`
  margin: 50px;
`;

const GridCol = styled(Grid.Col)`
  text-align: start;
  font-size: 1.2rem;
  font-weight: 400;
`;

const GridLabel = styled(GridCol)`
  font-weight: 600;
  font-size: 1.4rem;
`;

const AboutMe = styled(Text)`
  background-color: var(--footer-bg-color);
  border-radius: 10px;
  margin-top: -16px;
  padding: 20px;
`;

const UserProfile = ({ nickName, avatarId, name, country, phoneNumber, point, level, aboutMe, birthDate }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(PROFILE_EDIT_PATH);
  };

  return (
    <Container>
      <Wrapper>
        <ProfileWrapper>
          <AvatarWrapper>
            <ProfileAvatar avatarId={avatarId} size="xl" />
            <SummaryWrapper>
              <SummaryRow>
                <NickName>{nickName}</NickName>
                <Name>{`(${name})`}</Name>
              </SummaryRow>
              <SummaryRow>
                <PointInfo>레벨 {level}</PointInfo>

                <PointInfo>포인트 {point}</PointInfo>
              </SummaryRow>
              <EditButton compact radius="sm" onClick={handleEdit}>
                프로필 편집
              </EditButton>
            </SummaryWrapper>
          </AvatarWrapper>
          <ColorDivider size="md" />
          <InfoGrid gutter={30} columns={4} grow>
            <GridLabel span={1}>국가</GridLabel>
            <GridCol span={3}>{country}</GridCol>

            <GridLabel span={1}>생년월일</GridLabel>
            <GridCol span={3}>{formattedDate(new Date(birthDate))}</GridCol>

            <GridLabel span={1}>연락처</GridLabel>
            <GridCol span={3}>{phoneNumber}</GridCol>

            <GridLabel span={4}>자기소개</GridLabel>
            <GridCol span={4}>
              <AboutMe>{aboutMe || '등록된 자기소개가 없습니다.'}</AboutMe>
            </GridCol>
          </InfoGrid>
        </ProfileWrapper>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
