package com.multbroker.models;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


/**
 * A BrokerageAccount.
 */
@Entity
@Table(name = "brokerage_account",schema = "multbroker")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class BrokerageAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "login_email", length = 200)
    private String loginEmail;

    @Column(name = "login_access_code", length = 200)
    private String loginAccessCode;

    @Column(name = "signature", length = 200)
    private String signature;

    @Column(name = "login_cpf", length = 11)
    private String loginCpf;

    @Column(name = "login_password", length = 100)
    private String loginPassword;

    @ManyToOne(optional = false)
    private UserEntity user;

    @ManyToOne(optional = false)
    private Brokerage brokerage;

    @Column(name = "swing_trade", precision = 10, scale = 2)
    @Getter
    @Setter
    private BigDecimal swingTrade;
    @Column(name = "day_trade", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal dayTrade;

    @Column(name = "iss_swing", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal issSwing;

    @Column(name = "iss_day", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal issDay;
    
    @Transient
    private Long userId;

    @Transient
    private Long brokerageId;

}
