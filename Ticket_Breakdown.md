# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:
Add an attribute on the Facilities table to hold custom Agent ids, each of which will uniquely point to an individual Agent on the Agent's table.

Ticket 2: 
Design a function createCustomAgentId to assign a custom id to each agent that is assigned a shift. It should be called with the Agent's internal database id and the custom id. A facility should be able to call the function to add or update a custom id for an Agent.

Ticket 3: 
Design a function getAgentInfo, called with the Agent's custom id, that returns information about an Agent from the Agent table by using the internal id. 

Ticket 4: 
Design a function generateShiftsByAgent, called with the Agent's custom id, with the ability to return all Shifts worked by that Agent at this Facility. It will find the Agent from the Agent database by using the internal id. This feature may share a helper function with ticket 3 that brings up an Agent's information. It will also query the Shifts data to return the information relevant to the Facility.