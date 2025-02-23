"use client";

import { IconResolver } from "@/app/components/icon-resolvers/icon-resolver-with-import-all-icons";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack component={"ul"}>
      <li>
        Icon: People <IconResolver iconName={"People"} />
      </li>
      <li>
        Icon: AttachMoney <IconResolver iconName={"AttachMoney"} />
      </li>
      <li>
        Icon: Pix <IconResolver iconName={"Pix"} />
      </li>
    </Stack>
  );
}
