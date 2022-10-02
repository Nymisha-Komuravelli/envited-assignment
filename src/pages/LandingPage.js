import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { Image } from "antd";
import LandingPageImage from "../assets/images/Landing page image.svg";
import { GiPartyPopper } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const { Title } = Typography;
  const history = useHistory();
  const location = useLocation();
    console.log(location);
  const onCreateEvent = () => {
      history.push("/create");
  }
  return (
    <div className="landing-page">
      <Row justify="center">
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div style={{ textAlign: "center" }}>
            <Title level={1} className="main-title">
              Imagine if <span className="title-highlight">Snapchat</span> had
              events.
            </Title>
            <Typography className="main-description">
              Easily host and share events with your friends across any social
              media.
            </Typography>
            <Image
              preview={{ visible: false }}
              width={200}
              src={LandingPageImage}
              //onClick={() => setVisible(true)}
            />
            <Button className="btn-create-event" onClick={onCreateEvent}>
              <GiPartyPopper className="btn-create-event-icon"/>
              Create Event
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
