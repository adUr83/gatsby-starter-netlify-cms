import React from "react";
import Vec from "../../img/vec.svg";
import "./Link1.css";
import Layout from "../../components/Layout";

export default function Link2() {
    return (
        <Layout>
            <div>
                <div class="columns text-main1">
                    <div class="column is-6 text-main2">
                        <h1>
                            BLK LZY söker två affärsledare inom design och
                            management
                        </h1>
                        <br />
                        <p>
                            Har du en förmåga att se helikopterperspektivet för
                            ett bolag och brinner för affären? Drivs du av att
                            jobba nära andra människor, se dem utvecklas och
                            tillsammans skapa lösningar som verkligen gör
                            skillnad? Nu söker vi två affärsledare inom våra
                            områden design respektive management. Är du en av
                            dem?
                        </p>
                        <br />
                        <p>
                            Som affärsledare utgör du en stor och viktig del av
                            maskineriet i bolaget. Du driver numerär tillväxt
                            och skapar affärer och erbjudanden som linjerar med
                            lönsamhet och attraktivitet. Du ser till att affären
                            utvecklas och att våra konsulter inom respektive
                            område får jobba med spännande uppdrag som ger
                            energi och skapar värde – för kunden, individen och
                            för oss som bolag. Du är har lång erfarenhet från
                            konsultbranschen och ditt kontaktnät är lika stort
                            som det är starkt
                        </p>
                        <br />
                        <p>
                            Med strategisk höjd har du budgetansvar och fullt
                            mandat att fatta de ekonomiska beslut som krävs. Du
                            har dessutom fri tillgång till bolagets
                            stödfunktioner såsom rekrytering, sälj och marknad.
                        </p>
                        <br />
                        <p>
                            På BLK LZY gillar vi att jobba tillsammans. När det
                            finns en dynamik och förståelse mellan affär, sälj
                            och marknad, då sätter bara fantasin våra gränser.
                            Precis som oss går du igång på känslan när vi
                            tillsammans kammat hem en grym affär.
                        </p>
                        <br />
                        <p>
                            Som affärsledare har du inget personalansvar men
                            genom kompetensutveckling och rekrytering bygger du
                            ett team med kompetenser som gynnar både affären och
                            BLK LZY i stort. Du kan bedriva konsulting, men
                            detta sker endast vid behov.
                        </p>
                        <br />
                        <h2>I ROLLEN INGÅR DET ATT DU...</h2>
                        <br />
                        <ul className="list">
                            <li>Har god förståelse för ditt affärsområde</li>
                            <li>
                                Har vilja att utveckla affären; kundens och BLK
                                LZY:s
                            </li>
                            <li>Samarbetar nära sälj</li>
                            <li>Driver egen försäljning </li>
                            <li>Samverkar BLK LZY:s försäljningsmål</li>
                            <li>
                                påverkar rekrytering och marknadsföring
                                (kravställer/beställer, kvalitetssäkrar)
                            </li>
                            <li>
                                Driver pre-sale, prospektering och offerering
                            </li>
                            <li>Är delaktig i upphandlingsförfaranden</li>
                            <li>Tar ansvar för kompetensutveckling</li>
                            <li>Agerar stolt ambassadör för BLK LZY </li>
                            <li>Rapporterar till VD</li>
                            <br />
                        </ul>
                        <br />
                        <h2>ANSÖK...</h2>
                        <br />
                        <p>
                            genom att skicka CV och personligt brev till VD Dan
                            Wallin på e-post dan.wallin@blacklizzy.se. Vi kommer
                            att gå igenom ansökningarna löpande.
                        </p>
                        <br />
                        <p>
                            Har du några frågor? Ring oss på tel: 010-207 46 40!
                        </p>
                        <br />
                        <p>Publicerat 2 mars 2021</p>
                    </div>

                    <div class="column main-col is-6 ">
                        <div class="column img-1 ">
                            <img alt="vec" src={Vec}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
