import React from 'react'


/*
type - any HTML string or a React component
props - null or an HTML attributes object. Personalizes the element
content - null, a string, a React element or a React component
 */

// React.createElement( /* type */, /* props */, /* content */ );

// ==========================================================================================

/*
When writing JSX, keep in mind that it can only return a single element.
This element can have as many descendants as possible, however it can only have one root element.

This must happen because under the hood, the React.createElement is called and it expects just one single
HTML string, which is, the root element.
 */

let message = (
	<div>
		<h1>All About JSX:</h1>
		<ul>
			<li>JSX</li>
			<li>is</li>
			<li>awesome!!</li>
		</ul>
	</div>
);



//
// message = (
// 	<h1>All About JSX:</h1>
// 	< ul >
// 	< li > JSX < /li>
// <li>is</li>
// < li > awesome
// !
// </li>
// </ul>
// );