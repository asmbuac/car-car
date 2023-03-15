import React from 'react';
import useFetch from '../useFetch';

export default function VehicleModelList() {
    const vehicleModels = useFetch("http://localhost:8100/api/models/", "models");

    return (
        <div className="container mt-5 pt-1">
            <div className="mt-5">
                <h1 className="text-center mb-3">Vehicle Models</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Model</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {vehicleModels && vehicleModels.map((model) => {
                            return (
                                <tr key={model.href}>
                                    <td>{model.manufacturer.name}</td>
                                    <td>{model.name}</td>
                                    <td>
                                        <img src={model.picture_url} style={{ width: "150px" }} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
