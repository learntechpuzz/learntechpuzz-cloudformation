import React, { Fragment } from 'react'
import { Row, Col, Card, Tab, Tabs, Nav } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import PdfViewer from './../../common/pdfviewer'
import LoadingSpinner from './../../common/spinner/loadingspinner';

const CourseDetails = (props) => {
    return (
        <Fragment>
            {props.loading ? <LoadingSpinner /> : null}
            {
                props.course != null ?
                    <Row>
                        <Col>
                            <Card style={{ width: '60rem' }}>
                                <Card.Body>
                                    <Card.Title>{props.course.title}<br />
                                        <StarRatings
                                            rating={props.rating}
                                            starDimension="20px"
                                            starSpacing="5px"
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name='rating'
                                        />
                                    </Card.Title>
                                    <Card.Text>
                                        {props.course.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                                <Tab eventKey="overview" title="What you'll learn">
                                    <br />
                                    <div dangerouslySetInnerHTML={{ __html: props.course.about }} />
                                </Tab>
                                <Tab eventKey="courseContents" title="Course Contents">
                                    <PdfViewer file={props.course.courseContentsFileName} />
                                </Tab>
                                <Tab eventKey="courseMaterials" title="Course Materials">
                                    <br />
                                    {
                                        props.courseMaterials != null ?
                                            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                                                <Row>
                                                    <Col sm={3}>
                                                        <Nav variant="pills" className="flex-column">
                                                            {props.courseMaterials.map((courseMaterial, idx) => {
                                                                return (
                                                                    <Nav.Item>
                                                                        <Nav.Link eventKey={idx}>{courseMaterial.tag}</Nav.Link>
                                                                    </Nav.Item>

                                                                )
                                                            })}
                                                        </Nav>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <Tab.Content>
                                                            {props.courseMaterials.map((courseMaterial, idx) => {
                                                                return (
                                                                    <Tab.Pane eventKey={idx}>
                                                                        <PdfViewer file={courseMaterial.fileName} />
                                                                    </Tab.Pane>
                                                                )
                                                            })}

                                                        </Tab.Content>
                                                    </Col>
                                                </Row>
                                            </Tab.Container>
                                            : null
                                    }
                                </Tab>
                                <Tab eventKey="studentFeedback" title="Student Feedback">
                                    <br />
                                    {props.studentFeedbacks.map((studentFeedback, idx) => {
                                        return (
                                            <Row key={idx}>
                                                <Card style={{ width: '60rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{studentFeedback.studentName}</Card.Title>
                                                        <StarRatings
                                                            rating={props.rating}
                                                            starDimension="20px"
                                                            starSpacing="5px"
                                                            starRatedColor="gold"
                                                            numberOfStars={5}
                                                            name='rating'
                                                        />
                                                        <Card.Text>
                                                        {studentFeedback.comments}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Row>
                                        )
                                    })}
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