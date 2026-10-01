import React from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { dummyProducts } from "../../../assets/assets";

const Products = () => {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/admin/products/add");
    };

    const handleEdit = (product) => {
        console.log("Edit product:", product);
    };

    const handleDelete = (product) => {
        console.log("Delete product:", product);
    };

    return (
        <section className="w-full">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--color-text-dark)]">
                        Products
                    </h1>

                    <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                        Manage your grocery products.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleAddProduct}
                    className="group flex h-[38px] items-center gap-2 rounded-[8px] bg-[var(--color-primary)] px-4 text-[13px] font-semibold text-white shadow-[0_5px_14px_rgba(0,69,33,0.12)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                >
                    <Plus
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-90"
                    />

                    <span>Add Product</span>
                </button>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-[#e3e5e1] bg-white shadow-[0_5px_20px_rgba(23,37,30,0.03)]">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse">
                        <thead>
                            <tr className="border-b border-[#e5e7e3] bg-[#fafbf9]">
                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Product
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Category
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Price
                                </th>

                                <th className="px-5 py-3 text-left text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Stock
                                </th>

                                <th className="px-5 py-3 text-right text-[12px] font-semibold text-[var(--color-text-secondary)]">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {dummyProducts.map((product, index) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-[#eef0ed] last:border-b-0 transition-colors duration-200 hover:bg-[#fbfcfa]"
                                    style={{
                                        animation: "adminRowIn 0.4s ease-out both",
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <td className="px-5 py-3.5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-[46px] w-[46px] shrink-0 overflow-hidden rounded-[8px] border border-[#e5e7e3] bg-[#fafbf9]">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                    {product.name}
                                                </p>

                                                <p className="mt-0.5 text-[11px] text-[var(--color-text-secondary)]">
                                                    {product.unit}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-3.5">
                                        <span className="text-[13px] text-[var(--color-text-dark)]">
                                            {product.category}
                                        </span>
                                    </td>

                                    <td className="px-5 py-3.5">
                                        <div>
                                            <span className="text-[13px] font-semibold text-[var(--color-text-dark)]">
                                                ₹{Number(product.price).toFixed(2)}
                                            </span>

                                            {product.originalPrice &&
                                                Number(product.originalPrice) >
                                                    Number(product.price) && (
                                                    <span className="ml-2 text-[11px] text-[var(--color-text-muted)] line-through">
                                                        ₹
                                                        {Number(
                                                            product.originalPrice
                                                        ).toFixed(2)}
                                                    </span>
                                                )}
                                        </div>
                                    </td>

                                    <td className="px-5 py-3.5">
                                        <span
                                            className={`text-[13px] font-medium ${
                                                Number(product.stock) > 0
                                                    ? "text-green-700"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {product.stock}
                                        </span>
                                    </td>

                                    <td className="px-5 py-3.5">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleEdit(product)
                                                }
                                                title="Edit Product"
                                                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                                            >
                                                <Edit
                                                    size={15}
                                                    strokeWidth={1.8}
                                                />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(product)
                                                }
                                                title="Delete Product"
                                                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                                            >
                                                <Trash2
                                                    size={15}
                                                    strokeWidth={1.8}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Products;