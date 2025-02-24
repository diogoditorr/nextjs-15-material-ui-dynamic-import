"use client";

import { Stack } from "@mui/material";
import { JSX } from "react";

export function ProfileInformation({
  data,
}: {
  data: {
    name: string;
    icon: JSX.Element;
  };
}) {
  return (
    <Stack>
      Name: {data.name}
      {data.icon}
    </Stack>
  );
}
