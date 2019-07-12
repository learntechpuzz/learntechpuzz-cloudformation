import React, { Fragment } from 'react'
import { Row, Col, Card, Badge, Tab, Tabs, ListGroup } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const CourseDetails = (props) => {

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card style={{ width: '60rem' }}>
                        <Card.Body>
                            <Card.Title>Ultimate AWS Certified Solutions Architect Associate
                            <Badge variant="primary">
                                    <StarRatings
                                        rating={props.rating}
                                        starDimension="20px"
                                        starSpacing="5px"
                                        starRatedColor="white"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </Badge></Card.Title>
                            <Card.Text>
                                Complete AWS Certified Solutions Architect Associate Training!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                        <Tab eventKey="overview" title="What you'll learn">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Pass the AWS Certified Solutions Architect Associate Certification</ListGroup.Item>
                                <ListGroup.Item>Perform Real-World Solution Architecture on AWS</ListGroup.Item>
                                <ListGroup.Item>Learn AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)</ListGroup.Item>
                                <ListGroup.Item>Learn Serverless Fundamentals (Lambda, DynamoDB, Cognito, API Gateway)</ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="courseContents" title="Course Contents">
                            <div>
                                <Document
                                    file="https://learntechpuzz.s3.amazonaws.com/samplePDF.pdf"
                                    onLoadSuccess={props.onDocumentLoadSuccess}
                                >
                                <Page pageNumber={props.pageNumber} />
                                </Document>
                                <p>Page {props.pageNumber} of {props.numPages}</p>
                            </div>
                        </Tab>
                        <Tab eventKey="studentFeedback" title="Student Feedback">
                            <p>Student Feedback</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Fragment>
    );
}

export default CourseDetails;