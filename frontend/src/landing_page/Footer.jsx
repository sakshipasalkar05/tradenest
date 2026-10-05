import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="logo"/>
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="row">
                <div className="col-2"><a href="/"><i class="fa-brands fa-x-twitter" style={{color: "gray"}}></i></a></div>
                <div className="col-2"><a href="/"><i class="fa-brands fa-square-facebook" style={{color: "gray"}}></i></a></div>
                <div className="col-2"><a href="/"><i class="fa-brands fa-instagram" style={{color: "gray"}}></i></a></div>
                <div className="col-2"><a href="/"><i class="fa-brands fa-linkedin-in" style={{color: "gray"}}></i></a></div>
            </div>

            <hr />

            <div className="row">
                <div className="col-2"><a href="/"><i class="fa-brands fa-youtube" style={{color: "gray"}} ></i></a></div>
                <div className="col-2"><a href="/"><i class="fa-brands fa-whatsapp" style={{color: "gray"}}></i></a></div>
                <div className="col-2"><a href="/"><i class="fa-brands fa-telegram" style={{color: "gray"}}></i></a></div>
            </div>

            <div className="row mt-3">
                <img src="media\images\googlePlayBadge.svg" alt="google play store" style={{width: "50%"}} />
                <img src="media\images\appstoreBadge.svg" alt="app store" style={{width: "50%"}} />
            </div>
          </div>

          <div className="col">
            <p>Account</p>
            <a href="/" style={{ textDecoration: "none" }}>Open demat account</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Minor demat account</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>NRI demat account</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>HUF demat account</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Commodity</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Dematerialisation</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Fund transfer</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>MTF</a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="/" style={{ textDecoration: "none" }}>Contact us</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Support portal</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }} >How to file a complaint?</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Status of your complaints</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Bulletin</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Circular</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Z-Connect blog</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Downloads</a>
            <br />
          </div>

          <div className="col">
            <p>Company</p>
            <a href="/" style={{ textDecoration: "none" }}>About</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Philosophy</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Press & media</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Careers</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Zerodha Cares (CSR)</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Zerodha.tech</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Open source</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Referral program</a>
            <br />
          </div>
          
          <div className="col">
            <p>Quick links</p>
            <a href="/" style={{ textDecoration: "none" }}>Upcoming IPOst</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Brokerage charges</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}  >Market holidays</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Economic calendar</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Calculators</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Markets</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Sectors</a>
            <br />
            <a href="/" style={{ textDecoration: "none" }}>Gift Nifty</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
             complaints pertaining to securities broking please write to 
            <a href="/" style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, for DP related to <a href="/" style={{ textDecoration: "none" }}>dp@zerodha.com</a>. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <a href="/" style={{ textDecoration: "none" }}>SEBI SCORES</a>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          
          <p>
            <a href="/" style={{ textDecoration: "none" }}>Smart Online Dispute Resolution</a> | <a href="/" style={{ textDecoration: "none" }}>Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>India's largest broker based on networth as per NSE. <a href="/" style={{ textDecoration: "none" }}>NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please 
            <a href="/" style={{ textDecoration: "none" }}> create a ticket here</a>.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </div>
        <div className="row ">
            <a href="/" className="col" style={{ textDecoration: "none" }}>NSE</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>BSE</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>MCX</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>MSEI</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Terms & Conditions</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Policies & procedures</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Privacy policy</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Disclosure</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>For investor's attention</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Investor charter</a>
            <a href="/" className="col" style={{ textDecoration: "none" }}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;