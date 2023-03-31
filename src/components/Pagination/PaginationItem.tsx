import { Button } from '@chakra-ui/react';

type PageProps = {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
};

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PageProps) => {
  return isCurrent ? (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme='pink'
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default',
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};
