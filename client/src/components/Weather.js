import { Button, Card, FormControl, InputGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
const Weather = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        fetch("http://localhost:4000/weather", {
            method: "POST",
            mode: "cors",
            body: formData,
        })
            .then((res) => res.json())
            .then((res) =>{
                console.log(res);
                setData(res);
                setSearch('');
            })
            .catch((err) => {
              console.log(err);
            })
    }
    const onErr = (err) => {
        console.log(err);
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap',marginTop:'15em'}}>
            <Card style={{ width: '12rem', margin: 'auto' }}>
            {data.length === 0 ?(
                <div></div>
                ) : (
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{data.city}</Card.Title>
                    <Card.Text>
                        {data.temperature}°C
                    </Card.Text>
                    <Card.Text>
                        {data.forecast}
                    </Card.Text>
                    <Card.Img style={{ width: '80px', height: '80px' }} variant="top" src={data.iconUrl + data.icon + `.png`} />
                </Card.Body>)}
                <form onSubmit={handleSubmit(onSubmit, onErr)}>
                    <input style={{ width: '100%' }} name="town" onChange={e => setSearch(e.target.value)} value={search} ref={register} />
                    <Button style={{ width: '100%' }} type="submit">In</Button>
                </form>
            </Card>
        </div>
    )
}
export default Weather;