package com.app.springrest.sec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.springrest.dao.UserDao;
import com.app.springrest.pojos.User;



@Transactional
@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userDao.findByEmail(email);
		if(user == null)
			throw new UsernameNotFoundException(email + " not found.");
		return new ShopUser(user);
	}
}
