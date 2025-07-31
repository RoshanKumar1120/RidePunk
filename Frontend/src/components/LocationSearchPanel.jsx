
const LocationSearchPanel = (props) => {
    const {
        suggestions = [],
        loading = false,
        setPanelOpen,
        activeField,
        setPickup,
        setDestination,
        setSuggestions
    } = props;

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
       // setPanelOpen(false);
        setSuggestions([]);
    };

    return (
        <div>
            {loading && (
                <div className="text-gray-500 p-3">Loading suggestions...</div>
            )}
            {(!loading && suggestions && suggestions.length === 0) && (
                <div className="text-gray-400 p-3">No suggestions found.</div>
            )}
            {suggestions && suggestions.map((elem, idx) => (
                <div
                    key={idx}
                    onClick={() => handleSuggestionClick(elem)}
                    className='flex gap-4 border-2 border-black active:border-green-500 p-3 rounded-xl items-center my-2 justify-start cursor-pointer'
                >
                    <h2 className='bg-[#eee] h-9 w-12 flex items-center justify-center rounded-full'>
                        <i className="ri-map-pin-fill "></i>
                    </h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;