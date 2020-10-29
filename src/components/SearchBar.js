const SearchBar = ({
    filterText,
    inStockOnly,
    handletextChange,
    handleCheckChange,
}) => (
    <form>
        <input
            type="text"
            name="search"
            placeholder="Search..."
            value={filterText}
            onChange={handletextChange}
            className="shadow appearance-none border-none rounded w-full py-2 px-3 mb-4 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p>
            <input
                type="checkbox"
                name="checkbox"
                checked={inStockOnly}
                onChange={handleCheckChange}
                className="mr-2 leading-tight"
            />
            <span className="text-sm">Only show products in stock</span>
        </p>
    </form>
);

export default SearchBar;
