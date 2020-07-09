package com.multbroker.empresa.dto;

import com.multbroker.models.Empresa;
import java.io.Serializable;

public class EmpresaDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String atividadePrincial;
    private String site;
    private String mercado;
    private String cnpj;
    private String razaoSocial;
    private String status;
    private String codigo;
    private String classificacaoSetorial;

    public EmpresaDTO() {
    }

    public EmpresaDTO(Empresa objEmpresa) {
        super();
        id = objEmpresa.getId();
        nome = objEmpresa.getNome();
        atividadePrincial = objEmpresa.getAtividadePrincipal();
        site = objEmpresa.getSite();
        mercado = objEmpresa.getMercado();
        cnpj =  objEmpresa.getCnpj();
        razaoSocial = objEmpresa.getRazaoSocial();
        status = objEmpresa.getStatus();
        codigo = objEmpresa.getCodigo();
        classificacaoSetorial = objEmpresa.getClassificacaoSetorial();

    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public String getAtividadePrincial() {
        return atividadePrincial;
    }

    public void setAtividadePrincial(String atividadePrincial) {
        this.atividadePrincial = atividadePrincial;
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
}
