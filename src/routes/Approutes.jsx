import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/layout/DashboardLayout";
import Settings from "../pages/Settings";
import Budgets from "../pages/Budgets";
import Reports from "../pages/Reports"
import Expenses from "../pages/Expenses"
import Search from "../pages/Search";

const Approutes  = () =>{
    return(
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/search" element={<Search />} />
            </Route> 
        </Routes>
    );
}

export default Approutes;