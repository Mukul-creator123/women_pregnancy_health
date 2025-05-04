import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import reports from '../images/report.png'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Report = () => {
   
    const [hemoglobin, sethemoglobin] = useState('')
    const [age, setage] = useState('')
    const [numPregnancies, setnumPregnancies] = useState('')
    const [gestationWeeks, setgestationWeeks] = useState('')
    const [hdl, sethdl] = useState('')
    const [sysBP, setsysBP] = useState('')
    const [diaBP, setdiaBP] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!hemoglobin.trim()) {
            toast.error('Report is Required !')
            return false
        }
        if (!age.trim()) {
            toast.error('PinCode is Required !')
            return false
        }
        if (!numPregnancies.trim()) {
            toast.error('no of pregnancy  is Required !')
            return false
        }
        if (!gestationWeeks.trim()) {
            toast.error('gestation  is Required !')
            return false
        }
        if (!hdl.trim()) {
            toast.error('hdl is Required !')
            return false
        }
        if (!sysBP.trim()) {
            toast.error('Address is Required !')
            return false
        }
        if (!diaBP.trim()) {
            toast.error('Address is Required !')
            return false
        }
        try {
            const res = await axios.post('http://localhost:5000/api/patients',
                { hemoglobin,
                    age,
                    numPregnancies,
                    gestationWeeks,
                    hdl,
                    sysBP,
                    diaBP });

            if (res.status === 201) {
                toast.success('Incident Reported Successfully')
            }
        } catch (err) {
            toast.error('Error in Sending Report')
        }
    }
    return (
        <>
            <Navbar />
            <div className='marginStyle '>
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div class="featured-image mb-3 animateImg">
                                <img src={reports} class="img-fluid" />
                            </div>
                        </div>
                        <form method='post' enctype="multipart/form-data" class="col-md-6 right-box">
                            <div class="row align-items-center">
                                <div class="header-text mb-4">
                                    <h2>Women's Health Details</h2>
                                    <p>Please provide the following health details to help us understand your condition better.</p>
                                </div>
                                <div class="input-group d-flex  align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={diaBP} onChange={(e) => setdiaBP(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Diastolic Blood Pressure (DiaBP)" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={age} onChange={(e) => setage(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Age of Patient" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={hemoglobin} onChange={(e) => sethemoglobin(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Hemoglobin (Hb)" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={numPregnancies} onChange={(e) => setnumPregnancies(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Number of Pregnancies" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={gestationWeeks} onChange={(e) => setgestationWeeks(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Gestational Age (in weeks)" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={hdl} onChange={(e) => sethdl(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter HDL Cholesterol Level" required />
                                        </div>
                                    </div>
                                    <div class="input-group d-flex flex-row align-items-center mb-3">
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" value={sysBP} onChange={(e) => setsysBP(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter Systolic Blood Pressure (SYSBP)" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center my-3 ">
                                    <div class="form-outline flex-fill mb-0 " >
                                        <button className='btn text-white btn-lg btn-block' onClick={handleSubmit} style={{ width: '100%', backgroundColor: 'blueviolet' }} type="submit">Submit Incident</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}

export default Report