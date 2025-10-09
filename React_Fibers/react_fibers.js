/*
 
1. Introduction


React Fiber React ka naya system hai jo React 16 mein introduce hua tha. 
Iska main maqsad ye tha ke React rendering process ko flexible aur zyada fast banaya jaye. 
Purane React mein jab bhi koi component update hota tha, React poora tree ek hi baar render karta tha. 
Agar koi component heavy hota, to UI freeze ho jati thi aur user ka experience slow ho jata tha. 
Fiber system ne React ko ye ability di ke wo rendering kaam ko chhoti chhoti parts mein divide kar sake, 
aur pause, resume ya cancel kar sake jab zarurat ho.

React Fiber is a new system introduced in React 16.
Its main purpose is to make React’s rendering process more flexible and efficient.
Before Fiber, React used to render the whole component tree in one go.
If any component was heavy, the UI used to freeze and slow down.
The Fiber system allows React to divide rendering into small pieces and pause, resume, or cancel work as needed.



2. What is a Fiber?


Fiber asal mein ek JavaScript object hota hai jo ek React component ka ek “unit of work” represent karta hai. 
Har component ke liye ek fiber node hoti hai jisme us component ka type, props, state, aur uska parent-child relation store hota hai. 
React in fibers ko ek “fiber tree” ke form mein organize karta hai. 
Ye tree React ke liye ek map jaisa hota hai jisse wo samajhta hai kis component ko update karna hai aur kis ko skip karna hai.

A Fiber is a JavaScript object that represents one unit of work for a React component.
Each component has its own fiber node that stores the component’s type, props, state, and parent-child relationship.
React organizes these fibers into a “fiber tree”.
This tree works like a map that helps React understand which components need updates and which can be skipped.



3. Why Fiber Was Introduced


Purane React system mein React ek sath poora UI render karta tha. 
Agar koi component heavy hota to UI block ho jati thi aur user input delay hota tha. 
Fiber system ne React ko ye power di ke wo rendering ko tod kar parts mein kare aur priority ke hisaab se manage kare. 

Fiber ke main faide:
1. React ab rendering ko beech mein pause kar sakta hai
2. High priority updates (jaise user typing) pehle handle hoti hain
3. Work reuse hota hai jisse performance improve hoti hai
4. UI smooth aur responsive rehti hai

In the old React system, React rendered the entire UI at once.
If any component was heavy, the UI would block, and user input became delayed.
The Fiber system gave React the power to break rendering into smaller parts and manage work based on priority.

Main benefits of Fiber:
1. React can pause rendering in between
2. High-priority updates (like user typing) are handled first
3. Work can be reused for better performance
4. UI stays smooth and responsive


4. How Fiber Works Internally...

Jab hum likhte hain:
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

To React ek root fiber banata hai. 
Phir har component (App, uske children, etc.) ke liye alag fiber nodes banti hain. 
Ye fibers ek linked structure banate hain jahan har fiber ko apna parent, child, aur sibling pata hota hai. 

React kaam ko do phases mein handle karta hai:

1. Render Phase (Reconciliation)
   - React new fiber tree banata ya update karta hai
   - Ye phase asynchronous hota hai
   - React compare karta hai new aur old virtual DOM ko

2. Commit Phase
   - Jo changes virtual DOM mein hue wo real DOM pe apply hotay hain
   - Ye phase synchronous hota hai aur instantly execute hota hai

When we write:
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

React creates a root fiber.
Then for each component (App, its children, etc.), separate fiber nodes are created.
These fibers form a linked structure where every fiber knows its parent, child, and sibling.

React handles work in two main phases:

1. Render Phase (Reconciliation)
   - React creates or updates the fiber tree
   - This phase is asynchronous
   - React compares the new and old virtual DOM

2. Commit Phase
   - Changes from the virtual DOM are applied to the actual DOM
   - This phase is synchronous and executes instantly



5. Developer’s Role


Hum developers directly Fiber ko handle nahi karte. 
Hum sirf components aur states likhte hain. 
Fiber React ka internal mechanism hai jo decide karta hai ke:
- Kis component ko update karna hai
- Kis ko skip karna hai
- Kis update ko delay karna hai

Developers don’t directly interact with Fiber.
We only write components and manage states.
Fiber is React’s internal mechanism that decides:
- Which component needs updating
- Which can be skipped
- Which update should be delayed



6. Example 1 - Simple Component Update


function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

Jab user button click karta hai:
1. React state update karta hai
2. Fiber mark karta hai ke ye component update hone wala hai
3. React purane aur naye fiber trees compare karta hai
4. Sirf badla hua hissa (paragraph) re-render hota hai
5. UI instantly update hoti hai

When the user clicks the button:
1. React triggers a state update
2. Fiber marks the component for update
3. React compares old and new fiber trees
4. Only the changed part (the paragraph) re-renders
5. The UI updates instantly



7. Example 2 - Prioritization Concept


Socho user typing kar raha hai input box mein aur background mein ek animation chal rahi hai. 
Fiber architecture allow karta hai ke React pehle typing (high priority) handle kare aur animation (low priority) baad mein. 
Isse UI kabhi freeze nahi hoti aur user experience smooth rehta hai.

Imagine a user typing in an input box while a background animation runs.
The Fiber architecture allows React to handle typing (high priority) first and animation (low priority) later.
This keeps the UI responsive and prevents freezing.


8. Summary...

React Fiber React ka internal engine hai jo rendering ko chhoti chhoti tasks mein divide karta hai. 
Ye updates ko prioritize karta hai aur React ko fast aur responsive banata hai. 
Hum developers sirf components likhte hain, baaki scheduling aur optimization React Fiber karta hai.

React Fiber is React’s internal engine that divides rendering into small tasks.
It prioritizes updates and keeps React fast and responsive.
As developers, we just write components — scheduling and optimization are handled by Fiber.

End of Notes
*/
