package com.practice.TestApp.daoImpl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.TestApp.dao.UserDao;
import com.practice.TestApp.model.UserInfo;
@Service
public class UserDaoImpl implements UserDao{
	
	
	@Override
	public List<UserInfo> getUserAllInformation() {
		// TODO Auto-generated method stub
		
		List<UserInfo> usrList =new ArrayList<>();
		System.out.println("before for");
		for(int i=0;i<15;i++) {
			UserInfo userInfo = new UserInfo();
			
			userInfo.setUserId("UserId"+i);
			userInfo.setUserName("userName "+" Niraj" +i);
			userInfo.setMobileNumber(88888888);
			userInfo.setEmail("email"+i);
			userInfo.setUpdatedBy("updatedBy");
			userInfo.setLastUpdatedOn(LocalDate.now());
			usrList.add(userInfo);
		}
		
		
		return usrList;
	}

}
