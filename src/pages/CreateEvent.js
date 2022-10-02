import React, { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import { Image } from "antd";
import { Link, useHistory } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";
import moment from "moment";

const CreateEvent = () => {
  const { Title } = Typography;
  const history = useHistory();
  const { RangePicker } = DatePicker;

  const [event, setEvent] = useState({
    name: "",
    host: "",
    fromDate: moment(),
    toDate: moment(),
    venue: "",
  });

  const onCreateEvent = () => {
    history.push({
      pathname: "/event",
      state: {event: JSON.stringify(event)}
    });
  };
  const onEventInputChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };
  const onEventDateChange = (dates) => {
    console.log(moment(dates[0]));
    setEvent({
      ...event,
      fromDate: dates[0],
      toDate: dates[1],
    });
  };
  return (
    <div className="create-event-page-wrapper">
      <pre>{JSON.stringify(event)}</pre>
      <Row justify="center">
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div style={{ textAlign: "center" }}>
            <Title level={4} className="main-title create-event-title">
              Create Event
            </Title>
            <Form layout="vertical">
              <Form.Item>
                <Input
                  placeholder="Name of the Event"
                  className="create-event-input"
                  name="name"
                  value={event.name}
                  onChange={onEventInputChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Host of the Event"
                  className="create-event-input"
                  name="host"
                  value={event.host}
                  onChange={onEventInputChange}
                />
              </Form.Item>
              <Form.Item>
                <RangePicker
                  showTime
                  name="date"
                  onChange={onEventDateChange}
                  className="create-event-input"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Venue of the Event"
                  className="create-event-input"
                  name="venue"
                  value={event.venue}
                  onChange={onEventInputChange}
                />
              </Form.Item>
               {/* <Link
                to={{
                  pathname: `/event`,
                  state: { eventDetails: JSON.stringify(event) },
                }}
                className="btn-create-event"
                onClick={onCreateEvent}
              >
                <GiPartyPopper className="btn-create-event-icon" />
                Create Event
              </Link> */}
              <Button className="btn-create-event" onClick={onCreateEvent}>
                <GiPartyPopper className="btn-create-event-icon" />
                Create Event
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateEvent;
