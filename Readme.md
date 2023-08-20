1. <p>Learning goals :- <ul>
    <li>1. How to work with random object in javaScript?
    </li>
    <li>
            2. How to usse the ClassList property of javascript 
    </li>
    <li>
            3. How to create rotating animation in css 
      </li>
      <li> 
            4. Learn the use of Set timeout function in javascript
    </li>   
       </ul>
   </p>

2. <p>We will be rotating the main dice. To make rotation to any element in css we use CSS property named as <b>transform:rotate(60deg)</b> </p>

3. <p> We will be doing the same work with animation to rotate dice image from 0deg to 360 deg.</p>
4. <p>We make animation through @keyframes. Keyframes take an identifier which is the name of our animation.</p>
5. <p>While making the animation we will see that the image of dice has been changed which we don't want, to tackle this situation.We will use setTimeout function to delay the execution of<b>image.src = `images/dices${rndDice}.png</b>. So that the dice animation takes the given time </p>
