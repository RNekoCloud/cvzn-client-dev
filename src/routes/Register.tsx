import { useState } from "react"
import axios from "axios"
import { RegisterData } from "../types/payload"
import { CardContainer, Card, CardTitle } from "../components/Card/Card.style"
import { Button } from "../components/Button/Button.style"
import { PopupWrapper, PopupMsg } from "../components/Popup/Popup.style"

const Register = () => {
    const [data, setData] = useState<RegisterData>({
        email: "",
        password: "",
        confirmationPassword: "",
    })

    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("")

    const handleChange = (e: any) => {
        const val = e.target.value
        setData({
            ...data,
            [e.target.name]: val
        })
    }

    const handleBtn = async() => {
       const res = await axios.post("/api/v1/auth/signup", {
        email: data.email,
        password: data.password,
       })

       if (data.password !== data.confirmationPassword) {
         setShowMessage(true)
         setMsg("You should confirmate your password")
         return
       }
      
      setMsg(res.data.message)
      setShowMessage(true) 
    }

    const handleLogin = (e: any) => {
		// Should be redirect into Google Oauth
		e.preventDefault()
		window.location.replace("http://localhost:8080/auth/google")
    }

    return (
        <>
            <CardContainer>
                <Card>
                    <CardTitle>Register</CardTitle>
		        {showMessage && 
		        <PopupWrapper>
			      <PopupMsg $success>{ msg }</PopupMsg>
		        </PopupWrapper>
		      }
                    <label htmlFor="" className="form__label">Email</label>
                    <input type="text" className="form__input" placeholder="Enter your email" name="email"  onChange={handleChange} value={data.email} />
                    <label htmlFor="" className="form__label">Password</label>
                    <input type="password" className="form__input" placeholder="Minimum 8 characters" name="password" onChange={handleChange} value={data.password} />
                    <label htmlFor="" className="form__label">Password Confirmation</label>
                    <input type="password" className="form__input" placeholder="Should be same as above" name="confirmationPassword" onChange={handleChange} value={data.confirmationPassword} />
                    <Button onClick={handleBtn}>Register</Button>
		                <p className="text__center">Atau</p>
		                <Button onClick={handleLogin}>Login dengan Google</Button>
                </Card>
            </CardContainer>
        </>
    )
}

export default Register
