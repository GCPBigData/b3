package com.multbroker.users.service;

import java.time.Instant;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.multbroker.models.UserEntity;
import com.multbroker.users.dto.ChangeEmailDTO;
import com.multbroker.users.dto.ChangePasswordDTO;
import com.multbroker.users.dto.UserDto;
import com.multbroker.users.exception.EmailJaRegistradoException;
import com.multbroker.users.exception.SenhaIncorretaException;
import com.multbroker.users.repository.UsersRepository;
import com.multbroker.users.util.RandomUtil;

@Service
public class UserService {

	UsersRepository repository;

	BCryptPasswordEncoder bCryptPasswordEncoder;

	private final PasswordEncoder passwordEncoder;

	@Autowired
	public UserService(UsersRepository repository,BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.repository = repository;
		this.passwordEncoder = bCryptPasswordEncoder;
	}

	public UserEntity createUser(UserDto userDTO) {
		UserEntity user = new UserEntity();
		
		user.setCpf(userDTO.getCpf());
		
		user.setNomeCompleto(userDTO.getNomeCompleto());
		
		user.setEmail(userDTO.getEmail().toLowerCase());
		
		user.setImageUrl(userDTO.getImageUrl());
        
		if (userDTO.getLangKey() == null) {
            user.setLangKey(com.multbroker.users.util.Constants.DEFAULT_LANGUAGE); // default language
        } else {
            user.setLangKey(userDTO.getLangKey());
        }
        
		user.setResetKey(RandomUtil.generateResetKey());
        
		user.setResetDate(Instant.now());
        
		user.setActivated(true);
        
		user.setActivationKey(RandomUtil.generateActivationKey());
		
		String encryptedPassword = passwordEncoder.encode(userDTO.getPassword());
		
		user.setEncryptedPassword(encryptedPassword);
		
		user.setActivated(false);
		
		System.out.println("ACTIVATION KEY="+user.getActivationKey());
		
		repository.save(user);
		
		return user;
	}

	

	public UserEntity findById(Long id) {
		return repository.findById(id).get();
	}

	public UserEntity updateUser(UserDto userDto) {
		
    	UserEntity user = findById(userDto.getId());
    	
    	user.setNomeCompleto(userDto.getNomeCompleto());		
		
		return repository.save(user);
	}
	
	public Boolean activateRegistration(String key) {
		UserEntity user = repository.findOneByActivationKey(key).get();

		if (user != null) {
			user.setActivated(true);
			repository.save(user);
			return true;
		} else {
			return false;
		}

	}

    public Optional<UserEntity> completePasswordReset(String newPassword, String key) {
        return repository.findOneByResetKey(key)
            .filter(user -> user.getResetDate().isAfter(Instant.now().minusSeconds(86400)))
            .map(user -> {
                user.setEncryptedPassword(passwordEncoder.encode(newPassword));
                user.setResetKey(null);
                user.setResetDate(null);
                return user;
            });
    }

	public UserEntity login(String email, String password) {
				
		UserEntity user =  repository.findOneByEmailIgnoreCase(email).get();
		
        String currentEncryptedPassword = user.getEncryptedPassword();
        
        if (!passwordEncoder.matches(password, currentEncryptedPassword)) {
            return null;
        }
        
        return user;
		
	}
	
	public void alterarSenha(ChangePasswordDTO dto) throws  SenhaIncorretaException{
		
		UserEntity user = repository.findById(Long.parseLong(dto.getId())).get();
		
		 String currentEncryptedPassword = user.getEncryptedPassword();
	        
	        if (!passwordEncoder.matches(dto.getSenhaAntiga(), currentEncryptedPassword)) {
	            throw new SenhaIncorretaException("Senha Invalida");
	        }
		
		String encryptedPassword = passwordEncoder.encode(dto.getSenhaNova());
		
		user.setEncryptedPassword(encryptedPassword);		
		
		repository.save(user);
		
	}
    
	public void alterarEmail(ChangeEmailDTO dto)throws EmailJaRegistradoException {
		
		if(repository.findOneByEmailIgnoreCase(dto.getNovoEmail()).isPresent()) {
			throw new EmailJaRegistradoException("Email j� registrado");			
		}
		
		UserEntity user = repository.findById(Long.parseLong(dto.getId())).get();
		
		user.setEmail(dto.getNovoEmail());
		
		repository.save(user);		
		
	}
    
	

	

}
