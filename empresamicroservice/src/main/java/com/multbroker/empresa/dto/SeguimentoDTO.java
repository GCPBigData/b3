package com.multbroker.empresa.dto;

import com.multbroker.models.Seguimento;

import java.io.Serializable;

public class SeguimentoDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String descricao;

    public SeguimentoDTO() {
    }

    public SeguimentoDTO(Seguimento obj) {
        id = obj.getId();
        descricao = obj.getDescricao();
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
}
