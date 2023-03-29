import { Box, Button, Stack, Text } from '@chakra-ui/react';

interface PaginationProps {
  total: number;
  itemDescription: string;
}

export const Pagination = ({ total, itemDescription }: PaginationProps) => {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <Text fontWeight='bold'>
          {total} {itemDescription}
        </Text>
      </Box>
      <Stack direction='row' spacing='2'>
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
          1
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'purple.700',
          }}
        >
          2
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'purple.700',
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
};
