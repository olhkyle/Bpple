import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Chip, Container, Flex, Group, Text, Title } from '@mantine/core';
import { getRank } from '../api/rank';
import { RankTable } from '../components/community';

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

const staleTime = 3000;

const rankQuery = (topCount = '10') => ({
  queryKey: ['rank', topCount],
  queryFn: async () => {
    const { data: usersRank } = await getRank(topCount);
    return usersRank;
  },
  staleTime,
});

const rankLoader = queryClient => async () => {
  const query = rankQuery();

  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const Rank = () => {
  const [users, setUsers] = React.useState([]);

  const [curTopCount, setCurTopCount] = React.useState('10');
  const { isFetched, data } = useQuery(rankQuery(curTopCount));

  React.useEffect(() => {
    if (isFetched) setUsers(data.usersRank);
  }, [curTopCount, data, isFetched]);

  return (
    <Wrapper>
      <Title size="52px" mt="40px" mb="40px">
        사용자 순위
      </Title>
      {users.length > 0 ? (
        <>
          <Flex justify="flex-end" mb="30px">
            <Chip.Group value={curTopCount} onChange={setCurTopCount}>
              <Group position="center">
                <Chip value="10">top 10</Chip>
                <Chip value="20">top 20</Chip>
                <Chip value="30">top 30</Chip>
              </Group>
            </Chip.Group>
          </Flex>
          <RankTable users={users} />
        </>
      ) : (
        <Text size="md">커뮤니티 사용자가 없습니다.</Text>
      )}
    </Wrapper>
  );
};

export { rankLoader, rankQuery };
export default Rank;
