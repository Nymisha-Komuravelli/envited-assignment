import { Row, Col, Typography } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BirthdayCakeImage from "../assets/images/Birthday cake.png";
import { BiCalendar } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import Column from "antd/lib/table/Column";

const Event = () => {
  const { Title } = Typography;
  const location = useLocation();
  const [event, setEvent] = useState();
  const { name, host, fromDate, toDate, venue } = location?.state?.event;
  console.log(JSON.parse(location?.state?.event));
  useEffect(() => {
    setEvent(JSON.parse(location?.state?.event));
  }, [location?.state?.event]);

  return (
    <div>
      {/* <pre>{JSON.stringify(event)}</pre> */}
      <Row align="middle">
        <Col
          xs={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div>
            <img src={BirthdayCakeImage} alt="" className="event-image" />
            <Title level={4} className="main-title create-event-title" style={{marginBottom: 0}}>
              {event?.name}
            </Title>
            <Typography className="create-event-desc">{event?.host}</Typography>
            <Row align= "middle">
                <Col span={4}><div style={{textAlign: "center"}}><BiCalendar style={{fontSize: "30px"}}/></div></Col>
                <Col span={20}><div>
                <Title level={5} className="event-from-date" style={{marginBottom: 0}}>
              {event?.fromDate}
            </Title>
                <Title level={5} className="event-to-date" style={{marginTop: 0}}>
              {event?.toDate}
            </Title>
                    </div></Col>
            </Row>
            <br/>
            <Row>
            <Col span={4}><div style={{textAlign: "center"}}><GrLocation style={{fontSize: "30px"}}/></div></Col>
                <Col span={20}><div>
                <Title level={5} className="event-to-date">
              {event?.venue}
            </Title>
                    </div></Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Event;
