package com.practice.TestApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practice.TestApp.service.TestService;

@RestController
@RequestMapping(path="/t1")
public class TestController {

	@Autowired
	TestService testService;
	
	@RequestMapping(method = RequestMethod.GET,path="/t2")
//	@GetMapping("/")
	public ResponseEntity<?> testFunction() {
		try {
			
			return ResponseEntity.ok(testService.testFunction());
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ResponseEntity.ok(200);
		}
	}
}
