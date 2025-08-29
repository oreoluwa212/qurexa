import { HiOutlineShoppingCart, HiOutlineLocationMarker } from 'react-icons/hi';
import ServiceTabs from '../common/UI/ServiceTabs';

const ServiceTypeTabs = ({ activeTab, setActiveTab }) => {
    const groceryTabs = [
        {
            id: 'pickup',
            label: 'Grocery Pickup & Delivery Service',
            icon: HiOutlineShoppingCart
        },
        {
            id: 'delivery',
            label: 'Full Delivery Service',
            icon: HiOutlineLocationMarker
        }
    ];

    return (
        <ServiceTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={groceryTabs}
            gradientColors="#4873ED, #4873EDB2"
            description="We go shopping in your preferred store and deliver to your door"
        />
    );
};

export default ServiceTypeTabs;