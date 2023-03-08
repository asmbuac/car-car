import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import VehicleModelList from './Inventory/VehicleModelList';
import VehicleModelForm from './Inventory/VehicleModelForm';
import SalesPersonForm from './Sales/SalesPersonForm';
import CustomerForm from './Sales/CustomerForm';
import SaleList from './Sales/SaleList';
import SalesPersonHistory from './Sales/SalesPersonHistory';
import SaleForm from './Sales/SaleForm';















import ListServiceHistory from './ServiceHistory';
import ListServiceAppointments from './ServiceAppointmentList';
import AddServiceAppointment from './ServiceAppointmentForm';
import AddTechnicianForm from './TechnicianForm';
import AddAutoForm from './AutomobileForm';
import AutomobileList from './AutomobileList';


function App(props) {
  if (
    props.automobiles === undefined ||
    props.manufacturers === undefined ||
    props.vehicleModels === undefined ||
    props.sales === undefined ||
    props.customers === undefined ||
    props.salesPeople === undefined ||
    props.appointments === undefined
  ) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory">
            <Route path="manufacturers">
              <Route path="" element={<ManufacturerList manufacturers={props.manufacturers} />} />
              <Route path="new" element={<ManufacturerForm />} />
            </Route>
            <Route path="models">
              <Route path="" element={<VehicleModelList vehicleModels={props.vehicleModels} />} />
              <Route path="new" element={<VehicleModelForm manufacturers={props.manufacturers} />} />
            </Route>
            <Route path="automobile">
              <Route path="" element={<AutomobileList automobiles={props.automobiles} />} />
              <Route path="new" element={<AddAutoForm models={props.vehicleModels} />} />
            </Route>
          </Route>
          <Route path="sales">
            <Route path="" element={<SaleList sales={props.sales} />} />
            <Route path="new" element={<SaleForm autos={props.automobiles} salesPeople={props.salesPeople} customers={props.customers} sales={props.sales} />} />
            <Route path="customers/new" element={<CustomerForm />} />
            <Route path="salesperson">
              <Route path="new" element={<SalesPersonForm />} />
              <Route path="history" element={<SalesPersonHistory sales={props.sales} salesPeople={props.salesPeople} autos={props.automobiles} />} />
            </Route>
          </Route>
          <Route path="service">
            <Route path="technicians/new" element={<AddTechnicianForm />} />
            <Route path="appointments">
              <Route path="" element={<ListServiceAppointments />} />
              <Route path="new" element={<AddServiceAppointment />} />
            </Route>
            <Route path="history" element={<ListServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
