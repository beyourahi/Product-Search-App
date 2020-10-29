const ProductRow = ({ product }) => (
    <tr className="border-b border-gray-700">
        <td className="p-1">
            {product.stocked ? (
                product.name
            ) : (
                <span className="text-red-600">{product.name}</span>
            )}
        </td>
        <td className="p-1 text-right">{product.price}</td>
    </tr>
);

export default ProductRow;
