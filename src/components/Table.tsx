import React from 'react'
import CreateCoupon from './CreateCoupon'
import styles from './Table.module.css'
import { Button, Modal, useMantineTheme } from '@mantine/core';
import AddCoupon from './AddCoupon';
import { IconClipboardPlus } from '@tabler/icons';
import EditCoupon from './EditCoupon';
import qs from 'qs';
// import { Paginate } from './Paginate';
import { Pagination } from '@mantine/core';
import { ApiCall, DeleteCall, EditCall, PostCall } from './ApiCall';
import Search from './Search';
// import {  } from '@mantine/core';

const Table = () => {
    const [searchTerm,setSearchTerm] = React.useState();
    const [activePage, setPage] = React.useState(1);
    const [opened, setOpened] = React.useState(false);
    const [editopened, setEditOpened] = React.useState(false);
    const [totalPage,setTotalPage] = React.useState()
    const [count,setCount] = React.useState()
    // const [page,setPage] = React.useState()
    const theme = useMantineTheme();

    var [temp,setTemp]= React.useState();

    const pullData = (data) => {
        console.log('data from ',data)
        // setTemp(data)
        // AddData(data)
    }

    // const getPage = (page) =>{
    //     setPage(page)
    //     console.log('page from table',page)
    // }
    const [couponData, setCouponData] = React.useState([]);
    const getData = async (val = '') => {
        var value = searchTerm
        let query = qs.stringify({title: { $regex: val}})

        console.log(query);
        
        // ?limit=${10}&page=${activePage}
        // try {
        //     fetch(`https://coupon-server.onrender.com/cuponn?${query}&limit=${10}&page=${activePage}`)
        //         .then((res) => res.json())
        //         .then((res) => {setCouponData(res.data);setTotalPage(res.totalCount)})
        //         .catch((err) => alert(err))
        //     console.log(couponData)
        //     // setOpened(true)
        //     // setOpened(false)
        // } catch (error) {
        //     console.log(error)
        //     alert(error)
        // }
        console.log('API CALL USING WRAPPPER')
        ApiCall(query,activePage).then((e)=>{ setCouponData(e.data); setCount(e.totalCount);console.log('e', e.data)})

        console.log()
        
    }
    // getData()
    React.useEffect(() => {
        console.log('sahi');
        
        getData()

        

    },[opened,editopened,activePage])

    const AddData = async (data) =>{
        // try {
        //     fetch('https://coupon-server.onrender.com/cupon',{
        //     method:'POST',
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        // .then((res) => res.json())
        // .then((res) => {console.log(res);setOpened(false);})
        // setTemp(data)
        // // .catch(err => alert(err))
        // } catch (error) {
        //     console.log(error)
        //     alert(error)
        // }
    
        PostCall(data)
        setOpened(true)
        setTimeout(() => {setOpened(false)}, 100);//.then((e)=>{ ; console.log('e', e)})
        getData()
    }

    const deleteCoupon = (id) =>{
        // fetch(`https://coupon-server.onrender.com/cupon/${id}`,{
        //     method:'DELETE'
        // })
        // .then(()=> {getData()})
        DeleteCall(id)
        getData()
        alert('DELETE SUCESSFULL')
        setOpened(true)
        setTimeout(() => {setOpened(false)}, 100);
    }

    const editData = (data) =>{
        // console.log('EDITED DATA',data)
        setEditOpened(true)
        console.log(editopened)
        setTemp({...temp,data})
        // console.log('TEMP',temp)
    }

    const filldata = async (data) =>{
        // try {
        //     fetch(`https://coupon-server.onrender.com/cupon/${data._id}`,{
        //     method:'PATCH',
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        // .then((res) => res.json())
        // .then((res) => {console.log(res);setOpened(false);})
        // setTemp(data)
        // setEditOpened(false)
        // // .catch(err => alert(err))
        // } catch (error) {
        //     console.log(error)
        //     alert(error)
        // }
        EditCall(data)
        setTemp(data)
        setOpened(true)
        setEditOpened(true)
        setTimeout(() => {setOpened(false);setEditOpened(false)}, 100);
        
    }

    return (
        <div>
            <input type="text" 
            placeholder='Search Coupon'
            style={{margin:'25px',width:'90%',height: '50px',
            border: '1px solid grey',
            borderRadius: '50px',
            padding: '15px',
            boxSizing: 'border-box'}}
            value={searchTerm} 
            onChange={(event)=>{setSearchTerm(event.target.value);getData(event.target.value)}}/>
            {/* <Search setsearch={searchTerm}/> */}
        <div className={styles.containerTable}>
            <div className={styles.addButton}>
                <h3>Coupon List Count {count}</h3>
                
                <Modal
                    
                    opened={opened}
                    onClose={() =>
                        setOpened(false)}
                    withCloseButton={true}
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.1}
                    overlayBlur={1}
                    // fullScreen
                    title="Add New Coupon Details">
                    <AddCoupon setOpened={setOpened} pullData={AddData} temp={temp}/>
                </Modal>
                <Button
                    leftIcon={<IconClipboardPlus />}
                    size="lg"
                    variant="white"
                    onClick={() => setOpened(true)}>
                    Add New Coupon
                </Button>
            </div>

            <Modal
                    
                    opened={editopened}
                    onClose={() =>
                        setEditOpened(false)}
                    withCloseButton={true}
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.1}
                    overlayBlur={1}
                    // fullScreen
                    title="Edit Coupon Details">
                    <EditCoupon setEditOpened={setEditOpened} temp={temp} filldata={filldata}/>
                    
                </Modal>

            <CreateCoupon couponData={couponData} deleteCoupon={deleteCoupon} editData={editData} setEditOpened={setEditOpened}/>
        </div >
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',height:'100px'}}>               
            <Pagination page={activePage} onChange={setPage} total={totalPage} radius="md" />;
        </div>

        {/* <Paginate totalPage={totalPage} getPage={getPage}/> */}
        </div>
    )
}

export default Table