package com.multbroker.empresa.controller;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.multbroker.empresa.dto.BrokerageDTO;
import com.multbroker.empresa.dto.BrokeragePainelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.multbroker.empresa.dto.BrokerageAccountDTO;
import com.multbroker.empresa.service.BrokerageService;
import com.multbroker.models.Brokerage;
import com.multbroker.models.BrokerageAccount;
import com.multbroker.utils.ApiError;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/brokerages")
public class BrokerageController {

	@Autowired
	BrokerageService brokerageService;

	/*
	  @SuppressWarnings("unchecked")
	  @ResponseBody
	  @RequestMapping(method = RequestMethod.GET, produces = "application/json")
	  public ResponseEntity<Page<BrokerageDTO>> findPage(
	  @RequestParam(value="page", defaultValue="0") Integer page,
	  @RequestParam(value="linesPerPage", defaultValue="5") Integer linesPerPage,
	  @RequestParam(value="orderBy", defaultValue="id") String orderBy,
	  @RequestParam(value="direction", defaultValue="ASC") String direction) {
	  Page<Brokerage> list = (Page<Brokerage>) brokerageService.search(page,
  	  linesPerPage, orderBy, direction); Page<BrokerageDTO> listDto = list.map(obj
	  new BrokerageDTO(obj)); return ResponseEntity.ok().body(listDto);
	  }
	 */


	@RequestMapping(value = "/findbyname/{name}", method = RequestMethod.GET)
	public List<Brokerage> findByName(@PathVariable("name") String name){
		return brokerageService.findByName(name);
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/findbycnpj/{cnpj}", method = RequestMethod.GET)
		public List<Brokerage> findByCnpj(@PathVariable("cnpj") String cnpj){
		HttpStatus status = cnpj != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
		return brokerageService.findByCnpj(cnpj);
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/findbypainel/", method = RequestMethod.GET)
		public List<Brokerage> findByPainel(){
		return brokerageService.findByPainel();
	}

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> listarTodos(){
		 return ResponseEntity.accepted().body(brokerageService.findAll());
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value="/ListaTodos", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	 public  ResponseEntity<List<BrokerageDTO>> findAll(){
     	List<Brokerage> list = brokerageService.findAll();
     	List<BrokerageDTO> listDto = list.stream()
				//.map(objBrokerage -> new BrokerageDTO(objBrokerage)).collect(Collectors.toList());
				.sorted(Comparator.comparing(Brokerage::getName).reversed())
				.map(BrokerageDTO::new)
				//.limit(10)
				.collect( Collectors.toList());
		 HttpStatus status = list != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
		 return ResponseEntity.ok().body(listDto);
	 }

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/searchNome", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
     public ResponseEntity<List<BrokerageDTO>> findAllNome(){
	        List<Brokerage> list = brokerageService.findByName(toString());
	        List<BrokerageDTO> listDto = list.stream()
                    .map(BrokerageDTO::new)
					.limit(5)
					.collect(Collectors.toList());
	        return ResponseEntity.ok().body(listDto);
     }

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value="/painel", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public  ResponseEntity<List<BrokeragePainelDTO>> findPainel(){
		List<Brokerage> list = brokerageService.findAll();
		List<BrokeragePainelDTO> listDto = list.stream()
				.sorted(Comparator.comparing(Brokerage::getId).reversed())
				.map(BrokeragePainelDTO::new)
				.limit(1)
				.collect( Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

	// http://localhost:8011/users-ws/users/
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> create(@Valid @RequestBody Brokerage brokerage) {
		List<String> erros = new ArrayList<String>();
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
		try {
			brokerage = brokerageService.save(brokerage);
		} catch (Exception e) {
			erros.add(e.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		}
		return ResponseEntity.accepted().body(brokerage);
	}


	@PutMapping(value = "/editar/{id}")
	public ResponseEntity<Object> update(@PathVariable("id") long id, @Valid @RequestBody Brokerage brokerage) {
		List<String> erros = new ArrayList<String>();
		try {
			brokerage = brokerageService.update(brokerage);
		} catch (Exception e) {
			erros.add(e.getLocalizedMessage());
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		}
		return ResponseEntity.accepted().body(brokerage);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Brokerage> updateBrokerage(@PathVariable("id") long id, @RequestBody Brokerage brokerage) {
		Optional<Brokerage> brokerageData = Optional.ofNullable(brokerageService.findById(id));

		if (brokerageData.isPresent()) {
			Brokerage _brokerage = brokerageData.get();
			_brokerage.setName(brokerage.getName());
			//_brokerage.setCnpj(brokerage.getCnpj());
			_brokerage.setEmail(brokerage.getEmail());
			_brokerage.setDayTrade(brokerage.getDayTrade());
			_brokerage.setSwingTrade(brokerage.getSwingTrade());
			_brokerage.setIss(brokerage.getIss());
			_brokerage.setStatus(brokerage.getStatus());
			_brokerage.setLogo(brokerage.getLogo());
			_brokerage.setTipo(brokerage.getTipo());
			_brokerage.setPhone(brokerage.getPhone());
			_brokerage.setWebsite(brokerage.getWebsite());
			_brokerage.setLoginAccessCode(brokerage.getLoginAccessCode());
			_brokerage.setLoginCpf(brokerage.getLoginCpf());
			_brokerage.setLoginEmail(brokerage.getLoginEmail());
	        _brokerage.setLoginPassword(brokerage.getLoginPassword());
	        _brokerage.setLoginToken(brokerage.getLoginToken());
			_brokerage.setAddress(brokerage.getAddress());
			_brokerage.setAddressCity(brokerage.getAddressCity());
			_brokerage.setAddressNeighborhood(brokerage.getAddressNeighborhood());
			_brokerage.setAddressState(brokerage.getAddressState());
			return new ResponseEntity<>(brokerageService.save(_brokerage), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
		List<String> erros = new ArrayList<String>();
		try {
			brokerageService.delete(Long.parseLong(id));
		} catch (Exception e) {
			erros.add(e.getLocalizedMessage());
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Erros", erros);
			return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
		}
		return ResponseEntity.accepted().body("Registro deletado com sucesso");
	}

	@GetMapping(path = "/status/check")
	public String status() {
		return "CORRETORAS";
	}

}
