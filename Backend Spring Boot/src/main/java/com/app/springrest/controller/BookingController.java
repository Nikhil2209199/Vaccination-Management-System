package com.app.springrest.controller;

import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.springrest.Service.BookingService;
import com.app.springrest.dao.BookingDao;
import com.app.springrest.dao.QtyDao;
import com.app.springrest.dto.CustomRequest;
import com.app.springrest.pojos.Booking;
import com.app.springrest.pojos.QtyVcc;


@RestController
public class BookingController {

	@Autowired
	public BookingDao bdao;
	
	@Autowired
	private QtyDao qtydao;
	
	@Autowired
	public BookingService bService;
	
	@GetMapping("/bookings")
	public List<Booking> findAllBookings(){
		return bdao.findAll();
	}
	
	@PutMapping("/booking/{bid}")
	public Booking insertBooking(@PathVariable long bid) {
		Booking pbook=bdao.findById(bid).orElseThrow();
		pbook.setVaccinationStatus("TAKEN");
		QtyVcc pqv=qtydao.findByQtyCenterAndQtyVaccine(pbook.getCenter(),pbook.getVaccine()).orElseThrow();
		pqv.setQty(pqv.getQty()-1);
		qtydao.save(pqv);
		return pbook;
	}
	
	@PostMapping("/booking/{uid}/{cid}/{vid}")
	public Booking upateBooking(@RequestBody CustomRequest request,
								@PathVariable long uid,@PathVariable long cid,@PathVariable long vid) {							
		Booking booking= bService.editBooking(request,uid,cid,vid);
		
		return booking;
	}
	
	@DeleteMapping("/booking/{id}")
	public void deleteBooking(@PathVariable long id) {
		bdao.deleteById(id);
	}
	
}
