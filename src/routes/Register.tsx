import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { InputTitle, InputText } from "../components/Input/Input.style"

const Register = () => {
    return (
        <>
            <CardContainer>
                <Card>
                    <CardTitle>Register</CardTitle>
                    <label htmlFor="" className="form__label">Email</label>
                    <input type="text" className="form__input" />
                    <label htmlFor="" className="form__label">Password</label>
                    <input type="password" className="form__input" />
                    <label htmlFor="" className="form__label">Password Confirmation</label>
                    <input type="password" className="form__input" />
                </Card>
            </CardContainer>
        </>
    )
}

export default Register