package com.teambravo.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teambravo.springboot.model.Form;

@Repository
public interface FormRepository extends JpaRepository<Form, Long> {
	//ArrayList<Type> getAllTypesByFormId(Long id);
}
