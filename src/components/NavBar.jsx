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
  Textarea,
  Center,
  Avatar,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, AddIcon } from '@chakra-ui/icons';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"
import { addCarFn } from '../pages/api';
import { message, Badge } from "antd"


const NavBar = () => {
  const [data, setData] = useState({
    brand: "",
    model_name: "",
    model_year:null,
    color: "",
    odometer_km: null,
    major_accidents: null,
    previous_owners: null,
    registration_place: "",
    image: "",
    description: ""
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
    .then((res)=> {
      console.log(res,"33")
      if(res.status==201){
        message.success("car added successfully")
        onClose()
        // navigate("/")
        
      }else{
        message.error("car not added somthing wrong try again")
      }
      
  })
    // console.log(data)
    
  }

   const handleLogout = () => {
    message.success("logout Successfully")
    sessionStorage.clear()
    navigate("/login")
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
            onClick={onOpen}
          />
          <Box fontWeight="bold" cursor={"pointer"} onClick={onOpen}>ADD CAR</Box>
          {/* Modal code is start */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Car</ModalHeader>
              <ModalCloseButton />
              <ModalBody spacing={3} maxWidth={"500px"} height={"300px"} >
                {/* <Lorem count={2} /> */}


                <Input name='brand' value={data.brand} type="text" placeholder='Enter Brand' mb={4} onChange={handleChange} required/>
                <Input name='model_name' value={data.model_name} type="text" placeholder='Enter Model Name' mb={4} onChange={handleChange} />
                <Input name='model_year' value={data.model_year} type="number" placeholder='Enter Model Year' mb={4} onChange={handleChange} />
                <Input name='color' value={data.color} type="text" placeholder='Enter Color' mb={4} onChange={handleChange} />
                <Input name='odometer_km' value={data.odometer_km} type="number" placeholder='Enter Odometer KM' mb={4} onChange={handleChange} />
                <Input name='major_accidents' value={data.major_accidents} type="number" placeholder='Enter Number of Major Accidents' mb={4} onChange={handleChange} />
                <Input name='previous_owners' value={data.previous_owners} type="number" placeholder='Enter Number of Previous Owners' mb={4} onChange={handleChange} />
                <Input name='registration_place' value={data.registration_place} type="text" placeholder='Enter Registration Place' mb={4} onChange={handleChange} />
                <Input name='image' value={data.image} type="text" placeholder='Enter Image URL' mb={4} onChange={handleChange} />
                <Box>
                  <Textarea name="description" placeholder='Enter Description' mb={4} onChange={handleChange} />
                </Box>


              </ModalBody>

              <ModalFooter>
                <Box width={"100%"} textAlign={"center"}>

                <Button padding={"10px 50px"}  colorScheme='blue' mr={3} onClick={handleAdd} justifyContent={"center"} textAlign={"center"}> 
                  ADD
                </Button>
                </Box>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>





          <Box fontWeight="bold" cursor={"pointer"} onClick={()=>navigate("/")}>CAR FOR SALE</Box>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'dark' ? <BsSun /> : <BsMoonStarsFill />}
            size="sm"
            onClick={toggleColorMode}
            variant="outline"
          />
           <Center>
            <Text>{sessionStorage.getItem("email")}</Text>
                    <Avatar
                    ml={2}
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>

          <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
