package com.multbroker.models;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "brokerage",schema = "multbroker")
@NoArgsConstructor @AllArgsConstructor
@ToString(exclude="id")
@EqualsAndHashCode
@Data
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Brokerage implements Serializable {

    @Getter @Setter @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", length = 100, nullable = false)
    @Getter @Setter private String name;
    @Column(name = "cnpj", length = 18, unique = true)
    @Getter @Setter private String cnpj;
    @Column(name = "address", length = 100)
    @Getter @Setter private String address;
    @Column(name = "address_neighborhood", length = 100)
    @Getter @Setter private String addressNeighborhood;
    @Column(name = "address_city", length = 100)
    @Getter @Setter private String addressCity;
    @Column(name = "address_state", length = 50)
    @Getter @Setter private String addressState;
    @Column(name = "swing_trade", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal swingTrade;
    @Column(name = "day_trade", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal dayTrade;
    @Column(name = "login_email", nullable = false)
    @Getter @Setter private Boolean loginEmail;
    @Column(name = "login_access_code", nullable = false)
    @Getter @Setter private Boolean loginAccessCode;
    @Column(name = "login_cpf", nullable = false)
    @Getter @Setter private Boolean loginCpf;
    @Column(name = "login_password", nullable = false)
    @Getter @Setter private Boolean loginPassword;
    @Column(name = "login_token", nullable = false)
    @Getter @Setter private Boolean loginToken;
    @Column(name = "iss", precision = 10, scale = 2)
    @Getter @Setter private BigDecimal iss;
    @Column(name = "phone", length = 50)
    @Getter @Setter private String phone;
    @Column(name = "website", length = 100)
    @Getter @Setter private String website;
    @Column(name = "email", length = 100)
    @Getter @Setter private String email;
    @Column(name = "logo", length = 50)
    @Getter @Setter private String logo;
    @Column(name="status", length = 20)
    @Getter @Setter private String status;
    @Column(name = "tipo", length = 50)
    @Getter @Setter private String tipo;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable (name = "brokerage_client",
            joinColumns = @JoinColumn(name = "brokerages_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "brokerage_clients_id", referencedColumnName = "id"))
    private Set<BrokerageClient> brokerageClients = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "brokerage_product",
            joinColumns = @JoinColumn(name = "brokerages_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "brokerage_products_id", referencedColumnName = "id"))
    private Set<BrokerageProduct> brokerageProducts = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "brokerage_assistance",
            joinColumns = @JoinColumn(name = "brokerages_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "brokerage_assistances_id", referencedColumnName = "id"))
    private Set<BrokerageAssistance> brokerageAssistances = new HashSet<>();

    public Set<BrokerageClient> getBrokerageClients() {
        return brokerageClients;
    }

    public Brokerage brokerageClients(Set<BrokerageClient> brokerageClients) {
        this.brokerageClients = brokerageClients;
        return this;
    }

    public Brokerage addBrokerageClient(BrokerageClient brokerageClient) {
        this.brokerageClients.add(brokerageClient);
        brokerageClient.getBrokerages().add(this);
        return this;
    }

    public Brokerage removeBrokerageClient(BrokerageClient brokerageClient) {
        this.brokerageClients.remove(brokerageClient);
        brokerageClient.getBrokerages().remove(this);
        return this;
    }

    public void setBrokerageClients(Set<BrokerageClient> brokerageClients) {
        this.brokerageClients = brokerageClients;
    }

    public Set<BrokerageProduct> getBrokerageProducts() {
        return brokerageProducts;
    }

    public Brokerage brokerageProducts(Set<BrokerageProduct> brokerageProducts) {
        this.brokerageProducts = brokerageProducts;
        return this;
    }

    public Brokerage addBrokerageProduct(BrokerageProduct brokerageProduct) {
        this.brokerageProducts.add(brokerageProduct);
        brokerageProduct.getBrokerages().add(this);
        return this;
    }

    public Brokerage removeBrokerageProduct(BrokerageProduct brokerageProduct) {
        this.brokerageProducts.remove(brokerageProduct);
        brokerageProduct.getBrokerages().remove(this);
        return this;
    }

    public void setBrokerageProducts(Set<BrokerageProduct> brokerageProducts) {
        this.brokerageProducts = brokerageProducts;
    }

    public Set<BrokerageAssistance> getBrokerageAssistances() {
        return brokerageAssistances;
    }

    public Brokerage brokerageAssistances(Set<BrokerageAssistance> brokerageAssistances) {
        this.brokerageAssistances = brokerageAssistances;
        return this;
    }

    public Brokerage addBrokerageAssistance(BrokerageAssistance brokerageAssistance) {
        this.brokerageAssistances.add(brokerageAssistance);
        brokerageAssistance.getBrokerages().add(this);
        return this;
    }

    public Brokerage removeBrokerageAssistance(BrokerageAssistance brokerageAssistance) {
        this.brokerageAssistances.remove(brokerageAssistance);
        brokerageAssistance.getBrokerages().remove(this);
        return this;
    }

    public void setBrokerageAssistances(Set<BrokerageAssistance> brokerageAssistances) {
        this.brokerageAssistances = brokerageAssistances;
    }

    public Brokerage(String name, String cnpj, String address, String addressNeighborhood, String addressCity, String addressState, BigDecimal swingTrade, BigDecimal dayTrade, Boolean loginEmail, Boolean loginAccessCode, Boolean loginCpf, Boolean loginPassword, Boolean loginToken, BigDecimal iss, String phone, String website, String email, String logo, String status, String tipo) {
        this.name = name;
        this.cnpj = cnpj;
        this.address = address;
        this.addressNeighborhood = addressNeighborhood;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.swingTrade = swingTrade;
        this.dayTrade = dayTrade;
        this.loginEmail = loginEmail;
        this.loginAccessCode = loginAccessCode;
        this.loginCpf = loginCpf;
        this.loginPassword = loginPassword;
        this.loginToken = loginToken;
        this.iss = iss;
        this.phone = phone;
        this.website = website;
        this.email = email;
        this.logo = logo;
        this.status = status;
        this.tipo = tipo;
    }

}
