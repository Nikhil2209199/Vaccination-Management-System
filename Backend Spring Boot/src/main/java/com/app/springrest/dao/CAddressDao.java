package com.app.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springrest.pojos.CAddress;

public interface CAddressDao extends JpaRepository<CAddress, Long>{

}
