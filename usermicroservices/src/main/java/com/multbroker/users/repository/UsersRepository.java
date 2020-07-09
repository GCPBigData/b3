package com.multbroker.users.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.multbroker.models.UserEntity;

public interface UsersRepository extends CrudRepository<UserEntity, Long> {
	
    String USERS_BY_LOGIN_CACHE = "usersByLogin";

    String USERS_BY_EMAIL_CACHE = "usersByEmail";

    String USERS_BY_CPF_CACHE = "usersByCpf";
	
	UserEntity findByEmail(String email);
	
    Optional<UserEntity> findOneByEmailIgnoreCase(String email);
    
    Optional<UserEntity> findOneByActivationKey(String activationKey);

    Optional<UserEntity> findOneByResetKey(String resetKey);
    
    Optional<UserEntity> findOneByEmailAndEncryptedPassword(String email, String encryptedPassword);
	

}
