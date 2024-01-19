export const AppLogo =
  "https://grostore.themetags.com/public/uploads/media/yqqPV512Gk5DMpvCj2UllKrCl52bam3yD6QvfiPP.png";
export const AppNameLogo =
  "https://grostore.themetags.com/public/uploads/media/LOa3BqX3ydhVC0V1fwYEyvEpM5N9NaoA0E7u3EQs.png";

//for List
import { LuPieChart, LuDatabase } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import {
  CustomersIcon,
  DeliveryMenIcon,
  Reaward_WalletIcon,
  RefundsIcon,
  StaffsIcon,
  deleteIcon,
  editIcon,
  viewIcon,
} from "./icons";
import {
  InputLabel,
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
        subMenu: [
          { id: 1, name: "All Products", uri: "/admin/products" },
          { id: 2, name: "All Categories", uri: "/admin/products/category" },
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
        subMenu: [
          { id: null, name: "Add Stocks", uri: "/admin/stocks/add" },
          { id: null, name: "All Location", uri: "/admin/stocks/locations" },
        ],
      },
      {
        id: 6,
        pageName: "Refunds",
        icon: <BsArrow90DegLeft />,
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
        icon: Reaward_WalletIcon,
        subMenu: [
          { id: null, name: "Reward Configurations", uri: "/admin/rewards" },
          {
            id: null,
            name: "Set Reward Points",
            uri: "/admin/rewards/set-points",
          },
          {
            id: null,
            name: "All Variations",
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
        icon: CustomersIcon,
        uri: "/admin/customers",
      },
      {
        id: 9,
        pageName: "Employee Staffs",
        icon: StaffsIcon,
        uri: "/admin/staffs",
      },
      {
        id: 10,
        pageName: "Delivery Men",
        icon: DeliveryMenIcon,
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
            uri: "/admin/delivery-man/deliverman-configuraton",
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
];

export function DateFormatter(dataObj) {
  const date = new Date(dataObj); // Replace this with your Date object

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  // console.log("dateeeeeeeeee", formattedDate);
  return (
    <TableSpan>
      {formattedDate.slice(0, 6) + "," + formattedDate.slice(6)}
    </TableSpan>
  );
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
export const LocationList = ["Location", "Location Two", "Default Location"];
export const OrdersVariant = ["Online Orders", "POS Orders"];
export const ProductList = ["Select Product", "Product 1", "Product 2"];
export const LocationStatusOptions = ["Select Status", "Published", "Hidden"];
export const EnableRefundOptions = ["Enable", "Disable"];
//tableColoumns
export const RecenetOrdersHeaders = [
  "Order Code",
  "Customer",
  "Placed On",
  "Items",
  "Payment Status",
  "Order Status",
  "Order Type",
  "Actions",
];
export const productsTableHeaders = [
  "S/L",
  "Product Name",
  "ProductType",
  "Categories",
  "Price",
  "Active",
  "Actions",
];
export const categoryTableHeaders = [
  "S/L",
  "Category  Name",
  "Base Category",
  "Brands",
  "Priority",
  "Theme",
  "Actions",
];

/////////////////
export const CategoryTablesDatas = {
  columnHeader: [
    "S/L",
    "Category  Name",
    "Base Category",
    "Brands",
    "Priority",
    "Theme",
    "Actions",
  ],
  rowData: [
    {
      "1": 1,
      "2": (
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

      "3": <TableStatusCard status={"N/A"} />,
      "4": <TableStatusCard status={"N/A"} />,
      "5": <TableSpan>5</TableSpan>,
      "6": <TableSpan>{`["Grocery"]`}</TableSpan>,
      "7": (
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
      "1": 2,
      "2": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/aGeVazxlUQXFJR0WMObSRo14aOCKOE4jONbOtTfv.png",
            name: "Milk",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "3": <TableStatusCard status={"N/A"} />,
      "4": <TableStatusCard status={"N/A"} />,
      "5": <TableSpan>5</TableSpan>,
      "6": <TableSpan>{`["Grocery"]`}</TableSpan>,
      "7": (
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
      "1": 3,
      "2": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/QZA5S8YHIm08QrrgdN74SfZrZBbhVloTvLaAyAue.png",
            name: "Cleaning",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "3": <TableStatusCard status={"N/A"} />,
      "4": <TableStatusCard status={"N/A"} />,
      "5": <TableSpan>5</TableSpan>,
      "6": <TableSpan>{`["Grocery"]`}</TableSpan>,
      "7": (
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
      "1": 4,
      "2": (
        <TableItems
          data={{
            image:
              "https://grostore.themetags.com/public/uploads/media/WReJ6ANlzBRlgvM2zj8UfoDlmf2SPlCx9x3rRgzd.png",
            name: "breakfast",
          }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),

      "3": <TableStatusCard status={"N/A"} />,
      "4": <TableStatusCard status={"N/A"} />,
      "5": <TableSpan>5</TableSpan>,
      "6": <TableSpan>{`["Grocery"]`}</TableSpan>,
      "7": (
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
export const VariationTableDatas = {
  columnHeader: ["S/L", "Name", "Active", "Action"],
  rowData: [
    {
      "1": 1,
      "2": (
        <TableItems
          data={{ name: "Size" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "3": <ToogleButton value={false} />,
      "4": (
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
      "1": 2,
      "2": (
        <TableItems
          data={{ name: "Color" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "3": <ToogleButton value={true} />,
      "4": (
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
      "1": 3,
      "2": (
        <TableItems
          data={{ name: "Volume" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "3": <ToogleButton value={false} />,
      "4": (
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
      "1": 4,
      "2": (
        <TableItems
          data={{ name: "Weight" }}
          space={undefined}
          imgW={undefined}
          imgH={undefined}
        />
      ),
      "3": <ToogleButton value={true} />,
      "4": (
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
    "S/L",
    "Order Code",
    "Customer",
    "Placed On",
    "Items",
    "Payment",
    "Status",
    "Type",
    "Location",
    "Action",
  ],
  rowData: [
    {
      "1": 1,
      "2": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      "3": (
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
      "4": (
        <div style={{ width: "100px" }}>{DateFormatter("14 Jan, 2024")}</div>
      ),
      "5": <TableNumberTag>10</TableNumberTag>,
      "6": (
        <div style={{ width: "30px" }}>
          <TableStatusCard status={"Unpaid"} />
        </div>
      ),
      "7": (
        <div style={{ width: "90px" }}>
          <TableStatusCard status={"Order Placed"} />
        </div>
      ),
      "8": (
        <div style={{ width: "50px" }}>
          <TableStatusCard status={"Regular"} />
        </div>
      ),
      "9": (
        <div style={{ width: "105px" }}>
          <TableStatusCard status={"Default Location"} />
        </div>
      ),
      "10": <ViewDetails />,
    },
    {
      "1": 2,
      "2": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      "3": (
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
      "4": (
        <div style={{ width: "100px" }}>{DateFormatter("14 Jan, 2024")}</div>
      ),
      "5": <TableNumberTag>10</TableNumberTag>,
      "6": (
        <div style={{ width: "30px" }}>
          <TableStatusCard status={"Unpaid"} />
        </div>
      ),
      "7": (
        <div style={{ width: "90px" }}>
          <TableStatusCard status={"Order Placed"} />
        </div>
      ),
      "8": (
        <div style={{ width: "50px" }}>
          <TableStatusCard status={"Scheduled"} />
        </div>
      ),
      "9": (
        <div style={{ width: "105px" }}>
          <TableStatusCard status={"Default Location"} />
        </div>
      ),
      "10": <ViewDetails />,
    },
    {
      "1": 3,
      "2": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      "3": (
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
      "4": (
        <div style={{ width: "100px" }}>{DateFormatter("14 Jan, 2024")}</div>
      ),
      "5": <TableNumberTag>10</TableNumberTag>,
      "6": (
        <div style={{ width: "30px" }}>
          <TableStatusCard status={"Unpaid"} />
        </div>
      ),
      "7": (
        <div style={{ width: "90px" }}>
          <TableStatusCard status={"Delivered"} />
        </div>
      ),
      "8": (
        <div style={{ width: "50px" }}>
          <TableStatusCard status={"Regular"} />
        </div>
      ),
      "9": (
        <div style={{ width: "105px" }}>
          <TableStatusCard status={"Default Location"} />
        </div>
      ),
      "10": <ViewDetails />,
    },
    {
      "1": 4,
      "2": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      "3": (
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
      "4": (
        <div style={{ width: "100px" }}>{DateFormatter("14 Jan, 2024")}</div>
      ),
      "5": <TableNumberTag>10</TableNumberTag>,
      "6": (
        <div style={{ width: "30px" }}>
          <TableStatusCard status={"Paid"} />
        </div>
      ),
      "7": (
        <div style={{ width: "90px" }}>
          <TableStatusCard status={"Order Placed"} />
        </div>
      ),
      "8": (
        <div style={{ width: "50px" }}>
          <TableStatusCard status={"Regular"} />
        </div>
      ),
      "9": (
        <div style={{ width: "105px" }}>
          <TableStatusCard status={"Default Location"} />
        </div>
      ),
      "10": <ViewDetails />,
    },
    {
      "1": 5,
      "2": (
        <div style={{ width: "100px" }}>
          <SmallSpan>#G-Store:133</SmallSpan>
        </div>
      ),
      "3": (
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
      "4": (
        <div style={{ width: "100px" }}>{DateFormatter("14 Jan, 2024")}</div>
      ),
      "5": <TableNumberTag>10</TableNumberTag>,
      "6": (
        <div style={{ width: "30px" }}>
          <TableStatusCard status={"Unpaid"} />
        </div>
      ),
      "7": (
        <div style={{ width: "90px" }}>
          <TableStatusCard status={"Order Placed"} />
        </div>
      ),
      "8": (
        <div style={{ width: "50px" }}>
          <TableStatusCard status={"Regular"} />
        </div>
      ),
      "9": (
        <div style={{ width: "105px" }}>
          <TableStatusCard status={"Default Location"} />
        </div>
      ),
      "10": <ViewDetails />,
    },
  ],
};

export const allLocationsDatas = {
  columnHeader: ["S/L", "Name", "Address", "Default", "Published", "Action"],
  rowData: [
    {
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": <SpanTag> Location two address</SpanTag>,
      "4": <ToogleButton value={false} />,
      "5": <ToogleButton value={true} />,
      "6": (
        <ToolDropdown
          arr={[{ text: "Edit", icon: editIcon }]}
          width={"200px"}
        />
      ),
    },
    {
      "1": <SmallSpan>2</SmallSpan>,
      "2": (
        <TableItems
          data={{
            name: "Default Location",
            image:
              "https://grostore.themetags.com/public/backend/assets/img/placeholder-thumb.png?v=v3.0.0",
          }}
          space={undefined}
          imgW={20}
          imgH={20}
        />
      ),
      "3": <SpanTag>Default Location address</SpanTag>,
      "4": <ToogleButton value={false} />,
      "5": <ToogleButton value={true} />,
      "6": (
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
    "S/L",
    "User",
    "Order Code",
    "Product",
    "Amount",
    "Payment",
    "Action",
  ],
  rowData: [
    {
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": (
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
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": (
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
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": (
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
    "S/L",
    "User",
    "Order Code",
    "Product",
    "Amount",
    "Payment",
    "",
  ],
  rowData: [
    {
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": null,
    },
    {
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": null,
    },
    {
      "1": <SmallSpan>1</SmallSpan>,
      "2": (
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
      "3": (
        <div style={{ width: "100px" }}>
          <InputLabel>#G-Store:133</InputLabel>
        </div>
      ),
      "4": (
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
      "5": <InputLabel>₹{NumberFormatter(1000)}</InputLabel>,
      "6": <TableStatusCard status={"Unpaid"} />,
      "7": null,
    },
  ],
};
