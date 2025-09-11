
	-- select * from customers 

	-- select customer_name , country from customers 

		/*distinct */ 
		-- select distinct country from customers ; 
		-- select count ( distinct country) from customers  
		-- 21 
		
		-- select  country from customers ; 
		-- select count (country) from customers  
		-- 91

		-- select * from customers 
		-- where city = 'London'
		/*order by */ 
			-- select * from products order by price ; 
			-- select * from products order by price desc ; 
			
			-- select * from products order by product_name desc ; 

			-- select * from customers limit 1 ; 

			
			-- select * from customers limit 15 offset 3 ; 

			-- agg funs 
			-- count , sum , avg , min , max 

			--min 
			-- select min(price) from products ;

			-- max
			-- select max(price)  from products ;
			-- select max(price) as maximum_price from products ;

			-- count 
			-- select count(customer_id) from customers ;

			-- select count(customer_id) from customers 
			-- where city = 'London';

			-- sum 
			-- select sum(quantity)
			-- from order_details ;

			-- avg
			-- select avg(price) from products;
			-- select avg(price) ::numeric(10,1) from products;

			
			
			