import React from 'react';

function footer(){

  let d = new Date();
  const dyear=d.getFullYear();
const path = window.location.pathname;
const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(pathname);
    return  < footer>
    <div class="footer-content"  className={pathname}>
                <div class="container">
                    <div className="footerLogo">

                    </div>

                    <div class="down-below">

                      <div className="smbtns">
                        <ul >
                            <li class="links"><a href="" title="@GigglyTwigg on GitHub" rel="me" target="_blank"><i class="fa fa-github-alt icon"></i></a></li>
                            <li class="links"><a href="" rel="me" title="+GigglyTwigg on Itch" target="_blank"><i class="icon fa fa-google-plus"></i></a></li>
                            <li class="links"><a href="" rel="me" title="GigglyTwiggon Facebook" target="_blank"><i class="icon fa fa-facebook"></i></a></li>
                            <li class="links"><a href="" rel="me" title="GigglyTwigg resume on LinkedIn" target="_blank"><i class="icon fa fa-linkedin"></i></a></li>
                        </ul>
                          </div>

                        <div class="contact">
                            <a href="mailto:darronmgordon@gmail.com" title="Email me" rel="me" target="_blank">darronmgordon@gmail.com</a>
                        </div>

                        <div class="info">
                            <p>ยฉ {dyear}  Darron Michael Gordon๐๐๐</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

}

export default footer;
