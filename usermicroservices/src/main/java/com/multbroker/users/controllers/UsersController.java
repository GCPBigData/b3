package com.multbroker.users.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;
import javax.ws.rs.InternalServerErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.multbroker.models.UserEntity;
import com.multbroker.users.dto.ChangeEmailDTO;
import com.multbroker.users.dto.ChangePasswordDTO;
import com.multbroker.users.dto.LoginDto;
import com.multbroker.users.dto.UserDto;
import com.multbroker.users.exception.EmailJaRegistradoException;
import com.multbroker.users.exception.SenhaIncorretaException;
import com.multbroker.users.service.MailService;
import com.multbroker.users.service.UserService;
import com.multbroker.users.util.ApiError;

@RestController
@RequestMapping("/users")
public class UsersController {

	@Autowired
	private Environment env;

	@Autowired
	UserService userService;

	@Autowired
	MailService mailService;
	
	@RequestMapping(value="/changeemail", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> alterarEmail(@Valid @RequestBody ChangeEmailDTO dto) {
		
		List<String> erros = new ArrayList<String>();
		
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
		
		try {
		
		userService.alterarEmail(dto);	
		
		}catch(EmailJaRegistradoException e) {
			erros.add(e.getMessage());
		}
		
		if(!erros.isEmpty())
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		
		return ResponseEntity.accepted().body(true);
	}
	
	@RequestMapping(value="/changepassword", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> alterarSenha(@Valid @RequestBody ChangePasswordDTO dto) {
		
		List<String> erros = new ArrayList<String>();
		
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
		
		try {
		
		userService.alterarSenha(dto);	
		
		}catch (SenhaIncorretaException e) {
			erros.add(e.getMessage());
		}
		
		if(!erros.isEmpty())
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		
		return ResponseEntity.accepted().body(true);
	}
	
	@RequestMapping(value = "/findbyid/{id}", method = RequestMethod.GET)
	public UserEntity findById(@PathVariable("id") String id){
		
		return userService.findById(Long.parseLong(id));
	}

	// http://localhost:8011/users-ws/users/
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> createUser(@Valid @RequestBody UserDto userDTO){

		List<String> erros = new ArrayList<String>();
		
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);

		if (userDTO.getId() != null) {
			erros.add("Um novo usuário não pode ter id.");			
		} 
		
		
		if(!erros.isEmpty())
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
			
		
		UserEntity newUser = userService.createUser(userDTO);
		
		mailService.sendCreationEmail(newUser);
		
		return ResponseEntity.accepted().body(newUser);
	}

	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updateUser(@Valid @RequestBody UserDto userDTO){

		UserEntity user;

		List<String> erros = new ArrayList<String>();

		try {

			user = userService.updateUser(userDTO);

		} catch (Exception e) {

			erros.add(e.getLocalizedMessage());

			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		}

		return ResponseEntity.accepted().body(user);
	}
	
    /**
     * GET  /activate : activate the registered user.
     *
     * @param key the activation key
     * @throws RuntimeException 500 (Internal Server Error) if the user couldn't be activated
     */
    @GetMapping("/activate")
    public ResponseEntity<Object> activateAccount(@RequestParam(value = "key") String key) {
        if (!userService.activateRegistration(key)) {
            throw new InternalServerErrorException("Nao existe usuario para ativacao!");
        }
        
        return ResponseEntity.accepted().body("Usuario Ativado com Sucesso");
    }
    
	@PostMapping("/login")
	public ResponseEntity<Object> login(@Valid @RequestBody LoginDto login) {

		List<String> erros = new ArrayList<String>();

		UserEntity user = userService.login(login.getEmail(), login.getPassword());

		if (user == null) {

			erros.add("Credencias Inv�lidas");

		}
		
		if(user != null && !user.isActivated()) {
			
			erros.add("Usu�rio n�o ativado. por favor verifique seu email!");
			
		}
		
		if(!erros.isEmpty()) {
			ApiError apiError = new ApiError(HttpStatus.UNAUTHORIZED, "Erros", erros);
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		}

		return ResponseEntity.accepted().body(user);

	}
    
	@CrossOrigin(origins = "*")
	@GetMapping(path = "/status/check")
	public String status() {
		return "ACELERAAAAAAA";
	}
}
