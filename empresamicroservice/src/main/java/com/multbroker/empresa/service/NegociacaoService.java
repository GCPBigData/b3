package com.multbroker.empresa.service;

import com.multbroker.empresa.repository.NegociacaoRepository;
import com.multbroker.models.Negociacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Jose R F Junior
 * Web2ajax@gmail.com
 */

@Service
public class NegociacaoService {

    @Autowired
    private NegociacaoRepository negociacaoRepository;

     public List<Negociacao> findByEmpresa(Integer empresaId) {
        return negociacaoRepository.findByNegociacao(empresaId);
    }

    public List<Negociacao> findByAll() {
        return  negociacaoRepository.findAll();
    }

}
