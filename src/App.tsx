import './App.css'

function App() {

  return (
    <>
      <div className='content'>
        <div className="header">
          <div className="header-text">
            <div className="header-text-name">Xiaorui Wang</div>
            <div className="header-row">
              <div> Software Engineer</div>
              <div className="mx-2">|</div>
              <div>Frontend & Backend & Mobile developer & Full-Stack</div>
            </div>
            <div className="header-row">
              <div className="header-item"><img className="header-item-icon" src="./src/assets/email.png"></img>
                <div><a className="text-blue-700 hover:underline hover:text-purple-700"
                  href="mailto:xiaorui.wang@usi.ch">xiaorui.wang@usi.ch</a></div>
              </div>
              <div className="mx-2">|</div>
              <div className="header-item"><img className="header-item-icon" src="./src/assets/phone.png"></img>
                <div>+41 76 217 5438</div>
              </div>
              <div className="mx-2">|</div>
              <div className="header-item"><img className="header-item-icon" src="./src/assets/Location.png"></img>
                <div>Lugano, Switzerland</div>
              </div>
            </div>
            <div className="header-row-link">
              <div className="header-item"><img className="header-item-icon" src="./src/assets/github.png"></img>
                <div><a className="text-blue-700 hover:underline hover:text-purple-700"
                  href="https://github.com/XiaoruiWang-SH">github.com/XiaoruiWang-SH</a></div>
              </div>
              <div className="mx-2">|</div>
              <div className="header-item"><img className="header-item-icon" src="./src/assets/linkedin.png"></img>
                <div><a className="text-blue-700 hover:underline hover:text-purple-700"
                  href="https://www.linkedin.com/in/xiaoruiwang-sh/XiaoruiWang-SH">www.linkedin.com/in/xiaoruiwang-sh/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="body">
          <div className="body-education">
            <div className="body-title">Education</div>
            <div className="body-content">
              <div>
                <div className='font-bold text-[15px]'>
                  <div className="body-content-item-row-right">
                    <span>Master of Science in Informatics</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span>02/2024 - 02/2026(expected)</span>
                  </div>
                </div>
                <div>
                  <div className="body-content-item-row-right">
                    <span><a className="text-blue-700 hover:underline hover:text-purple-700" href="https://www.usi.ch/en">USI -
                      Università della Svizzera italiana</a></span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span>Lugano, Switzerland</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className='font-bold text-[15px]'>
                  <div className="body-content-item-row-right">
                    <span>Bachelor of Computer Science</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span>09/2011 - 07/2015</span>
                  </div>
                </div>
                <div>
                  <div className="body-content-item-row-right">
                    <span><a className="text-blue-700 hover:underline hover:text-purple-700" href="https://en.hpu.edu.cn/">Henan
                      Polytechnic University</a></span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span>Jiaozuo, China</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="body-education">
            <div className="body-title">Work Experience</div>
            <div className="body-content">
              <div className="body-content-project">
                <div className="body-content-item-company font-bold">
                  <div className="body-content-item-row-right">
                    <span className="bold"><a className="text-blue-700 hover:underline hover:text-purple-700"
                      href="https://global.jd.com/">JD.com</a> </span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">Senior Software Engineer</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">Shanghai, China</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">10/2020 - 07/2023</span>
                  </div>
                </div>
                <div className='font-medium'>A leading global e-commerce and supply chain technology company.</div>
                <div className="body-content-project-des">
                  <ul className='list-disc list ml-[2ch]'>
                    <li>
                      <span className='font-bold'>Hybrid Framework Innovation:</span> Architected and optimized <a className="text-blue-700 hover:underline hover:text-purple-700" href="https://github.com/jd-opensource/JDHybrid">JDHybrid</a>,a proprietary hybrid container solution supporting ​100M+ daily page views (PV)​​ and ​4,000+ domains​ across JD's mobile app, leveraging ​WKWebView​ with native enhancements to deliver near-native H5 performance. Key technical contributions:
                      <ul className='list-disc list ml-[2ch] list-style-square'>
                        <li><span className='font-bold'>Offline Package Preloading:</span> Designed dynamic resource interception and local caching mechanisms, reducing H5 first-screen latency by ​30%​​ and achieving ​92% instant-load rate​ (from 29.5% baseline).</li>
                        <li><span className='font-bold'>Hybrid Rendering Engine:</span> Developed a native-H5 hybrid rendering system resolving component mapping/gesture conflicts, boosting video startup speed by ​40%​​ and eliminating image tearing issues.</li>
                        <li><span className='font-bold'>Bandwidth Optimization:</span> Implemented intelligent resource degradation and incremental updates, reducing CDN peak traffic by ​80%​​ during 618/Singles’ Day campaigns.</li>
                      </ul>
                      <li><span className='font-bold'>Technical Influence:</span> Authored 5+ patents, published 10+ articles on JD’s tech blog, and delivered internal workshops on hybrid development best practices. Recognized with ​Top Performer (A+)​​ in 2022.</li>
                      <li><span className='font-bold'>Promotion & Impact:</span> Accelerated career growth from P6 to P7 within 2 years with ​30% salary increase, recognized for driving technical innovation and business-critical results.</li>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="body-content-project mt-2">
                <div className="body-content-item-company font-bold">
                  <div className="body-content-item-row-right">
                    <span className="bold"><a className="text-blue-700 hover:underline hover:text-purple-700"
                      href="https://en.zto.com/">ZTO Express</a></span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">Software Engineer</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">Shanghai, China</span>
                  </div>
                  <div className="body-content-item-divider">|</div>
                  <div className="body-content-item-row-right">
                    <span className="bold">07/2017 - 10/2020</span>
                  </div>
                </div>
                <div className='font-medium'>A leading express delivery company in China and one of the largest express delivery companies globally.
                </div>
                <div className="body-content-project-des">
                  <ul className='list-disc list ml-[2ch]'>
                    <li>Achieved rapid career advancement with two promotions for successfully developing and launching the Tu Xi Express Supermarket iOS app, demonstrating exceptional technical leadership.</li>
                    <li>Led complete app modernization using Swift, resulting in 60% performance improvement and 80% crash rate reduction through advanced architecture and optimization techniques.</li>
                    <li>Pioneered cross-platform development strategy using Flutter, optimizing development efficiency and maintaining consistent user experience across iOS and Android platforms.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="body-education">
            <div className="body-title">Projects & Open Source</div>
            <div className="body-content">
                            <div>
                                <div className='font-bold text-[15px]'>
                                    <a className="text-blue-700 hover:underline hover:text-purple-700"
                                        href="https://github.com/XiaoruiWang-SH/TODO-Calendar">
                                        <div className="header-item">
                                            <div className="bold">TODO-Calendar</div><img className="header-item-icon" src="./src/assets/link.png"></img>
                                        </div>
                                    </a>
                                </div>
                                <ul className='list-disc list ml-[2ch]'>
                                    <li>A clean, minimalist task management calendar web application deployed at <a className="text-blue-700 hover:underline hover:text-purple-700" href="https://todocalendar.live">https://todocalendar.live</a>. Features real-time updates, OAuth2 authentication and JWT-based security.</li>
                                    <li>Built with JavaScript/TypeScript/React/Redux/Tailwind CSS/responsive design frontend for mobile and desktop, and Java/Spring Boot/MySQL/RESTful api backend, Deployed with Docker and Nginx reverse proxy at cloud server. </li>
                                </ul>
                            </div>                            
                            <div className="mt-2">
                                <div className='font-bold text-[15px]'>
                                    <a className="text-blue-700 hover:underline hover:text-purple-700"
                                        href="https://github.com/XiaoruiWang-SH/StepApp">
                                        <div className="header-item">
                                            <div className="bold">StepApp</div><img className="header-item-icon" src="./src/assets/link.png"></img>
                                        </div>
                                    </a>
                                </div>
                                <div>A smart running app for Android, developed in Java, integrating multi-sensor tracking (GPS/accelerometer/gyroscope) and LLM-driven adaptive training plans with real-time route visualization.</div>
                            </div>
                            <div className="mt-2">
                                <div className='font-bold text-[15px]'>
                                    <a className="text-blue-700 hover:underline hover:text-purple-700"
                                        href="https://github.com/XiaoruiWang-SH/WCache">
                                        <div className="header-item">
                                            <div className="bold">WCache</div><img className="header-item-icon" src="./src/assets/link.png"></img>
                                        </div>
                                    </a>
                                </div>
                                <div>A high-performance, thread-safe, and lightweight iOS caching library implemented in C++, supporting both
                                    memory and disk caching.</div>
                            </div>
                        </div>
          </div>
          <div className="divider"></div>
          <div className="body-education">
            <div className="body-title">Technical Skills</div>
            <div className="body-content">
              <div>
                <div><span className="font-bold">Programming Languages:</span> JavaScript/TypeScript, Java, Objective-C, Swift, C/C++, Python</div>
                <div className='mt-1'><span className="font-bold">Frontend:</span> React.js, Redux, Tailwind CSS, Flutter</div>
                <div className='mt-1'><span className="font-bold">Backend:</span> Spring Boot, Node.js, MySQL, RESTful api</div>
                <div className='mt-1'><span className="font-bold">Mobile Development:</span> iOS, Android, Flutter, React Native</div>
                <div className='mt-1'><span className="font-bold">DevOps & Tools:</span> Docker, Nginx, Git, OAuth2, JWT, CI/CD</div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="body-education">
            <div className="body-title">Languages Skills</div>
            <div className="body-content">
              <div>
                <div><span className="font-bold">English:</span> Fluent</div>
                <div className='mt-1'><span className="font-bold">Chinese:</span> Native</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
