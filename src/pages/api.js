import axios from "axios"

export const addCarFn =  async(obj)=>{
    try {
        let res=await fetch(`https://green-puffer-vest.cyclic.app/addcar`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                authorization:sessionStorage.getItem("car_token")
            },
            body:JSON.stringify(obj)
        })
        let fin=await res.json();
        if(res.status==201){
            alert(fin.msg);
            // window.location.href="./html/login.html";
        }else{
            alert(fin.msg);
        }
    } catch (error) {
        alert("unable add new car");
    }
}


export const userLoginFn = async(obj)=>{
    try {
        let res=await fetch(`https://green-puffer-vest.cyclic.app/login`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })
        let fin=await res.json();
        if(res.status==201){
            sessionStorage.setItem("car_token",fin.token);
            alert(fin.msg);
            window.location.href="../html/salecar.html";
        }else{
            alert(fin.msg);
        }
    } catch (error) {
        alert("unable to do login");
    }
}
export const userRegisterFun = async(obj)=>{
    try {
    let res =  await fetch(`https://green-puffer-vest.cyclic.app/register`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        })
        let fin = await res.json()
        if(res.status==201){
          alert(fin.msg)
          
//   console.log(fin.msg);
        }else{
            alert(fin.msg);
        }

           
    } catch (error) {
        alert("unable to do register");
    }
}


export const getData = () => {
    axios.get("http://localhost:8080/allcars")
    .then((res)=> {
        console.log(res.data)
    })
}