package com.app.springrest.sec;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.springrest.pojos.Role;
import com.app.springrest.pojos.User;



public class ShopUser implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private String email;
	private String password;
	private List<GrantedAuthority> authorities;
	
	public ShopUser() {
		// TODO Auto-generated constructor stub
	}
	
	public ShopUser(User user)
	{

		this.email = user.getEmail();
		this.password = user.getPassword();
		this.authorities =  Arrays.stream(user.getRole().toString().split(","))
									.map(SimpleGrantedAuthority::new)
									.collect(Collectors.toList());
	}
	

	public ShopUser(String email, String password, List<GrantedAuthority> authorities) {
		super();
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
