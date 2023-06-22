package com.app.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.springrest.pojos.Booking;


@Repository
public interface BookingDao extends JpaRepository<Booking, Long> {

	
}
