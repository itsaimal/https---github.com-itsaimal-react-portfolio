import React from 'react'
import "./Cover.css"

function Cover() {
    return (
        <div className="cover">
            <header>
  <div class="title wrap">
    <h1 className="old">Aimal Khan</h1>
    <h1 className="new">Aimal Khan </h1>

    <p>Frontend Web Developer</p>

    {/*button */}
<div className="btn__hover">
    <button className="btn">
  Result 
  <span>New result</span>
</button>
</div>
  </div>
</header>




<main>
  <h2>About Me</h2>
  <p>From the moment I produced "Hello World" in the console of my first application. I knew I was hooked into the world of software development.But software development has never been " a job " for me,it's offered an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the year go by.</p>

</main>
        </div>
    )
}

export default Cover
