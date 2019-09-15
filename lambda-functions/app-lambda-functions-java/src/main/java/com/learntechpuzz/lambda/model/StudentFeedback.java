package com.learntechpuzz.lambda.model;

import java.io.Serializable;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "StudentFeedbacks")
public class StudentFeedback implements Serializable {

	private static final long serialVersionUID = 1L;

	@DynamoDBHashKey(attributeName = "ID")
	private int id;

	@DynamoDBRangeKey(attributeName = "CourseID")
	private int courseId;

	@DynamoDBAttribute(attributeName = "StudentName")
	private String studentName;

	@DynamoDBAttribute(attributeName = "Comments")
	private String comments;

	public StudentFeedback() {
		super();
	}

	public StudentFeedback(int id, int courseId, String studentName, String comments) {
		super();
		this.id = id;
		this.courseId = courseId;
		this.studentName = studentName;
		this.comments = comments;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "StudentFeedback [id=" + id + ", courseId=" + courseId + ", studentName=" + studentName + ", comments="
				+ comments + "]";
	}

}
