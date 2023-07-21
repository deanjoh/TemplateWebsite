
import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import React from "react";




const Nav = () => {
    const CTA = "Book Now"
    const data = ['Home', 'Products', 'Contact']

    return (
        <chakra.header id="header">
          <Flex
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="space-between"
          >
            
            <HStack as="nav" spacing="5"> 
                  <Button variant="nav"> <Link key={1} to='/' >Home </Link> </Button>
                  <Button variant="nav"> <Link key={2} to='/' >Products </Link> </Button>
                  <Button variant="nav"> <Link key={3} to='/contact' >Contact</Link> </Button>
            </HStack>
    
            <HStack>
              <Button>
                {CTA}
              </Button>
            </HStack>
            
          </Flex>
        </chakra.header>
      )
}

export default Nav
  