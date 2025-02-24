import { HomeRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { ProfileInformation } from "./profile-information";

export default async function Page() {
  const dataObject = {
    name: "Lorem Ipsum",
    icon: (
      <HomeRounded
        sx={{
          fill: "red",
          color: "red",
        }}
      />
    ),
  };

  return (
    <Stack component={"ul"}>
      <li>
        <ProfileInformation data={dataObject} />
      </li>
      {/* <li>
        Icon: HomeRounded{" "}
        <Suspense fallback={"loading"}>
          <IconResolver iconName={"HomeRounded"} />
        </Suspense>
      </li>
      <li>
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
