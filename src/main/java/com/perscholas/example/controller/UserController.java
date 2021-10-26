package com.perscholas.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perscholas.example.exception.ResourceNotFoundException;
import com.perscholas.example.model.User;
import com.perscholas.example.repository.UserRepository;

//@CrossOrigin( origins = "http://localhost:3000")
@CrossOrigin
@RestController
@RequestMapping ("/api/")

public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers() 
	{
		return userRepository.findAll();
	}

	// create user rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) 
	{
		return userRepository.save(user);
	}
	
	// get user by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity <User> getUserById(@PathVariable int id) 
	{
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException
						("User not exist with id :" + id));
		
		return ResponseEntity.ok(user);
	}
		
	// update user rest api
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails)
	{
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException
						("User not exist with id :" + id));
		
		user.setFname(userDetails.getFname());
		user.setLname(userDetails.getLname());
		user.setEntrydate(userDetails.getEntrydate());
		user.setEntrytime(userDetails.getEntrytime());
		user.setGlucose(userDetails.getGlucose());
		user.setIn_range(userDetails.getIn_range());
		user.setNote(userDetails.getNote());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	// delete employee rest api
		@DeleteMapping("/users/{id}")
		public ResponseEntity<Map<String, Boolean>>deleteUser(@PathVariable int id){
			User user = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
			
			userRepository.delete(user);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
