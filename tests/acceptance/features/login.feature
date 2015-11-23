@login
Feature: PayPal Login

  In order to see account
  Fred, a PayPal customer
  Wants to login to PayPal

  @smoke @loginSuccess
  Scenario: Fred successfully logs in to PayPal

    When Fred logs into PayPal
    Then he should be logged in successfully
