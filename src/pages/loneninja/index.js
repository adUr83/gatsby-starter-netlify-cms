import React from "react";
import "./Link1.css";
import Vec from "../../img/vec.svg";

import Layout from "../../components/Layout";

export default function Link1() {
    return (
        <Layout>
            <div className="link-1">
                <div class="columns text-main1">
                    <div class="column is-6 text-main2">
                        <h1>Är du vår nya löneninja?</h1>
                        <br />
                        <p>
                            När våra medarbetare har frågor kring hantering av
                            utlägg, semesterdagar, föräldraledighet, vabb,
                            sjukdagar, traktamente eller liknande – då är du vår
                            go-to person! Ingen fråga är för dum, inget hinder
                            är för stort. Du har stenkoll på de här bitarna och
                            det du inte kan, det tar du reda på. För du är som
                            oss; du älskar att lyssna, fråga, testa och våga ­–
                            att lära dig och utvecklas. Visst är det en grym
                            känsla?
                        </p>
                        <br />
                        <p>
                            Som löneadministratör är du en del av bolagets
                            hjärta och är regelbundet i kontakt med både
                            medarbetare och ledare i organisationen.
                        </p>
                        <br />
                        <h2>I ROLLEN INGÅR:</h2>
                        <br />
                        <ul className="list">
                            <li>
                                administration av lönerna för Black Lizzy Group
                                AB med tillhörande fem dotterbolag (totalt 60
                                anställda)
                            </li>
                            <li>hantering av tidrapporter</li>
                            <li>
                                handpåläggning av uträkning för lön genom Excel
                            </li>
                            <li>
                                utveckling och hantering av personalförmåner
                            </li>
                            <li>
                                pensionshantering tillsammans med bolagets
                                partner
                            </li>
                            <li>utläggshantering och redovisning</li>
                            <li>arbete med arbetsgivarintyg</li>
                            <li>kontroll av semesterdagar och frånvaro</li>
                            <br />
                        </ul>
                        <br />
                        <p>
                            Du ansvarar för rapporter kring sjukfrånvaro,
                            semesterlöneskulder och pensionsavgifter. Du arbetar
                            nära COO, du har löpande kontakt med myndigheter
                            såsom Försäkringskassan och Skatteverket och du
                            skickar lönestatistik till institut såsom
                            Statistiska Centralbyrån.
                        </p>
                        <br />
                        <p>
                            I nära samarbete med vårt rekryteringsteam är du
                            också vår klippa och vårt stöd i onboardingen av
                            nyanställda. Där backar du upp med information om
                            tidrapportering, problemlösning gällande felaktiga
                            löneutbetalningar, knasiga tidrapporter, försvunna
                            kvitton, posthantering – du ”för faktan till bordet”
                            och har koll. Vi litar på dig!
                        </p>
                        <br />
                        <p>
                            Lite lugnare perioder varvas med mer intensiva och
                            där emellan handlar det om att vara delaktig och
                            närvarande i andra delar rörande HR, ekonomi och lön
                            i organisationen.
                        </p>
                        <br />
                        <h2>DET HÄR HAR DU:</h2>
                        <br />
                        <ul className="list">
                            <li>
                                minst två års erfarenhet från liknande arbete
                            </li>
                            <li>
                                goda kunskaper i svenska och engelska, både
                                talat och skrivet
                            </li>
                            <li>
                                vassa skills i Excel och en vana att arbeta i
                                löneverktyg
                            </li>
                            <li>lätt för att samarbeta</li>
                            <li>
                                kanske: spetskompetens inom pension,
                                skatteregler, arbetsrätt eller avtal och lagar?
                                Det är nämligen meriterande!
                            </li>

                            <br />
                        </ul>
                        <br />
                        <p>
                            Tjänsten är på heltid, 40 h/v med sex månaders
                            provanställning med målet att gå över i
                            tillsvidareanställning.
                        </p>
                        <br />
                        <p>
                            Du hör till BLK LZY-kontoret i Stockholm (men vi
                            jobbar och ses digitalt tills vidare under
                            pandemin).
                        </p>
                        <br />
                        <h2>SÅ HÄR ANSÖKER DU:</h2>
                        <span>
                            Skicka personligt brev och CV till{" "}
                            <a href="">signe.hagerman@blacklizzy.se.</a>
                            Vi går igenom ansökningarna löpande.
                        </span>
                        <br />
                        <h2>FRÅGOR?</h2>
                        <br />
                        <p>
                            Hör av dig till Signe Hagerman,
                            rekryteringsansvarig, på adressen ovan alternativt
                            på tel 073-673 54 71.
                        </p>
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
