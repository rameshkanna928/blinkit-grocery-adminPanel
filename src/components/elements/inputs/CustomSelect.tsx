import { useEffect, useRef, useState } from "react";
import {
  CustomSelectInput,
  CustomSubList,
  FlexBetween,
  SpanTag,
} from "../../../assets/styles";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  ColorDullWhite,
  ColorLightAsh,
  ColorLightBlue,
  ColorWhite,
  HeaderShadow,
} from "../../../assets/styles/color";
import Icon from "../icons";

interface IProps {
  width: number | string;
  search: boolean;
  options: string[];
  formData: any;
  setFormData: (name: string, data: string) => void;
  propertyName: any;
  disabled?: boolean;
}

function CustomSelect({
  width,
  search,
  options,
  formData,
  setFormData,
  propertyName,
  disabled,
}: IProps) {
  console.log("check>>>>", options);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [optionsState, setOptionsState] = useState<string[]>([]);
  const refState = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setValue(
      formData?.[propertyName] ? formData?.[propertyName] : options?.[0]
    );
    setOptionsState(options);
  }, [options]);
  useEffect(() => {
    const CloseHandler = (e: any) => {
      if (!refState.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", CloseHandler);
    return () => document.removeEventListener("click", CloseHandler);
  }, []);
useEffect(()=>{
 if(disabled){
  setFormData(propertyName,options?.[0])
  setValue(options?.[0])
 }
},[disabled])
console.log("fromiiiiiiii",formData);

  const handleFilter = (e: any) => {
    let FilterArr = options.filter((data) =>
      data
        ?.toLowerCase()
        .split(" ")
        .join("")
        .includes(e.target.value.toLowerCase().split(" ").join(""))
    );
    if (FilterArr?.length > 0) {
      setOptionsState(FilterArr);
    } else {
      setOptionsState([]);
    }
  };

  return (
    <div
      ref={refState}
      style={{
        width: width,
        position: "relative",
        margin: "0 15px 0 0",
      }}
      onClick={() => {
        if (!disabled) {
          setOpen((prev) => !prev);
        }
      }}
    >
      <CustomSelectInput style={{backgroundColor:disabled&&ColorLightAsh}}>
        <FlexBetween>
          <SpanTag
            style={{
              maxWidth: width,
              fontSize: "13px",
              fontWeight: 500,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {value}
          </SpanTag>{" "}
          <Icon paddingValue={"0"}>
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </Icon>
        </FlexBetween>
      </CustomSelectInput>
      {open && (
        <div
          className="abs"
          style={{
            background: ColorWhite,
            position: "absolute",
            left: "1px",
            right: "1px",
            top: "43px",
            boxShadow: HeaderShadow,
            zIndex: 1,
          }}
        >
          {search && (
            <div style={{ padding: "5px" }}>
              <input
                onChange={handleFilter}
                onClick={(e) => e.stopPropagation()}
                style={{
                  padding: "10px",
                  width: "100%",
                  border: "1px solid" + ColorLightBlue,
                  outline: "none",
                  borderRadius: "6px",
                }}
              />
            </div>
          )}
          <ol
            className="hide-scroll"
            style={{
              padding: 0,
              margin: "2px 0",
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {optionsState?.length !== 0 ? (
              <>
                {optionsState.map((data, i) => (
                  <CustomSubList
                    value={`${data}`}
                    key={i}
                    style={{
                      fontSize: "14px",
                      padding: "5px 10px",
                      backgroundColor:
                        value === data ? ColorDullWhite : "transparent",
                    }}
                    onClick={() => {
                      setFormData(propertyName, data);
                      setValue(data);
                    }}
                  >
                    {data}
                  </CustomSubList>
                ))}
              </>
            ) : (
              <SpanTag style={{ padding: "0 5px" }}>No Results Found</SpanTag>
            )}
          </ol>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
