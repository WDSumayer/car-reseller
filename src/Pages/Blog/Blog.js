import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='max-w-[1440px] mx-auto px-2 py-48'>
           <div className='w-full md:w-2/3 mx-auto'>
           <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content text-justify">
                    <p className='text-lg'>There are Four Kinds of React State to Manage a state in a react application. For example Local state, Global state, Server state, and URL state.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content text-justify">
                    <p className='text-lg'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content text-justify">
                    <p className='text-lg'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100">
                <div className="collapse-title text-xl font-medium">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content text-justify">
                    <p className='text-lg'>Angular is a front-end framework with lots of components, services, and tools. On Angular's site, it is defined as: "The modern web developer's platform". It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.</p>
                    <br></br>
                    <p className='text-lg'>React is considered a UI library. They define themselves as: "A JavaScript library for building user interfaces" Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook's products are made with React.</p>
                    <br></br>
                    <p className='text-lg'>Vue.js is developed and led by Evan You, but also it counts on a huge open-source community. It is a "A progressive JavaScript framework"</p>
                </div>
            </div>
           
           </div>
        </div>
    );
};

export default Blog;