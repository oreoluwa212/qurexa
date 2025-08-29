import { HiOutlineUpload } from 'react-icons/hi';

const FileUploadSection = ({ files, onFileUpload, onRemoveFile }) => {
    return (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HiOutlineUpload className="w-6 h-6 mr-3 text-pink-600" />
                Upload Prescription Images
            </h3>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors">
                <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={(e) => onFileUpload(e.target.files)}
                    className="hidden"
                    id="prescription-upload"
                />
                <label htmlFor="prescription-upload" className="cursor-pointer">
                    <HiOutlineUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        Click to upload prescription images
                    </p>
                    <p className="text-sm text-gray-500">
                        Supports: JPG, PNG, PDF (Max 10MB each)
                    </p>
                </label>
            </div>

            {/* Uploaded Files Display */}
            {files.length > 0 && (
                <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <HiOutlineUpload className="w-5 h-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                        <p className="text-xs text-gray-500">
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onRemoveFile(index)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploadSection;