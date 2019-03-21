import React, { Component } from 'react'
import '../../App.css'
import { PageHeader, Tag, Row, Col } from 'antd';




const Description = ({ term, children, span = 12 }) => (
    <Col span={span}>
        <div className="description">
            <div className="term">{term}</div>
            <div className="detail">{children}</div>
        </div>
    </Col>
)


const content = (
    <Row span={24}>
        <Description term="Battery">Last Clean {' '}</Description>
        <Description term={<Tag color="green">100%</Tag>}>
            <a>2017-01-10</a> <br />
            <a>20:03:10</a>
        </Description>
    </Row>
);

const extraContent = (
    <Row>
        <Row>
            <Description term="Status "></Description>
            <Description term={"off"}>
            </Description>
        </Row>
    </Row>
);



class Statistics extends Component {

    render() {
        return (
            <PageHeader
                title="Vacuumer"
                subTitle=""
                extra={[
                ]}
                className={"stat"}
            >
                <div className="wrap">
                    <div className="content padding">{content}</div>
                    <div className="extraContent">{extraContent}</div>
                </div>
            </PageHeader>
        )
    }
}

export default Statistics
