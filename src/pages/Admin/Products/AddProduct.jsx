import React, { useState } from "react";
import {
    ArrowLeft,
    ImagePlus,
    Leaf,
    Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        originalPrice: "",
        unit: "",
        stock: "",
        description: "",
        isOrganic: false,
        image: null,
    });

    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                      ? files?.[0] || null
                      : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Product:", formData);
    };

    return (
        <section className="w-full">
            <div className="mb-5 flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate("/admin/products")}
                    className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] border border-[#e3e5e1] bg-white text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                >
                    <ArrowLeft size={16} strokeWidth={1.8} />
                </button>

                <div>
                    <h1 className="text-[22px] font-bold tracking-[-0.4px] text-[var(--color-text-dark)]">
                        New Product
                    </h1>

                    <p className="mt-1 text-[13px] text-[var(--color-text-secondary)]">
                        Add a new product to your grocery store.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="rounded-[14px] border border-[#e3e5e1] bg-white p-5 shadow-[0_5px_20px_rgba(23,37,30,0.03)]">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Product Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label
                                htmlFor="category"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Category
                            </label>

                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            >
                                <option value="">Select category</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Groceries">Groceries</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label
                                htmlFor="price"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Price
                            </label>

                            <input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Original Price */}
                        <div>
                            <label
                                htmlFor="originalPrice"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Original Price
                            </label>

                            <input
                                id="originalPrice"
                                name="originalPrice"
                                type="number"
                                min="0"
                                value={formData.originalPrice}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Unit */}
                        <div>
                            <label
                                htmlFor="unit"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Unit
                            </label>

                            <input
                                id="unit"
                                name="unit"
                                type="text"
                                value={formData.unit}
                                onChange={handleChange}
                                placeholder="e.g. 1 kg, 500 g, 1 L"
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label
                                htmlFor="stock"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Stock
                            </label>

                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                min="0"
                                value={formData.stock}
                                onChange={handleChange}
                                placeholder="Enter stock quantity"
                                className="h-[40px] w-full rounded-[8px] border border-[#dfe3e8] bg-white px-3 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Image */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="image"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Product Image
                            </label>

                            <label
                                htmlFor="image"
                                className="flex min-h-[110px] cursor-pointer flex-col items-center justify-center rounded-[8px] border border-dashed border-[#cfd5cf] bg-[#fafbf9] px-4 py-5 text-center transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
                            >
                                <ImagePlus
                                    size={22}
                                    strokeWidth={1.6}
                                    className="mb-2 text-[var(--color-primary)]"
                                />

                                <span className="text-[13px] font-medium text-[var(--color-text-dark)]">
                                    {formData.image
                                        ? formData.image.name
                                        : "Choose product image"}
                                </span>

                                <span className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                                    PNG, JPG or WEBP
                                </span>
                            </label>

                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="description"
                                className="mb-1.5 block text-[13px] font-medium text-[var(--color-text-dark)]"
                            >
                                Description
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter product description"
                                className="w-full resize-none rounded-[8px] border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]"
                            />
                        </div>

                        {/* Organic */}
                        <div className="md:col-span-2">
                            <label className="inline-flex cursor-pointer items-center gap-2.5">
                                <input
                                    type="checkbox"
                                    name="isOrganic"
                                    checked={formData.isOrganic}
                                    onChange={handleChange}
                                    className="h-4 w-4 accent-[var(--color-primary)]"
                                />

                                <span className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-dark)]">
                                    <Leaf
                                        size={15}
                                        strokeWidth={1.8}
                                        className="text-[var(--color-primary)]"
                                    />
                                    Organic Product
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end border-t border-[#e5e7e3] pt-5">
                        <button
                            type="submit"
                            className="group flex h-[40px] items-center gap-2 rounded-[8px] bg-[var(--color-primary)] px-5 text-[13px] font-semibold text-white shadow-[0_5px_14px_rgba(0,69,33,0.12)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[var(--color-primary-dark)]"
                        >
                            <Save
                                size={16}
                                strokeWidth={1.8}
                                className="transition-transform duration-300 group-hover:scale-105"
                            />

                            <span>Save Product</span>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;