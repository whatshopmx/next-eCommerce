import React from 'react'
import { Flex } from '@chakra-ui/react'
import Footer from '../sections/Footer'

const Main = props => {
  const { children } = props
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      {...props}
    >
      {children}
      <Footer />
    </Flex>
  )
}
export default Main
