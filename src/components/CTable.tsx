import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const CTable = (props: Props) => {
  return (
    <table className='table-auto w-full'>
      {props.children}
    </table>
  )
}

export default CTable