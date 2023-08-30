import axios from "axios"
import { useRef } from "react"
import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { Button } from "../components/Button/Button.style"

const Register = () => {
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()


    const handler = async() => {
        let emailVal = emailInput.current.value
        let passwordVal = passwordInput.current.value

        try {
           const res = axios.post("http://ec2-3-113-2-184.ap-northeast-1.compute.amazonaws.com/api/v1/auth/signup", {
            email: emailVal,
            password: passwordVal,
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