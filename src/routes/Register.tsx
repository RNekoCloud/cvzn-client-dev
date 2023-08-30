import axios from "axios"
import { useState, useRef } from "react"
import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { Button } from "../components/Button/Button.style"
import { Auth } from "../types/payload"

const Register = () => {
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()

    const [authState, setAuthState] = useState<Auth>({
        email: "",
        password: "",
    })

    const handler = async() => {
        let emailVal = emailInput.current.value
        let passwordVal = passwordInput.current.value

        setAuthState({
            email: emailVal,
            password: passwordVal,
        })

        try {
           const res = axios.post("http://ec2-3-113-2-184.ap-northeast-1.compute.amazonaws.com/api/v1/auth/signup", {
            email: authState.email,
            password: authState.password,
           })

           console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <CardContainer>
                <Card>
                    <CardTitle>Register</CardTitle>
                    <label htmlFor="" className="form__label">Email</label>
                    <input type="text" className="form__input" ref={emailInput} />
                    <label htmlFor="" className="form__label">Password</label>
                    <input type="password" className="form__input" ref={passwordInput} />
                    <label htmlFor="" className="form__label">Password Confirmation</label>
                    <input type="password" className="form__input" />
                    <Button onClick={handler}>Register</Button>
                </Card>
            </CardContainer>
        </>
    )
}

export default Register