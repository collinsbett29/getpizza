// business logic
function Pizza(size, crust, toppings){
    this.pizzaSize= size;
    this.pizzaCrust= crust;
    this.pizzaToppings= toppings;

}
// Size Pricing

var smallPrice= 500;
var mediumPrice= 800;
var largePrice= 1000;

// crust Pricing

var crispyCrust = 200;
var stuffedCrust = 150;
var gluttenCrust = 100;

// toppings pricing

var pepperoniTopping = 200;
var mushroomTopping = 150;
var onionTopping = 100;

// delicery fee

var deliveryFee = 250;

// user interface logic
$(document).ready(function() {
    $("form#pizzas").submit(function(event) {
        event.preventDefault();

        var inputtedpizzaSize = $("input[name=size]:checked").val();
        var inputtedpizzaCrust = $("input[name=crust]:checked").val();
        var inputtedpizzaToppings = $("input[name=toppings]:checked").val();
        
        var newPizza = new Pizza(inputtedpizzaSize, inputtedpizzaCrust, inputtedpizzaToppings);
        
        $("#orderdetails").show();
        $(".size").text(newPizza.pizzaSize);
        $(".crust").text(newPizza.pizzaCrust);
        $(".toppings").text(newPizza.pizzaToppings);

        if(newPizza.pizzaSize === "small" && newPizza.pizzaCrust === "crispy" && newPizza.pizzaToppings === "pepperoni"){
            
            $(".totalcost").text(pepperoniTopping + crispyCrust + smallPrice);
            
  
          }

        });

        


    });
