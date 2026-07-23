import SettingsHeader from "../components/Settings/SettingsHeader";
import AppInfoCard from "../components/Settings/AppInfoCard";
import DataManagementCard from "../components/Settings/DataManagementCard";
import DangerZoneCard from "../components/Settings/DangerZoneCard";
const Settings = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SettingsHeader />
            <div className="mt-6 space-y-6">
                <AppInfoCard />
                <DataManagementCard />
                <DangerZoneCard />
            </div>
        </div>
    );
}

export default Settings;