create table role (id serial primary key, role varchar(255) unique not null);
insert into role(role) values('student'),('teacher');
select * from role;


create table branch(id serial primary key, branch varchar(255) unique unique not null);
insert into branch(branch) values('ghatkopar'),('vikhroli'),('mulund'),('bhandup');
select * from branch;

create table standard(id serial primary key, std int unique not null);
insert into standard(std) values(11),(12);
select * from standard;
-- create table topic (id serial primary key, topic varchar(255), subject_id int references subject(id)unique not null);

create table stream(id serial primary key, stream varchar(255)unique not null);
insert into stream(stream) values('science');
select * from stream;

create table subject(id serial primary key, subject varchar(255)unique not null, stream_id int references stream(id));
insert into subject(subject,stream_id) values('physics',1),('chemistry',1),('bilolgy',1),('mathematics',1);

select * from subject;


create table entrance(id serial primary key, entrance varchar(255)unique not null,stream_id int references stream(id) );
insert into entrance(entrance,stream_id) values ('jee',1),('neet',1),('cet-engineering',1),('cet-medical',1);
insert into entrance(entrance,stream_id) values('no entrance',1);
select * from entrance;



CREATE TABLE student_details (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255),
    student_email VARCHAR(255)unique not null,
    student_mobile VARCHAR(255),
    role_id INT DEFAULT 1 REFERENCES role(id),
	branch_id int references branch(id),
	standard_id int references standard(id),
	entrance_id int references entrance(id),
	stream_id int references stream(id)
);
select * from student_details ;

alter table student_details add column isDeleted int default 0;

create table staff_details(
	id serial primary key,
	staff_name varchar(255),
	staff_email varchar(255)unique not null,
	staff_mobile varchar(255),
	role_id INT REFERENCES role(id),
	subject_id int references subject(id)
);
select * from staff_details;
select * from subject;



-- STUDENT-DETAILS TABLE 
SELECT sd.student_name, sd.student_email, sd.student_mobile, b.branch AS branch_name, s.std AS standard_name, e.entrance 
	AS entrance_name, st.stream AS stream_name 
		FROM student_details sd JOIN branch b ON sd.branch_id = b.id JOIN 
			standard s ON sd.standard_id = s.id JOIN entrance e ON sd.entrance_id = e.id JOIN stream st ON sd.stream_id = st.id
			where isDeleted=0;


