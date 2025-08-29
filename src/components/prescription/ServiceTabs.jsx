import { HiOutlineLocationMarker, HiOutlineRefresh } from 'react-icons/hi';
import ServiceTabs from '../common/UI/ServiceTabs';

const PrescriptionServiceTabs = ({ activeTab, setActiveTab }) => {
    const prescriptionTabs = [
        {
            id: 'delivery',
            label: 'Prescription Delivery',
            icon: HiOutlineLocationMarker
        },
        {
            id: 'returns',
            label: 'Medication Returns',
            icon: HiOutlineRefresh
        }
    ];

    return (
        <ServiceTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={prescriptionTabs}
            gradientColors="rgb(236, 72, 153), rgb(219, 39, 119)" // pink-500 to pink-600
            showDescription={false}
        />
    );
};

export default PrescriptionServiceTabs;