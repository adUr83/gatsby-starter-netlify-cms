import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "./contact.css";
function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute("action")))
            .catch((error) => alert(error));
    };

    render() {
        return (
            <Layout>
                {/* <section classNameName="section">
          <div classNameName="container">
            <div classNameName="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
             
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div classNameName="field">
                  <label classNameName="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div classNameName="control">
                    <input
                      classNameName="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div classNameName="field">
                  <label classNameName="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div classNameName="control">
                    <input
                      classNameName="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div classNameName="field">
                  <label classNameName="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div classNameName="control">
                    <textarea
                      classNameName="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div classNameName="field">
                  <button classNameName="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}

                <section
                    id="comp-kg9jzymq"
                    className="_1TXG4"
                    data-testid="section-container"
                >
                    <div
                        className="comp-kg9jzymq-overflow-wrapper"
                        data-testid="responsive-container-overflow"
                    >
                        <div
                            className="comp-kg9jzymq-container"
                            data-testid="responsive-container-content"
                        >
                            <div
                                id="comp-kg7xyb0g"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h1 className="font_0">
                                    Nog om oss - vad har du på hjärnan?
                                </h1>
                            </div>
                            <div
                                id="comp-kg7zz5fw"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h6 className="font_6">
                                    VILL DU BLI EN LIZZY?
                                </h6>
                            </div>
                            <div
                                id="comp-kg80i2dl"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <p className="font_8">
                                    <span>
                                        Vi skräddarsyr utbildningar&nbsp;för
                                        individer, team och organisationer.
                                    </span>
                                </p>
                                <p className="font_8">
                                    <br />
                                    Maila Emelie Wetterwik för mer information
                                    på:
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        <a
                                            href="mailto:emelie.wetterwik@blacklizzy.se?subject=Höja kompetensen för mitt företag"
                                            target="_self"
                                        >
                                            emelie.wetterwik@blacklizzy.se
                                        </a>
                                    </span>
                                </p>
                                <p className="font_8">
                                    <span className="inherit-font-size">
                                        <span className="wixGuard">​</span>
                                    </span>
                                </p>
                            </div>
                            <div
                                id="comp-kgaps6l2"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h6 className="font_6">BESÖK OSS</h6>
                            </div>
                            <div
                                id="comp-kgapsx21"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <p className="font_8">
                                    <span>
                                        Är du giggare och vill komma i kontakt
                                        med Lizzy Gig?
                                        <br />
                                        <br />
                                        Maila Nina Sejdini på:
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            <a
                                                href="mailto:nina.sejdini@blacklizzy.se?subject=Hej Lizzy Gig - jag vill ha kontakt!"
                                                target="_self"
                                            >
                                                nina.sejdini@blacklizzy.se
                                            </a>
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div
                                id="comp-kgapsxhj"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h6 className="font_6">
                                    <span>GIGGARE, SE HIT!</span>
                                </h6>
                            </div>
                            <div
                                id="comp-kgaptrzj"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h6 className="font_6">
                                    VILL DU HÖJA KOMPETENS-NIVÅN?
                                </h6>
                            </div>
                            <div
                                id="comp-kg7z1oeg"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <h6 className="font_6">KONTAKT</h6>
                            </div>
                            <div
                                id="comp-kg7zih1t"
                                className="_1Z_nJ"
                                data-testid="richTextElement"
                            >
                                <p className="font_7">
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        <a href="tel:+46 10 207 46 40">
                                            +46 10-207 46 40
                                        </a>
                                    </span>
                                </p>
                                <p className="font_7">
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        <a
                                            href="mailto:hello@blacklizzy.se"
                                            target="_self"
                                        >
                                            hello@blacklizzy.se
                                        </a>
                                    </span>
                                </p>
                            </div>
                            <div id="comp-kgt95i74" className>
                                <div
                                    data-testid="svgRoot-comp-kgt95i74"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 296 111"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 296 111"
                                        height={111}
                                        width={296}
                                        data-type="color"
                                        role="img"
                                    >
                                        <g>
                                            <path
                                                fill="#1D1E1F"
                                                d="M249.634 111h-57.361L289.614 0H296v58.128L249.634 111zM232.064 0l-97.342 111h-57.36l97.34-111h57.362zM117.152 0L19.81 111H0V68.18L59.79 0h57.362zM5.619 0L0 6.408V0h5.62z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgt980by" className>
                                <div
                                    data-testid="svgRoot-comp-kgt980by"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 139 111"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 139 111"
                                        height={111}
                                        width={139}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgt980by svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#1D1E1F"
                                                d="M139 46.535V111H82.223L139 46.535zM24.424 111H0V73.322L64.577 0h57.609L24.424 111zM6.778 0L0 7.696V0h6.778z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgt9atxf" className>
                                <div
                                    data-testid="svgRoot-comp-kgt9atxf"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 296 111"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 296 111"
                                        height={111}
                                        width={296}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgt9atxf svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#1D1E1F"
                                                d="M291.167 111h-57.362L296 40.078v65.41L291.167 111zM276.976 0l-97.341 111h-57.362L219.615 0h57.361zM162.064 0L64.723 111H7.36L104.703 0h57.361zM47.152 0L0 53.768V0h47.152z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgtebegv" className>
                                <div
                                    data-testid="svgRoot-comp-kgtebegv"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 178 716"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 178 716"
                                        height={716}
                                        width={178}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgtebegv svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#100C08"
                                                d="M23.593 0H0v24.17L23.593 0zM0 82.137v59.151L137.913 0H80.175L0 82.137zm178-68.683L0 195.81v59.151L178 72.605V13.454zm0 117.118L0 312.927v59.151l178-182.355v-59.151zm0 117.117L0 430.045v59.151L178 306.84v-59.151zm0 113.673L0 543.717v59.152l178-182.356v-59.151zm0 117.117L0 660.835V716h3.89L178 537.63v-59.151zM118.211 716H60.472L178 595.597v59.151L118.211 716zM178 709.269L171.43 716H178v-6.731z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgtedgvk" className>
                                <div
                                    data-testid="svgRoot-comp-kgtedgvk"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 178 716"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 178 716"
                                        height={716}
                                        width={178}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgtedgvk svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#100C08"
                                                d="M23.593 0H0v24.17L23.593 0zM0 82.137v59.151L137.913 0H80.175L0 82.137zm178-68.683L0 195.81v59.151L178 72.605V13.454zm0 117.118L0 312.927v59.151l178-182.355v-59.151zm0 117.117L0 430.045v59.151L178 306.84v-59.151zm0 113.673L0 543.717v59.152l178-182.356v-59.151zm0 117.117L0 660.835V716h3.89L178 537.63v-59.151zM118.211 716H60.472L178 595.597v59.151L118.211 716zM178 709.269L171.43 716H178v-6.731z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgtgljcf" className>
                                <div
                                    data-testid="svgRoot-comp-kgtgljcf"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 242 139"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 242 139"
                                        height={139}
                                        width={242}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgtgljcf svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#F8F4F3"
                                                d="M129.147 139h55.424L242 80.165v-56.78L129.147 139zm-111.031 0H73.54L209.22 0h-55.424L18.116 139zM0 47.157v56.781L101.455 0H46.031L0 47.157zm242 89.975L240.177 139H242v-1.868z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-kgth6rgr" className>
                                <div
                                    data-testid="svgRoot-comp-kgth6rgr"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 242 139"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 242 139"
                                        height={139}
                                        width={242}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-kgth6rgr svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#F8F4F3"
                                                d="M129.147 139h55.424L242 80.165v-56.78L129.147 139zm-111.031 0H73.54L209.22 0h-55.424L18.116 139zM0 47.157v56.781L101.455 0H46.031L0 47.157zm242 89.975L240.177 139H242v-1.868z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-khanargn" className="_2ibBY">
                                <div className="_1mxCL" />
                                <div
                                    className="comp-khanargn-container"
                                    data-testid="responsive-container-content"
                                />
                            </div>
                            <div
                                id="comp-khbspq31"
                                data-testid="imageX"
                                className="_3XY1t"
                            >
                                <style
                                    data-testid="scrollEffectStyle"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "#comp-khbspq31 img { height:100%}",
                                    }}
                                />
                                <div data-testid="linkElement" className>
                                    <wix-image
                                        id="img-comp-khbspq31"
                                        data-image-info='{"containerId":"comp-khbspq31","alignType":"center","parallaxSpeed":1.5,"sourceSets":[],"imageData":{"uri":"6291ce_ad2941f301fd4706ac3dc2cdf58f79d4~mv2.png","width":538,"height":580,"alt":"","focalPoint":null}}'
                                        data-has-ssr-src
                                        data-src="https://static.wixstatic.com/media/6291ce_ad2941f301fd4706ac3dc2cdf58f79d4~mv2.png/v1/fill/w_140,h_151,al_c,q_85,usm_0.66_1.00_0.01/6291ce_ad2941f301fd4706ac3dc2cdf58f79d4~mv2.webp"
                                    >
                                        <picture>
                                            <img
                                                src="https://static.wixstatic.com/media/6291ce_ad2941f301fd4706ac3dc2cdf58f79d4~mv2.png/v1/fill/w_140,h_151,al_c,q_85,usm_0.66_1.00_0.01/6291ce_ad2941f301fd4706ac3dc2cdf58f79d4~mv2.webp"
                                                alt=""
                                                style={{
                                                    objectFit: "cover",
                                                    objectPosition: "50% 50%",
                                                    width: "100%",
                                                }}
                                            />
                                        </picture>
                                    </wix-image>
                                </div>
                            </div>
                            <div id="comp-khgw1e6p" className>
                                <div
                                    data-testid="svgRoot-comp-khgw1e6p"
                                    className="_36XXs _3Qjwl"
                                >
                                    <svg
                                        preserveAspectRatio="xMidYMid meet"
                                        data-bbox="0 0 242 139"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 242 139"
                                        height={139}
                                        width={242}
                                        data-type="color"
                                        role="img"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '#comp-khgw1e6p svg [data-color="1"] {fill: #1D1E1F;}',
                                                }}
                                            />
                                        </defs>
                                        <g>
                                            <path
                                                fill="#F8F4F3"
                                                d="M129.147 139h55.424L242 80.165v-56.78L129.147 139zm-111.031 0H73.54L209.22 0h-55.424L18.116 139zM0 47.157v56.781L101.455 0H46.031L0 47.157zm242 89.975L240.177 139H242v-1.868z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                data-color={1}
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="comp-khko4tzs" className="_2ibBY">
                                <div className="_1mxCL" />
                                <div
                                    className="comp-khko4tzs-container"
                                    data-testid="responsive-container-content"
                                >
                                    <div
                                        id="comp-kg80fkh4"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            <span>
                                                Välkommen att höra av dig till
                                                oss!
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        id="comp-kgrzh36d"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            <span
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <a
                                                    href="https://jobs.blacklizzy.se/"
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    TILL BLK LZY KARRIÄRSIDA
                                                    –&gt;
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="comp-kll9mo57" className="_2ibBY">
                                <div className="_1mxCL" />
                                <div
                                    className="comp-kll9mo57-container"
                                    data-testid="responsive-container-content"
                                >
                                    <div
                                        id="comp-kg80cx2d"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            Stockholm
                                            <br />
                                            Torsgatan 4
                                            <br />
                                            111 23 Stockholm
                                        </p>
                                    </div>
                                    <div
                                        id="comp-kgrzk97i"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            <span
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <a
                                                    href="https://g.page/black-lizzy?share"
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    HITTA HIT –&gt;
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        id="comp-kg80l6na"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            <span>
                                                Malmö
                                                <br />
                                                Nordenskiöldsgatan 24
                                                <br />
                                                211 19 Malmö
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        id="comp-kgrzjq6i"
                                        className="_1Z_nJ"
                                        data-testid="richTextElement"
                                    >
                                        <p className="font_8">
                                            <span
                                                style={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                <a
                                                    href="https://goo.gl/maps/UwjqjiJSk8VzwctX8"
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    HITTA HIT –&gt;
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
