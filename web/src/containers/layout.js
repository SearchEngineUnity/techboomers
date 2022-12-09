/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import './global.css';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';

const MyLayout = ({ data, children, location }) => (
  <>
    <Helmet>
      <script
        rel="preload"
        src="https://kit.fontawesome.com/e4a269ffa7.js"
        crossOrigin="anonymous"
        async
      />
      <script>
        {`(function(d) {
      var config = {
        kitId: 'vjz1tay',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);`}
      </script>
      <link rel="dns-prefetch" href="//use.fontawesome.com" />
    </Helmet>
    <MainNav />
    <>{children}</>
    <MainFooter />
  </>
);

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          footer: sanityNavMenu(type: { eq: "mainFooter" }) {
            type
          }
          mainNav: sanityNavMenu(type: { eq: "mainNav" }) {
            type
          }
        }
      `}
      render={(data) => <MyLayout data={data} {...props} />}
    />
  );
}
