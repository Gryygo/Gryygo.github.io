# Pomoro Timer
 A Pomodoro timer project. Made for personal use but avaible for anyone who may find it useful.
 ---------------------------------------------------------------------------------------------
 This was actually my very first project using Javascript. Before it, i had barely any knowledge in DOM manipulation. Thus, even being a small project, i ended up really glad with the result and managed to learn lots of things that i think may be really useful in future projects.
 
 I started the project with the HTML. Even being a small one, i aimed to use semantic HTML for the good pratices. After finishing it i started the CSS, which was quite simples actually: did some looping animations for icons on the left side, transitions for the buttons and social media icons and, obviously, the overall styling for the webpage with the colors, borders, margins and general configurations. One new thing i learned in CSS with this project was the checkbox styling. After following some tutorials i managed to achieve a pleasant result, which worked really well with my original idea. I also added a short transition for the checked state, which was a small detail that i personally really liked.
 
 After finishing both HTML and CSS, i moved to Javascript. As i said, i had almost no knoledge in DOM manipulation with JS, so everything i did in this regard was my first time doing so. I started setting the basics for every function i needed: a timer function, a function to transfer the timer buttons info for the timer, a function to add the tasks and a function to slash-through the finished tasks. From all these, i think it's worth mentioning:
  - Timer: When i searched ways of creating a timer i ended up finding lots of differents ways of doing it. I opted for a setInterval approach, because it seemed a simple and efficient logic for me. 
  - Setting the times: This one was messy, but functional at least. I created a function responsible for changing the times variables for rest and focus for every button. I also added an extra function responsible for changing the style of the pressed button. I'm aware i could have used costumized radio buttons for this, but i wanted to try this alternative with data-attributes on HTML.
  - Adding the tasks: This was a really simple one. I declared an onClick function that created a label element containing a checkbox and the task written on the input. The only trick on this was using a variable to increment on every new task. The variable was "stringfied" and added as the new label's id, so that every label had an new and unique id, what was going to be quite useful on the following function.
  - Slash the finished tasks: Since i had a id on every new label, all i needed to do was set the style of that particular label for it to be slashed when the timer reached 0. 

 After finishing all this, all i had to do was setting the Rest and Focus states, the validations for the form and solving a few bugs on the layout and the timer itself.
 Right now, i still plan adding some features to this project as:
   - Costumized alert boxes
   - Being able to add multiple tasks at once
   - Being able to listen some playlists during the focus times (this one is a HUGE maybe, but i like the idea)
   - Work on the responsiveness
