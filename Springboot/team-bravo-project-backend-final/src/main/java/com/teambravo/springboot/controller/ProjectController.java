package com.teambravo.springboot.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teambravo.springboot.exception.ResourceNotFoundException;
import com.teambravo.springboot.model.Form;
import com.teambravo.springboot.model.Submission;
import com.teambravo.springboot.model.Type;
import com.teambravo.springboot.repository.FormRepository;
import com.teambravo.springboot.repository.SubmissionRepository;
import com.teambravo.springboot.repository.TypeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProjectController {

	@Autowired
	private TypeRepository typeRepository;
	
	@Autowired
	private FormRepository formRepository;
	
	@Autowired 
    private SubmissionRepository submissionRepository;
	
	@PostMapping("/forms")
	public Form createForm(@RequestBody Form form) {
		return formRepository.save(form);
	}
	
	@GetMapping("/forms")
	public List<Form> getAllForms() {
		return formRepository.findAll();
	}
	
	@PutMapping("/forms/{id}")
	public ResponseEntity<Form> updateForm(@PathVariable Long id, @RequestBody Form formDetails) {
		Form form = formRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form does not exist with id :" + id));
		form.setName(formDetails.getName());
		form.setDescription(formDetails.getDescription());
		form.setMessage(formDetails.getMessage());
		Form updatedForm = formRepository.save(form);
		return ResponseEntity.ok(updatedForm);
	}
	
	@PostMapping("/forms/{id}/types")
	public Type addTypeToForm(@PathVariable Long id, @RequestBody Type type) {
		Form form = formRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form does not exist with id :" + id));
		List<Type> types = new ArrayList<Type>();
		typeRepository.findAll().forEach(types::add);
		//for (int i = 0; i < types.size(); i++) {
		//	if (types.get(i).getPosition() == type.getPosition()) {
		//		type.setPosition(types.get(i).getPosition()+1);
		//	}
		//}
		type.setFormId(form.getId());
		return typeRepository.save(type);
	}
	
	@GetMapping("forms/{id}")
	public ResponseEntity<List<Type>> getAllTypesByFormId(@PathVariable Long id) {

		Form form = formRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form does not exist with id: " + id));
		List<Type> types = new ArrayList<Type>();
		typeRepository.findAll().forEach(types::add);
		List<Type> newTypes = new ArrayList<Type>();
		for (int i = 0; i < types.size(); i++) {
			if (types.get(i).getFormId() == form.getId()) {
				newTypes.add(types.get(i));
			}
		}
		return ResponseEntity.ok(newTypes);
	}
	
	@PutMapping("/forms/{id}/types/{typeId}")
	public ResponseEntity<Type> updateType(@PathVariable Long id, @PathVariable Long typeId, @RequestBody Type typeDetails) {
		Type type = typeRepository.findById(typeId)
				.orElseThrow(() -> new ResourceNotFoundException("Type does not exist with id :" + id));
		List<Type> types = new ArrayList<Type>();
		typeRepository.findAll().forEach(types::add);
		type.setLabel(typeDetails.getLabel());
		type.setPlaceholder(typeDetails.getPlaceholder());
		type.setRequired(typeDetails.getRequired());
		type.setTitle(typeDetails.getTitle());
		type.setOptions(typeDetails.getOptions());
		//for (int i = 0; i < types.size(); i++) {
		//	if (types.get(i).getPosition() == typeDetails.getPosition()) {
		//		types.get(i).setPosition(type.getPosition());
		//	}
		//}
		//type.setPosition(typeDetails.getPosition());
		Type updatedType = typeRepository.save(type);
		return ResponseEntity.ok(updatedType);
	}
	
	@DeleteMapping("/forms/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteForm(@PathVariable Long id) {
		Form form = formRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form does not exist with id: " + id));
		List<Type> types = new ArrayList<Type>();
		typeRepository.findAll().forEach(types::add);
		List<Type> newTypes = new ArrayList<Type>();
		for (int i = 0; i < types.size(); i++) {
			if (types.get(i).getFormId() == form.getId()) {
				typeRepository.delete(types.get(i));
				newTypes.remove(types.get(i));
			}
		}
		formRepository.delete(form);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/forms/{id}/types/{typeId}")
	public ResponseEntity<Map<String, Boolean>> deleteType(@PathVariable Long id, @PathVariable Long typeId) {
		Type type = typeRepository.findById(typeId)
				.orElseThrow(() -> new ResourceNotFoundException("Type does not exist with id :" + id));
		typeRepository.delete(type);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("forms/{id}/submission")
	public Submission submitResponse(@PathVariable Long id, @RequestBody String jo) {
		Submission submission = new Submission();
		submission.setFormId(id);
		submission.setData(jo);
		submission.setSubmissionDate(submission.getSubmissionDate());
		return submissionRepository.save(submission);	
	}
	
	@GetMapping("forms/{id}/submission")
	public ResponseEntity<List<Submission>> getAllSubmissions(@PathVariable Long id) {
		Form form = formRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Form does not exist with id: " + id));
		List<Submission> submissions = new ArrayList<Submission>();
		submissionRepository.findAll().forEach(submissions::add);
		List<Submission> newSubmissions = new ArrayList<Submission>();
		for (int i = 0; i < submissions.size(); i++) {
			if (submissions.get(i).getFormId() == form.getId()) {
				newSubmissions.add(submissions.get(i));
			}
		}
		return ResponseEntity.ok(newSubmissions);
	}
	
}
