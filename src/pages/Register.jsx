import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { userRegisterFun } from './api';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
  
    const navigate = useNavigate()
const handleRegister = () => {
  let data = {name,email,password,role}
  // console.log(data);
userRegisterFun(data)
.then((res)=> {
 if(res.status==201){
  message.success("User register successfully")
  setName("")
  setEmail("")
  setPassword("")
  setRole("")
  navigate("/login")
 }else{
  message.error("something went wrong in server try again")
 }
})


  
}


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
               <Heading fontSize={'3xl'} textAlign={'center'} mb="3">
              Sign up
            </Heading>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Enter Name</FormLabel>
                    <Input type="text"  onChange={(e)=>setName(e.target.value)}/>
                  </FormControl>
                </Box>
                <Box>
               
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  onChange={(e)=>setPassword(e.target.value)}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Select placeholder='Select role' onChange={(e)=>setRole(e.target.value)}>
            <option onChange={(e)=>setRole(e.target.value)} value="dealer">dealer</option>
            <option onChange={(e)=>setRole(e.target.value)} value="customer">customer</option>
</Select>

              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleRegister}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Box pt={6} display={"flex"} justifyContent={"space-between"}>
                <Text align={'center'}>
                  Already a user?   </Text>
                  <Text as={"u"}  cursor={"pointer"} onClick={()=> navigate("/login")} color={'blue.400'} >Login</Text>
              
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }