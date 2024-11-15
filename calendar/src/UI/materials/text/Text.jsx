import { Typography } from "@mui/material";
import { PALETTE } from "../../themes/Theme";

/**
 * This UI component render a text in the page.
 *
 * ATTRIBUTE    MANDATORY   DESCRIPTION
 * variant      No          Define the size of the text. Default value is h6.
 * color        No          Define the color of the text. Default value is BLACK.
 * bold         No          When present, will show the text in bold.
 * italic       No          When present, will show the text in italic.
 * style        No          Define any kind of additional style for the text.
 */

const Text = (props) => {
  const variant = props.variant || 9;
  const color = props.color || PALETTE.BLACK;

  const defaultStyle = {};
  if (props.bold) {
    defaultStyle.fontWeight = "bold";
  }
  if (props.italic) {
    defaultStyle.fontStyle = "italic";
  }

  const style = { ...defaultStyle, ...(props.style || {}) };

  return (
    <Typography variant={`h${variant}`} color={color} style={style}>
      {props.children}
    </Typography>
  );
};

export default Text;
