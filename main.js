import './style.scss'

document.querySelector('.links').innerHTML = `
  <ul>
    <li><a href="index.html">Home Page</a></li>
    <li><a href="quality_assurance.html">Quality Assurance Page</a></li>
    <li><a href="security.html">Security Page</a></li>
    <li><a href="bad_example.html">Bad Example Page</a></li>
  </ul>
`; 
// Seperate with ;
// You can make addition query selector in here for class or ids.
// use npm run dev if you want to see changes, 
// npm run build && npm run serve will build and run it, and show what is like in a live server.