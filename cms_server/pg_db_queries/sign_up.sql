create table signup_details(id varchar(255) primary key, f_name varchar(255), l_name varchar(255), email varchar(255), mobile_no varchar(255)
	,role varchar(255)
);
drop table signup_details;
select * from signup_details;
delete from signup_details where f_name='Sarvesh';
