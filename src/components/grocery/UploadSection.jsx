import { HiOutlineCamera, HiOutlineUpload } from 'react-icons/hi';

const UploadSection = ({ formData, handleFileUpload, removeFile }) => {
    return (
        <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center px-4 sm:px-0">
                <HiOutlineCamera className="w-5 h-5 sm:w-6 sm:h-6 mr-3" style={{ color: '#4873ED' }} />
                Upload photo of your shopping list
            </h3>

            <div className="px-4 sm:px-0">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center transition-colors"
                    style={{ '--hover-border': '#4873ED' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#4873ED'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#D1D5DB'}>
                    <input
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="shopping-upload"
                    />
                    <label htmlFor="shopping-upload" className="cursor-pointer">
                        <HiOutlineUpload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                            Click to upload shopping list
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Supports: JPG, PNG, PDF (Max 10MB each)
                        </p>
                    </label>
                </div>

                {/* Uploaded Files Display */}
                {formData.shoppingFiles.length > 0 && (
                    <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files:</h4>
                        <div className="grid grid-cols-1 gap-4">
                            {formData.shoppingFiles.map((file, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                                        <HiOutlineUpload className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="text-red-500 hover:text-red-700 transition-colors text-sm self-end sm:self-center"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadSection;