"use strict";

var validOffer = confirm("Is the offer still valid?");

var twoOrMoreItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

var premiumMember = confirm("Are you a premium member?");

var canUserUseOffer = (twoOrMoreItems || premiumMember) && validOffer;

alert("You can use this offer is a " + canUserUseOffer + " statement.");