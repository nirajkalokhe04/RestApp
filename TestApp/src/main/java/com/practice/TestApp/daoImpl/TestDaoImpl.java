package com.practice.TestApp.daoImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.practice.TestApp.dao.TestDao;

@Repository
public class TestDaoImpl implements TestDao {

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public List<Object> Test() {
		// TODO Auto-generated method stub
		List L = new ArrayList();
		
		L.add("Test 1");
		
		return L;
		
	}

}
