import React, { Fragment } from 'react'
import { Row, Col, Card, Tab, Tabs, Nav } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import PdfViewer from './../../common/pdfviewer'
const CourseDetails = (props) => {
    return (
        <Fragment>
            {
                props.course != null ?
                    <Row>
                        <Col>
                            <Card style={{ width: '60rem' }}>
                                <Card.Body>
                                    <Card.Title>{props.course.title}<br /><StarRatings
                                        rating={props.rating}
                                        starDimension="20px"
                                        starSpacing="5px"
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        name='rating'
                                    /></Card.Title>
                                    <Card.Text>
                                        {props.course.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                                <Tab eventKey="overview" title="What you'll learn">
                                    <br />
                                    {props.course.about}
                                </Tab>
                                <Tab eventKey="courseContents" title="Course Contents">
                                    <PdfViewer file={props.course.courseContentsFileName} />
                                </Tab>
                                <Tab eventKey="courseMaterials" title="Course Materials">
                                    <br />
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <Row>
                                            <Col sm={3}>
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col sm={9}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Tab>
                                <Tab eventKey="studentFeedback" title="Student Feedback">
                                    <br />
                                    <Row>
                                        <Card style={{ width: '60rem' }}>
                                            <Card.Body>
                                                <Card.Title>Prasanna</Card.Title>
                                                <Card.Text><StarRatings
                                                    rating={props.rating}
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                    starRatedColor="gold"
                                                    numberOfStars={5}
                                                    name='rating'
                                                /></Card.Text>
                                                <Card.Text>
                                                    First of all I thanks for your wonderful guidance and support for this entire course journey.I am confirming that my AWS course got completed successfully on 31st July 2019 at Besant Technologies institute under your training and you have covered all the topics
                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Card style={{ width: '60rem' }}>
                                            <Card.Body>
                                                <Card.Title>Ramji</Card.Title>
                                                <Card.Text><StarRatings
                                                    rating={props.rating}
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                    starRatedColor="gold"
                                                    numberOfStars={5}
                                                    name='rating'
                                                /></Card.Text>
                                                <Card.Text>
                                                    First of all I thank you for the training given to us on AWS, the session was very useful from the beginning till last day of the course and you were very helpful and flexible in all aspect throughout the training. Thank you once again.
                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>

                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    : null
            }

        </Fragment>
    );
}

export default CourseDetails;