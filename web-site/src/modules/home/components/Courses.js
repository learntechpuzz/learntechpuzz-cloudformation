import React, { Fragment } from 'react'
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'
import AWSCloudLogo from './../AWSCloud.png'

const Courses = (props) => {
    return (
        <Fragment>
            <Row>
                {props.courses.map((course, idx) => {
                    return (
                        <Col key={idx}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={AWSCloudLogo} />
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>
                                        {course.summary}
                                    </Card.Text>
                                    {
                                        props.loading.includes(idx) ?
                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                    </Button>
                                            : <Button variant="primary" onClick={() => props.enrollHandler(idx)}>Get Started</Button>

                                    }
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
