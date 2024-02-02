import { useParams } from "react-router-dom";
import AddUpdateProducts from "./AddUpdateProducts";
import AddUpdateCategory from "./AddUpdateCategory";

function Dyn() {
  const { id } = useParams();
  console.log("PR", id);

  return (
    <>
      {id === "add-product" ||
      id === "update-product" ||
      id === "add-category" ||
      id === "update-category" ? (
        <>
          {id?.includes("product") && (
            <AddUpdateProducts
              pageName={
                id === "add-product"
                  ? "Add Product"
                  : id === "update-product"
                  ? "Update Product"
                  : "Wrong Route"
              }
            />
          )}
          {id?.includes("category") && (
            <AddUpdateCategory
              pageName={
                id === "add-category"
                  ? "Add Category"
                  : id === "update-category"
                  ? "Update Category"
                  : "Wrong Route"
              }
            />
          )}
        </>
      ) : (
        <> page not Found</>
      )}
    </>
  );
}

export default Dyn;
