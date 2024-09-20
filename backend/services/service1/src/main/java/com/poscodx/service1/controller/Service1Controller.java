package com.poscodx.service1.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.poscodx.service1.response.BaseResponse;

@Controller
@RequestMapping("/api")
public class Service1Controller {
	
	@GetMapping("/test")
	public ResponseEntity<BaseResponse<String>> get() {
		return ResponseEntity.status(HttpStatus.OK).body(new BaseResponse<>(HttpStatus.OK.value(), "testing...", "test succeed!"));
	}
}
