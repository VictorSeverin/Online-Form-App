package com.teambravo.springboot.model;

import java.util.Date;
import java.text.SimpleDateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "submissions")
public class Submission {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "formId")
	private Long formId;
	
	@Column(name = "submissionDate")
	private Date submissionDate;
	
	@Column(name = "data")
	public String data;
	
	
	public Submission() {


	}

	public Submission(Date submissionDate, String data) {
		super();
		this.submissionDate = submissionDate;
		this.data = data;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public Long getFormId() {
		return formId;
	}


	public void setFormId(Long formId) {
		this.formId = formId;
	}

	public Date getSubmissionDate() {
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MMM/yyyy");
		dateFormat.format(date);
		return date;
	}

	public void setSubmissionDate(Date submissionDate) {
		this.submissionDate = submissionDate;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
	
}