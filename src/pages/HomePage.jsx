import React, { useEffect, useState } from 'react';
import { getBrandCar, getData, getcolorCar, handleDeleteCar } from './api';
import { Box, Button, Grid, Image, Input, Text } from '@chakra-ui/react';
import { message } from 'antd';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState("")
// console.log(cars);


  const handledelete = (id) => {
    let token = sessionStorage.getItem('car_token');
    if (!token) {
      message.error('Login first');
    } else {
      handleDeleteCar(id).then((res) => {
        if (res.status === 202) {
          message.success('Car is deleted successfully');
          // Update the car list after successful deletion
          setCars((prevCars) => prevCars.filter((car) => car._id !== id));
        } else {
          message.error('You are not authorized to delete this car');
        }
      });
    }
  };

  const getCarData = async () => {
    setLoading(true);
    try {
      const resdata = await getData();
      setCars(resdata.data);
    } catch (error) {
      // Handle error while fetching car data
      console.error('Error fetching car data:', error);
      message.error('Error fetching car data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async ( ) => {
console.log(color, "home")
let filterData = await getcolorCar(color)

  let final = filterData.data.data
  console.log(final);
  if(final.length==0){
 message.error(`no car present color ${color}`)
 return
  }
setCars(final)
  }
  const handleBrand = async ( ) => {
// console.log(color, "home")
let filterData = await getBrandCar(brand)

  let final = filterData.data.data
  console.log(final);
  if(final.length==0){
 message.error(`no car present color ${brand}`)
 return
  }
setCars(final)
  }



  useEffect(() => {
    getCarData();
  }, []);

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} p={7}>
        <Box>

        <Input type="text" placeholder="Type color" width={"300px"} mr={4} onChange={(e) => setColor(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>
        </Box>

        <Box>

        <Input type="text" placeholder="Enter Brand" width={"300px"} mr={4} onChange={(e) => setBrand(e.target.value)} />
        <Button onClick={handleBrand}>Search</Button>
        </Box>
      </Box>
      {!loading ? (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={5} p={4}>
          {cars?.map((item, i) => (
            <Box key={i} border="1px solid gray" p={3} cursor="pointer">
              <Image height="200px" width="250px" borderRadius={5} src={item.image} alt="Car" />
              <Text> Brand : {item.brand}</Text>
              <Text> Color : {item.color}</Text>
              <Text> model_name : {item.model_name}</Text>
              <Text> model_year : {item.model_year}</Text>
              <Text> major_accidents : {item.major_accidents}</Text>
              <Text> odometer_km : {item.odometer_km}</Text>
              <Text> previous_owners : {item.previous_owners}</Text>
              <Text> registration_place : {item.registration_place}</Text>

              <Box gap={3} display="flex" mt={2}>
                <Box>
                  <Button colorScheme="green" variant="outline">
                    Edit
                  </Button>
                </Box>
                <Box>
                  <Button colorScheme="red" variant="outline" onClick={() => handledelete(item._id)}>
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default HomePage;
