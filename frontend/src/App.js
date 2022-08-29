import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from './Components/Pages/Homepage';
import AdminNavigationPage from './Components/Pages/AdminNavigationPage';
import EmployeeNavigationPage from './Components/Pages/EmployeeNavigationPage';
import AdminAdmissionPage from './Components/Pages/AdminAdmissionPage';
import AdminLabPage from './Components/Pages/AdminLabPage';
import AdminOpdPage from './Components/Pages/AdminOpdPage';
import EmployeeAdmissionPage from './Components/Pages/EmployeeAdmissionPage';
import EmployeeDressingPage from './Components/Pages/EmployeeDressingPage';
import EmployeeLabPage from './Components/Pages/EmployeeLabPage';
import EmployeeOpdRegisterPage from './Components/Pages/EmployeeOpdRegisterPage';
import EmployeePage from './Components/Pages/EmployeePage';
import AdminPage from './Components/Pages/AdminPage'
import AdminDressingPage from './Components/Pages/AdminDressingPage'
// import AdminSidebar from './Components/SideBar/AdminSidebar';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Admin' element={<AdminNavigationPage />}>
        {/* <Route path='/Admin' element={<AdminSidebar />}> */}
          <Route path='Admission' element={<AdminAdmissionPage />} />
          <Route path='Dressing' element={<AdminDressingPage />} />
          <Route path='Lab' element={<AdminLabPage />} />
          <Route path='OPD' element={<AdminOpdPage />} />
          <Route path='Details' element={<AdminPage />} />
        </Route>
        <Route path='/Employee' element={<EmployeeNavigationPage />}>
          <Route path='Admission' element={<EmployeeAdmissionPage />} />
          <Route path='Dressing' element={<EmployeeDressingPage />} />
          <Route path='Lab' element={<EmployeeLabPage />} />
          <Route path='OPD' element={<EmployeeOpdRegisterPage />} />
          <Route path='Details' element={<EmployeePage />} />
        </Route>
        <Route path='*' element={<h1>Error 404, No page</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
