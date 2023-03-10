import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ManufacturerForm() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
        };

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                const newManufacturer = await response.json();
                setName("");
                navigate("/inventory/manufacturers");
                toast(`Successfully added ${newManufacturer.name} as a manufacturer!`);
            }
        } catch (e) {
            toast.error(e);
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded-3">
                    <h1 className="text-center mb-3">Add a Manufacturer</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" maxlength="100" name="name" id="name"
                                className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="d-grid col-md-6 mx-auto">
                            <button className="btn btn-outline-primary">Add Manufacturer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
