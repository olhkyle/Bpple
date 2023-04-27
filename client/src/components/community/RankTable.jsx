import React from 'react';
import styled from '@emotion/styled';
import { Table } from '@mantine/core';
import RankItem from './RankItem';

const Th = styled.th`
  text-align: center !important;
`;

const RankTable = ({ users }) => (
  <Table striped horizontalSpacing="md" verticalSpacing="lg" fontSize="lg" maw="1024px" ta="center">
    <thead>
      <tr>
        <Th>Rank</Th>
        <Th>User</Th>
        <Th>Nickname</Th>
        <Th>Level</Th>
        <Th>Point</Th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <RankItem key={user.rank} {...user} />
      ))}
    </tbody>
  </Table>
);

export default RankTable;
