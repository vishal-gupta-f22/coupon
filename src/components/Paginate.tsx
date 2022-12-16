import { Pagination } from '@mantine/core';
import React from 'react'
export const Paginate = ({totalPage,getPage}) =>{

  const [activePage, setPage] = React.useState(1);

  // getPage(activePage)

  console.log(totalPage)
  return <Pagination page={activePage} onChange={setPage} total={20} radius="md" />;
}