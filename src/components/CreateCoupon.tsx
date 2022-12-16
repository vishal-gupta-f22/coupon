import React from 'react';
import styles from './CreateCoupon.module.css';
import { Button } from '@mantine/core';
import { Modal, useMantineTheme, Popover, Text } from '@mantine/core';
import edit from '../assets/edit.svg';
import trash from '../assets/trash.svg';
import AddCoupon from './AddCoupon';

const CreateCoupon = ({couponData,deleteCoupon,editData,setEditOpened}) => {
    const [opened, setOpened] = React.useState(false);
    const [openedF, setOpenedF] = React.useState(false);
    const theme = useMantineTheme();

    

    

    

    // const editData = (id) => {
        // try {
        //     fetch('https://coupon-server.onrender.com/cupon',{
        //     method:'PATCH',
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // })
        // .then((res) => res.json())
        // .then((res) => console.log(res))

        // .catch(err => alert(err))
        // } catch (error) {
        //     console.log(error)

        // }
    // }

   

    const temparr = [
        {
            discount: {
                percentage: 10,
                amount: null
            },
            id: "63971e30f67cb642ebefaabc",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        },
        {
            discount: {
                percentage: 10,
                amount: null
            },
            id: "63971e30f67cb642ebef",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        },
        {
            discount: {
                percentage: null,
                amount: 50
            },
            id: "63971e30f67",
            cuponCode: "NewYear2022",
            expiry: "2022-12-14",
            title: "New year offer",
            description: [
                "a",
                "b",
                "c",
                "d"
            ],
            paymentMode: "paypal",
            v: 0
        }

    ]
    return (
        <div>


            {
                couponData.map(el => {
                    return (
                        <div className={styles.couponRowContainer}>
                            <div className={styles.couponContainer} key={el._id}>
                                <div >
                                    <span className={styles.couponDiscount}>
                                        {el.discount.percentage ? el.discount.percentage + '% OFF' : el.discount.amount + '₹ OFF'}
                                    </span>
                                    <Modal
                                        centered
                                        opened={opened}
                                        onClose={() =>
                                            setOpened(false)}
                                        withCloseButton={false}
                                        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                                        overlayOpacity={0.1}
                                        overlayBlur={1}
                                        title="Terms and Condition">
                                        <ul>
                                            {
                                                el.description.map((el) => (
                                                    <li>{el}</li>
                                                ))
                                            }
                                        </ul>
                                    </Modal>

                                    <div>
                                        <span className={styles.couponDescription} onClick={() => setOpened(true)}>Terms & Condition*</span>
                                    </div>

                                </div>
                                <div>
                                    <h2 className={styles.couponTitle}>{el.title}</h2>
                                    <span className={styles.couponMode}>Applicable only on {el.paymentMode} payments</span>

                                </div>
                                <div>
                                    <Popover width={200} position="bottom" withArrow shadow="md">
                                        <Popover.Target>
                                            <Button>Get Coupon Code</Button>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Text size="sm">{el.cuponCode}</Text>
                                        </Popover.Dropdown>
                                    </Popover>
                                    <span className={styles.couponExpiry}>Expire on {el.expiry}</span>
                                </div>
                            </div>
                            <div onClick={() =>{
                                // setOpenedF(true)
                                // setEditOpened(true)
                                editData(el)}}>
                                {/* <Modal

                                    opened={openedF}
                                    onClose={() =>
                                        setOpenedF(false)}
                                    withCloseButton={true}
                                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                                    overlayOpacity={0.1}
                                    overlayBlur={1}
                                    // fullScreen
                                    title="Add New Coupon Details">
                                    <AddCoupon editData={el._id}/>
                                </Modal> */}
                                <img src={edit} width='30px' alt="" style={{ cursor: 'pointer' }} />
                            </div>
                            <div onClick={() => deleteCoupon(el._id) }>
                                <img src={trash} width='30px' alt="" style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default CreateCoupon