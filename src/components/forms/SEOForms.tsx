import { Stack, Box } from "@mui/material";
import {
  ParentStack,
  PageHeader,
  Heading2,
  CustomTextArea,
  InputLabel,
} from "../../assets/styles";
import {
  ColorDarkGray,
  ColorGreen,
  ColorDarkGreen,
  ColorWhite,
} from "../../assets/styles/color";
import { saveIcon } from "../../utils/icons";
import ReuseButton from "../elements/buttons/ReusableButton";
import CustomTextInput from "../elements/inputs/CustomtextInput";
import ImageSelector from "../elements/inputs/ImageSelector";
import InputContainer from "../elements/InputContainer";

function SEOForms() {
  return (
    <ParentStack>
      <PageHeader>
        <Stack spacing={3} width={"100%"}>
          <Heading2>SEO Meta Configuration</Heading2>
          <InputContainer>
            <InputLabel >
              {" "}
              Meta Title
            </InputLabel>
            <CustomTextInput
              changeFunction={undefined}
              iconState={false}
              holderText={"Type meat title"}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel> Meta Description</InputLabel>
            <CustomTextArea placeholder="Type your meta description" />
          </InputContainer>
          <InputContainer>
            <ImageSelector
              inputName=" Meta Image"
              labelName={"Choose Meta Image"}
            />
          </InputContainer>
        </Stack>
      </PageHeader>
    </ParentStack>
  );
}

export default SEOForms;
