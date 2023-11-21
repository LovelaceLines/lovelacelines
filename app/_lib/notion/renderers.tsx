import { Link, Typography } from "@mui/material";
import { Blockquote, Code } from "./components";

interface ITag {
  tag: any;
  value: string;
  children: any;
  key: any;
}

const applyTag = (tag: ITag, nopTag = false) => {
  let result = tag.children;

  const props: { [key: string]: any } = {};
  props.key = tag.key;

  if (nopTag && tag.tag === 'p') tag.tag = React.Fragment;
  if (tag.tag === 'code') tag.tag = 'code';
  if (tag.tag === "a") props.href = tag.value;
  if (tag.tag === '_') {
    tag.tag = 'span';
    props.className = 'underline';
  }

  result = React.createElement(tag.tag, props, result);
  
  return result;
}

const MUIRenderers = {
  // MUI components
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: Typography,
  blockquote: Blockquote,
  a: Link,
  c: Code,
};

const MyMUIComponent = ({ type, children }) => {
  const Component = MUIRenderers[type] || 'div'; // Se o tipo não estiver mapeado, use 'div' por padrão

  return <Component>{children}</Component>;
};