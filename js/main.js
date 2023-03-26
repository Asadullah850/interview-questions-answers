// window.oncontextmenu = function () {
//     return false;
//  }
let questionSerial = 0;
let answerSerial = 0;
const mainContainer = document.getElementById('containerDiv');
const showData = (data)=>{
    const allQus = qusAndAnsArray(data)
    allQus.forEach(singlesQuesObject => {
        questionSerial ++
        answerSerial ++
        mainContainer.innerHTML +=`
        <div class=" bg-green-400 shadow-lg rounded-lg p-4 text-xl font-semibold">
            <div>
             <span class="pl-10 md:pl-8 sm:pl-2"> <span>${questionSerial}: </span> ${singlesQuesObject.question}?</span>
            </div>
        </div>
      <!-- ans -->
      <h1 class="mt-5">Answer:- <span>${answerSerial}</span></h1>
      <div class=" bg-blue-300 shadow-lg my-2 rounded-lg p-4">
        <div>
          <span>${singlesQuesObject.answer1}</span>
        </div>
      </div>
        `;
    });
}

const img=[
    ['img/pic_htmltree.gif'],
    ['img/browswer-javascript-engine.png'],
    ['img/virtual-DOM-working.png'],
    ['img/realDom.png'],
    ['img/virtual-vs-real.png'],
    ['img/React-Some-popular-features.png'],// 6
    ['img/props-parent-component-to-child.png'],
    ['img/props-unidirectional.png'],
    ['img/drilling-method.png'],// 9
    ['img/state.png'],// 10

]

function qusAndAnsArray (){
    const storeQusAndAns =[
        {
            question:'What is dom ', 
            answer1:`The HTML DOM <span class="text-lg font-semibold">Document Object Model</span> When a web page is loaded, the browser creates a Document Object Model of the page. <br /> <img class="my-2" src="${img[0]}" alt="Document Object Model" title="Document Object Model" /> <br /> The DOM is a W3C (World Wide Web Consortium) standard.
            The DOM defines a standard for accessing documents: <br />
            "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document." <br />
            With the object model JavaScript gets all the power it needs to create and update dynamic HTML change the style and many power full event. like this: <br />
            <div class="my-5">
                <h1 class="font-semibold">Method</h1>
                <li>document.getElementById(id)	</li>
                <li>document.getElementsByTagName(name)	</li>
                <li>document.getElementsByClassName(name)</li>
                <li>element.setAttribute(attribute, value)</li>
                <li>element.addEventListener("click/mousemove/event", function);</li>
                <li>document.createElement(element</li>
                <li>document.removeChild(element)</li>
                <li>element.removeChild(child)</li>
                <li>document.appendChild(element)	</li>
                <li>document.replaceChild(new, old)	</li>
                <li>document.write(text)</li>
                <h1 class="font-semibold m-2">Property</h1>
                <li>element.innerHTML =  new html content</li>
                <li>element.attribute = new value</li>
                <li>element.style.property = new style	</li>
                <li>element.cookie	</li>
                <li>element.URL	</li>
            </div>
            The W3C DOM standard is separated into 3 different parts: <br />
            <div className="">
            <li>Core DOM - standard model for all document types</li>
            <li>XML DOM - standard model for XML documents</li>
            <li>HTML DOM - standard model for HTML documents</li>
            </div>
            `},

        {question:'What are the different ways to select DOM elements in JavaScript',
         answer1:`You can get an element by:
         <li type="square">getElementById – search element by element_id</li>
         <li type="square">getElementsByTagName – search element by tag name (e.g., span, div)</li>
         <li type="square">getElementsByClassName – search element by class name.</li>
         <li type="square">getElementsByName – search element by name attribute</li>
         <li type="square">document.querySelector(".example/#example")</li>
         <li type="square">document.querySelectorAll(".example/#example")</li>
         `},
         {question:'What is the difference between Event Handlers and Event Listeners ',
          answer1:`example`},
        {question:'example', answer1:`example`},
        //   React question
         {question:'What is React', 
         answer1:`ReactJs is a JavaScript library for building user interfaces.This library is declarative , efficient, and flexible. It's fast and component-based library. It was initially developed and maintained by Facebook. 
         <img class="my-2 mx-auto" src="${img[1]}" alt="javascript-engine.png" />
         React has a virtual DOM it's a javaScript representation of the actual DOM. When updates are made React compares the current DOM to the virtual DOM and only updates the differences between the two. 
         React has some popular features:
         <img class="my-2 mx-auto" src="${img[5]}" alt="javascript-engine.png" />

         <br />
         <small>{Suggestion by <a class="text-blue-600" href="https://www.programming-hero.com/">programming-hero</a>}</small>
         `},
         {question:'What is the difference between virtual DOM and real DOM ',
         answer1:`<p class="text-lg font-semibold">virtual DOM:-</p>
         <img class="my-2 mx-auto" src="${img[2]}" alt="javascript-engine.png" />
         <li type="square">DOM manipulation is very easy</li>
         <li type="square">No memory wastage </li>
         <li type="square"> It updates fast </li>
         <li type="square">It can't update HTML directly </li>
         <li type="square">Update the JSX if the element update </li>
         <li type="square">It can produce 2,00,000 Virtual Dom Nodes/Second </li>
         <li type="square">It's only a virtual representation of the DOM </li>
         <br />
         <br />
         <p class="text-lg font-semibold">Real DOM:-</p>
         <img class="my-2 mx-auto" src="${img[3]}" alt="javascript-engine.png" />
         <li type="square">DOM manipulation is very expensive</li>
         <li type="square">There is to much memory wastage </li>
         <li type="square"> It updates fast </li>
         <li type="square">It directly update HTML  </li>
         <li type="square">Creates a new DOM if the element update </li>
         <li type="square">It allows us to directly target any specific node (HTML element) Nodes/Second </li>
         <li type="square">It's representation the UI of your application </li> <br />
         <h1 class="text-2xl font-semibold text-center">Virtual DOM vs Real DOM</h1>
         <img class="my-2 mx-auto" src="${img[4]}" alt="javascript-engine.png" />
         <small>{Suggestion by :-<a class="text-blue-600" href="https://www.programming-hero.com/">programming-hero</a>}</small>
         `},
         {question:'What is JSX ', 
         answer1:`
         <li type="round">It's JavaScript XML- (JSX)</li>
         <li type="round">JSX is a syntax extension for React JS</li> 
         <li type="round">JSX easier to read and write</li> 
         <li type="round">Get transpiled to JavaScript with Babel</li> <br />
         <p class="text-lg font-semibold">Rules Of JSX:-</p>
         <li type="round">JSX look like HTML, but under the hood it is transformed into plain JavaScript object. This explains why you also can't return two Jsx tags without wrapping them into another tag <.div><./div> or a Fragment {<><./>} </li> 
         <li type="round">JSX requires tags to be explicitly closed: <br />
         self closing tag like <.img> must become <.img/> </li> 
         <li type="round">JSX is must be use "class" attribute become "className" Properties are written in camelCase</li> 
         <li type="round">onclick -> onClick, tabindex -> tabIndex</li> 
         <small>{Suggestion by :-<a class="text-blue-600" href="https://www.programming-hero.com/">programming-hero</a>}</small>
         `},
         {question:'What is the difference between props and state  ', 
         answer1:`<h1 class="text-lg font-semibold">props:-</h1>
         We use props in React to pass data from one component to another (from a parent component to a child component's). 
         <img class="my-2 mx-auto" src="${img[6]}" alt="javascript-engine.png" />
         <h1 class="text-lg font-semibold">props are unidirectional.</h1>
         <img class="my-2 mx-auto" src="${img[7]}" alt="javascript-engine.png" />
            Prop send a data drilling method is call prop drilling method. We pass the data another component using props,
         <img class="my-2 mx-auto" src="${img[8]}" alt="javascript-engine.png" />
         <h1 class="text-lg font-semibold">state:-</h1>
         <img class="my-2 mx-auto" src="${img[9]}" alt="javascript-engine.png" />
         <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; Whenever it changes, the component re-renders. The change in state happen as a response to user action or system-generated event</p>
         <small>{Suggestion by :-<a class="text-blue-600" href="https://www.programming-hero.com/">programming-hero</a>}</small>
         `},
         {question:'What are react lifecycle methods ', 
         answer1:`<p>Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.
         <li>Mounting – Birth of your component</li>
         <li>Update – Growth of your component</li>
         <li>Unmount – Death of your component</li>
         <br />
         <h1>Common React Lifecycle Methods:= <br />render()</h1>
         The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.
         </p>`},
         {question:'What is the difference between attribute and property?', answer1:`example`},
         {question:'What is diff algorithm', answer1:`example`},
         {question:'example', answer1:`example`},

    ];
    return storeQusAndAns
}
showData()