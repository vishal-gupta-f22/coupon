import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Title } from '@mantine/core';
// import DatePicker from "react-datepicker"; /
import { DatePicker } from '@mantine/dates';
import { Textarea } from '@mantine/core';
import { Select } from '@mantine/core';

// import "react-datepicker/dist/react-datepicker.css";
import { Indicator } from '@mantine/core';

// import DatePicker from "react-datepicker";  


const AddCoupon = ({ setOpened, pullData, temp }) => {
    // new Date()
    const [value, setValue] = React.useState<Date | null>(new Date());
    // const [value, onChange] = React.useState(new Date(2021, 11, 1));
    interface names {
        title: String,
        cuponCode: String,
        expiry: String,
        paymentMode: string,
        description: String[],
        discount: {
            percentage: String | null,
            amount: String | null
        }
    }

    const [data, setData] = React.useState<names>({
        title: '',
        cuponCode: '',
        expiry: '',
        paymentMode: '',
        description: [],
        discount: {
            percentage: null,
            amount: null
        }
    })

    const [dis, setDis] = React.useState("")
    const [payvalue, setPayValue] = React.useState<string | null>('');
    const [payamt, setPayAmt] = React.useState<string>('');

    const handelDate = () => {
        // setData({ ...data, title: `${value.getDate() + '-' + }` })
        setData({ ...data, expiry: `${value.getDate() + '-' + value.getMonth() + '-' + value.getFullYear()}` })
    }

    React.useEffect(() => {
        handelDate()
    }, [value])

    const handelDis = (val) => {
        var temp: Array<String> = val.split(';')
        console.log('temp', temp)
        // setData({ ...data, description: [  ...data.description , temp ] })
        setData({ ...data, description: temp })
    }

    const getdisdetails = () => {
        if (payvalue === 'Amount') {
            console.log('im here')
            // setData({ ...data, discount : {  ...data.discount , percentage : '' }})
            setData({ ...data, discount: { ...data.discount, amount: payamt } })
        } else if (payvalue === 'Percentage') {
            // setData({ ...data, discount : {  ...data.discount , amount : '' }})
            setData({ ...data, discount: { ...data.discount, percentage: payamt } })
        }
    }

    const checkFields = () => {
        if (!data.title.trim(' ')) {
            alert('Title Cannot be empty')
        }else if(!data.cuponCode.trim(' ')){
            alert('Coupon Code Cannot be empty')
        }else if(!data.paymentMode.trim(' ')){
            alert('Payment Mode Cannot be empty')
        }else if(data.description.length === 0){
            alert('Description Cannot be empty')
        }else if(data.discount.amount == null && data.discount.percentage == null){
            alert('Discount Amount Cannot be Empty')
        }
        else{
            pullData(data)
        }
    }

    // const 

    console.log('payvalue', payvalue)
    console.log('payamt', payamt)
    console.log(value)
    console.log(dis)
    console.log(data)


    const filldata = () => { }


    console.log('editDATA from ADD COUPON', temp)

    return (
        <div style={{ maxWidth: 320, margin: 'auto' }}>
            <TextInput label="Coupon Title" placeholder="Coupon Title" withAsterisk value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
            <TextInput mt="md" label="Coupon Code" placeholder="Coupon Code" withAsterisk value={data.cuponCode} onChange={(e) => setData({ ...data, cuponCode: e.target.value })} />
            <DatePicker placeholder="Pick date" label="Event date" withAsterisk value={value} onChange={setValue} />
            <TextInput mt="md" label="Payment Mode" placeholder="Payment Mode" withAsterisk value={data.paymentMode} onChange={(e) => setData({ ...data, paymentMode: e.target.value })} />
            <Textarea
                placeholder="Enter Terms and Condition seprated by ';'"
                label="Enter Terms and Condition  ';'"
                withAsterisk
                value={dis}
                onChange={(event) => {
                    setDis(event.currentTarget.value)
                    handelDis(event.currentTarget.value)
                }}
            />
            <div>
                <Select
                    label="Discount Mode"
                    placeholder="Pick one"
                    searchable
                    nothingFound="No options"
                    data={['Amount', 'Percentage']}
                    value={payvalue}
                    onChange={setPayValue}
                />
                <TextInput mt="md" label="Discount Value" placeholder="Discount Value" width='50px' withAsterisk value={payamt}
                    onChange={(e) => {
                        Number(e.target.value) ?
                            setPayAmt(e.target.value) :
                            alert('Only Numbers allowed')
                        getdisdetails()
                    }} />

            </div>

            <Group position="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() =>
                    // form.setValues({
                    //     name: 'randomId()',
                    //     email: '',
                    // })
                    {
                        checkFields();
                        // pullData(data)
                    }
                    }
                >
                    Add Coupon
                </Button>
            </Group>
        </div>
    )
}

export default AddCoupon