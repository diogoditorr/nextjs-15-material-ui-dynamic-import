"use client";

import { IconResolver } from "@/app/components/icon-resolvers/icon-resolver-import-dynamic-with-webpack";
import { Stack } from "@mui/material";
import { Suspense } from "react";

export default function Page() {
  return (
    <Stack component={"ul"}>
      <li>
        Icon: People{" "}
        <Suspense fallback={"loading"}>
          <IconResolver iconName={"People"} />
        </Suspense>
      </li>
      <li>
        Icon: HomeRounded{" "}
        <Suspense fallback={"loading"}>
          <IconResolver iconName={"HomeRounded"} />
        </Suspense>
      </li>
      {/* <li>
        Icon: PeopleOutlineOutlined{" "}
        <IconResolver iconName={"PeopleOutlineOutlined"} />
      </li>
      <li>
        Icon: AttachMoney <IconResolver iconName={"AttachMoney"} />
      </li>
      <li>
        Icon: Pix <IconResolver iconName={"Pix"} />
      </li> */}
    </Stack>
  );
}
