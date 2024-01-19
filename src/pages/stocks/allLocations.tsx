import React from "react";
import { ParentStack } from "../../assets/styles";
import PageHeaderComponent from "../../components/parts/pageheader";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import { FiPlus } from "react-icons/fi";
import TableComponent from "../../components/elements/table";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import { LocationStatusOptions, allLocationsDatas } from "../../utils";
import SearchButton from "../../components/elements/buttons/search";
function AllLocations() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Locations">
        <ReuseButton
          color={ColorGreen}
          hovercolor={ColorDarkGreen}
          iconPadding={"0 3px"}
          icon={<FiPlus />}
          text={"Add Location"}
          textColor={ColorWhite}
          routeLink={""}
        />
      </PageHeaderComponent>
      <TableComponent
        tableData={allLocationsDatas}
        setPageNumber={() => {}}
        totalRows={0}
        page={1}
      >
        <CustomTextInput changeFunction={() => {}} iconState={true} />
        <CustomSelect
          width={"180px"}
          search={false}
          options={LocationStatusOptions}
          formData={undefined}
          setFormData={() => {}}
          propertyName={undefined}
        />
        <SearchButton
          routeLink={""}
          onClick={()=>{}}
          theme={"white"}
        />
      </TableComponent>
    </ParentStack>
  );
}

export default AllLocations;
