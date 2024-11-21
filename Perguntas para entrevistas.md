# Perguntas para entrevistas

1. Describe a time you faced a challenging front-end development problem. How did you approach and solve it?

> It was a task to implement a button to check a CPF number (equivalent to an ID) on an employee hiring screen.  
First thing I did, as with every task, I wrote a Markdown file based on the specifications of the call. This file helps me on planning and avoids having to redo things later. Then I wrote the user action flow and my own task flow.
I gave the idea to my superior to make a new endpoint for me to send the necessary information to and return with a success or error response. He replied that the back-end team was too busy, so I proposed implementing it. The back-end would receive the CPF, the employee's name and other important information, it would check if this information matched on a government website and, if everything was right, it would generate a PDF document to "authenticate" the CPF. This document would then be included in our database.
The way I worked it out was as follows: On the front-end, I made a request to the government API with the necessary information and compared it with the information filled in by the user via the form. If this information matched, I called an endpoint on the back-end that built the PDF for me. The back-end built the PDF, converted it into a BLOB and returned it to the client. Finally, the user could visualise the document.

2. About you

> I'm a front-end developer at POPULIS, developing an HR web app for companies with thousands of employees.
I have a technical degree and an undergraduate degree in Systems Analysis and Development and I plan to start a postgraduate programme next year.  
I got the job I'm currently in while I was still at university. After graduating I continued working in it and doing personal projects to learn new technologies and keep up to date with the market.  
Currently, I'm part of the front-end team, working more on tasks that involve refactoring and building new Core Components, because I think my co-workers trust me to refactor code that is used in many parts of the application.  
Outside of work, I like to develop personal projects that help me on a daily basis, such as a financial control project that I'm currently developing. I also like to study algorithms and data structures and solve Leet Code exercises.

3. Why work with us?

> In addition to working in a field that interests me, all the benefits really suits me, especially working with international clients, speaking English with work colleagues, the possibility of changing teams and relocating. I'm also looking for new challenges and career growth.

4. Bonus

> I'm a software engineer at Populis, where I've been part of the Front-end team for just over 2 years. My background is in systems analysis and development, an area linked to software engineering. I graduated at FIAP and worked for 2 years in start-ups run by students from the university.
After graduating, I continued studying new technologies, doing personal projects and delving into DSA. Next year, I'll be starting my postgraduate course in software architecture.
I got my current job by being recruited by one of the students who were part of the college's start-ups. Here, I was responsible for starting the front-end of the system, previously written in Java. I created and maintain Core Components, which are used as the basis for other components and are present throughout the application.
Outside of work, I like to build personal projects that solve specific problems of mine and those I know, and solve LeetCode problems. My hobbies are studying DSA (optimisation is something I really enjoy) and solving Rubik's cube.
I'm looking for something new and to have more connection with what I do. I like to look at what I've built and be proud of having done a good job.
