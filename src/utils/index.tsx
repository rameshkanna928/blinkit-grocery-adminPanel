export const AppLogo =
  "https://grostore.themetags.com/public/uploads/media/yqqPV512Gk5DMpvCj2UllKrCl52bam3yD6QvfiPP.png";
export const AppNameLogo =
  "https://grostore.themetags.com/public/uploads/media/LOa3BqX3ydhVC0V1fwYEyvEpM5N9NaoA0E7u3EQs.png";

//for List
import { LuPieChart, LuDatabase } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { deleteIcon, editIcon } from "./icons";
import {
  FlexStart,
  InputLabel,
  NumberTag,
  SmallSpan,
  SpanTag,
  TableNumberTag,
  TableSpan,
} from "../assets/styles";
import TableStatusCard from "../components/elements/TableStatusCard";
import TableItems from "../components/elements/TableItems";
import { FiShoppingCart } from "react-icons/fi";
import { LuTable2 } from "react-icons/lu";
import { BsArrow90DegLeft } from "react-icons/bs";

import ToolDropdown from "../components/toolbar/ToolDropdown";
import ToogleButton from "../components/elements/buttons/ToogleButton";
import ViewDetails from "../components/elements/tooltip/viewDetails";
import { PiMedalLight } from "react-icons/pi";
import { ColorDarkGray, ColorOrange2 } from "../assets/styles/color";
import CustomTextInput from "../components/elements/inputs/CustomtextInput";
import { LuUsers } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { TbLocationShare } from "react-icons/tb";
import { RoutePaths } from "../routes";
import ViewNotes from "../components/elements/tooltip/ViewNotes";

export const sideBarList = [
  {
    sectionName: null,
    List: [
      {
        id: 1,
        pageName: "Dashboard",
        icon: <LuPieChart />,
        uri: "/admin",
      },
      {
        id: 2,
        pageName: "Products",
        icon: <RiShoppingBag3Line />,
        defaultURI: "/admin/products",
        subMenu: [
          {
            id: 1,
            name: "All Products",
            uri: "/admin/products",
            childRoutes: [
              RoutePaths.products.addProduct,
              RoutePaths.products.updateProduct,
            ],
          },
          {
            id: 2,
            name: "All Categories",
            uri: "/admin/products/category",
            childRoutes: [
              RoutePaths.products.addCategory,
              RoutePaths.products.updateCategory,
            ],
          },
          { id: 3, name: "All Variations", uri: "/admin/products/variations" },
          { id: 4, name: "All Brands", uri: "/admin/products/brands" },
          { id: 5, name: "All Units", uri: "/admin/products/units" },
          { id: 6, name: "All Taxes", uri: "/admin/products/taxes" },
        ],
      },
      {
        id: 3,
        pageName: "Pos System",
        icon: <LuTable2 />,
        uri: "/admin/pos",
      },
      {
        id: 4,
        pageName: "Orders",
        icon: <FiShoppingCart />,
        uri: "/admin/orders",
      },
      {
        id: 5,
        pageName: "Stocks",
        icon: <LuDatabase />,
        defaultURI: "/admin/stocks",

        subMenu: [
          { id: null, name: "Add Stocks", uri: "/admin/stocks/add" },
          { id: null, name: "All Location", uri: "/admin/stocks/locations" },
        ],
      },
      {
        id: 6,
        pageName: "Refunds",
        icon: <BsArrow90DegLeft />,
        defaultURI: "/admin/refunds",

        subMenu: [
          { id: null, name: "Refund Configurations", uri: "/admin/refunds" },
          { id: null, name: "Refund Requests", uri: "/admin/refunds/requests" },
          {
            id: null,
            name: "Approved Refunds",
            uri: "/admin/refunds/refunded",
          },
          {
            id: null,
            name: "Rejected Refunds",
            uri: "/admin/refunds/rejected",
          },
        ],
      },
      {
        id: 7,
        pageName: "Rewards & Wallet",
        icon: <PiMedalLight />,
        defaultURI: "/admin/rewards",

        subMenu: [
          { id: null, name: "Reward Configurations", uri: "/admin/rewards" },
          {
            id: null,
            name: "Set Reward Points",
            uri: "/admin/rewards/set-points",
          },
          {
            id: null,
            name: "Wallet Configurations",
            uri: "/admin/rewards/wallet-configurations",
          },
        ],
      },
    ],
  },
  {
    sectionName: "USERS",
    List: [
      {
        id: 8,
        pageName: "Customers",
        icon: <LuUsers />,
        uri: "/admin/customers",
      },
      {
        id: 9,
        pageName: "Employee Staffs",
        icon: <FiUserCheck />,
        uri: "/admin/staffs",
        childRoutes: [RoutePaths.users?.employeeStaffs.addNewStaff],
      },
      {
        id: 10,
        pageName: "Delivery Men",
        icon: <TbLocationShare />,
        defaultURI: "/admin/delivery-man",

        subMenu: [
          { id: null, name: "All Deliverymen", uri: "/admin/delivery-man" },
          {
            id: null,
            name: "Add New Deliveryman",
            uri: "/admin/delivery-man/add-delivery-man",
          },
          {
            id: null,
            name: "Cancel Requests",
            uri: "/admin/delivery-man/cancel-request",
          },
          {
            id: null,
            name: "Payout Histories",
            uri: "/admin/delivery-man/payout-history",
          },
          {
            id: null,
            name: "Configurations",
            uri: "/admin/delivery-man/configurations",
          },
          {
            id: null,
            name: "Deliveryman Payroll",
            uri: "/admin/delivery-man/generate-payroll",
          },
          {
            id: null,
            name: "Deliveryman Payroll List",
            uri: "/admin/delivery-man/payroll-list",
          },
        ],
      },
    ],
  },
  {
    sectionName: "CONTENTS",
    List: [
      {
        id: 11,
        pageName: "Tags",
        icon: <LuUsers />,
        uri: "/admin/customers",
      },
      {
        id: 12,
        pageName: "Pages",
        icon: <FiUserCheck />,
        uri: "/admin/staffs",
        childRoutes: [RoutePaths.users?.employeeStaffs.addNewStaff],
      },
      {
        id: 13,
        pageName: "Blogs",
        icon: <TbLocationShare />,
        defaultURI: "/admin/delivery-man",

        subMenu: [
          { id: null, name: "All Deliverymen", uri: "/admin/delivery-man" },
          {
            id: null,
            name: "Add New Deliveryman",
            uri: "/admin/delivery-man/add-delivery-man",
          },
          {
            id: null,
            name: "Cancel Requests",
            uri: "/admin/delivery-man/cancel-request",
          },
          {
            id: null,
            name: "Payout Histories",
            uri: "/admin/delivery-man/payout-history",
          },
          {
            id: null,
            name: "Configurations",
            uri: "/admin/delivery-man/configurations",
          },
          {
            id: null,
            name: "Deliveryman Payroll",
            uri: "/admin/delivery-man/generate-payroll",
          },
          {
            id: null,
            name: "Deliveryman Payroll List",
            uri: "/admin/delivery-man/payroll-list",
          },
        ],
      },
      {
        id: 14,
        pageName: "Media Manager",
        icon: <FiUserCheck />,
        uri: "/admin/staffs",
        childRoutes: [RoutePaths.users?.employeeStaffs.addNewStaff],
      },
    ],
  },
];

export function DateFormatter(dataObj) {
  const date = new Date(dataObj); // Replace this with your Date object

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  // console.log("dateeeeeeeeee", formattedDate);
  return formattedDate.slice(0, 6) + "," + formattedDate.slice(6);
}
export const NumberFormatter = (number: number) => {
  return number?.toLocaleString();
};

export const setFormDataByComp = (
  name: string,
  value: string,
  setState: (prev: any) => any
) => {
  setState((prev: any) => ({
    ...prev,
    [name]: value,
  }));
};
export const StatusBooleanChanger = (value: string | null) => {
  if (value === "Active") {
    return true;
  } else if (value === "Inactive") {
    return false;
  } else {
    return null;
  }
};

export const StatusOptions = ["Select Status", "Active", "Inactive"];
export const paymentStatus = ["Payment Status", "Paid", "Unpaid"];
export const DeliveryStatus = [
  "Delivery Status",
  "Order Placed",
  "Pending",
  "Processing",
  "Delivered",
  "Cancelled",
];
export const LocationList = [
  "Select Location",
  "Location Two",
  "Default Location",
];
export const OrdersVariant = ["Online Orders", "POS Orders"];
export const ProductList = ["Select Product", "Product 1", "Product 2"];
export const LocationStatusOptions = ["Select Status", "Published", "Hidden"];
export const EnableRefundOptions = ["Enable", "Disable"];
export const MonthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
//tableColoumns
export const RecenetOrdersHeaders = [
  {
    name: "S/L",
    selector: (row) => row["S/L"],
    omit: true,
  },
  {
    name: "Order Code",
    selector: (row) => row["Order Code"],
    minWidth: "250px",
  },
  {
    name: "Customer",
    selector: (row) => row["Customer"],
    minWidth: "200px",

    hide: "sm",
  },
  {
    name: "Placed On",
    selector: (row) => row["Placed On"],

    hide: "md",
  },
  {
    name: "Items",
    selector: (row) => row["Items"],

    hide: "md",
  },
  {
    name: "Payment Status",
    selector: (row) => row["Payment Status"],

    hide: "lg",
  },
  {
    name: "Order Status",
    selector: (row) => row["Order Status"],

    hide: "lg",
  },
  {
    name: "Order Type",
    selector: (row) => row["Order Type"],

    hide: "lg",
  },
  {
    name: "Actions",
    selector: (row) => row["Actions"],
    center: true,

    hide: "lg",
  },
];
export const productsTableHeaders = [
  {
    name: "S/L",
    selector: (row) => row["S/L"],
    minWidth: "30px",
    maxWidth: "60px",
  },
  {
    name: "Product Name",
    selector: (row) => row["Product Name"],
    minWidth: "400px",
  },
  {
    name: "ProductType",
    selector: (row) => row["ProductType"],

    hide: "md",
  },
  {
    name: "Categories",
    selector: (row) => row["Categories"],

    hide: "md",
  },
  {
    name: "Price",
    selector: (row) => row["Price"],

    hide: "lg",
  },
  {
    name: "Active",
    selector: (row) => row["Active"],

    hide: "lg",
  },
  {
    name: "Actions",
    selector: (row) => row["Actions"],
    right: true,

    hide: "lg",
  },
];

/////////////////
export const CategoryTablesDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Category  Name",
      selector: (row) => row["Category  Name"],
      minWidth: "200px",
    },
    {
      name: "Base Category",
      selector: (row) => row["Base Category"],

      hide: "sm",
      minWidth: "150px",
    },
    {
      name: "Brands",
      selector: (row) => row["Brands"],

      hide: "md",
    },
    {
      name: "Priority",
      selector: (row) => row["Priority"],

      hide: "md",
    },
    {
      name: "Theme",
      selector: (row) => row["Theme"],

      hide: "md",
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag> 1</SpanTag>,
      "Category  Name": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png",
            name: "Fresh Organic",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "Base Category": <TableStatusCard status={"N/A"} />,
      Brands: <TableStatusCard status={"N/A"} />,
      Priority: <TableSpan style={{ color: ColorDarkGray }}>5</TableSpan>,
      Theme: (
        <TableSpan style={{ color: ColorDarkGray }}>{`["Grocery"]`}</TableSpan>
      ),
      Actions: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
              routePath: RoutePaths.products.updateCategory,
            },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag> 2</SpanTag>,
      "Category  Name": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/B1w5t5CWLo5OtLqvM332UQfsWzIarG9qiyEVUNb0.png",
            name: "Fresh Organic",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "Base Category": <TableStatusCard status={"N/A"} />,
      Brands: <TableStatusCard status={"N/A"} />,
      Priority: <TableSpan>5</TableSpan>,
      Theme: <TableSpan>{`["Grocery"]`}</TableSpan>,
      Actions: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
              routePath: RoutePaths.products.updateCategory,
            },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
  ],
};
export const VariationTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Name",
      selector: (row) => row["Name"],
    },
    {
      name: "Active",
      selector: (row) => row["Active"],
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,
    },
  ],

  rowData: [
    {
      "S/L": <SpanTag> 1 </SpanTag>,
      Name: (
        <TableItems
          data={{ name: "Size" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Active: <ToogleButton value={false} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Edit", icon: editIcon },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag> 2 </SpanTag>,
      Name: (
        <TableItems
          data={{ name: "Color" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Active: <ToogleButton value={false} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Edit", icon: editIcon },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag> 3 </SpanTag>,
      Name: (
        <TableItems
          data={{ name: "Size" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Active: <ToogleButton value={false} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Edit", icon: editIcon },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag> 4 </SpanTag>,
      Name: (
        <TableItems
          data={{ name: "Color" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Active: <ToogleButton value={true} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Edit", icon: editIcon },
            { text: "Delete", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
  ],
};

//ordersTables\
export const OrdersTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Order Code",
      selector: (row) => row["Order Code"],

      hide: "sm",
    },
    {
      name: "Customer",
      selector: (row) => row["Customer"],
      minWidth: "200px",
    },
    {
      name: "Placed On",
      selector: (row) => row["Placed On"],

      hide: "sm",
    },
    {
      name: "Items",
      selector: (row) => row["Items"],

      hide: "sm",
    },
    {
      name: "Payment",
      selector: (row) => row["Payment"],

      hide: "md",
    },
    {
      name: "Status",
      selector: (row) => row["Status"],
      minWidth: "150px",

      hide: "md",
    },
    {
      name: "Type",
      selector: (row) => row["Type"],

      hide: "lg",
    },
    {
      name: "Location",
      selector: (row) => row["Location"],
      minWidth: "150px",

      hide: "lg",
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      "Order Code": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      Customer: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Placed On": <SpanTag>{DateFormatter("14 Jan, 2024")}</SpanTag>,
      Items: <TableNumberTag>10</TableNumberTag>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Status: <TableStatusCard status={"Order Placed"} />,
      Type: <TableStatusCard status={"Regular"} />,
      Location: <TableStatusCard status={"Default Location"} />,
      Actions: <ViewDetails />,
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      "Order Code": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:122</SmallSpan>
        </div>
      ),
      Customer: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "11111111111",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Placed On": <SpanTag>{DateFormatter("14 Jan, 2024")}</SpanTag>,
      Items: <TableNumberTag>10</TableNumberTag>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Status: <TableStatusCard status={"Order Placed"} />,
      Type: <TableStatusCard status={"Regular"} />,
      Location: <TableStatusCard status={"Default Location"} />,
      Actions: <ViewDetails />,
    },
  ],
};

export const allLocationsDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Name",
      selector: (row) => row["Name"],
    },
    {
      name: "Address",
      selector: (row) => row["Address"],
    },
    {
      name: "Default",
      selector: (row) => row["Default"],
    },
    {
      name: "Published",
      selector: (row) => row["Published"],
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      Name: (
        <TableItems
          data={{
            name: "Location Two",
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
          }}
          space={undefined}
          imgW={20}
          imgH={20}
        />
      ),
      Address: <SpanTag> Location two address</SpanTag>,
      Default: <ToogleButton value={false} />,
      Published: <ToogleButton value={true} />,
      Actions: (
        <ToolDropdown
          arr={[{ text: "Edit", icon: editIcon }]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      Name: (
        <TableItems
          data={{
            name: "Location Two",
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
          }}
          space={undefined}
          imgW={20}
          imgH={20}
        />
      ),
      Address: <SpanTag> Location two address</SpanTag>,
      Default: <ToogleButton value={false} />,
      Published: <ToogleButton value={true} />,
      Actions: (
        <ToolDropdown
          arr={[{ text: "Edit", icon: editIcon }]}
          width={"200px"}
        />
      ),
    },
  ],
};
//refunds
export const refundRequestDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "User",
      selector: (row) => row["User"],
      minWidth: "200px",
    },
    {
      name: "Order Code",
      selector: (row) => row["Order Code"],

      hide: "sm",
    },
    {
      name: "Product",
      selector: (row) => row["Product"],

      hide: "md",
    },
    {
      name: "Amount",
      selector: (row) => row["Amount"],

      hide: "md",
    },
    {
      name: "Payment",
      selector: (row) => row["Payment"],

      hide: "md",
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Approve", icon: editIcon },
            { text: "Reject", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Approve", icon: editIcon },
            { text: "Reject", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>3</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Actions: (
        <ToolDropdown
          arr={[
            { text: "Approve", icon: editIcon },
            { text: "Reject", icon: deleteIcon },
          ]}
          width={"200px"}
        />
      ),
    },
  ],
};
export const approvedRefundDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "User",
      selector: (row) => row["User"],
      minWidth: "200px",
    },
    {
      name: "Order Code",
      selector: (row) => row["Order Code"],
    },
    {
      name: "Product",
      selector: (row) => row["Product"],
      minWidth: "170px",

      hide: "sm",
    },
    {
      name: "Amount",
      selector: (row) => row["Amount"],
      right: true,

      hide: "md",
    },
    {
      name: "Payment",
      selector: (row) => row["Payment"],
      center: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
    },
    {
      "S/L": <SpanTag>3</SpanTag>,
      User: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Order Code": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      Product: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/LR485zSYiuFgnbAtJW3TzWiKVgaFTjExC01Nul9s.png",
            name: "Strawberry",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Amount: <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      Payment: <TableStatusCard status={"Unpaid"} />,
    },
  ],
};
export const rejectedRefundDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "User",
      selector: (row) => row["User"],
      minWidth: "200px",
    },
    {
      name: "Order Code",
      selector: (row) => row["Order Code"],
      sortable: true,
      hide: "sm",
    },
    {
      name: "Product",
      selector: (row) => row["Product"],
      sortable: true,
      hide: "md",
    },
    {
      name: "Amount",
      selector: (row) => row["Amount"],
      sortable: true,
      hide: "md",
    },
    {
      name: "Payment",
      selector: (row) => row["Payment"],
      sortable: true,
      hide: "md",
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,
      sortable: true,
      hide: "lg",
    },
  ],
  rowData: [],
};

export const setRewardPointsTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Product Name",
      selector: (row) => row["Product Name"],
      minWidth: "200px",
    },
    {
      name: "Base price",
      selector: (row) => row["Base price"],

      hide: "xs",
      maxWidth: "150px",
    },

    {
      name: "Points",
      selector: (row) => row["Points"],
      right: true,

      hide: "lg",
      maxWidth: "100%",
      display: "flex",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      "Product Name": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/3udU8bhCm9Nw5hI0kmzMAVtvDTTMK4zgxkes4gGt.png",
            name: "Product Name",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "Base price": (
        <InputLabel style={{ color: ColorOrange2, fontWeight: 600 }}>
          ₹ {NumberFormatter(1000)}
        </InputLabel>
      ),
      Points: (
        <CustomTextInput
          type="number"
          changeFunction={() => {}}
          iconState={false}
          holderText=" "
        />
      ),
    },
  ],
};

//users
export const CustomersTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Name",
      selector: (row) => row["Name"],
      minWidth: "200px",
    },
    {
      name: "Email",
      selector: (row) => row["Email"],

      hide: "sm",
    },
    {
      name: "Phone",
      selector: (row) => row["Phone"],

      hide: "md",
    },

    {
      name: "Banned",
      selector: (row) => row["Banned"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      Name: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
            name: "Name",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Banned: <ToogleButton value={false} />,
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      Name: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
            name: "Name",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Banned: <ToogleButton value={false} />,
    },
    {
      "S/L": <SpanTag>3</SpanTag>,
      Name: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
            name: "Name",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Banned: <ToogleButton value={false} />,
    },
  ],
};
export const StaffsTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Name",
      selector: (row) => row["Name"],
      minWidth: "200px",
    },
    {
      name: "Role",
      selector: (row) => row["Role"],
    },
    {
      name: "Email",
      selector: (row) => row["Email"],

      hide: "sm",
    },
    {
      name: "Phone",
      selector: (row) => row["Phone"],

      hide: "md",
    },

    {
      name: "Action",
      selector: (row) => row["Action"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "EMP1",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Role: <TableStatusCard status={"Manger"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "EMP2",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Role: <TableStatusCard status={"DB-Engg"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>3</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "EMP3",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Role: <TableStatusCard status={"Front-End"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
  ],
};
export const multiselectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
//users/deliveryman
export const AllDeleiveryManTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Name",
      selector: (row) => row["Name"],
      minWidth: "200px",
    },
    {
      name: "Location",
      selector: (row) => row["Location"],
    },

    {
      name: "Email",
      selector: (row) => row["Email"],

      hide: "sm",
    },
    {
      name: "Phone",
      selector: (row) => row["Phone"],

      hide: "md",
    },
    {
      name: "Balance",
      selector: (row) => row["Balance"],

      hide: "md",
    },
    {
      name: "Action",
      selector: (row) => row["Action"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "DM1",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Location: <TableStatusCard status={"Default Location"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Balance: (
        <SpanTag style={{ color: ColorOrange2, fontWeight: 700 }}>
          ₹{NumberFormatter(0)}
        </SpanTag>
      ),
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "DM2",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Location: <TableStatusCard status={"Default Location"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Balance: (
        <SpanTag style={{ color: ColorOrange2, fontWeight: 700 }}>
          ₹{NumberFormatter(0)}
        </SpanTag>
      ),
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
    {
      "S/L": <SpanTag>3</SpanTag>,
      Name: (
        <TableItems
          data={{
            image: null,
            name: "DM3",
            span: null,
          }}
          space={true}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      Location: <TableStatusCard status={"Default Location"} />,
      Email: <SpanTag>example@gmail.com</SpanTag>,
      Phone: <SpanTag>+XXXX67XXXX</SpanTag>,
      Balance: (
        <SpanTag style={{ color: ColorOrange2, fontWeight: 700 }}>
          ₹{NumberFormatter(0)}
        </SpanTag>
      ),
      Action: (
        <ToolDropdown
          arr={[
            {
              text: "Edit",
              icon: editIcon,
            },
            {
              text: "Delete",
              icon: deleteIcon,
            },
          ]}
          width={"150px"}
        />
      ),
    },
  ],
};
export const CancelRequestsTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },
    {
      name: "Order Code",
      selector: (row) => row["Order Code"],

      hide: "sm",
    },
    {
      name: "Customer",
      selector: (row) => row["Customer"],
      minWidth: "200px",
    },
    {
      name: "Placed On",
      selector: (row) => row["Placed On"],

      hide: "sm",
    },
    {
      name: "Items",
      selector: (row) => row["Items"],

      hide: "sm",
    },
    {
      name: "Payment",
      selector: (row) => row["Payment"],

      hide: "md",
    },
    {
      name: "Status",
      selector: (row) => row["Status"],
      minWidth: "150px",

      hide: "md",
    },
    {
      name: "Type",
      selector: (row) => row["Type"],

      hide: "lg",
    },
    {
      name: "Location",
      selector: (row) => row["Location"],
      minWidth: "150px",

      hide: "lg",
    },
    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,
      "Order Code": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      Customer: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Placed On": <SpanTag>{DateFormatter("14 Jan, 2024")}</SpanTag>,
      Items: <TableNumberTag>10</TableNumberTag>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Status: <TableStatusCard status={"Order Placed"} />,
      Type: <TableStatusCard status={"Regular"} />,
      Location: <TableStatusCard status={"Default Location"} />,
      Actions: (
        <FlexStart
          columnGap={1}
          style={{ padding: 0, margin: 0 }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <ViewNotes />
          <ViewDetails />
        </FlexStart>
      ),
    },
    {
      "S/L": <SpanTag>2</SpanTag>,
      "Order Code": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:122</SmallSpan>
        </div>
      ),
      Customer: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "11111111111",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Placed On": <SpanTag>{DateFormatter("14 Jan, 2024")}</SpanTag>,
      Items: <TableNumberTag>10</TableNumberTag>,
      Payment: <TableStatusCard status={"Unpaid"} />,
      Status: <TableStatusCard status={"Order Placed"} />,
      Type: <TableStatusCard status={"Regular"} />,
      Location: <TableStatusCard status={"Default Location"} />,
      Actions: (
        <FlexStart
          columnGap={1}
          style={{ padding: 0, margin: 0 }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <ViewNotes />
          <ViewDetails />
        </FlexStart>
      ),
    },
  ],
};
export const PayoutHistoriesTableDatas = {
  columnHeader: [
    {
      name: "S/L",
      selector: (row) => row["S/L"],
      minWidth: "30px",
      maxWidth: "60px",
    },

    {
      name: "Deliveryman",
      selector: (row) => row["Deliveryman"],
      minWidth: "200px",
    },
    {
      name: "	Requested On",
      selector: (row) => row["Requested On"],

      hide: "sm",
    },

    {
      name: "Amount",
      selector: (row) => row["Amount"],

      hide: "md",
    },
    {
      name: "Status",
      selector: (row) => row["Status"],
      minWidth: "150px",

      hide: "md",
    },

    {
      name: "Actions",
      selector: (row) => row["Actions"],
      right: true,

      hide: "lg",
    },
  ],
  rowData: [
    {
      "S/L": <SpanTag>1</SpanTag>,

      Deliveryman: (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/INDtffUJXB3VqDxlyFgAS6h199TZNniBQNPW0mIc.jpg",
            name: "Mark Tran - CEO",
            span: "5555555555",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "Requested On": <SpanTag>{DateFormatter("14 Jan, 2024")}</SpanTag>,
      Amount: <TableNumberTag>10</TableNumberTag>,
      Status: <TableStatusCard status={"Order Placed"} />,

      Actions: <ViewDetails />,
    },
  ],
};

export const ProgressValueArrContainer = {
  productAllVariations: ["All Variations", "Add New Variation"],
  productAllBrands: ["All Brands", "Add New Brand", "Add Brand SEO"],
  productAllUnits: ["All Units", "Add New Units"],
  productAllTaxes: ["All Taxes", "Add New Tax"],
  productAddProducts: [
    "Basic Information",
    "Product Images",
    "Category",
    "Product Tags",
    "Product Brand & Unit",
    "Price,SKU,Stock & Variations",

    "Product Discount",
    "Minimum Purchase",
    "Product Taxes",
    "Self Target and Status",
    "SEO Meta Options",
  ],
  productAddCategory: [
    "Basic Information",
    "Category Image",
    "SEO Meta Options",
  ],
  stockAddStocks: ["Stock Information"],
  refundConfigurations: ["Refund Information"],
  rewardConfigurations: ["Reward Information"],
  rewardPoints: ["Each Product Wise", "Price Range Wise", "For All Products"],
  walletConfigurations: ["Refund Information"],
  addNewStaff: ["Basic Information"],
  addNewDeliveryMen: ["Basic Information"],
};
