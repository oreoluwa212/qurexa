const SubmitSection = ({ handleSubmit, isSubmitting }) => {
    return (
        <div className="px-4 sm:px-0">
            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#4873ED' }}
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing...
                    </div>
                ) : (
                    'Order Groceries'
                )}
            </button>
        </div>
    );
};

export default SubmitSection;