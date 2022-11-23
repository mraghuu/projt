
        var plusmember=0;
        var cartitem=0;
        totalprice=0;
        var products=["Product-1","Product-2","Product-3","Product-4","Product-5","Product-6","Product-7","Product-8"]
        var price=[1200,1500,1600,1700,1800,1900,2000,2200];
        var cartproducts={'proname':[],'proprice':[],'quantity':[]}
        for (var i=0; i>cartproducts.length; i++)
        {
            var p=document.createElement("p");
            p.setAttribute("id","pname")
        }
        console.log(cartproducts);
        function memberplus() {
            if(plusmember==0){
                plusmember = 1;
          for (var i=0; i<products.length; i++) {
          var cp=document.getElementById("price"+i).textContent;
          ap=cp.replace("₹","");
          document.getElementById("price"+i).textContent="₹"+(ap-ap*0.1);
          
        }
            }  
            else{
             plusmember=0;
             for (var i=0; i<products.length; i++) {
             var cp=document.getElementById("price"+i).textContent;
             ap=cp.replace("₹","");
             document.getElementById("price"+i).textContent="₹" + ap*10/9;
            }       
        }
        cartitem()
    }
        function displayProducts(){
        var size=products.length;
        for(var i=0; i<size; i++)
        {
            var d1=document.createElement("div");
            var p1=document.createElement("p");
            var pp=document.createElement("p");
            var b1=document.createElement("button");
            d1.setAttribute("id","div" +i);
            p1.setAttribute("id","name" +i);
            b1.setAttribute("id","but" +i);
            pp.setAttribute("id","price" +i);
            d1.setAttribute("class","div1" );
            p1.setAttribute("class","name1" );
            b1.setAttribute("class","but1" );
            pp.setAttribute("class","price1" );
            p1.textContent = products[i];
            b1.textContent="Add to Cart";
            pp.textContent = "₹" + price[i];
            
            b1.addEventListener("click",(e)=>{
                document.getElementById("circle").style.display="block";
                console.log(e.target.id,"clicked");
                var cid=e.target.id;
                var cid=cid.replace("but","price");
                var p=parseInt(document.getElementById(cid).textContent.replace("₹",""));              
                console.log("price is",p);
                cartitem+=1;
                totalprice=totalprice+p;
                document.getElementById("count").innerHTML=cartitem;
                document.getElementById("total").textContent=`Total Price:₹${totalprice}`;
            });
            d1.append(p1);
            d1.append(pp);
            d1.append(b1);
            document.getElementById("allproduct").append(d1); 
        }
    }
    displayProducts();
        