package com.multbroker.empresa.dto;

import com.multbroker.models.Negociacao;
import java.io.Serializable;

public class NegociacaoDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String descricao;
    private String status;

    public NegociacaoDTO() {
    }

    public NegociacaoDTO(Negociacao obj) {
        id = obj.getId();
        descricao = obj.getDescricao();
        status = obj.getStatus();
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
