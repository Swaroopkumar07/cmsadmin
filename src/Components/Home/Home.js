import React, { useState, useEffect } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    return (
        <div className='modal'>
            <div className='loginPDiv'>
                <div className='Login_signup_component'>
                    <p className='Login_signup_heading'>Assiging students to Counseler</p>
                    <div>
                        <div className='password_section'>
                            <label className='password_label'>Faculty Mail</label>
                            <input type='Email' placeholder='Enter Your Email' className='password_input'  ></input>
                        </div>
                        <div className='password_section'>
                            <label className='password_label'>Student Email</label>
                            <input type='password' placeholder='Enter Student Email' className='password_input'  ></input>
                        </div>
                    </div>
                    <p className='warningTextStyle' ></p>
                    <div className='continue_and_email'>
                        <p className='Continue_button' >Assign</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
