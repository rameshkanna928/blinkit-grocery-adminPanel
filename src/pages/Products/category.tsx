import PageHeaderComponent from "../../components/parts/pageheader";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import { FiPlus } from "react-icons/fi";
import {
  FlexBetween,
  ParentStack,
} from "../../assets/styles";
import TableComponent from "../../components/elements/table";
import SearchButton from "../../components/elements/buttons/search";
import { useState } from "react";
import {
  CategoryTablesDatas,
  setFormDataByComp,
} from "../../utils";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";

function Category() {
  const [formData, setFormData] = useState({});
  const handleFormdatas = (name: string, value: string) => {
    setFormDataByComp(name, value, setFormData);
    console.log("CatFormDats", formData);
  };
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Categories">
        <ReuseButton
          color={ColorGreen}
          iconPadding={"0 5px"}
          icon={<FiPlus />}
          text={"Add Category"}
          hovercolor={ColorDarkGreen}
          textColor={ColorWhite}
          routeLink={""}
        />
      </PageHeaderComponent>
      <TableComponent
        tableData={CategoryTablesDatas}
        setPageNumber={()=>{}}
        totalRows={0}
        page={0}
      >
        <FlexBetween>
          <CustomTextInput
            changeFunction={(value: string) => handleFormdatas("search", value)}
            iconState={true}
          />

          <SearchButton theme={"white"} routeLink={""} onClick={() => {}} />
        </FlexBetween>
      </TableComponent>
    </ParentStack>
  );
}

export default Category;
