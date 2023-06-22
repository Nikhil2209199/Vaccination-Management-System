package com.app.springrest.sec;

import java.time.LocalDate;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.springrest.dao.UserDao;

import com.app.springrest.dto.UserDto;
import com.app.springrest.pojos.Role;
import com.app.springrest.sec.Credentials;


@RestController
@CrossOrigin("*")
public class AuthController {
	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private JwtUtil jwtUtils;

	@Autowired
	private UserDao userDao;
	@PostMapping("/authenticate")
	
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody Credentials cred,HttpServletResponse response) {
		System.out.println("Authenticating: " + cred);
		try {
			Authentication auth = new UsernamePasswordAuthenticationToken(cred.getEmail(), cred.getPassword());
			System.out.println("BEFORE: " + auth);
			auth = authManager.authenticate(auth);
			System.out.println("AFTER: " + auth);
			
			
			ShopUser user = (ShopUser)auth.getPrincipal();
			com.app.springrest.pojos.User u= userDao.findByEmail(user.getUsername());
			
		
			System.out.println(user.getPassword()+" "+user.getUsername());
			String token = jwtUtils.generateToken(user.getUsername());
			
			response.addCookie(new Cookie("token", token));
			
	//Long id,String firstName, String lastName, String email, String password, Role userRole,LocalDate createdAt)
		
			
		return ResponseEntity.ok(new AuthenticationResponse(token,u,true));
		}catch (BadCredentialsException e) {
			return ResponseEntity.notFound().build();
		}
	}
}
