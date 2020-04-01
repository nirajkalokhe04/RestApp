package com.practice.TestApp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.practice.TestApp.service.TestService;
import com.practice.TestApp.serviceImpl.TestServiceImpl;

@SpringBootApplication
@ComponentScan
public class TestAppApplication {
//
//	@Autowired
//	TestController controller;
	

//	@Autowired
//	TestService service ;
	
	
//	@Autowired
	TestService service1 = new TestServiceImpl();
	
	
    private static final Logger LOGGER=LoggerFactory.getLogger(TestAppApplication.class);

	public static void main(String[] args) {
		
		SpringApplication.run(TestAppApplication.class, args);
	}
	
	
	  @Bean CommandLineRunner run() {
	  System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	  LOGGER.info("test logger");
	  System.out.println(service1.testFunction());
	  System.out.println("------------------------------------"); return null; }
	 

}
