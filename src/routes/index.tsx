import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "../pages/admin";
import Dashboard from "../pages/dashboard/Dashboard";
// import Products from "../pages/products";
import AddProducts from "../pages/products/AddUpdateProducts";
import AllProducts from "../pages/products/Products";
import AllBrands from "../pages/products/brands";
import Category from "../pages/products/category";
import AllTaxes from "../pages/products/taxes";
import AllUnits from "../pages/products/units";
import AllVariations from "../pages/products/variations";
import AddStocks from "../pages/stocks/addStocks";
import AllLocations from "../pages/stocks/allLocations";
import RefundsConfigurations from "../pages/refunds/refundsConfiguration";
import RefundRequest from "../pages/refunds/refundRequest";
import ApprovedRefunds from "../pages/refunds/approvedRefunds";
import RejectedRefunds from "../pages/refunds/rejectedRefunds";
import RewardConfigurations from "../pages/rewards & wallets/RewardConfigurations";
import SetRewardPoints from "../pages/rewards & wallets/setRewardPoints";
import WalletConfigurations from "../pages/rewards & wallets/WalletConfigurations";
import AddCategory from "../pages/products/AddUpdateCategory";
import Dyn from "../pages/products/Dyn";

// Your existing authRoutes array

const Products = lazy(() => import("../pages/products"));
const POS = lazy(() => import("../pages/POS"));
const Orders = lazy(() => import("../pages/orders"));
const Stocks = lazy(() => import("../pages/stocks"));
const Refunds = lazy(() => import("../pages/refunds"));
const RewardsandWallet = lazy(() => import("../pages/rewards & wallets"));
const Customers = lazy(() => import("../pages/users/customers"));
const EmployeeStaffs = lazy(() => import("../pages/users/employeeStaffs"));
const Staffs = lazy(() => import("../pages/users/employeeStaffs/staffs"));
const AddStaff = lazy(() =>
  import("../pages/users/employeeStaffs/addNewStaff")
);
const DeliveryMan = lazy(() => import("../pages/users/deliveryMen"));
const AllDeliveryMan = lazy(() =>
  import("../pages/users/deliveryMen/allDeliveryMen")
);
const AddDeliveryMan = lazy(() =>
  import("../pages/users/deliveryMen/addDeliveryMen")
);
const CancelRequest = lazy(() =>
  import("../pages/users/deliveryMen/cancelRequests")
);
const DeliverymanConfigurations = lazy(() =>
  import("../pages/users/deliveryMen/configurations")
);
const DeliverymanPayoutHistory = lazy(() =>
  import("../pages/users/deliveryMen/payoutHistories")
);
const DeliverymanPayroll = lazy(() =>
  import("../pages/users/deliveryMen/deliverymanPayroll")
);
const DeliverymanPayrollList = lazy(() =>
  import("../pages/users/deliveryMen/deliverymanPayrollList")
);

const productRoute = "products";
export const RoutePaths = {
  admin: "admin",
  products: {
    baseRoute: productRoute,
    category: `category`,
    variations: "variations",
    brands: "brands",
    units: "units",
    tax: "taxes",
    addProduct: `/admin/${productRoute}/add-product`,
    addCategory: `/admin/${productRoute}/add-category`,
    updateProduct: `/admin/${productRoute}/update-product`,
    updateCategory: `/admin/${productRoute}/update-category`,
    dyn: `/admin/${productRoute}/:id`,
  },
  pos: "pos",
  orders: "orders",
  stocks: { baseRoute: "stocks", addStocks: "add", locations: "locations" },
  refunds: {
    baseRoute: "refunds",
    requests: "requests",
    refunded: "refunded",
    rejected: "rejected",
  },
  rewards: {
    baseRoute: "rewards",
    set_Points: "set-points",
    wallet_Configurations: "wallet-configurations",
  },
  users: {
    customers: "customers",
    employeeStaffs: {
      baseRoute: "staffs",
      addNewStaff: "/admin/staffs/add-staff",
    },
    deliveryMen: {
      baseRoute: "delivery-man",
      addDeliveryMan: "add-delivery-man",
      cancelRequest: "cancel-request",
      payoutHistory: "payout-history",
      configurations: "configurations",
      deliveryManPayroll: "generate-payroll",
      deliveryManPayrollList: "payroll-list",
    },
  },
};

export const authRoutes = [
  {
    path: "/",
    element: <AdminRoutes />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: RoutePaths.admin,
        element: <AdminRoutes />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: RoutePaths.products.baseRoute,
            element: <Products />,
            children: [
              { index: true, element: <AllProducts /> },
              { path: RoutePaths.products.category, element: <Category /> },
              {
                path: RoutePaths.products.variations,
                element: <AllVariations />,
              },
              { path: RoutePaths.products.brands, element: <AllBrands /> },
              { path: RoutePaths.products.units, element: <AllUnits /> },
              { path: RoutePaths.products.tax, element: <AllTaxes /> },

              {
                path: RoutePaths.products.dyn,
                element: <Dyn />,
              },
            ],
          },
          {
            path: RoutePaths.pos,
            element: <POS />,
          },
          {
            path: RoutePaths.orders,
            element: <Orders />,
          },
          {
            path: RoutePaths.stocks.baseRoute,
            element: <Stocks />,
            children: [
              {
                path: RoutePaths.stocks.addStocks,
                element: <AddStocks />,
              },
              {
                path: RoutePaths.stocks.locations,
                element: <AllLocations />,
              },
            ],
          },
          {
            path: RoutePaths.refunds.baseRoute,
            element: <Refunds />,
            children: [
              { index: true, element: <RefundsConfigurations /> },
              { path: RoutePaths.refunds.requests, element: <RefundRequest /> },
              {
                path: RoutePaths.refunds.refunded,
                element: <ApprovedRefunds />,
              },
              {
                path: RoutePaths.refunds.rejected,
                element: <RejectedRefunds />,
              },
            ],
          },
          {
            path: RoutePaths.rewards.baseRoute,
            element: <RewardsandWallet />,
            children: [
              { index: true, element: <RewardConfigurations /> },
              {
                path: RoutePaths.rewards.set_Points,
                element: <SetRewardPoints />,
              },
              {
                path: RoutePaths.rewards.wallet_Configurations,
                element: <WalletConfigurations />,
              },
            ],
          },
          {
            path: RoutePaths.users.customers,
            element: <Customers />,
          },
          {
            path: RoutePaths.users.employeeStaffs.baseRoute,
            element: <EmployeeStaffs />,
            children: [
              { index: true, element: <Staffs /> },
              {
                path: RoutePaths.users.employeeStaffs.addNewStaff,
                element: <AddStaff />,
              },
            ],
          },
          {
            path: RoutePaths.users.deliveryMen.baseRoute,
            element: <DeliveryMan />,
            children: [
              { index: true, element: <AllDeliveryMan /> },
              {
                path: RoutePaths.users.deliveryMen.addDeliveryMan,
                element: <AddDeliveryMan />,
              },
              {
                path: RoutePaths.users.deliveryMen.cancelRequest,
                element: <CancelRequest />,
              },
              {
                path: RoutePaths.users.deliveryMen.configurations,
                element: <DeliverymanConfigurations />,
              },
              {
                path: RoutePaths.users.deliveryMen.payoutHistory,
                element: <DeliverymanPayoutHistory />,
              },
              {
                path: RoutePaths.users.deliveryMen.deliveryManPayroll,
                element: <DeliverymanPayroll />,
              },
              {
                path: RoutePaths.users.deliveryMen.deliveryManPayrollList,
                element: <DeliverymanPayrollList />,
              },
            ],
          },

          // Add more routes as needed
        ],
      },
    ],
  },
  // Add more routes as needed
];

// Function to convert authRoutes array into nested Routes
const generateRoutes = (routes) => {
  return routes.map((route, index) => (
    <Route
      index={route?.index}
      key={index}
      path={route.path}
      element={
        <Suspense fallback="Loading...........">{route.element}</Suspense>
      }
    >
      {route.children && generateRoutes(route.children)}
    </Route>
  ));
};

// Component that renders the nested Routes
const AppRoutes = () => {
  return <Routes>{generateRoutes(authRoutes)}</Routes>;
};

export default AppRoutes;
