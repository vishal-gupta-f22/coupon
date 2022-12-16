import React from 'react'
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, CSSObject, MantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';

const styles = (theme: MantineTheme): CSSObject => ({
  maxWidth:'1000px',
  margin:'20px auto',
  
  '&:hover': {
    backgroundColor: theme.colors.gray[0],
  },
});


export function Search(props: TextInputProps) {
  const [searchTerm,setSearchTerm] = React.useState();
  const theme = useMantineTheme();

  
  console.log('Search',searchTerm)
  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      sx={styles}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      value={searchTerm}
      onChange={(event) => {setSearchTerm(event.currentTarget.value)}}
      placeholder="Search Coupon"
      rightSectionWidth={42}
      {...props}

    />
  );
}

export default Search