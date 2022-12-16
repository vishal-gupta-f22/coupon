// import React from 'react'

export const ApiCall = async (query : string, activePage : number) => {

    // const [data,setData] = React.useState()
    // let data : any = ''
    // console.log('API CALL FROM WRAPPPER')

    try {
        const data= await fetch(`https://coupon-server.onrender.com/cupon?${query}&limit=${10}&page=${activePage}`);
        const dataJson =await data.json();
        const d2 = dataJson.data
        console.log(dataJson)
        return dataJson;  
        // fetch(`https://coupon-server.onrender.com/cupon?${query}&limit=${10}&page=${activePage}`)
        //     .then((res) => res.json())
        //     .then((res)=> data = res.data)
        //     .then((res) => {console.log({res}); return res})
        //     .catch((err) => data = false)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}


export const PostCall = (data:any) =>{

    try {
        fetch('https://coupon-server.onrender.com/cupon',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {return res})
    // .then((res) => {console.log(res);setOpened(false);})
    // setTemp(data)
    // .catch(err => alert(err))
    } catch (error) {
        console.log(error)
        alert(error)
    }

    return data
}

export const DeleteCall = (id:any) =>{
    fetch(`https://coupon-server.onrender.com/cupon/${id}`,{
            method:'DELETE'
        })
}

export const EditCall = (data:any) =>{
    try {
        fetch(`https://coupon-server.onrender.com/cupon/${data._id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {console.log(res);})
  
    // .catch(err => alert(err))
    } catch (error) {
        console.log(error)
        alert(error)
    }
}