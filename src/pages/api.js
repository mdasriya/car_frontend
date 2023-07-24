import axios from "axios"

export const addCarFn =  async(obj)=>{
    try {
    return await fetch(`https://tender-erin-iguana.cyclic.app/addcar`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                authorization:sessionStorage.getItem("car_token")
            },
            body:JSON.stringify(obj)
        })
        // let fin=await res.json();
        // if(res.status==201){
        //     alert(fin.msg);
            
             
        // }else{
        //     alert(fin.msg);
        // }
    } catch (error) {
        alert("unable add new car");
    }
}


export const userLoginFn = async(obj)=>{

    try {
        let res=await fetch(`https://tender-erin-iguana.cyclic.app/login`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })
        let fin=await res.json();

        if(res.status==200){
            sessionStorage.setItem("car_token",fin.token);
            return res
            
        }else{
            return res
        }
    } catch (error) {
        alert("unable to do login");
    }
}

// export const userRegisterFunction = async(obj) => {
 
//  return  await axios.post("https://green-puffer-vest.cyclic.app/register", obj, {
//         headers:{
//             "Content-Type":"Application/json"
//         },
//      })
//      .then((res)=> {
//         return res.data
//      })
//      .catch((err)=> {
//         console.log(err)
//      })
// }


export const userRegisterFun = async(obj)=>{
    try {
    return  await fetch(`https://tender-erin-iguana.cyclic.app/register`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })
           
    } catch (error) {
        alert("unable to do register");
    }
}


export const getData = async() => {
    
    let res  = await axios.get("https://tender-erin-iguana.cyclic.app/allcars") 
    
        return res.data
}

export const getcolorCar = async(color) => {
//   console.log(color,"api");  
const response  =  await axios.get(`https://tender-erin-iguana.cyclic.app/cars/${color}`);
    return response
}
export const getBrandCar = async(brand) => {
//   console.log(color,"api");  
const response  =  await axios.get(`https://tender-erin-iguana.cyclic.app/carsbrand/${brand}`);
    return response
}


export const handleDeleteCar = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `${sessionStorage.getItem("car_token")}`,
        },
        

      };

      const response  =  await axios.delete(`https://tender-erin-iguana.cyclic.app/deletecar/${id}`,config);

    //   const response = await axios.delete(`http://localhost:8080/deletecar/${id}`,{userId}, config);
  
      // Check the response for success
       if (response.status === 202) {
          return response
 
       } else {
        //  console.log('Failed to delete the product.');
        return response
        
       }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  