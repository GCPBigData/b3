package com.multbroker.empresa.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.multbroker.empresa.dto.CidadeDTO;
import com.multbroker.empresa.dto.EstadoDTO;
import com.multbroker.empresa.service.CidadeService;
import com.multbroker.empresa.service.EstadoService;
import com.multbroker.models.Cidade;
import com.multbroker.models.Estado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/estados")
public class EstadoResource {
	
	@Autowired
	private EstadoService estadoService;
	
	@Autowired
	private CidadeService cidadeService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<EstadoDTO>> findAll() {
		List<Estado> list = estadoService.findAll();
		List<EstadoDTO> listDto = list.stream().map(obj -> new EstadoDTO(obj)).collect(Collectors.toList());  
		return ResponseEntity.ok().body(listDto);
	}
	
	@RequestMapping(value="/{estadoId}/cidades", method=RequestMethod.GET)
	public ResponseEntity<List<CidadeDTO>> findCidades(@PathVariable Integer estadoId) {
		List<Cidade> list = cidadeService.findByEstado(estadoId);
		List<CidadeDTO> listDto = list.stream().map(CidadeDTO::new).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

	@RequestMapping(value="/cidades", method=RequestMethod.GET)
	public ResponseEntity<List<CidadeDTO>> findCidadesTodas() {
		List<Cidade> list = cidadeService.findByAll();
		List<CidadeDTO> listDto = list.stream().map(CidadeDTO::new).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}
}
