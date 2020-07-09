package com.multbroker.users.dto;

import java.io.Serializable;

public class ChangePasswordDTO{

	
	private String id;

	private String senhaAntiga;

	private String senhaNova;
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSenhaAntiga() {
		return senhaAntiga;
	}

	public void setSenhaAntiga(String senhaAntiga) {
		this.senhaAntiga = senhaAntiga;
	}

	public String getSenhaNova() {
		return senhaNova;
	}

	public void setSenhaNova(String senhaNova) {
		this.senhaNova = senhaNova;
	}

 }
