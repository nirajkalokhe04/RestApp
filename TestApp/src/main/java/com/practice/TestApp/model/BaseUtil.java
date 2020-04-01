package com.practice.TestApp.model;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//@Getter @Setter @AllArgsConstructor 
public class BaseUtil implements Serializable{

	/**
	 * @author Niraj Kalokhe
	 * @serial 1.1.1
	 * @category Utility Repository
	 * 
	 */
	private static final long serialVersionUID = -579295893333853977L;
	private String updatedBy;
	private String createdBy;
	private LocalDate lastUpdatedOn;
	private LocalDate createdOn;
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public LocalDate getLastUpdatedOn() {
		return lastUpdatedOn;
	}
	public void setLastUpdatedOn(LocalDate lastUpdatedOn) {
		this.lastUpdatedOn = lastUpdatedOn;
	}
	public LocalDate getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "BaseUtil [updatedBy=" + updatedBy + ", createdBy=" + createdBy + ", lastUpdatedOn=" + lastUpdatedOn
				+ ", createdOn=" + createdOn + "]";
	}
	public BaseUtil(String updatedBy, String createdBy, LocalDate lastUpdatedOn, LocalDate createdOn) {
		super();
		this.updatedBy = updatedBy;
		this.createdBy = createdBy;
		this.lastUpdatedOn = lastUpdatedOn;
		this.createdOn = createdOn;
	}
	public BaseUtil() {
		super();
	}

	
	
}
