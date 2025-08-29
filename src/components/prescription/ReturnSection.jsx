import { HiOutlineCalendar } from 'react-icons/hi';

const ReturnSection = ({ returnSchedule, errors, onChange }) => {
    return (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HiOutlineCalendar className="w-6 h-6 mr-3 text-pink-600" />
                Return Schedule
            </h3>

            {/* Controlled Drug Checkbox for Returns */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={returnSchedule.hasControlledDrug || false}
                        onChange={(e) => onChange('returnSchedule', 'hasControlledDrug', e.target.checked)}
                        className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <div>
                        <span className="font-semibold text-gray-900">Controlled Drug (CD) Present</span>
                        <p className="text-sm text-gray-600">Check this box if any of the medications being returned are controlled drugs</p>
                    </div>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Collection Date *
                    </label>
                    <input
                        type="date"
                        value={returnSchedule.date}
                        onChange={(e) => onChange('returnSchedule', 'date', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['returnSchedule.date'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors['returnSchedule.date'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['returnSchedule.date']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time Slot
                    </label>
                    <select
                        value={returnSchedule.time}
                        onChange={(e) => onChange('returnSchedule', 'time', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medications to Return
                    </label>
                    <textarea
                        placeholder="List the medications you want to return and their quantities"
                        value={returnSchedule.medications}
                        onChange={(e) => onChange('returnSchedule', 'medications', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReturnSection;