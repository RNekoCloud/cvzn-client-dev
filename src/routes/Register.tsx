import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { Button } from "../components/Button/Button.style"
import { useState, useRef } from "react"
import { Auth } from "../types/payload"

const Register = () => {
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()

    const [authState, setAuthState] = useState<Auth>({
        email: "",
        password: "",
    })

    const handler = () => {
        console.log("Testing...")
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