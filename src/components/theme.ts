import { ColorBlack, ColorDarkGray, ColorLightAsh, ColorLightGray, ColorLightWhite, ColorWhite, LightBorderColor, darkBodyBackground } from "../assets/styles/color"

export const lightTheme = {
    bodyBackground:ColorLightWhite,
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    partBackground:ColorWhite,
    blackText:ColorBlack,
    cardBorder:`1px solid ${LightBorderColor}`,
    inputBackground:ColorWhite,
    disableInputBackground:ColorLightAsh,
    svgColor:ColorDarkGray
}
export const darkTheme = {
    bodyBackground: darkBodyBackground,
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    partBackground:ColorBlack,
    blackText:ColorLightGray,
    cardBorder:`1px solid #ffffff26`,
    inputBackground:darkBodyBackground,
    disableInputBackground:ColorDarkGray,
    svgColor:ColorLightAsh


}

