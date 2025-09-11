
			-- like 
			-- select * from customers 
			-- where customer_name like 'A%'
			
			-- select * from customers 
			-- where customer_name like '%A%';
			
			-- select * from customers 
			-- where city like '_ondon';

			-- in 
			
			-- select * from customers 
			-- where country in ('Germany','France', 'UK')
			
			-- select * from customers 
			-- where country not in ('Germany','France', 'UK')


			-- select * from customers 
			-- where customer_id in (
			-- select customer_id from orders )
		
			-- select * from customers 
			-- where customer_id not in (
			-- select customer_id from orders )

			-- between
			-- select * from products 
			-- where price between 10 and 15 ; 

				-- select * from products 
				-- where product_name between 
				-- 'Pavlova' and 'Tofu';

				
				-- select * from products 
				-- where product_name between 
				-- 'Pavlova' and 'Tofu'
				-- order by product_name ;

				-- select * from orders 
				-- where order_date between 
				-- '2023-04-12' and '2023-05-05'
			
			-- alias 
			-- select customer_name as name from customers ;
			
			-- select product_name || unit as product
			
			-- from products ;

			-- select first_name || last_name as full_name  from user ; 

			-- select product_name || ' ********  ' ||unit as product
			
			-- from products ;

				-- joins

				-- select * from products 
				-- inner join categories 
				-- on products.category_id = categories.category_id;

				-- select * from testproducts inner join categories 
				-- on testproducts.category_id = categories.category_id
			
				-- select * from testproducts 
				-- left join categories 
				-- on testproducts.category_id = categories.category_id

				-- select * from testproducts 
				-- right join categories 
				-- on testproducts.category_id = categories.category_id


				-- select * from testproducts as t
				-- right join categories  as c 
				-- on t.category_id = c.category_id

					-- select * from testproducts as t 
					-- cross join categories as c 
					

				
			