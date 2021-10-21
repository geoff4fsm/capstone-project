package com.perscholas.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "users")
public class User {
	
	@Id
	//GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column (name = "fname")
	private String fname;
	
	@Column (name = "lname")
	private String lname;
	
	@Column (name = "date")
	private String date;
	
	@Column (name = "time")
	private String time;
	
	@Column (name = "glucose")
	private int glucose;
	
	@Column (name = "in_range")
	private String in_range;
	
	@Column (name = "note")
	private String note;
	
	
	public User () 
	{
		
	}
	

	public User(String fname, String lname, String date, String time, int glucose, String in_range, String note) 
	{
		
		super();
		
		this.fname = fname;
		this.lname = lname;
		this.date = date;
		this.time = time;
		this.glucose = glucose;
		this.in_range = in_range;
		this.note = note;
	}


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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
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
