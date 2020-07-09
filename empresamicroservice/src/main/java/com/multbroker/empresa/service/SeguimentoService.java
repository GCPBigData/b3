package com.multbroker.empresa.service;

import com.multbroker.empresa.repository.SeguimentoRepository;
import com.multbroker.models.Seguimento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Jose R F Junior
 * Web2ajax@gmail.com
 */

@Service
public class SeguimentoService {

    @Autowired
    private SeguimentoRepository seguimentoRepository;

    public List<Seguimento> findByEmpresa(Integer empresaId) {
        return seguimentoRepository.findSeguimentos(empresaId);
    }

    public List<Seguimento> findByAll() {
        return  seguimentoRepository.findAll();
    }

}
