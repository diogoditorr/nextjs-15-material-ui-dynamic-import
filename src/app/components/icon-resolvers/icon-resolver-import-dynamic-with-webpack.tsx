"use client";
import { PeopleAltOutlined } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { CSSProperties } from "react";

export type IconNames = string;

export type IconProps = SvgIconProps & {
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
}: IconProps) => {
  const IconComponent = PeopleAltOutlined ?? iconName;

  // Code to import icons dynamically
  // Unfortunally, there is a compile error
  // const IconComponent = lazy(() => {
  //   if (!iconName.trim())
  //     return import("@mui/icons-material/ManageAccountsOutlined");

  //   console.log(`[LOG] ${iconName}`);

  //   return import(
  //     /* webpackInclude: /\.js$/ */
  //     "@mui/icons-material/" + iconName
  //   );
  // });

  if (!IconComponent) return null;

  return (
    <IconComponent
      width={width}
      height={height}
      color={color as SvgIconProps["color"]}
      {...props}
    />
  );
};
