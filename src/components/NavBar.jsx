// src/components/Navbar.js
import React, { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Input,
  Textarea
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, AddIcon } from '@chakra-ui/icons';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"
import { addCarFn } from '../pages/api';



const NavBar = () => {
  const [data, setData] = useState({
    Brand: "",
    Model_name: "",
    Model_year:null,
    Color: "",
    Odometer_Km: null,
    Major_Accident: null,
    PR_Owners: null,
    Place: "",
    Image: "",
    Description: ""
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    setData({...data,[name]:value})
  }


  const handleAdd = () => {
    addCarFn(data)
    // console.log(data)
    setData("")
  }



  return (
    <Box bg={bgColor} color={color} px={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Left Side */}
        <HStack spacing={8}>
          <Box fontWeight="bold" fontSize={30} onClick={() => navigate("/")}>BUYCAR</Box>


        </HStack>

        {/* Right Side */}
        <HStack spacing={6}>
          {/* here */}
          <IconButton
            aria-label="Add Car"
            icon={<AddIcon />}
            size="sm"
            variant="outline"

          />
          <Box fontWeight="bold" cursor={"pointer"} onClick={onOpen}>ADD CAR</Box>
          {/* Modal code is start */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Car</ModalHeader>
              <ModalCloseButton />
              <ModalBody spacing={3} maxWidth={"500px"} height={"300px"}>
                {/* <Lorem count={2} /> */}


                <Input name='Brand' value={data.Brand} type="text" placeholder='Enter Brand' mb={4} onChange={handleChange} />
                <Input name='Model_name' value={data.Model_name} type="text" placeholder='Enter Model Name' mb={4} onChange={handleChange} />
                <Input name='Model_year' value={data.Model_year} type="number" placeholder='Enter Model Year' mb={4} onChange={handleChange} />
                <Input name='Color' value={data.Color} type="text" placeholder='Enter Color' mb={4} onChange={handleChange} />
                <Input name='Odometer_Km' value={data.Odometer_Km} type="number" placeholder='Enter Odometer KM' mb={4} onChange={handleChange} />
                <Input name='Major_Accident' value={data.Major_Accident} type="number" placeholder='Enter Number of Major Accidents' mb={4} onChange={handleChange} />
                <Input name='PR_Owners' value={data.PR_Owners} type="number" placeholder='Enter Number of Previous Owners' mb={4} onChange={handleChange} />
                <Input name='Place' value={data.Place} type="text" placeholder='Enter Registration Place' mb={4} onChange={handleChange} />
                <Input name='Image' value={data.Image} type="text" placeholder='Enter Image URL' mb={4} onChange={handleChange} />
                <Box>
                  <Textarea name="Description" placeholder='Enter Description' mb={4} onChange={handleChange} />
                </Box>


              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleAdd}>
                  ADD
                </Button>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>





          <Box fontWeight="bold" cursor={"pointer"}>CAR FOR SALE</Box>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'dark' ? <BsSun /> : <BsMoonStarsFill />}
            size="sm"
            onClick={toggleColorMode}
            variant="outline"
          />

          <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/register")}>
            Register
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
