/* 
The working of the javascript worls on 3 phases:
1.Global execution context
2.Memory phase/Creation Phase
3.Execution phase

Phase 1: Gloal execution context
    The value of 'this' keyword is set to global execution context(which is empty object in node environment
    and window object in browser environement)
Phase 2:Memory Phase
    During this phase JS engine scans the code and assigns the initial values for the variables,functions,etc.
    For variable they are 'undefined' and for functions they are set to their function definition.
Phase 3:Execution phase:
    After the creation phase completed, the execution phase begins 
    where actual values of the variables are set. 
    And when the functions are called it creates a new 'Function Execution' context 
    which consists of two phases (they works same as explained above 
    but only for the particular function scope):
        1. Memory phase 
        2. Execution phase 
    The return value of the 'Function Execution' context is passed to the Global Execution Context


For live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.

*/