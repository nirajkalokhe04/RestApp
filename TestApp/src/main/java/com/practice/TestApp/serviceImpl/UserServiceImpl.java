package com.practice.TestApp.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.TestApp.dao.UserDao;
import com.practice.TestApp.model.UserInfo;
import com.practice.TestApp.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao usrDao;
	
	@Override
	public List<UserInfo> getUserAllInformation() {
		// TODO Auto-generated method stub
		return usrDao.getUserAllInformation();
	}

}
