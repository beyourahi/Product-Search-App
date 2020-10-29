import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../PRODUCTS";

const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="flex flex-col pt-10 items-center min-h-screen w-full bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-3">Products</h1>

            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                handletextChange={e => setFilterText(e.target.value)}
                handleCheckChange={e => setInStockOnly(e.target.checked)}
            />

            <ProductTable
                products={PRODUCTS}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
