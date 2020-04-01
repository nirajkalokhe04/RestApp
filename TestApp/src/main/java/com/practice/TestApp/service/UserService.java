package com.practice.TestApp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.practice.TestApp.model.UserInfo;

public interface UserService {

	public List<UserInfo> getUserAllInformation();
}
