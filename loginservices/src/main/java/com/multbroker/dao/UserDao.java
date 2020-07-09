package com.multbroker.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.multbroker.model.Users;

@Repository
public interface UserDao extends CrudRepository<Users, Integer> {
	
	Users findByUsername(String username);
	
}