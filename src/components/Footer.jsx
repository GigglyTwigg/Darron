import React from 'react';

function footer(){

  let d = new Date();
  const dyear=d.getFullYear();

    return  <footer >
    <div class="footer-content">
                <div class="container">
                    <div className="footerLogo">

                    </div>

                    <div class="down-below">
                        <div class="contact">
                            <a href="mailto:darronmgordon@gmail.com" title="Email me" rel="me" target="_blank">darronmgordon@gmail.com</a>
                        </div>

                        <ul >
                            <li class="links"><a href="" title="@GigglyTwigg on GitHub" rel="me" target="_blank"><i class="fa fa-github-alt icon"></i></a></li>
                            <li class="links"> <a href="" title="@GigglyTwigg on twitter" rel="me" target="_blank"><i class="icon fa fa-twitter"></i></a></li>
                            <li class="links"><a href="" rel="me" title="+GigglyTwigg on Google+" target="_blank"><i class="icon fa fa-google-plus"></i></a></li>
                            <li class="links"><a href="" rel="me" title="GigglyTwiggon Facebook" target="_blank"><i class="icon fa fa-facebook"></i></a></li>
                            <li class="links"><a href="" rel="me" title="GigglyTwigg resume on LinkedIn" target="_blank"><i class="icon fa fa-linkedin"></i></a></li>
                        </ul>

                        <div class="info">
                            <p>© {dyear}  Darron Michael Gordon🍄🍄🍄</p>
                        </div>


                    </div>
                </div>
            </div>



    </footer>

}

export default footer;
