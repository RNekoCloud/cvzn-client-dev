import { useState } from "react"
import axios from "axios"
import { RegisterData } from "../types/payload"
import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { Button } from "../components/Button/Button.style"

const Register = () => {
    const [data, setData] = useState<RegisterData>({
        email: "",
        password: "",
        confirmationPassword: "",
    })

    const handleChange = (e: any) => {
        const val = e.target.value
        setData({
            ...data,
            [e.target.name]: val
        })
    }

    const handleBtn = async() => {
       console.log()
    }

    return (
        <>
            <CardContainer>
                <Card>
                    <CardTitle>Register</CardTitle>
                    <label htmlFor="" className="form__label">Email</label>
                    <input type="text" className="form__input" onChange={handleChange} value={data.email} />
                    <label htmlFor="" className="form__label">Password</label>
                    <input type="password" className="form__input" onChange={handleChange} value={data.password} />
                    <label htmlFor="" className="form__label">Password Confirmation</label>
                    <input type="password" className="form__input" onChange={handleChange} value={data.confirmationPassword} />
                    <Button onClick={handleBtn}>Register</Button>
                </Card>
            </CardContainer>
        </>
    )
}

export default Register