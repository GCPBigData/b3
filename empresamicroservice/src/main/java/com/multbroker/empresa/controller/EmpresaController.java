package com.multbroker.empresa.controller;

import com.multbroker.empresa.dto.EmpresaDTO;
import com.multbroker.empresa.dto.NegociacaoDTO;
import com.multbroker.empresa.dto.SeguimentoDTO;
import com.multbroker.empresa.service.EmpresaService;
import com.multbroker.empresa.service.NegociacaoService;
import com.multbroker.empresa.service.SeguimentoService;
import com.multbroker.models.Empresa;
import com.multbroker.models.Negociacao;
import com.multbroker.models.Seguimento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Jose R F Junior
 * web2jax@gmail.com
 * 04/04/2020
 */

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    @Autowired
    private SeguimentoService seguimentoService;

    @Autowired
    private NegociacaoService negociacaoService;

    @RequestMapping(value = "/todos",method = RequestMethod.GET)
    public ResponseEntity<List<EmpresaDTO>> findAll() {
        List<Empresa> list = empresaService.findAll();
        List<EmpresaDTO> listDto = list.stream().map(EmpresaDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value = "/{empresaId}/seguimentos", method = RequestMethod.GET)
    public ResponseEntity<List<SeguimentoDTO>> findSeguimentos(@PathVariable Integer empresaId) {
        List<Seguimento> list = seguimentoService.findByEmpresa(empresaId);
        List<SeguimentoDTO> listDto = list.stream().map(SeguimentoDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value = "/{empresaId}/negociacoes", method = RequestMethod.GET)
    public ResponseEntity<List<NegociacaoDTO>> findNegociacoes(@PathVariable Integer empresaId) {
        List<Negociacao> list = negociacaoService.findByEmpresa(empresaId);
        List<NegociacaoDTO> listDto = list.stream().map(NegociacaoDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value = "/seguimentos", method = RequestMethod.GET)
    public ResponseEntity<List<SeguimentoDTO>> findSeguimentosTodas() {
        List<Seguimento> list = seguimentoService.findByAll();
        List<SeguimentoDTO> listDto = list.stream().map(SeguimentoDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value = "/negociacoes", method = RequestMethod.GET)
    public ResponseEntity<List<NegociacaoDTO>> findNegociacoesTodas() {
        List<Negociacao> list = negociacaoService.findByAll();
        List<NegociacaoDTO> listDto = list.stream().map(NegociacaoDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

}