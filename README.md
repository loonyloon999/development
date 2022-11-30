# Development

### Link to Deployed Website
If you used the stencil code, this is `https://loonyloon999.github.io/development/`

### Goal and Value of the Application
My application allows users to keep track of sports jerseys that they like, see what they cost, and save them in their "locker" for later. Although my website does not allow users to actually purchase the jerseys, it allows them to look at the most popular jerseys in every sport and get an idea of which ones they might want to buy. There is no website that lets you search for jerseys in every sport. For instance, baseball jerseys will never be sold on the same site as football, basketball, and hockey jerseys, except maybe on ebay. My site allows users to see all jerseys at once.  

### Usability Principles Considered
I made sure to lay out the jerseys in a clean way. Each jersey has relevant information above it, and it is easy to determine which information corresponds to which jersey. Similarly, the sorting features are conventiently located on the side of the page. Lastly, I keep track of the total amount of money that a person's locker might cost them. 

### Organization of Components
I was sure to create a JerseyItem component that I could render by mapping. This is substantially simpler and easy to understand code wise than creating 12 separate jersey divs manually. This way, whenever a jersey gets added to the jersey-data.json, it is immediately added to the website as well. 

### How Data is Passed Down Through Components
Data is passed from jersey-data.json to App.js where it is mapped into many JerseyItem components. The JerseyItem components are found in components/JerseyItem.js. 

### How the User Triggers State Changes
The user triggers state changes every time they select a different radio button or add an item to their locker. I use the useEffect hook to change the jerseys that are displayed after state changes. There is a state for which sport is selected, which region is selected, and if the locker is selected or not. Every time a different one of these options is selected, the state updates. I also have a state to determine which jerseys are shown. 

