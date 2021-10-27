package com.perscholas.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "glucose_users")  // table name in mysql
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  // user id auto generated
	private int id;
	
	// column names and assigned variable names
	
	@Column (name = "fname")
	private String fname;
	
	@Column (name = "lname")
	private String lname;
	
	@Column (name = "entrydate")
	private String entrydate;
	
	@Column (name = "entrytime")
	private String entrytime;
	
	@Column (name = "glucose")
	private int glucose;
	
	@Column (name = "in_range")
	private String in_range;
	
	@Column (name = "note")
	private String note;
	
	// empty constructor
	
	public User () 
	{
		
	}
	
	// constructor with fields
	
	public User(String fname, String lname, String entrydate, String entrytime, int glucose, String in_range, String note) 
	{
		
		super();
		
		this.fname = fname;
		this.lname = lname;
		this.entrydate = entrydate;
		this.entrytime = entrytime;
		this.glucose = glucose;
		this.in_range = in_range;
		this.note = note;
	}

	// getters and setters
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getEntrydate() {
		return entrydate;
	}


	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}


	public String getEntrytime() {
		return entrytime;
	}


	public void setEntrytime(String entrytime) {
		this.entrytime = entrytime;
	}


	public int getGlucose() {
		return glucose;
	}


	public void setGlucose(int glucose) {
		this.glucose = glucose;
	}


	public String getIn_range() {
		return in_range;
	}


	public void setIn_range(String in_range) {
		this.in_range = in_range;
	}


	public String getNote() {
		return note;
	}


	public void setNote(String note) {
		this.note = note;
	}

}
