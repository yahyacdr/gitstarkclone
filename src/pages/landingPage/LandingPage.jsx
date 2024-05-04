/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import HeaderContent from "../../ui/HeaderContent";
import Btn from "../../ui/Btn";
import CompaniesLogos from "../../ui/Logos";
import homepage_blob_3 from "../../assets/homepage-blob-3.png";

export default function LandingPage() {
  return (
    <main>
      <div className="bg-type-purple pt-12">
        <ColorBg />
        <div className="relative flex flex-wrap items-center justify-center gap-4 pb-12">
          <Btn type={"gold"}>Sign up for free</Btn>
        </div>
      </div>
      <section className="flex justify-center p-4">
        <div className="w-[1200px] max-w-[1200px]">
          <img
            src="https://images.getstark.co/marketing/features/speed-up-your-accessibility-feature-2023.png?updatedAt=1709782332170"
            alt="Stark shown at different sizes to highlight how it can be used anywhere. On each screen are different examples that show charts, number of issues, and detailed breakdowns of accessibility issues Stark found."
            className="relative z-20 -mt-52 hidden w-full pb-14 sm:block"
          />
          <div className="flex w-full flex-wrap items-center justify-center">
            <h1 className="headline--1 relative z-10 mt-12 max-w-[300px] text-center text-indi sm:mt-0 sm:max-w-[945px]">
              {"Speed up your accessibility workflow "}
              <span className="homepage-mark">from months to minutes</span>
            </h1>
          </div>
          <p className="mb-10 ml-auto mr-auto mt-10 max-w-[745px] text-center text-[1.25rem] font-medium leading-[1.5] text-indi">
            Designers, developers, product managers, and accessibility experts
            at 30,000+ companies use Stark’s suite of integrated accessibility
            tools in their daily product development cycle. Join them today!
          </p>
        </div>
      </section>
      <section className="pb-0 pt-10">
        <div>
          <div className="flex w-max animate-roll items-center gap-x-24 overflow-hidden">
            <CompaniesLogos />
          </div>
        </div>
      </section>
      <section className="mt-16 justify-center p-4 sm:mt-36">
        <div className="z-10 w-full max-w-[960px]">
          <p className="mb-8 text-center font-roboto font-semibold uppercase tracking-[.09em] text-type-purple">
            Explore the Stark platform
          </p>
          <h2 className="headline--2 mb-8 text-center text-indi">
            <span className="block">
              {"The only "}
              <span className="homepage-mark homepage-mark_inverse">
                end-to-end solution
              </span>
            </span>
            <span>from design and code to live product</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <DefineCard
            p1="Speed up design & Dev"
            h4="Plug-ins & Integrations"
            p2="Meet your team where they work, from Figma and Sketch to GitHub
              and their browser of choice. An accessibility workflow built right
              into the tools they love. No need for them to switch or relearn."
            img="https://images.getstark.co/marketing/illos/plugins-integrations-illo-2023.png"
          />
          <DefineCard
            p1="Improve collaboration"
            h4="Projects, Reports & Insights"
            p2="Manage your team’s accessibility workflow in the Stark Web app. Monitor and manage progress with real-time reports and insights across all your projects from design to code."
            img="https://images.getstark.co/marketing/illos/projects-reports-insights-illo-2023.png"
          />
          <DefineCard
            p1="Accelerate workflows"
            h4="AI-powered Automation"
            p2="Automated continuous scanning of design files and code repositories combined with AI-powered suggestions accelerates finding and fixing of accessibility issues in record time."
            img="https://images.getstark.co/marketing/illos/ai-powered-automation-illo-2023.png"
          />
          <DefineCard
            p1="Manage at Scale"
            h4="Compliance Center"
            p2="Manage your company’s accessibility posture in one central hub. Assign and document individual controls based on the regulatory frameworks. Access evidence for easy auditing."
            img="https://images.getstark.co/marketing/illos/compliance-center-illo-2023.png"
          />
        </div>
        <div className="my-8 flex w-full justify-center">
          <Btn type="purple" to="https://account.getstark.co">
            Get started for free
          </Btn>
        </div>
      </section>
      <ServicePanel
        img={
          "https://images.getstark.co/marketing/features/continuous-accessibility-feature-2023.webp"
        }
        h1={
          <React.Fragment>
            <span className="homepage-mark">Continuous Accessibility</span>
            {" for your entire team"}
          </React.Fragment>
        }
        p={`Get real-time reports that help manage accessibility at scale
        without slowing down the velocity of your team. Stark gives your
        up-to-date insights into the accessibility of all your design
        files, code repositories and live sites or applications, all in
        one central place for efficient collaboration across departments.`}
        a={"Start a free trial"}
        to="/pricing"
      />
      <ServicePanel
        img={
          "https://images.getstark.co/marketing/features/integrated-into-the-tools-feature-2023.webp"
        }
        h1={
          <React.Fragment>
            <span className="homepage-mark">Integrated into the tools</span>
            {" you already use"}
          </React.Fragment>
        }
        p={`Whether it's Figma or Sketch, your favorite web browser, or even
        GitHub and beyond, Stark integrates into the tools your team
        already uses for maximum efficiency and no learning curve. Our
        AI-powered integrations help your teammates find and fix
        accessibility issues as early as the first designs and all across
        the development cycle.`}
        a={"Get started for free"}
        to="https://account.getstark.co"
      />
      <ServicePanel
        img={
          "https://images.getstark.co/marketing/features/enterprise-grade-platform-feature-2023.png"
        }
        h1={
          <React.Fragment>
            <span className="homepage-mark">An enterprise-grade platform</span>{" "}
            you can trust
          </React.Fragment>
        }
        p={`The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully GDPR / SOC2-certified platform to our zero-trust policy that underpins all our tool integrations, we ensure maximum security and privacy for our customers’ data and IP.`}
        a={"Start a free trial"}
        to="/pricing"
      />
      <section className="mt-16 flex justify-center p-4 sm:mt-36">
        <div className="w-[1200px] max-w-[1200px]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6">
              <img
                src="https://images.getstark.co/marketing/testimonials/g2-best-roi-spring-2024.png"
                alt="G2 badge for Best ROI Spring 2024"
                className="min-w-[154px] max-w-[154px]"
              ></img>
              <img
                src="https://images.getstark.co/marketing/testimonials/g2-high-performer-spring-2024.png"
                alt="G2 badge for High Performer Spring 2024"
                className="min-w-[154px] max-w-[154px]"
              ></img>
              <img
                src="https://images.getstark.co/marketing/testimonials/g2-users-love-us.png"
                alt="G2 badge for Users Love Us"
                className="min-w-[154px] max-w-[154px]"
              ></img>
            </div>
            <h1 className="headline headline--1 mt-8 max-w-[800px] text-indi">
              Built to{" "}
              <span className="homepage-mark">deliver business value</span>,
              loved by the community.
            </h1>
            <p className="body mt-6 max-w-[734px] text-xl font-semibold text-indi">
              Stark is the only Continuous Accessibility platform that
              accelerates time-to-compliance from design and code to QA and PM,
              and helps companies of all sizes deliver highest quality
              experiences for all users.
            </p>
            <section className="mt-8 flex justify-center p-4">
              <div className="border-purple-base-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-xl border-2 border-solid bg-purple-50 p-6">
                <svg
                  role="img"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-[70px]"
                >
                  <title>G2 Reviews Logo</title>
                  <path
                    d="M70 35C70 54.334 54.334 70 35 70C15.666 70 0 54.334 0 35C0 15.666 15.666 0 35 0C54.334 0 70 15.68 70 35Z"
                    fill="#FF492C"
                  ></path>
                  <path
                    d="M50.29 29.266H41.246V28.846C41.246 27.306 41.554 26.032 42.17 25.038C42.786 24.03 43.85 23.148 45.39 22.364L46.09 22.014C47.336 21.384 47.658 20.838 47.658 20.194C47.658 19.424 46.986 18.864 45.908 18.864C44.62 18.864 43.654 19.536 42.982 20.894L41.246 19.158C41.624 18.346 42.24 17.702 43.052 17.184C43.878 16.666 44.788 16.414 45.782 16.414C47.028 16.414 48.106 16.736 48.988 17.408C49.898 18.08 50.346 19.004 50.346 20.166C50.346 22.028 49.296 23.162 47.336 24.17L46.23 24.73C45.054 25.318 44.48 25.85 44.312 26.788H50.29V29.266ZM49.492 32.122H39.594L34.652 40.69H44.55L49.506 49.258L54.448 40.69L49.492 32.122ZM35.506 46.416C29.206 46.416 24.082 41.292 24.082 34.992C24.082 28.692 29.206 23.568 35.506 23.568L39.426 15.378C38.152 15.126 36.85 15 35.506 15C24.46 15 15.5 23.96 15.5 34.992C15.5 46.038 24.446 54.998 35.506 54.998C39.902 54.998 43.976 53.57 47.28 51.162L42.94 43.658C40.952 45.366 38.348 46.416 35.506 46.416Z"
                    fill="white"
                  ></path>
                </svg>
                <h3 className="headline headline--3 text-center !text-[28px] text-type-purple">
                  “Accessible design made easy.”
                </h3>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="relative z-10 mt-16 flex justify-center p-4 pb-0 sm:mt-36">
        <div className="relative">
          <div className="relative max-w-[1024px]">
            <div className="bg-base-teal z-10 rounded-[40px] p-8 sm:p-16">
              <p className="mb-8 text-center font-bold uppercase leading-[16px] text-type-purple">
                Why Stark?
              </p>
              <h1 className="headline headline--1 mb-14 text-center text-indi">
                Build and ship inclusive software, accelerate
                time-to-compliance.
              </h1>
              <div className="grid grid-cols-1 gap-x-20 gap-y-11 sm:grid-cols-2">
                <div>
                  <img
                    src="https://images.getstark.co/marketing/illos/increase-velocity-illo-2023.png"
                    alt=""
                    className="w-20 pb-6"
                  ></img>
                  <h4 className="headline headline--4 mb-1.5 text-left text-type-purple">
                    Increase Velocity
                  </h4>
                  <p className="text-left text-[1rem] leading-[1.7] text-indi">
                    Stark is the only end-to-end platform that helps your team
                    find and fix accessibility issues from design and code to
                    the live product. All this, while being up to 10x faster
                    than any other tool in the market.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.getstark.co/marketing/illos/accelerate-compliance-illo-2023.png"
                    alt=""
                    className="w-20 pb-6"
                  ></img>
                  <h4 className="headline headline--4 mb-1.5 text-left text-type-purple">
                    Accelerate Compliance
                  </h4>
                  <p className="text-left text-[1rem] leading-[1.7] text-indi">
                    Reports and Insights are available in real-time for every
                    project in Stark. Plus, time-stamped historic reports are
                    available at any time for up-to-date compliance reporting
                    across departments.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.getstark.co/marketing/illos/reduce-cost-illo-2023.png"
                    alt=""
                    className="w-20 pb-6"
                  ></img>
                  <h4 className="headline headline--4 mb-1.5 text-left text-type-purple">
                    Reduce Cost
                  </h4>
                  <p className="text-left text-[1rem] leading-[1.7] text-indi">
                    Stark’s fully integrated solution enables fixing of
                    accessibility issues as early as first design drafts,
                    reducing 56% of issues that typically make it into code
                    where remediation costs can be up 100x higher.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.getstark.co/marketing/illos/mitigate-risk-illo-2023.png"
                    alt=""
                    className="w-20 pb-6"
                  ></img>
                  <h4 className="headline headline--4 mb-1.5 text-left text-type-purple">
                    Mitigate Risk
                  </h4>
                  <p className="text-left text-[1rem] leading-[1.7] text-indi">
                    The entire Stark platform and all our integrations are built
                    with enterprise-grade security. From SSO and our fully
                    SOC2-certified platform stack to our zero-trust policy that
                    underpins all our tool .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative mb-28 mt-16 flex justify-center p-4 pt-0"
        aria-labelledby="headline-scale"
      >
        <div className="relative">
          <svg
            width="445"
            height="410"
            viewBox="0 0 445 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-64 -top-20"
            aria-hidden="true"
          >
            <path
              d="M46.9335 338.378C30.213 326.986 16.571 311.079 8.5949 292.456C-9.37173 250.476 0.866772 195.191 41.9466 172.708C83.7279 149.84 135.827 142.321 169.401 106.081C195.151 78.2885 205.454 36.7387 236.894 15.6064C288.077 -18.8073 361.822 12.7332 400.592 51.8842C416.519 67.9692 428.511 88.7202 430.825 111.237C433.139 133.755 425.957 156.059 422.905 178.508C416.221 227.494 441.62 264.257 444.197 310.598C448.551 388.984 362.658 423.241 298.438 405C244.721 389.738 198.832 356.367 141.164 355.961C128.052 355.865 114.918 357.677 101.828 357.128C82.1499 356.057 63.154 349.568 46.9335 338.378Z"
              fill="#381FD1"
            ></path>
          </svg>
          <img
            className="absolute -bottom-32 -right-64"
            alt=""
            role="presentation"
            src={homepage_blob_3}
            aria-hidden="true"
          ></img>
          <div className="relative max-w-[1024px] lg:w-[1024px]">
            <div className="grid w-full grid-cols-1 rounded-[40px] bg-purple-50 p-7 sm:p-14 lg:grid-cols-[1fr_550px]">
              <div className="relative hidden lg:block">
                <img
                  src="https://images.getstark.co/marketing/features/workflow-designer.webp?updatedAt=1697384167702"
                  alt=""
                  className="animate-streamlining-section-fade-in absolute right-0 top-2 h-[740px] max-h-full max-w-fit opacity-0"
                  aria-describedby="streamline-designer"
                ></img>
              </div>
              <div>
                <p className="font-roboto, mb-8 ml-6 text-[1rem] font-bold uppercase leading-[1.4] tracking-[1px] text-type-purple">
                  Streamlining workflows, consolidating tools
                </p>
                <h1 className="headline headline--1 mb-12 ml-6 text-indi">
                  We scale with you{" "}
                  <span className="homepage-mark">across departments</span>
                </h1>
                <div className="ml-6 grid grid-cols-1">
                  <Btn
                    className="text-link-static rounded-[20px] p-6 font-medium !no-underline transition-colors lg:bg-[#E5E0FF]"
                    to="/for-designers"
                  >
                    <h4 className="headline headline--4 text-type-purple group-hover:underline">
                      Designers
                    </h4>
                    <p className="text text--regular text-type-blue">
                      Create accessible designs in record time right in Figma,
                      Sketch, and Adobe XD.
                    </p>
                  </Btn>
                  <Btn
                    className="text-link-static rounded-[20px] p-6 font-medium !no-underline transition-colors lg:bg-[#E5E0FF]"
                    to="/for-developers"
                  >
                    <h4 className="headline headline--4 text-type-purple group-hover:underline">
                      Developers
                    </h4>
                    <p
                      className="text text--regular text-type-blue"
                      id="streamline-developer"
                    >
                      Test and audit your code from early implementation to live
                      product.
                    </p>
                  </Btn>
                  <Btn
                    className="text-link-static rounded-[20px] p-6 font-medium !no-underline transition-colors lg:bg-[#E5E0FF]"
                    to="/for-product-managers"
                  >
                    <h4 className="headline headline--4 text-type-purple group-hover:underline">
                      Product Managers
                    </h4>
                    <p
                      className="text text--regular text-type-blue"
                      id="streamline-pm"
                    >
                      Manage accessibility in real-time across all your
                      projects.
                    </p>
                  </Btn>
                  <Btn
                    className="text-link-static rounded-[20px] p-6 font-medium !no-underline transition-colors lg:bg-[#E5E0FF]"
                    to="/for-compliance-managers"
                  >
                    <h4 className="headline headline--4 text-type-purple group-hover:underline">
                      Compliance Managers
                    </h4>
                    <p
                      className="text text--regular text-type-blue"
                      id="streamline-compliance"
                    >
                      Monitor, manage and audit your accessibility posture in
                      one place.
                    </p>
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ColorBg() {
  return (
    <div className="h-full w-screen bg-type-purple bg-cover bg-bottom bg-no-repeat">
      <HeaderContent isCentered={true}>
        <h1 className="max-w-[650px] text-center text-[3.5rem] font-bold leading-[1.1] -tracking-[0.1rem] text-white sm:!text-[110px] sm:!leading-[121px] md:text-7xl">
          Super&shy;charge Access&shy;iblity
        </h1>
        <p className="mb-8 mt-4 max-w-[600px] px-2 text-center text-xl text-white">
          {`The world’s best companies – from startups to the Fortune 100 – trust
          Stark to accelerate time to digital accessibility compliance.`}
        </p>
      </HeaderContent>
    </div>
  );
}

function DefineCard({ p1, h4, p2, img }) {
  return (
    <div>
      <img src={img} alt="" className="max-w-[205px] pb-3" />
      <p className="font-roboto !text-[0.75rem] font-bold leading-snug text-type-purple">
        {p1}
      </p>
      <h4 className="headline--4 my-3 text-type-purple">{h4}</h4>
      <p className="max-w-[270px] text-sm leading-relaxed text-indi sm:max-w-none">
        {p2}
      </p>
    </div>
  );
}

function ServicePanel({ img, h1, p, a, to }) {
  return (
    <section
      className="mt-16 flex justify-center p-4 sm:mt-36"
      aria-labelledby="headline-integrated"
    >
      <div className="w-[1200px] max-w-[1200px]">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={img}
            alt="Numerous bubbles of logos with Stark at the center. Surrounding it are logos for design platforms like Sketch and Figma and browsers like Chrome and Edge."
            className="w-full pb-14"
          ></img>
          <h1
            id="headline-integrated"
            className="headline headline--1 max-w-[700px] text-indi"
          >
            {h1}
          </h1>
          <p className="body mb-8 mt-4 max-w-[780px] text-indi">{p}</p>
          <Btn type="purple" to={to}>
            {a}
          </Btn>
        </div>
      </div>
    </section>
  );
}
