package com.teambravo.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teambravo.springboot.exception.ResourceNotFoundException;
import com.teambravo.springboot.model.Type;
import com.teambravo.springboot.repository.TypeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProjectController {

	@Autowired
	private TypeRepository typeRepository;
	
	// get all types
	
	@GetMapping("/types")
	public List<Type> getAllTypes() {
		return typeRepository.findAll();
	}
	
	// create type rest api
	@PostMapping("/types")
	public Type createType(@RequestBody Type type) {
		return typeRepository.save(type);
	}
	
	// get type by id rest api
	@GetMapping("/types/{id}")
	public ResponseEntity<Type> getTypeById(@PathVariable Long id, @RequestBody Type typeDetails) {
		
		Type type = typeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Type does not exist with id: " + id));
		type.setType(typeDetails.getType());
		type.setLabel(typeDetails.getLabel());
		type.setPlaceholder(typeDetails.getPlaceholder());
		
		Type updatedType = typeRepository.save(type);
		return ResponseEntity.ok(updatedType);
	}
	@PutMapping("/types/{id}")
	public ResponseEntity<Type> updateType(@PathVariable Long id, @RequestBody Type typeDetails) {
	
		Type type = typeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Type not exist with id :" + id));
		type.setType(typeDetails.getType());
		type.setLabel(typeDetails.getLabel());
		type.setPlaceholder(typeDetails.getPlaceholder());
		
		Type updatedType = typeRepository.save(type);
		return ResponseEntity.ok(updatedType);
	}
}
