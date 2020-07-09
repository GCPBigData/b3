package com.multbroker.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "empresa",schema = "multbroker")
public class Empresa implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome", length = 100, nullable = false)
    private String nome;

    @Column(name = "atividade_principal", length = 100, nullable = false)
    private String atividadePrincipal;

    @Column(name = "site", length = 100, nullable = false)
    private String site;

    @Column(name = "mercado", length = 100, nullable = false)
    private String mercado;

    @Column(name = "cnpj", length = 100, nullable = false)
    private String cnpj;

    @Column(name = "razao_social", length = 100, nullable = false)
    private String razaoSocial;

    @Column(name = "status", length = 100, nullable = false)
    private String status;

    @Column(name = "codigo", length = 100, nullable = false)
    private String codigo;

    @Column(name = "classificacao_setorial", length = 100, nullable = false)
    private String classificacaoSetorial;

    @JsonIgnore
    @OneToMany(mappedBy="empresa")
    private List<Negociacao> negociacoes = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy="empresa")
    private List<Seguimento> seguimentos = new ArrayList<>();

    public Empresa() {
    }

    public Empresa(Integer id,
                   String nome,
                   String atividadePrincipal,
                   String site,
                   String mercado,
                   String cnpj,
                   String razaoSocial,
                   String status,
                   String codigo,
                   String classificacaoSetorial) {
        super();
        this.id = id;
        this.nome = nome;
        this.atividadePrincipal = atividadePrincipal;
        this.site = site;
        this.mercado = mercado;
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.status = status;
        this.codigo = codigo;
        this.classificacaoSetorial = classificacaoSetorial;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAtividadePrincipal() {
        return atividadePrincipal;
    }

    public void setAtividadePrincipal(String atividadePrincipal) {
        this.atividadePrincipal = atividadePrincipal;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getMercado() {
        return mercado;
    }

    public void setMercado(String mercado) {
        this.mercado = mercado;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getClassificacaoSetorial() {
        return classificacaoSetorial;
    }

    public void setClassificacaoSetorial(String classificacaoSetorial) {
        this.classificacaoSetorial = classificacaoSetorial;
    }

    public List<Negociacao> getNegociacoes() {
        return negociacoes;
    }
    public void setNegociacoes(List<Negociacao> negociacoes) {
        this.negociacoes = negociacoes;
    }

    public List<Seguimento> getSeguimentos() {
        return seguimentos;
    }
    public void setSeguimentos(List<Seguimento> seguimentos) {
        this.seguimentos = seguimentos;
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
        Empresa other = (Empresa) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
