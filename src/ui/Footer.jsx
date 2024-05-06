/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Btn from "./Btn";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 flex justify-center bg-base-blue pl-6 pr-6">
      <div className="mt-20 max-w-[1160px] flex-grow">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4">
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Use Cases
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white">
                <Btn to="/for-designers/">For Designers</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white">
                <Btn to="/for-developers/">For Developers</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white">
                <Btn to="/for-product-managers/">For Product Managers</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white">
                <Btn to="/for-compliance-managers/">
                  For Compliance Managers
                </Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Resources
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/blog/">Blog</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/library/">Library</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/release-notes/">Release Notes</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/slack/">Slack Community</Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="text-type-white mb-2 text-sm font-black uppercase leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Help
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="https://account.getstark.co">My Account</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/support/">Support Docs</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/support/contact-us/">Contact Us</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/feature-request/">Feature Requests</Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="text-type-white mb-2 text-sm font-black uppercase leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Company
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/suaf/">Stark Framework</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/privacy/">Privacy Policy</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/tos/">Terms of Service</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  className="mb-2 hover:underline focus:underline"
                  to="https://github.com/stark-contrast/code-of-conduct"
                  target="_blank"
                  rel="noopener"
                  title="(opens in new tab)"
                >
                  Code of Conduct
                </Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="text-type-white mb-2 text-sm font-black uppercase leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Security
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/security/">Security Overview</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/cookies/">Cookie Policy</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn to="/gdpr/">GDPR</Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  className="mb-2"
                  to="https://status.getstark.co/"
                  target="_blank"
                  rel="noopener"
                  title="(opens in new tab)"
                >
                  Status
                </Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="text-type-white mb-2 text-sm font-black uppercase leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Design Integrations
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--figma"
                  target="_blank"
                  to="https://www.figma.com/community/plugin/732603254453395948"
                  title="(opens in new tab)"
                >
                  Stark for Figma
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--figjam"
                  target="_blank"
                  to="https://www.figma.com/community/widget/1030161589655245054"
                  title="(opens in new tab)"
                >
                  Stark for FigJam
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--sketch"
                  to="/sketch/download/"
                  title="(opens in new tab)"
                >
                  Stark for Sketch
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--xd"
                  target="_blank"
                  to="https://exchange.adobe.com/apps/cc/6cbf275e/stark"
                  title="(opens in new tab)"
                >
                  Stark for Adobe XD
                </Btn>
              </p>
            </div>
          </div>
          <div className="footer__column flex flex-col items-start">
            <div className="flex flex-col">
              <p
                className="text-type-white mb-2 text-sm font-black uppercase leading-[1.5] tracking-[1px] text-white"
                role="heading"
                aria-level="6"
              >
                Developer Integrations
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--chrome"
                  target="_blank"
                  to="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                  title="(opens in new tab)"
                >
                  Stark for Chrome
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--firefox"
                  target="_blank"
                  to="https://addons.mozilla.org/en-US/firefox/addon/stark-accessibility-checker/"
                  title="(opens in new tab)"
                >
                  Stark for Firefox
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--edge"
                  target="_blank"
                  to="https://microsoftedge.microsoft.com/addons/detail/stark/idpodoagbkllmpdjdepbmlefgiblmnhl"
                  title="(opens in new tab)"
                >
                  Stark for Edge
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--safari"
                  target="_blank"
                  to="https://apps.apple.com/us/app/stark-for-safari/id6444031666"
                  title="(opens in new tab)"
                >
                  Stark for Safari
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--arc"
                  target="_blank"
                  to="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                  title="(opens in new tab)"
                >
                  Stark for Arc
                </Btn>
              </p>
              <p className="mb-2 text-sm font-bold leading-[1.5] tracking-[1px] text-white hover:underline focus:underline">
                <Btn
                  id="footer__download--brave"
                  target="_blank"
                  to="https://chrome.google.com/webstore/detail/stark/fkfaapnmfippddbeemjjbclenphooipm"
                  title="(opens in new tab)"
                >
                  Stark for Brave
                </Btn>
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mb-20 mt-20 flex justify-between">
          <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-8">
            <div className="footer__social grid grid-cols-5 gap-3">
              <Btn
                to="https://twitter.com/getstarkco"
                target="_blank"
                title="(opens in new tab)"
              >
                <img
                  alt="Stark's Twitter account link"
                  src="https://images.getstark.co/marketing/social-media/twitter.png"
                  className="w-8"
                ></img>
              </Btn>
              <Btn
                to="https://www.instagram.com/getstarkco/"
                target="_blank"
                title="(opens in new tab)"
              >
                <img
                  alt="Stark's Instagram account link"
                  src="https://images.getstark.co/marketing/social-media/instagram.png"
                  className="w-8"
                ></img>
              </Btn>
              <Btn to="/slack/" target="_blank" title="(opens in new tab)">
                <img
                  alt="Stark's Slack account link"
                  src="https://images.getstark.co/marketing/social-media/slack.png"
                  className="w-8"
                ></img>
              </Btn>
              <Btn
                to="https://www.linkedin.com/company/getstarkco"
                target="_blank"
                title="(opens in new tab)"
              >
                <img
                  alt="Stark's LinkedIn account link"
                  src="https://images.getstark.co/marketing/social-media/share-linkedin.webp"
                  className="w-8"
                ></img>
              </Btn>
              <Btn
                to="https://www.youtube.com/channel/UCnhYIgXU1GsrLnLv-NFqVNw/featured"
                target="_blank"
                title="(opens in new tab)"
              >
                <img
                  alt="Stark's YouTube account link"
                  src="https://images.getstark.co/marketing/social-media/youtube.png"
                  className="w-8"
                ></img>
              </Btn>
            </div>
            <p className="font-roboto text-[1rem] font-bold uppercase leading-[1.4] tracking-[2px] text-gold">
              Made remotely with love by Stark Lab, Inc. Copyright 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
