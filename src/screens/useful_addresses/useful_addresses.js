import React, { useState, useEffect } from "react";
import Container from "../../common_component/container/container.component";
import ResumingHomeImage from "../../assets/images/Resuming Home/Group 2.svg";
import MenuButton from "../../common_component/menu_button/menu_button.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import NextButton from "../../common_component/next_button/next_button.component";
import "./useful_addresses.scss";
import HealthyHeart from "../../assets/images/update/healthyheart.svg";
import Health from "../../assets/images/update/health.svg";
import Medic from "../../assets/images/update/medication.svg";
import Store from "../../assets/images/update/store.svg";

const UsefulAddresses = (props) => {
  const [toggle, settoggle] = useState(false);
  const [showNextButton, setshowNextButton] = useState(false);

  const next = () => {
    props.history.push("/");
  };

  const handleMenuButtonClick = (data) => {
    console.log(data);
    settoggle(data);
  };

  useEffect(() => {
    var timerId;
    let el = document.querySelector(".swiper_container");

    el.addEventListener("scroll", () => {
      var elwinScroll = el.scrollTop;
      var elheight = el.scrollHeight - el.clientHeight;
      var elscrolled = (elwinScroll / elheight) * 100;
      // console.log(elwinScroll, elheight, elscrolled)
      document.getElementById("myBar").style.width = elscrolled + "%";
      if (elscrolled > 92) {
        if (timerId) {
          return;
        }
        timerId = setTimeout(function () {
          setshowNextButton(true);
          timerId = undefined;
        }, 500);
      } else {
        if (timerId) {
          return;
        }
        timerId = setTimeout(function () {
          setshowNextButton(false);
          timerId = undefined;
        }, 500);
      }
    });
  }, []);
  console.log("button", showNextButton);
  return (
    <div className="mfyh_screen">
      <div className="mfyh_conatiner">
        <Sidebar {...props} toggle={toggle} onClick={handleMenuButtonClick} />
        <Container className="swiper_container">
          <div class="header">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
          </div>
          <MenuButton
            background="#008DFB"
            type="open"
            onClick={handleMenuButtonClick}
          />
          <div className="">
            <div className="mfyh_title_head " style={{marginBottom: '0.5em'}}>
              <p className="mfyh_title_text" style={{ padding: "0.8em 60px" }}>
                Useful Addresses
              </p>
            </div>
            {/* <div className="mfyh_image_container">
              <img
                className="mfyh_image" style={{width:'80%'}}
                src={HealthyHeart}
                alt="mfyh"
              ></img>
            </div> */}
            <div className="mfyh_content blue-clrob">
              <p className="mfyh_title_text" style={{ fontWeight: "700" }}>
                Support Groups
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Cardiac support groups give people the opportunity of meeting
                others who have had a heart attack, angina, or heart surgery.
                For information on a support group near you contact:
              </p>
              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                South Lee
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Ballincollig / Bishopstown-
                <a href="tel:0872380658" className="linkk">
                  (087) 238 0658
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Douglas-
                <a href="tel:0874139461" className="linkk">
                  (087) 413 9461
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Bandon-
                <a href="tel:0872684659" className="linkk">
                  (087) 268 4659
                </a>
              </p>

              {/* ....... */}

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                North Lee
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Youghal-{" "}
                <a href="tel:0860506334" className="linkk">
                  (086) 050 6334
                </a>
              </p>

              {/* ........ */}

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                West Cork
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Bantry-
                <a href="tel:0864048821" className="linkk">
                  (086) 404 8821
                </a>
              </p>
            </div>

            {/* next */}

            <div
              className="mfyh_content blue-clroc"
              style={{ paddingTop: "16px" }}
            >
              <p className="mfyh_title_text" style={{ fontWeight: "700" }}>
                Active Retirement Ireland
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                124, The Capel Building Mary's Abbey, Dublin-
                <a href="tel  :7018733836" className="linkk">
                  (701) 873 3836
                </a>{" "}
                Website:
                <a href="https://activeirl.ie/" target="_blank" className="linkk">
                  www.activeirl.ie
                </a>
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Irish Men’s sheds Organisation menssheds.ie
              </p>
            </div>

            {/* next 2 */}

            <div
              className="mfyh_content blue-clrod"
              style={{ paddingTop: "16px" }}
            >
              <p className="mfyh_title_text" style={{ fontWeight: "700" }}>
                Health Service Executive
              </p>
              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Public Health Nurses, Community Workers, etc.
              </p>
              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Cork City (North and South Lee)
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Community services Area st. Finbarr’s hospital Douglas Rd, Cork-
                <a href="tel:0214966555" className="linkk">
                  (021) 496 6555
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                The Glen Health Action Zone
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                North Lee Community Work Dept. ellis house Ballyvolane
                Commercial Park Ballyvolane, Cork-
                <a href="tel:0214529023" className="linkk">
                  (021) 452 9023
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Cardiovascular Public Health Nurse
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                south Lee-
                <a href="tel:0867872071" className="linkk">
                  (086) 787 2071
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                West Cork-
                <a href="tel:0867871552" className="linkk">
                  (086) 787 1552
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                West Cork Community Services Area
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Coolnagarrane skibbereen, Co. Cork-
                <a href="tel:02840400" className="linkk">
                  (028)40400
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                North Cork Community Services Area
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Floor 2 Mallow Primary healthcare Centre Mallow, Co. Cork-
                <a href="tel:02230255" className="linkk">
                  (022) 302 55
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Kerry Community Services Area
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Rathass, Tralee, Co. Kerry-
                <a href="tel:0667184500" className="linkk">
                  (066) 718 4500
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Alcohol and Drug Abuse Treatment
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                Arbour house st. Finbarr’s hospital, Cork-
                <a href="tel:0214968933" className="linkk">
                  (021) 496 8933
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Free Type 2 Diabetes Course
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                The X-Pert Course Contact your local Community Dietitian or the
                Community Nutrition and Dietetic service at-
                <a href="tel:0214921641" className="linkk">
                  (021) 492 1641
                </a>
                {"   "}&{" "}
                <a href="tel:0646670763" className="linkk">
                  (064) 667 0763
                </a>
              </p>
            </div>

            {/* next 3 */}

            <div
              className="mfyh_content blue-clroe"
              style={{ paddingTop: "16px" }}
            >
              <p
                className="mfyh_title_text"
                style={{
                  fontWeight: "700",
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                For more information on your heart and leading a healthy
                lifestyle:
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Irish Heart Foundation
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                42 Penrose Wharf, Penrose Quay, Cork-
                <a href="tel:0214505822" className="linkk">
                  (021) 450 5822
                </a>{" "}
                Website:{" "}
                <a href="https://irishheart.ie/" target="_blank" className="linkk">
                  www.irishheart.ie
                </a>{" "}
                heart and stroke helpline:
                <a href="tel:1890432787" className="linkk">
                  1 890 432 787
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                British Heart Foundation-
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                <a href="https://www.bhf.org.uk/" target="_blank" className="linkk">
                  www.bhf.org.uk
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                American Heart Association-
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                <a href="https://www.heart.org/" target="_blank" className="linkk">
                  www.heart.org
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Diabetes Federation of Ireland, Cork
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                32 Grand Parade, Cork-
                <a href="tel:0214274229" className="linkk">
                  (021) 427 4229
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Action on Smoking & Health-
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                <a href="https://ash.ie/" target="_blank" className="linkk">
                  www.ash.ie
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Health Promotion Unit
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                www.healthpromotion.ie Department of health and Children hawkins
                house, Dublin-
                <a href="tel:2016354000" className="linkk">
                  2 (01) 635 4000
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                AWARE
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                helping to defeat depression www.aware.ie 72 Lower Leeson st,
                Dublin-
                <a href="tel:2016617211" className="linkk">
                  2 (01) 661 7211
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Alcoholics Anonymous
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                www.alcoholicsanonymous.ie Basement Flat,12A Patricks hill,
                Cork-
                <a href="tel:0214500481" className="linkk">
                  (021) 450 0481
                </a>
                (8-10pm)
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                For information on Erectile Dysfunction for men and their
                partners:
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                <a href="http://www.manmatters.ie" target="_blank" className="linkk">
                  www.manmatters.ie
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                The Cardiac Cooking Companion
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Practical tips on healthy shopping and cooking. Available by
                free internet download from:
                <a
                  href="http://www.physicalactivityandnutritionwales.org.uk"
                  target="_blank"
                  className="linkk"
                >
                  www.physicalactivityandnutrition wales.org.uk
                </a>
              </p>
            </div>

            {/* next 4 */}

            <div
              className="mfyh_content blue-clrof"
              style={{ paddingTop: "16px" }}
            >
              <p
                className="mfyh_title_text"
                style={{
                  fontWeight: "700",
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                Walking Groups
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                For current information on Slí na Sláinte or walking groups in
                Cork and Kerry contact the Health Promotion Officer at:
                <a href="tel:0214921667" className="linkk">
                  (021) 492 1667
                </a>
                Also see-
                <a href="http://www.getirelandactive.ie" target="_blank" className="linkk">
                  www.getirelandactive.ie
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Mallow
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday evenings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Ballincollig
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday and sunday mornings and Thursday evenings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Blarney
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday evenings Carrigtwohill Tuesday & Thursday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Churchfield/Gurranabraher
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday afternoons
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Douglas
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Monday evenings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Kinsale
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Lee Fields, Carrigrohane Straight
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Tuesday & Friday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Mahon
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Thursday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Mayfield
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Monday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Douglas
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Monday evenings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Kinsale
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Lee Fields, Carrigrohane Straight
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Tuesday & Friday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Mahon
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Thursday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Mayfield
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Monday mornings
              </p>

              {/* ... */}
              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Nash’s Boreen, Fairhill
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday afternoons/evenings in summertime
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Shandon
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                The Glen
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Monday mornings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Togher
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Wednesday evenings
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Killarney
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "0px" }}>
                Thursday mornings
              </p>
            </div>

            {/* next 5 */}

            <div
              className="mfyh_content blue-clrog"
              style={{ paddingTop: "16px" }}
            >
              <p
                className="mfyh_title_text"
                style={{
                  fontWeight: "700",
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                For information on getting back to, or changing work
              </p>
              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Employment Services / Intreo Offices
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Unit 1 Corn Market Centre 13-15 Corn Market street, Cork-
                <a href="tel:0214948900" className="linkk">
                  (021) 494 8900
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                103/104 Main st. Mallow, Co. Cork-
                <a href="tel:02221900" className="linkk">
                  (022) 219 00
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Warner Centre, Barrack st, Bantry, Co.Cork-
                <a href="tel:02750464" className="linkk">
                  (027) 50 464
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Park Court, Beach Rd, Killarney, Co. Kerry-
                <a href="tel:0646678500" className="linkk">
                  (064) 667 8500
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Godfrey Place, Tralee, Co. Kerry-
                <a href="tel:0667149500" className="linkk">
                  (066) 714 9500
                </a>
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                National Learning Network
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                (formerly National Training & Development Institute)-
                <a href="http://www.nln.ie" target="_blank" className="linkk">
                  www.nln.ie
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Unit 1, hollymount Ind. est. hollyhill, Cork-
                <a href="tel:0214300144" className="linkk">
                  (021) 430 0144
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                seward house, Cork Business and Technology Park, Model Farm Rd.
                Cork-
                <a href="tel:0214341028" className="linkk">
                  (021) 434 1028
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Donemark, Bantry, Co. Cork-
                <a href="tel:02751027" className="linkk">
                  (027) 510 27
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Clash Ind. estate, Tralee, Co. Kerry-
                <a href="tel:0667122533" className="linkk">
                  (066) 712 2533
                </a>
              </p>
            </div>

            {/* next 6 */}

            <div
              className="mfyh_content blue-clroh"
              style={{ paddingTop: "16px" }}
            >
              <p
                className="mfyh_title_text"
                style={{
                  fontWeight: "700",
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                For information on how to manage financially:
              </p>

              <p
                style={{
                  textAlign: "left",
                  padding: "0 28px",
                  marginTop: "12px",
                  fontWeight: "600",
                }}
              >
                Money Advice and Budgeting Service (MABS)-
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                <a href="http://www.mabs.ie" target="_blank" className="linkk">
                  www.mabs.ie
                </a>
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Unit 12, Penrose Wharf, Penrose Quay, Cork-
                <a href="tel:0761072090" className="linkk">
                  (0761) 07 2090
                </a>
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                25 O’Brien st., Mallow, Co. Cork-
                <a href="tel:0761072440" className="linkk">
                  (0761) 07 2440
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Unit 11 Underhill Commercial Park Dunmanway, Co. Cork-
                <a href="tel:0761072450" className="linkk">
                  (0761) 072450
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Rathgoggin south, Charleville, Co. Cork-
                <a href="tel:0761072420" className="linkk">
                  (0761) 07 2420
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Edward Court, Edward st., Tralee, Co. Kerry-
                <a href="tel:0761072190" className="linkk">
                  (0761) 07 2190
                </a>
              </p>
            </div>

            {/* next 7*/}

            <div
              className="mfyh_content blue-clroc"
              style={{ paddingTop: "16px" }}
            >
              <p className="mfyh_title_text" style={{ fontWeight: "700" }}>
                Citizens Information Centres-
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                <a href="http://www.cidb.ie" target="_blank" className="linkk">
                  www.cidb.ie
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "10px" }}>
                80 south Mall, Cork-
                <a href="tel:0761076950" className="linkk">
                  (0761) 07 6950
                </a>
              </p>

              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                Unit 18.1, Market square, Mallow-
                <a href="tel:0761078000" className="linkk">
                  (0761) 07 8000
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                south square, Macroom-
                <a href="tel:0761078430" className="linkk">
                  (0761) 07 8430
                </a>
              </p>
              <p className="mfyh_content_text" style={{ marginTop: "8px" }}>
                4 Bridge Lane, Tralee, Co. Kerry-
                <a href="tel:0761077860" className="linkk">
                  (0761) 07 7860
                </a>
              </p>
            </div>

            {/* ................... */}
          </div>

          {/* {showNextButton && (
            <NextButton
              onClick={next}
              style={{
                position: "fixed",
                top: "auto",
                bottom: "20px",
                left: "auto",
                right: "20px",
              }}
            />
          )} */}
        </Container>
      </div>
    </div>
  );
};

export default UsefulAddresses;
