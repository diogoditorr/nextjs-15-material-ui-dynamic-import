"use client";
import * as Icons from "@mui/icons-material";
import { FormHelperTextOwnProps } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { CSSProperties } from "react";

export type IconNames = keyof typeof Icons;

export type IconProps = {
  iconName: IconNames;
  width?: number;
  height?: number;
  color?: string | SvgIconProps["color"];
  isSvg?: boolean;
  style?: CSSProperties;
};

export const IconResolver = ({
  iconName,
  width = 24,
  height = 24,
  color,
  ...props
}: IconProps & FormHelperTextOwnProps) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      width={width}
      height={height}
      color={color as SvgIconProps["color"]}
      {...props}
    />
  );
};
