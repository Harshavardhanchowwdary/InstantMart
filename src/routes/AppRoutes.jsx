import {
    lazy,
    Suspense,
} from "react";

import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

import AppLayout from "../components/Layouts/AppLayout";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import PageLoader from "../components/ui/PageLoader";

import AdminLayout from "../pages/Admin/AdminLayout";
import Products from "../pages/Admin/Products/Products";


// =========================================================
// CUSTOMER LAZY LOADED PAGES
// =========================================================

const Home = lazy(
    () => import("../pages/Home/Home")
);

const Deals = lazy(
    () => import("../pages/Deals/Deals")
);

const Orders = lazy(
    () => import("../pages/orders/Orders")
);

const Cart = lazy(
    () => import("../pages/cart/Cart")
);

const Addresses = lazy(
    () => import("../pages/Address/Addresses")
);

const Product = lazy(
    () => import("../pages/products/Products")
)

const CategoryProducts = lazy(
    () => import("../pages/products/Category/CategoryProducts")
);

const MyAccount = lazy(
    () => import("../pages/Account/Account")
)


const HelpCenter = lazy(
    () => import("../pages/HelpCenter/HelpCenter")
);

const Blogs = lazy(
    () => import("../pages/Blog/Blogs")
);

const BlogDetails = lazy(
    () => import("../pages/Blog/BlogDetails")
);

const ProductDetails = lazy(
    () => import("../pages/products/ProductDetails")
);
// =========================================================
// ADMIN LAZY LOADED PAGES
// =========================================================

const AdminDashboard = lazy(
    () => import("../pages/Admin/Dashboard/Dashboard")
);

const AdminProducts = lazy(
    () => import("../pages/Admin/Products/Products")
);

const AddProduct = lazy(
    () => import("../pages/Admin/Products/AddProduct")
);

const AdminOrders = lazy(
    () => import("../pages/Admin/Orders/Orders")
);

const DeliveryPartners = lazy(
    () => import("../pages/Admin/DeliveryPartners/DeliveryPartners")
);




// =========================================================
// APP ROUTES
// =========================================================

const AppRoutes = () => {
    return (
        <Routes>

            {/* =========================================
                PUBLIC ROUTES
            ========================================== */}

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />

            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />


            {/* =========================================
                PROTECTED APPLICATION ROUTES
            ========================================== */}

            <Route element={<ProtectedRoute />}>

                {/* =====================================
                    CUSTOMER APPLICATION
                ====================================== */}

                <Route element={<AppLayout />}>

                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Home />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/products"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Product />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/products/:id"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <ProductDetails />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/products/category/:category"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <CategoryProducts />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/deals"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Deals />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/orders"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Orders />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/addresses"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Addresses />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Cart />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/my-account"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <MyAccount />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/help-center"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <HelpCenter />
                            </Suspense>
                        }
                    />

                    {/* ================================
        BLOGS
    ================================= */}

                    <Route
                        path="/blogs"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Blogs />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/blogs/:slug"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <BlogDetails />
                            </Suspense>
                        }
                    />

                </Route>

                {/* =====================================
                    ADMIN APPLICATION
                ====================================== */}

                <Route element={<AdminLayout />}>

                    <Route
                        path="/admin"
                        element={
                            <Suspense fallback={null}>
                                <AdminDashboard />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/admin/products"
                        element={
                            <Suspense fallback={null}>
                                <AdminProducts />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/admin/products/add"
                        element={
                            <Suspense fallback={null}>
                                <AddProduct />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/admin/orders"
                        element={
                            <Suspense fallback={null}>
                                <AdminOrders />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/admin/delivery-partners"
                        element={
                            <Suspense fallback={null}>
                                <DeliveryPartners />
                            </Suspense>
                        }
                    />

                </Route>

            </Route>


            {/* =========================================
                FALLBACK
            ========================================== */}

            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    );
};

export default AppRoutes;