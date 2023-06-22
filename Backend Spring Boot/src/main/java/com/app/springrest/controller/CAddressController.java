package com.app.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.springrest.dao.CAddressDao;
import com.app.springrest.pojos.CAddress;

@RestController
public class CAddressController {


	@Autowired
	public CAddressDao cadao;
	
	@GetMapping("/caddresses")
	public List<CAddress> getAllCAddress(){
		return cadao.findAll();
	}
	
	@PostMapping("/caddress")
	public CAddress InsertCAddress(@RequestBody CAddress a) {
		return cadao.save(a);
	}
	
	@PutMapping("/caddress")
	public CAddress updateCAddress(@RequestBody CAddress a) {
		return cadao.save(a);
	}
	
	@DeleteMapping("/caddress/{caid}")
	public void removeCAddress(@PathVariable long caid) {
		cadao.deleteById(caid);
	}
	
	
	
}
