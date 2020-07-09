package com.multbroker.empresa.service;

import java.util.List;

import com.multbroker.empresa.repository.CidadeRepository;
import com.multbroker.models.Cidade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CidadeService {
	
	@Autowired
	private CidadeRepository cidadeRepository;

	public List<Cidade> findByEstado(Integer estadoId) {
		return cidadeRepository.findCidades(estadoId);
	}

	public List<Cidade> findByAll() {
		return  cidadeRepository.findAll();
	}
}
