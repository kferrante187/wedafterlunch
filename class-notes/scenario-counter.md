# Scenario - Golf Counter

As an anonymous application user
I want to count my golf shots
So that I can not have to use a barbaric pencil and paper

## Examples - Initial State

Given the user acesses the golf counter feature
Then the current count should 0
And the increment button should enabled
and the decrement button should be disabled

## Example - Incrementing

Given the user accesses the golf counter feature
When they click the increment button
Then the current count increments
and the decrement button is enabled

## Example - Decrementing

Decrement reduces the current count.

When you get back to zero, decrement should be disabled.

# Scenario

We want to have give the ability for users to set preferences.

They want to be able to say that they like to count by 1, 3 or 5.

That should impact the way the counter component increments and decrements.
