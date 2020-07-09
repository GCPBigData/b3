package com.multbroker.models;


import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;



/**
 * 
 * Entidade responsável pelos dados de usuário
 * 
 * @author fred
 * @email  dfredmota@gmail.com
 *
 */
@Entity
@Table(name="users",schema = "multbroker")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserEntity implements Serializable {
	
	private static final long serialVersionUID = 7495355226884271607L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Long id;

    @Column(name = "password_hash", length = 60, nullable = false)
    private String encryptedPassword;

    @Column(name = "nome_completo", length = 50)
    private String nomeCompleto;

    @Column(length = 254, unique = true)
    private String email;

    @Column(length = 11, unique = true)
    private String cpf;

    @Column(nullable = false)
    private boolean activated = false;

    @Column(name = "image_url", length = 256)
    private String imageUrl;
    
    @Column(name = "activation_key", length = 20)
    private String activationKey;
    
    @Column(name = "reset_key", length = 20)
    private String resetKey;

    @Column(name = "reset_date")
    private Instant resetDate = null;
    
    @Column(name = "lang_key", length = 6)
    private String langKey;
     
    
	public String getLangKey() {
		return langKey;
	}

	public void setLangKey(String langKey) {
		this.langKey = langKey;
	}

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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getEncryptedPassword() {
		return encryptedPassword;
	}

	public void setEncryptedPassword(String encryptedPassword) {
		this.encryptedPassword = encryptedPassword;
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

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
	
}
