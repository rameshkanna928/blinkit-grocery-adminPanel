import { gql } from "@apollo/client";

export const getToatalEarnings = gql`
  query Query($days: Int!) {
    getMonthlyChart(days: $days) {
      amount
      date
      total
    }
  }
`;

export const getRecentOrders = gql`
  query GetAllOrder($index: Int, $limit: Int) {
    getAllOrder(index: $index, limit: $limit) {
      count
      data {
        orderId
        user {
          firstName
          lastName
          profileImage
          phoneNo
        }
        orderTime
        paymentStatus
        orderStatus
        orderType
        addToCart {
          quantity
        }
      }
    }
  }
`;
export const getCategoryChart = gql`
  query GetCategoryCharts {
    getCategoryCharts {
      category
      sellingCount
      total
    }
  }
`;
export const getOrdersChart = gql`
  query GetOrdersChart {
    getOrdersChart {
      date
      count
      total
    }
  }
`;
export const getCurrentMonthSalesChart = gql`
  query GetSaleThisMonthChart {
    getSaleThisMonthChart {
      date
      amount
      total
    }
  }
`;
export const getTopSellingProducts = gql`
  query GetTopSellingProducts {
    getTopSellingProducts {
      id
      image {
        image
      }
      name
      ProductType {
        name
      }
      sellingCount
    }
  }
`;

export const getAllProductsForAdmin = gql`
query GetAllProductsByAdmin($index: Int!, $limit: Int!, $status: Boolean, $search: String, $category: String) {
  getAllProductsByAdmin(index: $index, limit: $limit, status: $status, search: $search, category: $category) {
      count
      data {
        id
        name
        image {
          image
        }
        isActive
        ProductType {
          name
          productCategory {
            name
          }
        }
        variant {
          price
        }
      }
    }
  }
`;
export const orderDetailsCountForCard = gql`
  query GetOrderDetailsCount {
    getOrderDetailsCount {
      label
      count
    }
  }
`;
export const getAllCategories = gql`
query GetAllCategories {
  getAllCategories {
    name
  }
}`
