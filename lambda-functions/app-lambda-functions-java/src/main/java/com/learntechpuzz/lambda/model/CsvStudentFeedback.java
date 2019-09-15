package com.learntechpuzz.lambda.model;

import com.opencsv.bean.CsvBindByName;

public class CsvStudentFeedback {

	@CsvBindByName(column = "ID", required = true)
	private int id;

	@CsvBindByName(column = "CourseID", required = true)
	private int courseId;

	@CsvBindByName(column = "StudentName", required = true)
	private String studentName;

	@CsvBindByName(column = "Comments", required = true)
	private String comments;

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

}
