/**
 * 
 */
package com.practice.TestApp.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.TestApp.dao.TestDao;
import com.practice.TestApp.daoImpl.TestDaoImpl;
import com.practice.TestApp.service.TestService;

/**
 * @author Lenovo
 *
 */
@Service
public class TestServiceImpl implements TestService{

//	@Autowired
	private TestDao testDao = new TestDaoImpl();
	
	@Override
	public List<Object> testFunction() {
		return testDao.Test();
		// TODO Auto-generated method stub
		
	}

}
