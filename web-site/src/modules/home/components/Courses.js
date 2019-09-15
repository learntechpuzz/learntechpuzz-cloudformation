import React, { Fragment } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import LoadingSpinner from './../../common/spinner/loadingspinner';

const Courses = (props) => {
    return (
        <Fragment>
            <Row>
                {props.loading ? <LoadingSpinner /> : null }
                {props.courses.map((course, idx) => {
                    return (
                        <Col key={idx} md={4}>
                            <Card style={{ width: '20rem', height: '26rem', padding: '1rem' }}>
                                <Card.Img variant="top" src={course.logoFileName} style={{ height: '10rem'}}/>
                                <Card.Body>
                                    <Card.Title style={{ height: '4rem'}}>{course.title}</Card.Title>
                                    <Card.Text style={{ height: '4rem'}}>
                                        {course.summary}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => props.viewCourseDetails(course.courseId)}>Get Started</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                })}
            </Row>
        </Fragment>
    );
}
export default Courses;
