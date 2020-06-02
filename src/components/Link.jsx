import React from "react";
import { Card, Button } from "antd";
import networks from "../data/networks.json";
import * as Icon from "@ant-design/icons";

const Link = () => {
  return (
    <>
      <Card title="Social Networks">
        {networks.map((network) => (
          <p key={network.id}>
            <b>{network.name}</b>
            <Button
              style={{
                float: "right",
                background: network.color,
                border: "none",
              }}
              type="primary"
              icon={<Icon.LinkOutlined />}
              href={network.link}
              target="_blank"
            >
              Link
            </Button>
          </p>
        ))}
      </Card>
    </>
  );
};
export default Link;
