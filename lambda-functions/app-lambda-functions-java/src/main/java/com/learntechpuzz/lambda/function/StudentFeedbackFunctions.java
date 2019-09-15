package com.learntechpuzz.lambda.function;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.learntechpuzz.lambda.dynamodb.DynamoDBManager;
import com.learntechpuzz.lambda.model.StudentFeedback;

public class StudentFeedbackFunctions {

	private static final DynamoDBMapper mapper = DynamoDBManager.mapper();

	public void findStudentFeedbacksByCourseID(InputStream request, OutputStream response, Context context) {
		context.getLogger().log("\nCalling findStudentFeedbacksByCourseID function");
		JsonParser parser = new JsonParser();
		JsonObject inputObj = null;
		try {
			inputObj = parser.parse(IOUtils.toString(request, "UTF-8")).getAsJsonObject();
			context.getLogger().log("\ninputObj: " + inputObj);
			String courseId = inputObj.get("courseId").getAsString();
			Map<String, AttributeValue> eav = new HashMap<>();
			eav.put(":courseId", new AttributeValue().withN(courseId));
			DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
					.withFilterExpression("CourseID = :courseId").withExpressionAttributeValues(eav);
			List<StudentFeedback> studentFeedbacks = mapper.scan(StudentFeedback.class, scanExpression);
			List<StudentFeedback> sortedStudentFeedbacks = new LinkedList<>();
			sortedStudentFeedbacks.addAll(studentFeedbacks);
			sortedStudentFeedbacks.sort((e1, e2) -> e1.getId() <= e2.getId() ? -1 : 1);
			context.getLogger().log("\nsortedStudentFeedbacks: " + sortedStudentFeedbacks);
			output(sortedStudentFeedbacks, response, context);

		} catch (Exception e) {
			System.err.println("findStudentFeedbacksByCourseID failed.");
			System.err.println(e.getMessage());
		}

	}

	protected Gson getGson() {
		return new GsonBuilder().setPrettyPrinting().create();
	}

	protected void output(Object out, OutputStream response, Context context) {
		String output = getGson().toJson(out);
		context.getLogger().log("\noutput: " + output);
		try {
			IOUtils.write(output, response, "UTF-8");
		} catch (final IOException e) {
			context.getLogger().log("\nError while writing response" + e.getMessage());
		}

	}

}
