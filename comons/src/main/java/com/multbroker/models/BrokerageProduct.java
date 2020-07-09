package com.multbroker.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.sun.istack.NotNull;

/**
 * A BrokerageProduct.
 */
@Entity
@Table(name = "brokerage_product",schema = "multbroker")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class BrokerageProduct implements Serializable {

    private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @ManyToMany(mappedBy = "brokerageProducts")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Brokerage> brokerages = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public BrokerageProduct name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Brokerage> getBrokerages() {
        return brokerages;
    }

    public BrokerageProduct brokerages(Set<Brokerage> brokerages) {
        this.brokerages = brokerages;
        return this;
    }

    public BrokerageProduct addBrokerage(Brokerage brokerage) {
        this.brokerages.add(brokerage);
        brokerage.getBrokerageProducts().add(this);
        return this;
    }

    public BrokerageProduct removeBrokerage(Brokerage brokerage) {
        this.brokerages.remove(brokerage);
        brokerage.getBrokerageProducts().remove(this);
        return this;
    }

    public void setBrokerages(Set<Brokerage> brokerages) {
        this.brokerages = brokerages;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BrokerageProduct brokerageProduct = (BrokerageProduct) o;
        if (brokerageProduct.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), brokerageProduct.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "BrokerageProduct{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
