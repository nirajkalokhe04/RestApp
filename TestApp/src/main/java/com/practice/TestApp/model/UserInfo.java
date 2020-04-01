package com.practice.TestApp.model;


//@Getter @Setter @AllArgsConstructor @ToString
public class UserInfo extends BaseUtil {

	 private String userId;
	 private String userName;
	 private Integer mobileNumber;
	 private String email;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Integer mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UserInfo [userId=" + userId + ", userName=" + userName + ", mobileNumber=" + mobileNumber + ", email="
				+ email + "]";
	}
	public UserInfo(String userId, String userName, Integer mobileNumber, String email) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.mobileNumber = mobileNumber;
		this.email = email;
	}
	public UserInfo() {
		super();
	}
	 
	
	
}
