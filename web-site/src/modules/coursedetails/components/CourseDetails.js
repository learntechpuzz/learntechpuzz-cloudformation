import React, { Fragment } from 'react'
import { Row, Col, Card, Tab, Tabs, ListGroup, Nav } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import PdfViewer from './../../common/pdfviewer'
const CourseDetails = (props) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <Card style={{ width: '60rem' }}>
                        <Card.Body>
                            <Card.Title>Ultimate AWS Certified Solutions Architect Associate<br /><StarRatings
                                rating={props.rating}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                            /></Card.Title>
                            <Card.Text>
                                Complete AWS Certified Solutions Architect Associate Training!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                        <Tab eventKey="overview" title="What you'll learn">
                            <br />
                            <ListGroup>
                                <ListGroup.Item>Pass the AWS Certified Solutions Architect Associate Certification</ListGroup.Item>
                                <ListGroup.Item>Perform Real-World Solution Architecture on AWS</ListGroup.Item>
                                <ListGroup.Item>Learn AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)</ListGroup.Item>
                                <ListGroup.Item>Learn Serverless Fundamentals (Lambda, DynamoDB, Cognito, API Gateway)</ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="courseContents" title="Course Contents">
                            <div>
                                <PdfViewer file="https://learntechpuzz.s3.amazonaws.com/AWSCourseContent.pdf" />
                            </div>
                        </Tab>
                        <Tab eventKey="courseMaterials" title="Course Materials">
                            <br/>
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
                                                <div>
                                                    <PdfViewer file="https://learntechpuzz.s3.amazonaws.com/AWSCourseContent.pdf" />
                                                </div>
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
                            <Card style={{ width: '60rem' }}>
                                <Card.Body>
                                    <Card.Title>Raj Kumar</Card.Title>
                                    <Card.Text><StarRatings
                                        rating={props.rating}
                                        starDimension="20px"
                                        starSpacing="5px"
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        name='rating'
                                    /></Card.Text>
                                    <Card.Text>
                                        Only one word Awesome :) I have passed the AWS Certified Solutions Architect Associate Exam. This course practice test series gave me a lot of confidence to pass the exam. Pattern was same but all questions were unique and different from the questions in these test series. Now I'm waiting for my certificate to be deliver in my address. Thanks.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Fragment>
    );
}

export default CourseDetails;