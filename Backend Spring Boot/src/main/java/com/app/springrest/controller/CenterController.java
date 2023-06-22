package com.app.springrest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.springrest.dao.CenterDao;
import com.app.springrest.dao.ReviewDao;
import com.app.springrest.dao.UserDao;
import com.app.springrest.pojos.Center;
import com.app.springrest.pojos.User;
import com.app.springrest.pojos.Review;

@RestController
public class CenterController {
	
	@Autowired
	public CenterDao cdao;


	@GetMapping("/centers")
	public List<Center> getAllCenters() {
		return cdao.findAll();
	}
	
	@PostMapping("/center")
	public Center InsertCenter(@RequestBody Center c) {
		return cdao.save(c);
	}
	
	@PutMapping("/center")
	public Center saveCenter(@RequestBody Center  c) {	
		return cdao.save(c);	
	}
	
	@DeleteMapping("/center/{centerId}")
	public void removeCenter(@PathVariable long centerId) {
		cdao.deleteById(centerId);
	}
	
	@GetMapping("/center/{cid}")
	public Optional<Center> findCByid(@PathVariable long cid) {
		return cdao.findById(cid);
	}
	
	
	
	
}
