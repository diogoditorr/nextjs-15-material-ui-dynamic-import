"use client";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { CSSProperties, lazy } from "react";

export type IconNames = string;

const iconList = {
  HomeRounded: lazy(() => import("@mui/icons-material/HomeRounded")),
  ManageAccountsOutlined: lazy(
    () => import("@mui/icons-material/ManageAccountsOutlined"),
  ),
  PeopleOutlineOutlined: lazy(
    () => import("@mui/icons-material/PeopleOutlineOutlined"),
  ),
};

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
  const IconComponent = iconList[iconName as keyof typeof iconList];

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
