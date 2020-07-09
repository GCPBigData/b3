package com.multbroker.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "seguimento",schema = "multbroker")
public class Seguimento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String descricao;

    @ManyToOne
    @JoinColumn(name="empresa_id")
    private Empresa empresa;

    public Seguimento() {
    }

    public Seguimento(Integer id, String descricao, Empresa empresa) {
        super();
        this.id = id;
        this.descricao = descricao;
        this.empresa = empresa;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Seguimento other = (Seguimento) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
}
