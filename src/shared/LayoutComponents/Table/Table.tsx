import styled from 'styled-components';

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  min-width: 500px;
`;

export const TableHeadContainer = styled.thead`
  text-transform: uppercase;
  background-color: ${(props) => props.theme['gray-600']};
  text-align: left;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  line-height: 1.6;
`;

export const TableHead = styled.th`
  padding: 1rem;

  &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
  }

  &:last-child {
    border-top-right-radius: 8px;
    padding-right: 1.5rem;
  }
`;

export const TableData = styled.td`
  background-color: ${(props) => props.theme['gray-700']};
  border-top: 4px solid ${(props) => props.theme['gray-900']};
  padding: 1rem;
  font-size: 0.925rem;
  color: ${(props) => props.theme['gray-100']};
  line-height: 1.6;
  &:first-child {
    width: 40%;
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`;
