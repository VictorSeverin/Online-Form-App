package com.teambravo.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teambravo.springboot.model.Type;

@Repository
public interface TypeRepository extends JpaRepository<Type, Long> {
	
}
