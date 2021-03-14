import React from "react";
import Layout from "../components/Layout";
import sticker from "../templates/assets/sticker.webp";
import sticker2 from "../templates/assets/v2.svg";
import Jobb1 from "../templates/assets/jobb-1.webp";
import Jobb2 from "../templates/assets/jobb-2.webp";
import "../components/Jobb.css";
function jobb() {
    return (
        <Layout>
            <div className="columns jobb ">
                <div className="column  text-main">
                    <h2>Bli Lizzy med oss</h2>
                    <p>
                        Vi är ständigt på jakt efter nya Lizzies som vill skapa
                        och utmana, tillsammans med oss. Vi drivs av våra
                        passioner och vi skapar lösningar utifrån lyhördhet,
                        empati och omtanke för människan. Alltid från hjärtat.
                        <br />
                        <br />
                        ​ På BLK LZY finns några av marknadens främsta
                        strateger, designers och utvecklare. Vi är ett bolag med
                        många olika personligheter – här är vi helt enkelt oss
                        själva, vi vet att det blir bäst så. Gemensamt är att vi
                        ständigt utvecklar vår förmåga att lyssna, fråga, testa
                        och våga. Och som digitala alkemister älskar vi just det
                        – att prova, förnya och att skapa förändring som
                        verkligen gör skillnad.
                        <br />
                        <br />
                        ​Hållbarhet ligger i vårt DNA. Jämställdhet, jämlikhet
                        och inkludering är en självklarhet, liksom att hela
                        tiden undersöka vad vi kan göra smartare, smidigare,
                        klokare. <br />
                        <br />
                        <span>
                            <h2>JUST NU SÖKER VI:</h2>
                            <ul>
                                <li>
                                    <a>LÖNENINJA</a>
                                </li>
                                <li>
                                    <a>
                                        AFFÄRSLEDARE INOM DESIGN RESPEKTIVE
                                        MANAGEMENT
                                    </a>
                                </li>
                            </ul>
                        </span>
                        Är du inget av ovanstående men däremot en senior
                        UTVECKLARE, DESIGNER, PROJEKTLEDARE eller PRODUKTÄGARE
                        som är sugen på att veta mer om oss? Vi pratar gärna med
                        dig! Hör av dig via formuläret <br />
                        <br />
                    </p>
                </div>
                <div className="column">
                    <img alt="sl" src={Jobb1} />
                    <div className="jobb-2">
                        <img alt="sl" className="jobb-2" src={Jobb2} />
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column is-7"></div>
                <div className="column is-5 is-offset-7">
                    <div className="hr">
                        <h2>Let the magic begin... </h2>
                        <form>
                            <input type="text" name="namn" placeholder="Namn" />

                            <input
                                type="email"
                                name="epost"
                                placeholder="E-post"
                            />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Telefon"
                            />

                            <select>
                                <option
                                    selected=""
                                    value=""
                                    disabled=""
                                    class="Fbuif _2UHxr"
                                >
                                    Jag vill jobba med...
                                </option>
                                <option value="design" class="Fbuif">
                                    Design
                                </option>
                                <option value="utveckling" class="Fbuif">
                                    Utveckling
                                </option>
                                <option value="ledarskap" class="Fbuif">
                                    Ledarskap
                                </option>
                                <option value="strategi" class="Fbuif">
                                    Strategi
                                </option>
                                <option value="frilans" class="Fbuif">
                                    Uppdrag som frilansare
                                </option>
                                <option value="Lizzy Office" class="Fbuif">
                                    Lizzy office
                                </option>
                            </select>

                            <select>
                                <option
                                    selected=""
                                    value=""
                                    disabled=""
                                    class="Fbuif _2UHxr"
                                >
                                    Jag vill jobba i...
                                </option>
                                <option value="Stockholm" class="Fbuif">
                                    Stockholm
                                </option>
                                <option value="Malmö" class="Fbuif">
                                    Malmö
                                </option>
                            </select>

                            <label for="upload-photo upload">
                                <span class="plus"></span>Ladda upp CV...
                            </label>
                            <input
                                type="file"
                                name="photo"
                                className="upload"
                                id="upload-photo"
                            />

                            <label for="upload-photo">
                                <span class="plus"></span>... och personligt
                                brev...
                            </label>
                            <input
                                type="file"
                                name="photo"
                                className="upload"
                                id="upload-photo"
                            />

                            <input
                                type="text"
                                name="text"
                                placeholder="...eller ge oss länken till din Linkedln-profil"
                            />

                            <div className="privacy">
                                <input type="checkbox"></input>
                                <div>
                                    Jag godkänner att BLK LZY sparar mina
                                    kontaktuppgifter{" "}
                                    <a href="https://jobs.blacklizzy.se/privacy-policy">
                                        Läs integritetspolicyn (för Teamtailor)
                                    </a>
                                </div>
                            </div>

                            <div className="btn-container">
                                <button className="send-btn">Skicka</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default jobb;
