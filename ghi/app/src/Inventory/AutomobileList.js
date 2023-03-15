import React from "react";
import useFetch from '../useFetch';

export default function AutomobileList() {
    const autos = useFetch("http://localhost:8100/api/automobiles/", "autos");

    return (
        <div className="container mt-5 pt-1">
            <div className="mt-5">
                <h1 className="text-center mb-3">Automobiles</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>VIN</th>
                            <th>MSRP</th>
                            <th>MPG (city/highway)</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {autos.map(auto => {
                            return (
                                <tr key={auto.href}>
                                    <td className="w-25 text-center">
                                        <img src={auto.model.picture_url} className="w-75" />
                                    </td>
                                    <td>{auto.year}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.model.manufacturer.name}</td>
                                    <td>{auto.model.name}</td>
                                    <td>{auto.vin}</td>
                                    <td>{auto.msrp}</td>
                                    <td>{auto.mpg}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
