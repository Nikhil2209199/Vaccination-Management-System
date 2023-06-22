package com.app.springrest.sec;

import com.app.springrest.dto.UserDto;
import com.app.springrest.pojos.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponse {
	
	private final String token;
	private User user;
	private boolean success;
	
	public AuthenticationResponse(String jwt) {
		this.token = jwt;
	}

	public AuthenticationResponse(String token, User user, boolean success) {
		super();
		this.token = token;
		this.user = user;
		this.success = success;
	}

	public String getToken() {
		return token;
	}
	
}
