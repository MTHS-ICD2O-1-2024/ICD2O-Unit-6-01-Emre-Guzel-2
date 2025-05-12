// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 22 2025
// This file contains the JS functions for index.html

"use strict"

// Setting the randomNumberGenerator as function 
function randomNumberGenerator() {
  // Setting the variables
  const positiveNumber = document.getElementById("positive-number").checked
  let randomNumber

  // Setting the the if and else statment 
  if (positiveNumber == true) {
    randomNumber = Math.floor(Math.random() * 6) + 1 // 1 to 6
  } else {
    randomNumber = -1 * (Math.floor(Math.random() * 6) + 1); // -1 to -6
  }
  // Gettting the reuslt 
  document.getElementById("result").innerHTML =
    "<p>The random number is: " + randomNumber + "</p>"
}