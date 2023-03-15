import React, { useState } from "react";
import useFetch from '../useFetch';
import FormButton from "../FormButton";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddAutoForm() {
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [msrp, setMsrp] = useState('');
    const [mpg, setMpg] = useState('');
    const [modelId, setModelId] = useState('');
    const models = useFetch("http://localhost:8100/api/models/", "models");
    const navigate = useNavigate();

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleMsrpChange = (event) => {
        const value = event.target.value;
        setMsrp(value);
    }

    const handleMpgChange = (event) => {
        const value = event.target.value;
        setMpg(value);
    }

    const handleModelIdChange = (event) => {
        const value = event.target.value;
        setModelId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            color,
            year,
            vin,
            msrp,
            mpg,
            model_id: modelId,
        }

        const autoUrl = "http://localhost:8100/api/automobiles/";

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        try {
            const response = await fetch(autoUrl, fetchConfig);
            if (response.ok) {
                const newAutomobile = await response.json();
                setColor('');
                setYear('');
                setVin('');
                setMsrp('');
                setMpg('');
                setModelId('');
                navigate('/inventory/automobiles');
                toast(`Successfully added a ${newAutomobile.color} ${newAutomobile.year} ${newAutomobile.model.manufacturer.name} ${newAutomobile.model.name} to the inventory!`);
            } else {
                throw new Error("Response not ok. Make sure you are not giving an existing VIN!");
            }
        } catch (e) {
            toast.error(`${e}`);
        }
    }

    return (
        <div className="container mt-5 pt-4">
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="shadow p-4 mt-4 rounded-3">
                        <h1 className="text-center mb-3">Add an Automobile</h1>
                        <form onSubmit={handleSubmit} id="add-auto-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" maxLength="50" className="form-control" />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleYearChange} value={year} placeholder="Year" required type="number" name="year" min="1" max="32767" id="year" className="form-control" />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" maxLength="17" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleMsrpChange} value={msrp} placeholder="MSRP" required type="number" min="1" max="2147483647" name="msrp" id="msrp" className="form-control" />
                                <label htmlFor="msrp">MSRP</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleMpgChange} value={mpg} placeholder="MPG" required type="text" name="mpg" id="mpg" maxLength="50" className="form-control" />
                                <label htmlFor="mpg">MPG</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select onChange={handleModelIdChange} value={modelId} required name="model_id" id="model_id" className="form-select">
                                    <option value="">Choose a make and model</option>
                                    {models.map(model => {
                                        return (
                                            <option key={model.id} value={model.id}>
                                                {model.manufacturer.name} {model.name}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="model_id">Make and Model</label>
                            </div>
                            <FormButton buttonText={"Add Automobile"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
