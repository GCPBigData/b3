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
 * A BrokerageClient.
 */
@Entity
@Table(name = "brokerage_client",schema = "multbroker")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class BrokerageClient implements Serializable {

    private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @ManyToMany(mappedBy = "brokerageClients")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Brokerage> brokerages = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public BrokerageClient name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Brokerage> getBrokerages() {
        return brokerages;
    }

    public BrokerageClient brokerages(Set<Brokerage> brokerages) {
        this.brokerages = brokerages;
        return this;
    }

    public BrokerageClient addBrokerage(Brokerage brokerage) {
        this.brokerages.add(brokerage);
        brokerage.getBrokerageClients().add(this);
        return this;
    }

    public BrokerageClient removeBrokerage(Brokerage brokerage) {
        this.brokerages.remove(brokerage);
        brokerage.getBrokerageClients().remove(this);
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
        BrokerageClient brokerageClient = (BrokerageClient) o;
        if (brokerageClient.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), brokerageClient.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "BrokerageClient{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
