import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import logo from "./assets/logo.png";
import headbackground from "./assets/headbackground.png";
import { Layout, Menu, Typography, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

ReactDOM.render(
  <Layout className="layout">
    <section
      className="head"
      style={{ backgroundImage: `url(${headbackground})` }}
    >
      <div className="elevated">
        <div className="logowrap">
          <img src={logo} alt="seqtek business science" />
        </div>
        <div className="logobracket"></div>
        <Header className="clearboth">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Assessment</Menu.Item>
            <Menu.Item key="2">Engagement</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Title className="clearboth showcasetitle">
          YOUR <span className="seqgreen">DATA</span>
          <br />
          MADE MORE <span className="seqgreen">USEFUL</span>
        </Title>
        <Title level={2}>
          <span className="seqgreen showcasesubline">
            PROVEN ONBOARDING, EXECUTION, AND SUPPORT
          </span>
        </Title>
        <Title level={5}>
          Today, every business is a data business. If you are not actively
          <br />
          managing your data as a strategic asset it will become a liability.
        </Title>
        <Title level={5}>
          SeqTek Business Science's approach is simple, procedural and
          effective.
          <br />
          How interpreting data should be.
        </Title>
        <Title level={5}>
          We assess organizational business intelligence and analytics
          readiness,
          <br />
          enable our client-partners to manage analytics projects as a portfolio
          <br />
          and, most importantly, offer ongoing solution support to help hone and
          build value.
        </Title>
      </div>
      <div className="gradientoverlay"></div>
    </section>

    <section className="dimmed">
      <Row>
        <Col span={24}>
          <Title level={2}>Service Offerings</Title>
        </Col>
        <Col span={12}>
          <div className="minilogobracket"></div>
          <div className="logobracketwrap">
            <Row>
              <Col span={12}>
                <Title level={4}>Project</Title>
                <p>
                  Specific objectives to be determined and accomplishment. A
                  direct start to finish process.
                </p>
              </Col>
              <Col span={12}>
                <p>(some kind of illustration here)</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={12}>
          <div className="minilogobracket"></div>
          <div className="logobracketwrap">
            <Row>
              <Col span={12}>
                <Title level={4}>Plan</Title>
                <p>
                  More exploratory in nature, consistent progress and feedback
                  over time.
                </p>
              </Col>
              <Col span={12}>
                <p>(some kind of illustration here)</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>

    <section className="lightened">
      <Row>
        <Col span={24}>
          <Title level={2}>Assessment</Title>
          <p>
            In initiating either a project or service plan, profiling an
            organization's data and needs is crucial in determining direction
            and execution.
          </p>
        </Col>
        <Col span={6}>
          <p>(some kind of illustration here)</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Readiness Assessment</Title>
          <p>
            Our in-depth questionarre is the first step in getting an overview
            of data needs.
          </p>
        </Col>
        <Col span={6}>
          <Title level={4}>Organization Analysis</Title>
          <p>
            A further look helps to identify other opportunities for useful data
            interperetation.
          </p>
        </Col>
        <Col span={6}>
          <Title level={4}>Assessment/Analysis Output and Review</Title>
          <p>Direction is determined based off present data and discussion.</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Priority Determination</Title>
          <p>Urgency, value, and implementation considerations.</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Estimation</Title>
          <p>Clear, concise outline of services rendered.</p>
        </Col>
        <Col span={6}>
          <Title level={4}>Expectation Management</Title>
          <p>Maintaining scope. Work / Show process.</p>
        </Col>
        <Col span={6}>
          <p>(some kind of illustration here)</p>
        </Col>
      </Row>
    </section>

    <section className="dimmed">
      <Row>
        <Col span={24}>
          <Title level={2}>Engagement</Title>
        </Col>
        <Col span={8}>
          <Title level={4}>Onboarding</Title>
        </Col>
        <Col span={8}>
          <Title level={4}>Execution</Title>
        </Col>
        <Col span={8}>
          <Title level={4}>Support</Title>
        </Col>
      </Row>
    </section>

    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        {/* <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button> */}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}></Footer>
  </Layout>,
  document.getElementById("container")
);
