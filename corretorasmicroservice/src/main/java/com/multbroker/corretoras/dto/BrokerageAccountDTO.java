package com.multbroker.corretoras.dto;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@EqualsAndHashCode
@ToString
public class BrokerageAccountDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7018016911060807187L;

	int id;
	int userId;
	int brokerageId;
	String brokerageName;
	String loginEmail;
	String loginAccessCode;
	String loginCpf;
	String loginPassword;
	private BigDecimal swingTrade;
    private BigDecimal dayTrade;
    private BigDecimal issSwing;
	private BigDecimal issDay;
	private String signature;

}
