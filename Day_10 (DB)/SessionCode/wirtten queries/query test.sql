/*creating table */
	-- create table cars (
	-- 	brand varchar(255),
	-- 	model varchar(150),
	-- 	year int
	-- ) ;
			/*select all data */
		-- select * from cars; 
		/*insert one row */
		-- insert into cars (brand , model , year)
		-- values 
		-- ('ford', 'mustang',  2025 );

		-- select * from cars

			/*insert multible rows */
		-- insert into cars (brand , model , year)
		-- values 
		-- ('volvo', 'p1800',  2015 ),
		-- ('bmw', 'm1',  2020 ) ,
		-- ('toyota', 'c16',  2002 ) ;
			-- select * from cars 

		/*insert into sepecific columns */
			-- insert into cars (brand ,year)
			-- values ('kia', 2023)
			-- select * from cars 

			-- select brand , year from cars

			/*alter table (modify table)*/

			-- alter table cars add color varchar(100)
			-- select * from cars

			/* update  all values */ 
			-- update cars 
			-- set color = 'red';
			-- select * from cars

					/* update values with codition  */ 
			-- update cars 
			-- set color = 'white'
			-- where brand = 'volvo' ;
			-- select * from cars

		-- alter table
-- 			alter table cars 
-- 			alter column year 
-- 			type varchar(4)
-- select * from cars

			-- alter table cars 
			-- alter column year 
			-- type int ;
			-- select * from cars

			-- alter table cars 
			-- drop column  color ;
			
			select * from cars

				-- delete from cars 
				-- where year = '2023' 

				-- delete from cars
				-- truncate table cars ;
				
		