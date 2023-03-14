import React from 'react';
import useFetch from '../useFetch';

export default function ManufacturerList() {
    const manufacturers = useFetch("http://localhost:8100/api/manufacturers/", "manufacturers");

    return (
        <div className="container mt-5 pt-1">
            <div className="mt-5">
                <h1 className="text-center mb-3">Manufacturers</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {manufacturers && manufacturers.map((manufacturer) => {
                            return (
                                <tr key={manufacturer.id}>
                                    <td>{manufacturer.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
