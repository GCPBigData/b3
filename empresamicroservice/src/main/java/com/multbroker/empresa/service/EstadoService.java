package com.multbroker.empresa.service;

import java.util.List;

import com.multbroker.empresa.repository.EstadoRepository;
import com.multbroker.models.Estado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstadoService {
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	public List<Estado> findAll() {
		return estadoRepository.findAllByOrderByNome();
	}
}
