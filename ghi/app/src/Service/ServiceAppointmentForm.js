import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AddServiceAppointment() {

    const [vin, setVin] = useState('');
    const [autoOwner, setAutoOwner] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [serviceReason, setServiceReason] = useState('');
    const [technicians, setTechnicians] = useState([]);
    const navigate = useNavigate();


    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleAutoOwnerChange = (event) => {
        const value = event.target.value;
        setAutoOwner(value);
    }

    const handleAppointmentDateChange = (event) => {
        const value = event.target.value;
        setAppointmentDate(value);
    }

    const handleAppointmentTimeChange = (event) => {
        const value = event.target.value;
        setAppointmentTime(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleServiceReasonChange = (event) => {
        const value = event.target.value;
        setServiceReason(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.vin = vin;
        data.auto_owner = autoOwner;
        data.appointment_date = appointmentDate;
        data.appointment_time = appointmentTime;
        data.technician = technician;
        data.service_reason = serviceReason;

        const appointmentUrl = "http://localhost:8080/api/services/all/"

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
            const appointment = await response.json();
            const date = new Date(appointment.appointment_date)
            toast(`🗓️ You've made a new appointment for ${appointment.auto_owner} on ${date.toDateString()} at ${appointment.appointment_time}`)


            setVin('');
            setAutoOwner('');
            setAppointmentDate('');
            setAppointmentTime('');
            setTechnician('');
            setServiceReason('');
            navigate("/service/appointments/")

        }

    }

    const fetchData = async () => {
        const technicianUrl = "http://localhost:8080/api/services/tech/list/"

        const response = await fetch(technicianUrl);

        if (response.ok) {
            const data = await response.json()
            setTechnicians(data.technicians)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="shadow p-4 mt-4 rounded-3">
                        <div className="d-flex mb-3 align-items-center justify-content-center">
                            <h1 className="text-center">Make a Service Appointment</h1>
                            <img src="https://img.icons8.com/stickers/50/null/tear-off-calendar.png" className="ms-2 img-fluid" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input onChange={handleVinChange} value={vin} placeholder="VIN" required maxLength="17" type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleAutoOwnerChange} value={autoOwner} placeholder="First Last" required type="text" name="autoOwner" id="autoOwner" className="form-control" />
                                <label htmlFor="autoOwner">Auto Owner</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleAppointmentDateChange} value={appointmentDate} placeholder="Date" required type="date" name="appointmentDate" id="appointmentDate" className="form-control" />
                                <label htmlFor="appointmentDate">Appointment Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleAppointmentTimeChange} value={appointmentTime} placeholder="Time" required type="time" name="appointmentTime" id="appointmentTime" className="form-control" />
                                <label htmlFor="appointmentTime">Appointment Time</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="serviceReason">Reason for Service</label>
                                <textarea onChange={handleServiceReasonChange} value={serviceReason} name="serviceReason" id="serviceReason" className="form-control" rows="5"></textarea>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleTechnicianChange} value={technician} required name="technician" id="technician" className="form-select">
                                    <option value="">Choose a Technician</option>
                                    {technicians.map(technician => {
                                        return (
                                            <option key={technician.id} value={technician.employee_number}>
                                                {technician.name} - {technician.employee_number}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="d-grid col-md-6 mx-auto">
                                <button className="btn btn-warning" style={{ color: "white" }}>Make Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddServiceAppointment;
