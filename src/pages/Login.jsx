import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { userLoginFn } from './api';
import { useNavigate} from 'react-router-dom';
import { message } from 'antd';
  
  export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
      let data = {email,password}
      // localStorage.setItem("name",)
      sessionStorage.setItem("email", email)
   
userLoginFn(data)
.then((res)=> {
  console.log(res,"22");
   if(res.status==200){
    message.success("login Success")
     navigate("/")
   }else{
   message.error("Wrong Credential")
   }
})


    }

    return (
      <Flex
        minH={'80vh'}
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
            <Stack spacing={4}>
            <Heading fontSize={'3xl'}>Sign in to your account</Heading>

              <FormControl id="email">
                <FormLabel>Email </FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="text" onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                onClick={handleSubmit}
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign in
                </Button>
                <Box display={"flex"} justifyContent={"end"}>
                    <Text cursor={"pointer"} color="blue" as="u"  onClick={()=> navigate("/register")}> SignUp</Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }