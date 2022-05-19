package com.teambravo.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "types")
public class Type {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "formId")
	private long formId;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "label")
	private String label;
	
	@Column(name = "placeholder")
	private String placeholder;
	
	@Column(name = "required")
	private boolean required;
	
	@Column(name = "options")
	private String[] options = new String[4];
	
	//@Column(name = "position")
	//private int position;
	
	public Type() {
		
	}
	
	public Type(String title, String label, String placeholder, boolean required, String[] options) {
		super();
		this.title = title;
		this.label = label;
		this.placeholder = placeholder;
		this.required = required;
		this.options = options;
		//this.position = position;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public long getFormId() {
		return formId;
	}

	public void setFormId(long formId) {
		this.formId = formId;
	}


	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getPlaceholder() {
		return placeholder;
	}

	public void setPlaceholder(String placeholder) {
		this.placeholder = placeholder;
	}
	
	public boolean getRequired() {
		return required;
	}
	
	public void setRequired(boolean required) {
		this.required = required;
	}
	
	public String[] getOptions() {
		return options;
	}
	
	public void setOptions(String[] options) {
		this.options = options;
	}

	//public int getPosition() {
	//	return position;
	//}

	//public void setPosition(int position) {
	//	this.position = position;
	//}
	
	
}
