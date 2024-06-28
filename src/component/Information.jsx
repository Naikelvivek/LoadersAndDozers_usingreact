import React from 'react';
import './Information.css'; // Import local styles for Information component

const Information = () => {
    return (
        <main>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <b> <a class="navbar-brand" href="#">EQUIPMENT </a> </b>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Popular</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Arieal Work Platforms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Material Handling</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Site Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Earthmoving</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Browse all Equipment</a>
      </li>
    </ul>
    
  </div>
  
</nav>

            </main>
            
    );
}

export default Information;
