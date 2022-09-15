import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer__main">
        <div className="disClaimer__footer">
          <p>
            IMPORTANT DISCLAIMER: All content provided herein our website,
            hyperlinked sites, associated applications, forums, blogs, social
            media accounts and other platforms (“Site”) is for your general
            information only, procured from third party sources. We make no
            warranties of any kind in relation to our content, including but not
            limited to accuracy and updatedness. No part of the content that we
            provide constitutes financial advice, legal advice or any other form
            of advice meant for your specific reliance for any purpose. Any use
            or reliance on our content is solely at your own risk and
            discretion. You should conduct your own research, review, analyse
            and verify our content before relying on them. Trading is a highly
            risky activity that can lead to major losses, please therefore
            consult your financial advisor before making any decision. No
            content on our Site is meant to be a solicitation or offer.
          </p>
        </div>
        <div className="footer__btns">
          <div className="footer__btns__1">
            <img src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png" />
            <p>
              CoinGecko provides a fundamental analysis of the crypto market. In
              addition to tracking price, volume and market capitalisation,
              CoinGecko tracks community growth, open-source code development,
              major events and on-chain metrics.
            </p>
            <div className="footer__links">
              <p>
                <a href="/">Help Center</a> | <a href="/">Bug Bounty</a> |{" "}
                <a href="/">Disclaimer</a> | <a href="/">Terms of service</a> |{" "}
                <a href="/">Privacy Policy</a> | <a href="/">Ad Policy</a> | ©
                2022 CoinGecko. All Rights Reserved.
              </p>
            </div>
          </div>

          <div></div>

          <div className="footer__btns__2">
            <p className="footer__btns__bold">Expolre</p>
            <p>Bitcoin Price</p>
            <p>Ethereum Price</p>
            <p>DeFi Coins</p>
            <p>Metaverse Coins</p>
            <p>Meme Coins</p>
          </div>

          <div className="footer__btns__3">
            <p className="footer__btns__bold">Resources</p>
            <p>Perpetuals</p>
            <p>Crypto News</p>
            <p>Bitcoin Treasury</p>
            <p>Crypto Heatmap</p>
          </div>

          <div className="footer__btns__4">
            <p className="footer__btns__bold">Careers</p>
            <p>Company Blog</p>
            <p>Branding Guide</p>
            <p>Request Form</p>
            <p>Advertising</p>
            <p>FAQ</p>
          </div>

          <div className="footer__btns__4">
            <p className="footer__btns__bold">Community</p>
            <p>Twitter</p>
            <p>Telegram Chat</p>
            <p>Telegram News</p>
            <p>Instagram</p>
            <p>Reddit</p>
            <p>Discord</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>TikTok</p>
          </div>

          <div className="footer__btns__5">
            <p className="footer__btns__bold">
              Interested to stay up-to-date with cryptocurrencies?
            </p>
            <p>
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </form>

            <div>
              <p>Download our app now</p>
              <div>
                <img src="https://static.coingecko.com/s/coingecko_logos/google_play_store-cb1f298b04afa7f74639a948d9b2e22e4aa6eea9486a2b0442c2cf9bdcda63e8.svg" />
                <img src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-558245a688cc13737dfb861fd82b252d75d5afbaf343c06e3067a454675bbe05.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main__mobile">
        <p className="footer__main__mobile__btns">
          <a href="/">Disclaimer</a> | <a href="/">Terms of service</a> |{" "}
          <a href="/">Privacy Policy</a> © 2022 CoinGecko. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
