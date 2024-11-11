import RevealSlideShow from '../../components/slideshowComponents/RevealSlideshow';

export default function Slideshow() {

    return (
        <RevealSlideShow>
            <section data-markdown>
                <h3>
                    The Conflict of Interest Discount in the Marketplace of Ideas
                </h3>
                <div className='flex flex-row justify-between flex-wrap'>
                    <p className='text-[26px]'>John M.Barrios</p>
                    <p className='text-[26px]'>Filippo Lancieri</p>
                    <p className='text-[26px]'>Shashank Singh</p>
                    <p className='text-[26px]'>Joshua Levy</p>
                    <p className='text-[26px]'>Tomasso Valetti</p>
                    <p className='text-[26px]'>Luigi Zingales</p>
                </div>
                <p className='text-[20px]'>USC Theory Reading Group -- November 5th, 2024</p>
            </section>
            <section>
                <p>Does anybody know who this is?</p>
                <div className='flex flex-row justify-between'>
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Joshua_D._Wright_by_Gage_Skidmore.jpg/800px-Joshua_D._Wright_by_Gage_Skidmore.jpg" style={{height:"400px"}}/>
                    </div>
                <div>
                    <ul className="fragment">
                        <li className = "text-[36px] font-bold">Joshua D. Wright</li>
                        <li className = "text-[36px]">Former FTC Commissioner</li>
                        <li className = "text-[36px]">Executive Director of the Global Antitrust Institute at GMU</li>
                        <li className = "text-[36px]">Consultant and counsel to Google, Amazon, Meta</li>

                        <li className="fragment text-[36px] font-italic">Accused by eight of sexual misconduct</li>
                    </ul>
                </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>
                    With motivation, our questions:
                </blockquote>
                <ol>
                    <li className="fragment">Was it just an accident?</li>
                    <li className="fragment">If not, what <em>caused</em> the conflict? How damaging was it?</li>
                    <li className="fragment">Is such a discount justified, on average?</li>
                    <li className="fragment">Are these discounts being "priced" by the market?</li>
                    <li className="fragment">Can we do better?</li>
                </ol>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>This paper:</blockquote>
                <ol>
                    <li>Let the survey data speak</li>
                    <li>How much do people revise their confidence in research findings downwards in the face of a conflict?</li>
                    <li>We're going to randomize the salience and intensity of conflicts of interest</li>
                    <li>Our economists and the general population different?</li>
                </ol>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>This paper: caveats</blockquote>
                <ul>
                    <li>We are interested in unconscious bias, not deception or fraud</li>
                    <li>We are going to spend more time on empirical studies -- more scholar discretion</li>
                    <li>We take no stands on the benefits of potentially conflicted research</li>
                    <li>Malice need not apply</li>
                    <ul>
                        <li className='text-[25px]'>Capture: Zingales (2013); Motviated reasoning: Dawson et al (2002)</li>
                    </ul>
                </ul>
            </section>
            <section>
                <h2> I. The Survey</h2>
                <div className="flex flex-row justify-center">
                    <img src="/slide_materials/coi_materials/survey_qr.png" style={{width:"250px"}}/>
                </div>
            </section>
            <section>
            <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Sample</blockquote>
                <div className = "flex flex-row justify-center">
                    <div className ="justify-self-center">
                        <figure >
                            <figcaption className="text-[20px]">Tab 1 -- Survey Response Rates</figcaption>
                            <img src='/slide_materials/coi_materials/responses.png' style={{height:"300px"}}/>
                        </figure>
                        
                    </div>
                </div>
            </section>
            <section>
            <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Preamble</blockquote>
            <div className="flex flex-col">
                <div className = "grow w-10/12">
                <p className="text-[30px] italic text-left">You will now be presented with a series of vignettes describing a setting where you should evaluate a potential conflict of interest.
                </p>
                </div>
                <div className="grow w-10/12">
                    <p className="text-[30px] italic text-left">In each case, suppose that the articles have been published in a highly reputed journal and are subjected to a peer-review process. Also, assume that the tests in the vignette (if any) have been carried out by keeping accepted global standards in practice. That is, all papers and tests described are of high quality.
                    </p>
                </div>
            </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette example</blockquote>
                <div data-id="vignette-example" className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        You have just finished reading a paper about the costs and benefits of the introduction of ride-sharing services to the residents of a large US city. The paper finds that, on balance, <span className="font-bold">the costs of ride-sharing services outweigh their benefits</span>
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette example</blockquote>
                <div data-id="vignette-example" className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        You have just finished reading a paper about the costs and benefits of the introduction of ride-sharing services to the residents of a large US city. The paper finds that, on balance, <span className="font-bold">the benefits of ride-sharing services outweigh their costs</span>
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette example</blockquote>
                <div className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        You have just finished reading a paper about the costs and benefits of the introduction of ride-sharing services to the residents of a large US city. The paper finds that, on balance, <span className="font-bold">the benefits of ride-sharing services outweigh their costs</span>
                        </p>
                        <p className='text-[30px] text-left'> How much do you believe the paper's result? </p>
                        <div className="fragment flex flex-row justify-between">
                            <div className="">
                                <p className = "text-[26px]">
                                    Not at all
                                </p>
                            </div>
                            <div className="">
                                <p className = "text-[26px]">
                                    A little
                                </p>
                            </div>
                            <div className="">
                                <p className = "text-[26px]">
                                    Moderately
                                </p>
                            </div>
                            <div className="">
                                <p className = "text-[26px]">
                                    Largely
                                </p>
                            </div>
                            <div className="">
                                <p className = "text-[26px]">
                                    Completely
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette treatment</blockquote>
                <div className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        Later, you read the disclosure statement associated with the paper and learn that the author discloses that the data used is <span className="font-bold"> publicly available administrative data provided by the city government</span>.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette treatment</blockquote>
                <div className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        Later, you read the disclosure statement associated with the paper and learn that the author discloses that the data used is <span className="font-bold">proprietary and provided by the ride-sharing company</span>.
                        </p>
                        <p className='fragment text-[30px] text-left'></p>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette treatment</blockquote>
                <div className="flex flex-col">
                    <div className="grow w-10/12">
                        <p className="text-[30px] italic text-left">
                        Later, you read the disclosure statement associated with the paper and learn that the author discloses that the data used is <span className="font-bold">proprietary and provided by the ride-sharing company</span>.
                        </p>
                        <p className='text-[30px] text-left'>To what extent does this disclosure change your belief in the paper's results?</p>
                    </div>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Structure: Vignette treatment mapping</blockquote>
                <div className='flex flex-row justify-center'>
                    <fig>
                        <figcaption className="text-[18px] text-center">Tab 2 -- Likert response to reduction in trust numbers</figcaption>
                        <img src="/slide_materials/coi_materials/likert_mapping.png" style={{width:"700px"}}/>
                    </fig>
                </div>
            </section>
            <section data-auto-animate>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Potential concerns</blockquote>
                <ol data-id="hide-list">
                    <li className="font-bold text-[36px]"> Selection</li>
                    <ul>
                        <li className='text-[30px]'> Economist recruitment by email might induce selection among economists
                        </li>
                        <li className='text-[30px]'> YouGov sample of Average Americans is by panel which should not have selection (at least for CoI sensitivity)</li>
                        <li className='text-[30px]'>The average reduction in trust in <span className="italic"> science</span> vignettes is identical</li>
                    </ul>
                    <li className ="font-bold text-[36px]"> Priming</li
                    >
                        <ul>
                            <li className='text-[30px]'>Priming should not affect cross-sectional variation in the reduction in trust <span className='italic'>across</span> treatments</li>
                            <li className='text-[30px]'>Priming would minimize surprise and lead to a (possibly) smaller reported reduction in trust</li>
                            <li className='text-[30px]'>This will lead to a smaller estimate of bias</li>
                        </ul>
                </ol>
            </section>
            <section>
                <h2> II. The Framework</h2>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Framework</blockquote>
                <div className = "flex flex-row justify-center">
                    <div className="flex flex-col justify-center w-7/12 mx-auto">
                        <div className="flex flex-row justify-between content-center">
                            <div className='place-self-start self-center'>
                                <p className='text-[24px] align-baseline'>
                                    Post-Study Probability
                                </p>
                            </div>
                            <div>
                                <img src='/slide_materials/coi_materials/PSP-equation.svg' style={{width:"300px"}}/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between content-center">
                            <div className='place-self-start self-center'>
                                <p className='text-[24px] align-baseline text-left'>
                                    Post-Study Probability (biased)
                                </p>
                            </div>
                            <div>
                                <img src='/slide_materials/coi_materials/PSP-bias-equation.svg' style={{width:"400px"}}/>
                            </div>
                        </div>
                        <div>
                            <img src='/slide_materials/coi_materials/PSP-key.svg' style={{width:"600px"}}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Framework</blockquote>
                    <div className = "flex flex-row justify-center">
                        <div className="flex flex-col justify-center w-7/12 mx-auto">
                            <div className='text-left text-[24px]'>Our empirical procedure lets us measure the CoI-related reduction in trust</div>
                            <div className="flex flex-row justify-between content-center">
                                <div className='place-self-start self-center'>
                                    <p className='text-[24px] align-baseline'>
                                        Reduction in Trust
                                    </p>
                                </div>
                                <div>
                                    <img src='/slide_materials/coi_materials/reduction-in-trust.svg' style={{width:"300px"}}/>
                                </div>
                            </div>
                            <div className='text-left text-[24px]'>We can take parameters from a paper and the literature to invert for the bias term (u)</div>
                            <div className='text-left text-[24px]'>We can also make corrections to p-values for conflicted papers...</div>
                        </div>
                    </div>
                </section>
                <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Forms for bias</blockquote>
                <div className = "flex flex-row justify-center">
                    <div className="flex flex-col justify-between">
                        <img src = '/slide_materials/coi_materials/u1.svg' style={{width:"600px"}}/>
                        <img src = '/slide_materials/coi_materials/u2.svg' style={{width:"600px"}}/>
                    </div>
                </div>
                </section>
            </section>
            <section>
                <h2>III. Reductions in Trust</h2>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Data access: Ride-sharing</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/rideshare_data_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
                <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Data access: Ride-sharing -- Selected Economists (by political alignment)</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/rideshare_ep_logistic_data_type_nopred_selected_economists.png' style={{width:"700px"}}/>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Data access: Credit cards and the right to review</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading a paper about electronic payment platforms that finds evidence for the efficiency of the current business practices of [company], a payments-processing firm. The data analyzed in the paper was provided by [company]. How much do you believe the paper's results?
                            </p>
                            <p className="text-[30px] italic text-left">
                            Later you read the disclosure statement associated with the paper and learn that [company]<span className="font-bold">had the right to review the paper and the right to control which findings to make public / waived their right to review the paper and also waived their right to control which findings to make public</span>. To what extent does this change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Data access: Credit cards and the right to review</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/visa_data_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Career incentives: Prospective vs retrospective conflicts</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading a paper that finds that CEOs are underpaid relative to the value of the services they render to their companies. How much do you believe the paper's results?
                            </p>
                            <p className="text-[30px] italic text-left">
                            Later you learn that the author <span className="font-bold">was seeking a position on the board of directors of a large US public company before writing the paper/was nominated by the management of a large US public company to its board of directors immediately following publication/ two years following the publication of the paper, was nominated by a large US public company to its board of directors</span>. To what extent does this information change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Career incentives: Prospective vs retrospective conflicts</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/ceo_career_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Grants vs consulting fees</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading a paper about financial trading strategies that utilize investors' reactions to "news" related to companies with a similar name. In particular, the author shows a trading strategy can make money by exploiting such reactions. How much do you believe the paper's results?
                            </p>
                            <p className="text-[30px] italic text-left">
                            Later, you read the disclosure statement associated with the paper and learn that the author discloses that she received <span className='font-bold'> $10,000 / $100,000 / $1M </span>in the form of a <span className='font-bold'>consulting fee/research grant</span>. To what extent does this disclosure change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Grants vs consulting fees</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/trading_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Grants vs consulting fees -- expertise</blockquote>
                        <div className='flex flex-row justify-center my-[100px]'>
                            <div>
                                <img src = '/slide_materials/coi_materials/figs/trading_spec_fe.png' style={{width:"500px"}}/>
                            </div>
                            <div>
                                <img src = '/slide_materials/coi_materials/figs/trading_spec_io.png' style={{width:"500px"}}/>
                            </div>
                        </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Expert witness -- private vs public (temporal attenuation)</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading a paper that studies how the growth of supermarket chains affects consumer welfare. The paper finds that larger chains are associated with <span className='font-bold'>decreased/increased consumer welfare due to higher/lower prices.</span> How much do you believe the paper's results?
                            </p>
                            <p className="text-[30px] italic text-left">
                            Later, you read the disclosure statement associated with the paper and learn that the author discloses that she served as an expert witness for <span className='font-bold'>the Department of Justice Antitrust Division when it challenged a merger between two regional supermarkets/two regional supermarkets involved in a merger challenged by the Department of Justice Antitrust Division</span>. The challenge to the merger occurred <span className='font-bold'>two/five</span> years ago <span className='font-bold'>[.]/and the author was compensated $400,000 by the Department of Justice/two supermarkets.</span> To what extent does this information change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Expert witness -- private vs public (temporal attenuation)</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/supermarket_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Monetary conflicts: Expert witness -- expertise</blockquote>
                        <div className='flex flex-row justify-center my-[100px]'>
                            <div>
                                <img src = '/slide_materials/coi_materials/figs/supermarket_spec_fe.png' style={{width:"500px"}}/>
                            </div>
                            <div>
                                <img src = '/slide_materials/coi_materials/figs/supermarket_spec_io.png' style={{width:"500px"}}/>
                            </div>
                        </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Academic conflicts: Consistency over time</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading a paper that states that a higher income tax is <span className='font-bold'>beneficial/not at all beneficial</span> for overall economic growth. How much do you believe the paper's results?
                            </p>
                            <p className="text-[30px] italic text-left">
                            Later, you read the disclosure statement associated with the paper and learn that the author discloses that she had written a book in the past affirming the economic benefits of a higher income tax. To what extent does this disclosure change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Academic conflicts: Consistency over time</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/tax_ideo_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Political conflicts: Ideological conformity</blockquote>
                    <div data-id="vignette-example" className="flex flex-col">
                        <div className="grow w-10/12">
                            <p className="text-[30px] italic text-left">
                            You have just finished reading an article about the role of abortion access in women's career outcomes. In particular, the paper finds that increased access to abortion has <span className='font-bold'>no/a positive</span> effect on lifetime earnings. How much do you believe the paper's results?</p>
                            <p className="text-[30px] italic text-left">
                            Later, you read the disclosure statement associated with the paper and learn that the author discloses that she is formally a member of the <span className='font-bold'>Democratic/Republican</span> party. She additionally discloses that in recent election cycles she has made contributions in excess of $10,000 to <span className='font-bold'>Democratic/Republican</span> party presidential and congressional candidates. To what extent does this disclosure change your belief in the paper's results?
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Political conflicts: Ideological conformity</blockquote>
                    <div className='flex flex-row justify-center'>
                        <img src = '/slide_materials/coi_materials/figs/abortion_ideo_hetero.png' style={{width:"700px"}}/>
                    </div>
                </section>
                <section>
                    <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Political conflicts: Ideological conformity -- selected economists</blockquote>
                        <div className='flex flex-row justify-center my-[100px]'>
                            <div>
                                <fig>
                                    <figcaption className="text-[18px] text-center">Positive effect</figcaption>
                                    <img src = '/slide_materials/coi_materials/figs/abortion_sp_dep_finding_nopred_selected_economists.png' style={{width:"500px"}}/>
                                </fig>
                            </div>
                            <div>
                                <fig>
                                    <figcaption className="text-[18px] text-center">No effect</figcaption>
                                    <img src = '/slide_materials/coi_materials/figs/abortion_sp_rep_finding_nopred_ordinary_economists.png' style={{width:"500px"}}/>
                                </fig>
                            </div>
                        </div>
                </section>
            </section>
            <section>
                    <h2>IV. The True Significance of Conflicted Papers</h2>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>True significance</blockquote>
                <ul>
                    <li className="text-[30px]">
                        We are seeing that a CoI reduces trust in a conflicted paper by ~30%
                    </li>
                    <li className="text-[30px]">
                        But how much does that reduce the value of the paper in the literature?
                    </li>
                    <li className="text-[30px]">
                      The two ideas are related but not the same thing:
                      <ul>
                        <li className="text-[30px]">
                            The reduction in trust combines the <span className='font-bold'>expected bias</span> in a conflicted paper with the <span className='font-bold'> ex-ante probability that a paper is conflicted.</span>
                        </li>
                      </ul>
                    </li>
                    <li className="text-[30px]">
                        We can decompose these if we know the frequency of conflicted papers...
                    </li>
                </ul>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>The pinnacle of the profession the AER</blockquote>
                <div className='flex flex-row justify-center'>
                    <fig>
                        <figcaption className="text-[20px]">Data Exemptions in the AER</figcaption>
                        <img src = '/slide_materials/coi_materials/aer-data-exemptions.png' style={{width:"600px"}}/>
                        <figcaption className="text-[15px] text-left">*Restricted data policies changed in 2022</figcaption>

                    </fig>
                </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Re-calibrating (with) the AER</blockquote>
                <ul>
                    <li className='text-[32px]'>
                        During the '22-'23 biennium, ignoring grant-making conflicts (NSF, JPAL, etc.)
                    </li>
                    <ul>
                        <li className='text-[32px]'>
                            62 of 205 (30%) of papers have some sort of non-data conflict of interest
                        </li>

                        <li className='text-[32px]'>
                            85 of 205 (41%) of papers used restricted/confidential data
                        </li>
                        
                    </ul>
                    <li className='text-[32px]'>
                        In toto: 121 of 205 (59%) have some kind of reported conflict of interest
                    </li>
                </ul>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Re-calibrating (with) the AER</blockquote>
                <div className='flex flex-row justify-center'>
                    <fig>
                        <figcaption className="text-[20px]">Tab 3 -- Revised significance levels</figcaption>
                        <img src = '/slide_materials/coi_materials/new-alpha-table.png' style={{width:"700px"}}/>
                    </fig>
                </div>
            </section>
            <section>
                <h2>V. Are Our Estimates Crazy?</h2>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Fabo et. al (2021)</blockquote>

                <ul>
                    <li className="text-[36px]">When studying the role of QE programs on GDP growth...</li>
                    <ul>
                        <li className="text-[30px]">papers (co-)authored by economists who are affiliated with central banks estimate the standardized peak effect at 0.28</li>
                        <li className="text-[30px]">papers without central-bank affiliation estimate the standardized peak effect at 0.11</li>
                    </ul>
                    <li className="text-[36px]"> The probability of finding a statistically significant effect of QE...</li>
                    <ul>
                        <li className="text-[25px]">is 0.5 for unaffiliated economists </li>
                        <li className="text-[25px]">is 1 for central-bank affiliated economists!</li>
                        <li className="text-[25px]">Implied u=0.5, r=0.16. Our best comparison is u=0.18 (DOJ expert witness, $400k compensation)</li>
                    </ul>
                    <li className="text-[36px]">
                        Federal Reserve-affiliated research papers <em>do</em> undergo pre-publication review
                    </li>
                </ul>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Consult the oracle: GPT-4 Simulations -- All vignettes</blockquote>
                <div className='flex flex-row justify-center'>
                    <fig>
                        {/* <figcaption className="text-[20px]"></figcaption> */}
                        <img src = '/slide_materials/coi_materials/gpt-simulations.png' style={{width:"700px"}}/>
                    </fig>
                </div>
            </section>
            <section>
                <h2> VI. Is This Bias Priced-In?</h2>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Leuz et. al (2023)</blockquote>
                <ul>
                    <li className="text-[32px]">If conflicted papers are trusted (by referees and editors) less, you would expect them to be cited less</li>
                    <li className="text-[32px]">Looking at the citations in the curated "Priority Updates from the Research Literature" database</li>
                    <ul>
                        <li className="text-[32px]">For physicians, particularly pediatricians and family doctors/GPs</li>
                        <li className="text-[32px]">If an author discloses a CoI, a paper is 7-10% (12-16.4% if all authors) less likely to be included</li>
                    </ul>
                    <li className="text-[32px]">These numbers are smaller than ours by a factor of two</li>
                </ul>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>The Supreme Court</blockquote>
                <ul>
                    <li className="text-[36px]"><em>New York State Rifle & Pistol Association V. Bruen (2021)</em></li>
                    <ul>
                        <li className="text-[36px]">Cites an <em>amicus curiae</em> brief and scholarly work by William English, who has received funding by... the NRA</li>
                    </ul>
                    <li className="text-[36px]"><em>Ohio V. American Express (2017)</em></li>
                    <ul>
                        <li className="text-[36px]">Cites work by Rochet and Tirole (2002; 2003; 2006), which was funded by... Visa</li>
                    </ul>
                </ul>
            </section>
            <section>
                <h2>VII. Implications</h2>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Taking stock</blockquote>
                <ul>
                    <li className="text-[36px]">Scholars and journalists have done a lot of systematic and case-work on how conflicted research is used to influence policy</li>
                    <ul>
                        <li className="text-[30px]">Drug approvals (McGarity and Wagner, 2008); Tobacco, diesel emissions, alcohol, and others (Michaels, 2020)</li>
                    </ul>
                    <li className="text-[36px]">The courts, including the Supreme Court, often rely on sponsored economic studies to render judicial decision</li>
                    <ul>
                        <li className="text-[30px]">Comments of DAAG Kanter at Fordham in Sept.</li>
                    </ul>
                    <li className="text-[36px]">Our work speaks to the highest standards... which aren't upheld everywhere</li>
                    <ul>
                        <li className="text-[30px]">Even the <em>most sophisticated</em> economists believe that these biases exist in the <em>most prestigious</em> journals</li>
                    </ul>
                </ul>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Is current disclosure credible?</blockquote>
                <div className='flex flex-row justify-center my-[100px]'>
                            <div>
                                <fig>
                                    <figcaption className="text-[18px] text-left w-9/12">Do you think your own past disclosure of potential conflicts of interest has been adequate?</figcaption>
                                    <img src = '/slide_materials/coi_materials/self_disclosure.png' style={{width:"500px"}}/>
                                </fig>
                            </div>
                            <div>
                                <fig>
                                    <figcaption className="text-[18px] text-left w-9/12">Do you think that, at present, academic economists generally disclose potential conflicts of interest adequately?</figcaption>
                                    <img src = '/slide_materials/coi_materials/others_disclosure.png' style={{width:"500px"}}/>

                                </fig>
                            </div>
                        </div>
            </section>
            <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Disclosure of the Terms of Data Access</blockquote>
                <ul>
                    <li classNotes="text-[30px]">This is the blackest of black boxes</li>
                    <li classNotes="text-[30px]">We don't know the terms (or constraints) of data access, and we don't know if researchers comply</li>
                    <li classNotes="text-[30px]">The role of professional associations, journals, and universities in improving transparency</li>
                    <ul>
                        <li classNotes="text-[30px]">Opaque data-use agreements are a form of informational monopoly, where all the benefits of data access accrue to one and all of costs are imposed on other papers</li>
                    </ul>
                </ul>
            </section>
            <section>
            <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>Conclusions</blockquote>
            <ul>
                <li classNotes="text-[30px]">We find that CoI significantly erode trust, and the severity of the erosion varies with the nature of the conflict</li>
                <li classNotes="text-[30px]">We find that a substantial proportion of economists express skepticism as to the disclosure of their peers</li>
                <li classNotes="text-[30px]">We assume rational assessment of CoI costs; this leads to underestimation compared to others</li>
                <li classNotes="text-[30px]">In practice, conflicted research is often deployed to fool others.</li>
            </ul>
            </section>



            {/* Add more slides as needed */}
            {/* <section>
                <blockquote className="fixed left-0 top-0 text-left font-bold" style={{width:"100%", "box-shadow": "none", "font-style": "normal"}}>This paper: caveats</blockquote>
                test 
                \[x=y\]
            </section> */}
        </RevealSlideShow>
  );
}
