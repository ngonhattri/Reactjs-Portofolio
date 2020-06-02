import React from "react";
import { Card } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Profile = () => {
  return (
    <>
      <Card
        cover={
          <img
            alt="Ngô Nhật Trí"
            src="https://res.cloudinary.com/nhattri1503/image/upload/v1591084058/admin_hrcsze.jpg"
          />
        }
        actions={[
          <CloudDownloadOutlined
            style={{ fontSize: "30px" }}
            key="download"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Lnful81XgpQVjDQCHg5TzruH7MoeS_WM/view?usp=sharing",
                "_blank"
              )
            }
          />,
        ]}
      >
        <Meta title="Ngô Nhật Trí" />
        <Meta style={{ fontWeight: "bold" }} description="Software Engineer" />
      </Card>
    </>
  );
};
export default Profile;
