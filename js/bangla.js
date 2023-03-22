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
]

function qusAndAnsArray (){
    const storeQusAndAns =[
        {
            question:'Dom কি ', 
            answer1:`HTML DOM <span class="text-lg font-semibold">ডকুমেন্ট অবজেক্ট মডেল </span>যখন একটি ওয়েব পেজ লোড করা হয়, ব্রাউজারটি পেজের একটি ডকুমেন্ট অবজেক্ট মডেল তৈরি করে। <br /> <img class="my-2" src="${img[0]}" alt="Document Object Model" title="Document Object Model" /> <br /> DOM হল একটি W3C (ওয়ার্ল্ড ওয়াইড ওয়েব কনসোর্টিয়াম) স্ট্যান্ডার্ড।
            DOM document অ্যাক্সেস করার জন্য একটি মান নির্ধারণ করে: <br />
            "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document." <br />
            ডকুমেন্ট অবজেক্ট মডেলের মাধমে জাভাস্ক্রিপ্ট HTML এর সকল কিছু পরিবর্তন করার ক্ষমতা পেয়েথাকে কিছু মেথর্ড এবং প্রোপাটির মাধ্যমে যেমন: <br />
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
            W3C DOM এর স্ট্যান্ডার্ড 3টি ভিন্ন অংশে বিভক্ত করেছে: <br />
            <div className="">
            <li>Core DOM - standard model for all document types</li>
            <li>XML DOM - standard model for XML documents</li>
            <li>HTML DOM - standard model for HTML documents</li>
            </div>
            `},
        {question:'jk1', answer1:``},
    ];
    return storeQusAndAns
}
showData()