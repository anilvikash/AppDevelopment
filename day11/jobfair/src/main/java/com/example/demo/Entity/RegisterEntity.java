package com.example.demo.Entity;


	
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;


	@Entity 
	@Table(name="signup")
	
		public class RegisterEntity {

		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long id;
		private String name;
	    private String email;
	    private String phonenumber;
	    private String password;
		public RegisterEntity(Long id, String name, String email, String phonenumber,String password) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.phonenumber = phonenumber;
			this.password = password;
		}
	    public RegisterEntity()
	    {
	    	
	    }
	    public Long getid() {
			return id;
		}
		public void setid(Long id) {
			this.id = id;
		}
		public String getname() {
			return name;
		}
		public void setname(String name) {
			this.name = name;
		}
		
		public String getemail() {
			return email;
		}
		public void setemail(String email) {
			this.email = email;
		}
		public String getphonenumber() {
			return phonenumber;
		}
		public void setphonenumber(String phonenumber) {
			this.phonenumber = phonenumber;
		}
		public String getpassword() {
			return password;
		}
		public void setpassword(String password) {
			this.password = password;
		}
	    
	
}
