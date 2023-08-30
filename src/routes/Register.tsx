import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { InputTitle, InputText } from "../components/Input/Input.style"

const Register = () => {
    return (
        <>
            <CardContainer>
                <Card>
                    <CardTitle>Register</CardTitle>
                    <InputTitle>Email</InputTitle>
                    <InputText />
                    <InputTitle>Password</InputTitle>
                    <InputText />
                    <InputTitle>Password Confirmation</InputTitle>
                    <InputText />
                </Card>
            </CardContainer>
        </>
    )
}

export default Register