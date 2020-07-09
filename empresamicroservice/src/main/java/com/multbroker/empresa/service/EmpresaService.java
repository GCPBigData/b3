package com.multbroker.empresa.service;

import java.util.List;

import com.multbroker.empresa.repository.EmpresaRepository;
import com.multbroker.empresa.repository.NegociacaoRepository;
import com.multbroker.models.Empresa;
//import com.sun.javafx.scene.traversal.Direction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private NegociacaoRepository negociacaoRepository;

    @Autowired
    public List<Empresa> findAll() {
        return empresaRepository.findAllByOrderByNome();
    }

    public Page<Empresa> findPage(int page, int linesPerPage, String orderBy, String direction) {
        return (Page<Empresa>) empresaRepository.findAll();
    }
}
