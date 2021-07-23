---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
exclude_rss: true
title: Jay Cohen
---

<!-- Intro -->
<section class="intro">
    <h1>Hi<br>I'm <span class="color-three">Jay</span>.<br>I build mobile apps<span class="color-three">.</span></h1>
    <h2 class="color-four">iOS, Android, Mac OS, Watch OS, TV OS</h2>
    <p class="color-three">Available for hire.</p>
    <ul class="clients">
        <li><img src="assets/img/Client-One.svg" alt="Sony Pictures & Paramount Pictures Logo"></li>
        <li><img src="assets/img/Client-Two.svg" alt="The Distance & WQA Logo"></li>
    </ul>
</section>

<!-- About & Work -->
<section class="about" id="about">
    <div class="row">
        <div class="offset-by-three column">
            <article class="first">
                <span class="faded">11</span>
                <h2>Years of experience<span class="color-three">.</span></h2>
                <p>I'm a freelance app developer and I've been building apps for clients for over 11 years in a wide range of sectors including international sports brands, film studios, health, CRM, and not for profit. Based in the middle of the UK, I've worked with clients across the world.</p>
                <p>In my spare time I can be seen trekking in the outdoors with family, working on a pilots license or attempting to make gluten free tasty.</p>
            </article>
        </div>
        <div class="offset-by-five column">
            <article id="work">
                <span class="faded">48</span>
                <h2>Projects<span class="color-three">.</span></h2>
                <p>Most of the projects I've worked on are bound by NDA's, which is how most freelancers work today. A lot of my work comes in from recommendations, so my <a href="{{site.url}}/projects">portfolio</a> contains a few side projects to keep my skills fresh.</p>
                <p>I like to work in a collaborative and open way, either working solo or part of a cross functional team tackling a larger problem. The code I write is clean, well documented, and easily read by stakeholders.</p>
                <a href="{{site.url}}/projects"><img src="{{site.url}}{{ 'assets/img/Projects.svg' | relative_url }}" alt="Projects Banner"></a>
            </article>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="testimonials">
    <h3 class="faded">"Great team player"</h3>
    <h2>Testimonials<span class="color-three">.</span></h2>
    <div class="slider">
        <ul>
            <li>
                <div class="testimonial">
                    <div class="author">
                        <img src="assets/img/Erika-avatar.png" alt="Erika avatar">
                        <h4>Erika Padlo</h4>
                        <h5>Creatio</h5>
                    </div>
                    <div class="content">
                        <p>I have worked with many developers over the years and working with Jay has been one of the best! He is very knowledgeable and whenever an issue arose he would discuss with me about the best possible solutions. I would recommend Jay's services in a heartbeat to anyone looking.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="testimonial">
                    <div class="author">
                        <img src="assets/img/Anthony-avatar.png" alt="Anthony avatar">
                        <h4>Anthony Main</h4>
                        <h5>The Distance</h5>
                    </div>
                    <div class="content">
                        <p>Jay joined us for a few months, which led to about 6 as a contract iOS developer. He worked diligently and fit in well with our team and our culture. Certainly more committed than most contractors in the market. More than comfortable in front of and leading client meetings. Would highly recommend.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="testimonial">
                    <div class="author">
                        <img src="assets/img/Aidan-avatar.png" alt="Aidan avatar">
                        <h4>Aidan Mack</h4>
                        <h5>Android Developer</h5>
                    </div>
                    <div class="content">
                        <p>I worked closely with Jay for 6 months on a ticket purchasing application. Jay’s main area of expertise was developing the IOS app which he coded with confidence and met all the project milestones on time. His interpersonal skills were of great value to the projects progression and he was able to explain technical processes with ease to non-technical stakeholders.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="testimonial">
                    <div class="author">
                        <img src="assets/img/Eric-avatar.png" alt="Eric avatar">
                        <h4>Jakub Nowak</h4>
                        <h5>Oni Track</h5>
                    </div>
                    <div class="content">
                        <p>Jay is an amazing iOS developer. He is very patient, and always solved any issues we had along the way very quickly. I am very happy to have worked with him. Great job!</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="nav">
        <div class="count"><span class="counter">1</span><span class="color-three total">/5</span></div>
        <div class="btns">
            <div class="left-btn prev"></div>
            <div class="right-btn next"></div>
        </div>
    </div>
</section>

<!-- Contact -->
<section class="contact" id="hire">
    <h2 class="faded">Contact</h2>
    <h3>Hire, say Hi<span class="color-three">.</span></h3>
    <div class="row">
        <div class="six columns">
            <form action="https://formspree.io/f/xqkgybqq" method="POST" id="contact-form">
                <input type="hidden" name="_next" value="//{{ site.url }}" />
                <div class="row">
                    <div class="six columns">
                        <label for="name">What is your full name?</label>
                        <input type="text" name="name" id="name" placeholder="Jay Cohen" required>
                    </div>
                    <div class="six columns">
                        <label for="email">What is your email address?</label>
                        <input type="text" name="email" id="email" placeholder="jay.cohen@example.com" required>
                    </div>
                </div>
                <div class="row">
                    <div class="twelve columns">
                        <label for="need">What sort of work do you need help with?</label>
                        <div class="flex-container">
                            <input type="radio" name="service" value="development" id="development" checked="checked">
                            <label for="development" class="btn-label">Development</label>
                            <input type="radio" name="service" value="support" id="support">
                            <label for="support" class="btn-label">Support</label>
                            <input type="radio" name="service" value="other" id="other">
                            <label for="other" class="btn-label last">Other</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="twelve columns">
                        <label for="message" class="message-label">What is your project all about?</label>
                        <textarea name="message" id="message" rows="30" placeholder="Hi Jay. We've got some work for you!" required></textarea>
                        <button type="submit" name="submit" id="submit-btn" value="Sent">Submit</button>
                        <p id="submit-status"></p>
                    </div>
                </div>
            </form>
        </div>
        <div class="offset-by-one column five columns">
            <h4>Guidelines<span class="color-three">.</span></h4>
            <p>Due to Covid-19 I only work remotely and I aim to get back to all enquries within a day.</p>
            <p>If you're looking to hire me for a project, please provide any details along with timelines. I charge £550 per day for app development (plus VAT if applicable) and I can't work for profit-share or equity. I also offer support blocks to new and existing clients with a minimum of 2 hours booked per month.</p>
            <div class="guidelines">Check out my full guidelines <a href="{{site.url}}/guidelines" title="View guidelines">here</a></div>
        </div>
    </div>
</section>
