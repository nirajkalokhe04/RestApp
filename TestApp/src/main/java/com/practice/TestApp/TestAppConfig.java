package com.practice.TestApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class TestAppConfig {

	@Bean
	public CorsFilter corsFilter() {
		List<String> allowMethods = new ArrayList<String>();
		allowMethods.add("GET");
		allowMethods.add("POST");
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.addAllowedHeader("*");
		configuration.addAllowedOrigin("*");
		configuration.setAllowedMethods(allowMethods);
		configuration.setAllowCredentials(false);
		source.registerCorsConfiguration("/**", configuration);
		return new CorsFilter(source);
		
	}
}
