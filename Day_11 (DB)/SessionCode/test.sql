
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

				-- like 
					-- 'a%h'  > start a & end h & conatian some letters 
					-- '%a_'  > start with any letters & a then one letter 
					-- 'ahm%' > start with ahm then any letters 
					-- '[ahm]%a'  start with a,h,m then any letters then ends with a 
					-- '[^ahm]%a'  don't start with a,h,m then any letters then ends with a
					-- '[a-h]% ' start with a to h then any letter 
					-- '[^a-h]% ' don't start with a to h then any letter
					-- '%[%]' start with any letters and ends with % 
					-- '[-]%[-]' start & end with - 

					-----------------------------------------------------------------------------------

					-- union  (add distinct)
					-- (result) + (result)

					-- select product_id , product_name from products 
					-- union 
					-- select testproduct_id , product_name from testproducts 
					-- order by product_id 
					
					-- union all 
					-- select product_id  from products 
					-- union all 
					-- select testproduct_id from testproducts 
					-- order by product_id 



					-- group by 
						
					-- select customer_id , customer_name , country from customers 
					-- group by country ;
					
					-- select count(customer_id) , country 
					-- from customers 
					-- group by country ;


						-- the number of orders made by each customer 
					-- select customers.customer_name ,count(orders.order_id)
					-- from orders 
					-- left join customers 
					-- on orders.customer_id = customers.customer_id 
					-- group by customer_name ;

					-- having 
					-- select count (customer_id) , country 
					-- from customers 
					-- group by country 
					-- having count (customer_id)>5; 

					-- select order_details.order_id , sum(products.price) 
					-- from order_details 
					-- left join products 
					-- on order_details.product_id = products.product_id 
					-- group by order_id 
					-- having sum (products.price) > 400.00; 

					-- exists 
					-- select customers.customer_name from customers 
					-- where exists (
					-- select order_id from orders where customer_id = customers.customer_id); 
					
				

					-- select customers.customer_name from customers 
					-- where  not exists (
					-- select order_id from orders where customer_id = customers.customer_id); 

					-- any  == or 

					-- select product_name from products 

					-- where product_id = any ( select product_id from oeder_details where quantity > 120)
 
					-- all   == and  

					-- select product_name from products 
					-- where product_id = all ( select product_id from order_details where quantity > 10)
					

					-- case  
							-- select product_name , 
							-- case 
							-- when price < 10 then 'lower price '
							-- when price > 50 then ' high price '
							-- 	else 
							-- ' nomal price '
							-- end 
							-- as price_range from products ; 
							