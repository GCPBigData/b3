package com.multbroker.users.dto;

import java.io.Serializable;
import java.time.Instant;

public class UserDto implements Serializable {
		
	/**
	 * 
	 */
	private static final long serialVersionUID = -429138879099535364L;


    private Long id;

    private String password;

    private String nomeCompleto;

    private String email;

    private String cpf;

    private boolean activated = false;

    private String imageUrl;
    
    private String activationKey;
    
    private String resetKey;

    private Instant resetDate = null;
    
    private String langKey;
    
    

	public String getActivationKey() {
		return activationKey;
	}

	public void setActivationKey(String activationKey) {
		this.activationKey = activationKey;
	}

	public String getResetKey() {
		return resetKey;
	}

	public void setResetKey(String resetKey) {
		this.resetKey = resetKey;
	}

	public Instant getResetDate() {
		return resetDate;
	}

	public void setResetDate(Instant resetDate) {
		this.resetDate = resetDate;
	}

	public String getLangKey() {
		return langKey;
	}

	public void setLangKey(String langKey) {
		this.langKey = langKey;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
		

}
