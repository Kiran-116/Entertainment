import React from 'react'

export const Games = () => {
  return (
    <div>
        <div class="portfolio-section sec-padding section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2> recent work </h2>
                    </div>
                </div>
                <div class="row">
                    {/* <!-- Portfolio Item --> */}
                    <div class="portfolio-item">

                        <div class="portfolio-item-thumbnail">
                            <img src="img/Portfolio9.png" alt="" />
                        </div>
                        <h3 class="portfolio-item-title"> Portfolio  </h3>
                        <button type="button" class="btn view-project-btn">view project</button>
                        <div class="portfolio-item-details">
                            <div class="description">
                                <p>
                                    This portfolio website features a simple and modern design with a focus on showcasing my work and skills. 
                                    The website is fully responsive and works well on all devices.
                                    The Navbar contains home, about, portfolio and contact section.
                                    You can even download my CV from the about section.
                                    You can view my Projects in the portfolio section.
                                    You can contact me from the contact section.
                                </p>
                            </div>
                            <div class="general-info">
                                <ul>
                                    <li> Created - <span> 31 March 2023</span> </li>
                                    <li> Technology Used - <span> html, css, javascript </span> </li>
                                    <li> Role - <span> Complete Website </span> </li>
                                    <li> View Online - <span> <a href="https://bright-fenglisu-e89119.netlify.app" target="_blank"> Portfolio </a> </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-item">

                        <div class="portfolio-item-thumbnail">
                            <img src="img/Portfolio8.png" alt="" />
                        </div>
                        <h3 class="portfolio-item-title"> Youtube Clone </h3>
                        <button type="button" class="btn view-project-btn">view project</button>
                        <div class="portfolio-item-details">
                            <div class="description">
                                <p>
                                    The YouTube web application is an online platform that allows users to watch,
                                    share, and upload videos. The application features a user-friendly interface, personalized recommendations, and a powerful
                                    search engine that helps users discover new content based on their interests. It also offers features such as playlists, comments,
                                    likes, and subscriptions, which enhance the user experience and encourage engagement with the community. The YouTube web
                                    application is a widely used platform that has revolutionized the way people consume and interact with video content online.
                                </p>
                            </div>
                            <div class="general-info">
                                <ul>
                                    <li> Created - <span> 17 Feb 2022</span> </li>
                                    <li> Technology Used - <span> html, css, javascript </span> </li>
                                    <li> Role - <span> Complete Website </span> </li>
                                    <li> View Online - <span> <a href="https://github.com/Kiran-116/youtube-clone" target="_blank"> Youtube Clone  </a> </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-item">

                        <div class="portfolio-item-thumbnail">
                            <img src="img/Portfolio6.png" alt="" />
                        </div>
                        <h3 class="portfolio-item-title"> Advanced Bill Calculator </h3>
                        <button type="button" class="btn view-project-btn">view project</button>
                        <div class="portfolio-item-details">
                            <div class="description">
                                <p>
                                    An advanced bill calculator using JavaScript is a web application that helps users calculate their bills based on discounts and number of prople. It also breaks down the bill among people and tells us how much each person has to pay, in addition to the discount that they are eligible for. I had created this website while I was learning the concepts of Javascript.
                                </p>
                            </div>
                            <div class="general-info">
                                <ul>
                                    <li> Created - <span> 15 June 2022</span> </li>
                                    <li> Technology Used - <span> html, css, javascript </span> </li>
                                    <li> Role - <span> Complete Website </span> </li>
                                    <li> View Online - <span> <a href="https://enchanting-dango-bd9e24.netlify.app" target="_blank"> Advanced Bill Calculator  </a> </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
