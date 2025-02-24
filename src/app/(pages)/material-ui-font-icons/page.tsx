"use client";

import { Icon, Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack component={"ul"}>
      <li>
        Icon: People <Icon color="info">people</Icon>
      </li>
      <li>
        Icon: AttachMoney <Icon color="secondary">attach_money</Icon>
      </li>
      <li>
        Icon: Pix <Icon color="primary">pix</Icon>
      </li>
      <li>
        Icon: star <Icon color="primary">star</Icon>
      </li>
    </Stack>
  );
}
