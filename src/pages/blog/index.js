import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import blogBottom from '../../img/blog-bottom.webp'

import blackVector from '../../img/black-vector.svg'
import blog2 from '../../img/blog-2.webp'
import blog3 from '../../img/blog-3.webp'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div> */}
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>

       

        <section  className="section bg-dark relative pb-30">

          <div className = "row">

       

  <div className = "columns">
 
        <img className="blog-bottom-left-img" src ={blogBottom}  />



    <div className="column  is-6 ml-auto  ">

        <div className="is-flex  is-flex-direction-column">
                    <div className="" >
                        <h2 className = "blue fs-5">
                        Vi är digitala alkemister
                        </h2>
                    </div>

                    <div className="" >
                    <p className="fs-2 blue lh-1 mb-3" >
                        AI, UX, UI, IoT. Design-driven innovation, agil utveckling och digital transformation. Blir du också matt av alla dessa ”buzz words”?
                        </p>

                    </div>

                    <div className="columns" >
                        <div className = "column">
                          
                          <p className = "blue fs-1_2">
                            Låt oss göra det enkelt. Ingen utmaning är den andra lik och lösningar behöver anpassas efter behov och situation. Alla “buzz word” har ett värde, men inte förrän du vet vad du behöver åstadkomma. Därför lägger vi ner mycket kraft på att förstå det bakomliggande behovet.
                            </p>
                        </div>

                        <div className = "column">
                          <p className="blue fs-1_2">
                          Som digitala alkemister älskar vi att testa, förnya och utmana, att skapa förändring som verkligen gör skillnad. Vi utvecklar tjänster utifrån våra passioner: design, ledarskap, teknik och marknadsföring. Vi skapar lösningar utifrån lyhördhet, empati och omtanke för människan. Alltid från hjärtat.
                          </p>
                        </div>

                    </div>
              </div>
        </div>
   
          <img className="blog-bottom-right-img" src ={blackVector}  />
  
         

    </div>     

    <img  className = "blog-bottom-center-img" src ={blackVector}  />
    </div>  
    
        </section>


        <section  className="section bg-green relative ">

            <div className = "columns  bottom-column">
    
                      
                      <img class= "blog2" src ={  blog2}  />

                      <div className="column  is-5   ">

                      <div className="is-flex  is-flex-direction-column">
                            <h2 className = " bottom-content-title">
                            Bakom varje Lizzy står tre andra, på riktigt!
                            </h2>

                        <div className="columns" >
                            <div className = "column">
                              
                              <p className = " fs-1_2">

                              Vi kallar det – Lizzy Crew. Det är inte bara en filosofi, det är något som hela vår organisation är formad kring. För vi vet, att situationer och omständigheter kan förändras längs vägen och även om du behöver en sak idag så kanske behovet ser annorlunda ut imorgon.
                                <br/>
                                <br/>
                                För dig som kund betyder det att du även har, utöver den enskilda konsulten, tillgång till ett team som säkerställer leverans, kvalitet och kundnöjdhet.
                                
                                <br/>
                                <br/>
                                Det gör samarbetet mellan dig och oss ännu mer flexibelt och värdefullt, oavsett projektens utmaningar.
                                </p>

                                <p class="contact-link"><span className = "underline"><a href="https://www.blacklizzy.se/kontakt" target="_self">VÅRA TJÄNSTER –&gt;</a></span></p>
                            </div>


                        </div>
                  </div>
            </div>


            <div className = "column " >

                  <img className="blog3"  src ={  blog3}  />
            </div>

        


        </div>
        </section>
      </Layout>
    )
  }
}
