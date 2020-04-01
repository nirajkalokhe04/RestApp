package com.practice.TestApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.TestApp.service.UserService;

@RestController
@RequestMapping("/app/usr")
public class UserController {
 
	@Autowired
	UserService usrService;
	
	@GetMapping("getUser")
	public ResponseEntity<?> getUserAllInformation(){
//		return ResponseEntity.ok("Test Data");
		List<?> result = usrService.getUserAllInformation();
		System.out.println(result.toString());
		return ResponseEntity.ok(result);
	}
}
