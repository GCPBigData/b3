package com.multbroker.empresa.service;

import java.util.List;

import com.multbroker.empresa.repository.EmpresaRepository;
import com.multbroker.models.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpresaServiceImpl {

    @Autowired
    private EmpresaRepository empresaRepository;

    public List<Empresa> getAllEmpresa() {
        return this.empresaRepository.findAll();
    }

}
