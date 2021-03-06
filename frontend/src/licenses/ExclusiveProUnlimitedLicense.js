import React from 'react'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = (new JSDOM('')).window
const DOMPurify = createDOMPurify(window)

const rawHTML = `
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Exclusive Pro Unlimited Licensing</title>
    <style media="screen">

      body {background-color: black;
            color: white;
            text-align: justified;
            font-family: sans-serif;
            padding-left: 100px;
            padding-right: 100px;
        }

        h1 {text-align: center;}

        .esig {
          text-align: center;
          border-style: solid;
          border-width: 3%;
          margin-left: 35%;
          margin-right: 35%;
        }

    </style>
  </head>
  <body>
    <h1>Exclusive Pro Unlimited (XPU) Licensing Agreement</h1>
    <hr>
    <p>This <b>Licensing Agreement</b> is made on <b>{DATE PURCHASED}</b> (hereinafter referred to as the “Effective Date”) by and between <b>{LEGAL NAME OF BUYER}</b> (hereinafter referred to as the “Licensee”) and <b>Shaquille Blackwood</b> p/k/a <b>Thessiah</b> of <b>Thessian Sound Limited</b> (hereinafter referred to as the “Licensor”) of <b>22 McKinley Crescent, Kingston 20, St. Andrew Jamaica W.I.</b> <br><br>
    The Licensor warrants that it controls the mechanical rights in and to the musical work (“herein after referred to as the <b>Instrumental</b> “) being licensed to the Licensee as of the Effective Date.
    </p>
    <hr>
    <p>The Licensee and Licensor have agreed to the following terms:</p>
    <br>
    <ol>

<!-- MASTER USE-->

      <li> <b>MASTER USE.</b>
        <ol>
          <li type="a"> <p>The Licensor herby grants to the Licensee a <b>Pro Unlimited License</b> to record vocal synchronization to the instrumental partly or in its entirety and substantially in its original form (hereinafter referred to as the “Master Recording”).</p></li>
        </ol>
      </li>

<!-- OWNERSHIP-->

      <li><b>OWNERSHIP.</b><p></p>
        <ol>
          <li type="a">The Licensor is and shall remain the sole owner and holder of all rights, title, and interest in the Instrumental, including all copyrights to and in the sound recording and the underlying musical compositions written and composed by Licensor. NOTHING CONTAINED HEREIN SHALL CONSTITUTE AN ASSIGNMENT BY THE LICENSOR TO LICENSEE OF ANY OF THE FOREGOING RIGHTS.</li>
          <li type="a">Licensee may not, under any circumstances, register or attempt to register the Master Recording and/or the Instrumental with the U.S. Copyright Office. The aforementioned right to register the Master Recording and/or instrumental shall be strictly limited to the Licensor. Licensee will, upon request, execute, acknowledge and deliver to Licensor such additional documents as Licensor may deem necessary to evidence and effectuate Licensors rights hereunder, and Licensee hereby grants to Licensor the right as attorney-in-fact to execute, acknowledge, deliver and record in the U.S. Copyright Office or elsewhere any and all such documents if Licensee shall fail to execute same within five (5) working days after so requested by the Licensor. </li><br>
        </ol>
      </li>

      <!-- PAYMENT TERMS-->

      <li><b>PAYMENT TERMS.</b> <p></p><ol>
        <li type="a">The Licensee shall make payment of the License Fee to Licensor on the date of this Agreement. All rights granted to Licensee by Licensor in the Master Recording are conditional upon Licensee’s timely payment of the License Fee. The License Fee is a one-time payment for the rights granted to Licensee and this Agreement is not valid until the License Fee has been paid. </li>
        <li type="a">The Licensee will pay the Licensor a sum of <b>USD Four Hundred and Ninety Nine Dollars and Ninety Nine Cents ($499.99)</b> for the Premium Non-Exclusive License.</li>
        <li type="a">An invoice for the payment of this License will be sent to the Licensee and payment for the License must be made within <b>fifteen (15) days</b> of the Licensee’s receipt of the said invoice. </li>
        <li type="a">Payment for this License is <b>non-refundable</b> (with exception to clause 14.a. of this Agreement). </li>
      </ol></li><br>


    <!-- CREDIT -->

      <li><b>CREDIT.</b>
        <ol><p></p>
          <li type="a">The Licensee shall have the right to use and permit others to use Licensor’s approved name, approved likeness, and other approved identification and approved biographical material concerning the producer solely for purposes of trade and otherwise without restriction solely in connection with the Master Recording recorded hereunder. Licensee shall use his/her/their best efforts to have Licensor credited as a “Producer” and shall give the Licensor appropriate production and song writing credits on all compact discs, record, music video, and digital labels or any other record configuration manufactured which is now known or created in the future that embodies the Master Recording created hereunder and on all cover liner notes, any records containing the Master Recording and on the front and/or back cover of any album listing the Master Recording and other musician credits. The Licensee shall use its best efforts to ensure that the Licensor is properly credited and Licensee shall check all proofs for the accuracy of credits, and shall use its best efforts to cure any mistakes regarding Licensor’s credit. In the event of any failure by Licensee to issue the credit to Licensor, Licensee must use reasonable efforts to correct any such failure immediately and on a prospective basis. Such credit shall be in the substantial form: <b>“Produced by Thessiah”</b> or <b>“Produced by Thessian Sound, LLC”</b>.</li>
        </ol><br>
      </li>

      <!-- GENERAL TERMS -->

      <li><b>GENERAL TERMS.</b>
        <ol><p></p>
          <li type="a">The Licensor does not reserve the right to issue any other License to the use of the Instrumental that is the subject of this agreement, to any other third party/parties as it wishes during the duration and life of this agreement. </li>
          <li type="a">The Licensor also does not reserve the right to assign its copyright in the Instrumental that is the subject of this License to any third party as it wishes during the duration and life of this agreement.  </li>
          <li type="a">c.	The Licensor will express to the Licensee if there has been any issuance of Licenses to a third party for use of the Instrumental that is the subject of this License prior to and on the effective date. </li>
          <li type="a">d.	IF THERE HAS BEEN ANY ISSUANCE OF LICENSES TO ANY THIRD PARTY FOR THE USE OF THE INSTRUMENTAL PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT, LICENSEE WILL BE NOTIFIED BY LICENSOR, WHEREUPON, IF THE LICENSEE AGREES TO PROCEED WITH THE PURCHASE OF THE <b>EXCLUSIVE PRO UNLIMITED</b> LICENSE, THE LICENSEE AGREES AND UNDERSTANDS THAT THIS LICENSE IS TAKEN SUBJECT TO ANY AND ALL OTHER NON-EXCLUSIVE LICENSES IN OPERATION PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT AND THE RIGHTS OF THE PRIOR LICENSE HOLDERS WILL BE UPHELD BY THE LICENSOR AND WILL REMAIN IN EFFECT FOR THE DURATION OF THE TERMS OF THE LICENSES ISSUED PRIOR. </li>
        </ol>
      </li><br>

<!-- MECHANICAL RIGHTS -->

      <li>MECHANICAL RIGHTS.
        <ol><p></p>
          <li type="a">If any selection or musical composition, or any portion thereof, recorded in the Master Recording hereunder is written or composed by Licensor, in whole or in part, alone or in collaboration with others, or is owned or controlled, in whole or in part, directly or indirectly, by Licensor or any person, firm, or corporation in which Licensor has a direct or indirect interest, then such selection and/or musical composition shall be hereinafter referred to as a “Controlled Composition”. Licensor hereby agrees to issue or cause to be issued, as applicable, to Licensee, mechanical licenses in respect of each Controlled Composition, which are embodied on the Master Recording. For that license, on the United States and Canada sales, Licensee will pay mechanical royalties at one hundred percent (100%) of the minimum statutory rate, subject to no cap of that rate for albums and/or Eps. For license outside the United States and Canada, the mechanical royalty rate will be the rate prevailing on an industry-wide basis in the country concerned on the date that this agreement has been entered into. </li>
          <li type="a">The Master Recording may be used for any promotional purposes, including but not limited to, a release in a single format, for inclusion in a mixtape or free compilation of music bundled together (EP or album), and/or promotional, non-monetized digital streaming. </li>
          <li type="a">The Licensor hereby grants to Licensee the right to use the Master Recording for an unlimited number of commercial releases. </li>
          <li type="a">The Licensee is given the right to the reproduction, duplication, manufacture, and distribution of phonograph records, cassette tapes, compact disks, internet downloads, other and miscellaneous audio and digital recordings, and any lifts and versions thereof (collectively, “Recordings”) worldwide for up to the pressing or selling of an unlimited number of copies of such Recordings or any combination of such Recordings.  </li>
          <li type="a">The Licensee can receive an unlimited number of paid streams on audio streaming services/platforms including but not limited to Spotify, Rhapsody, and Apple Music. </li>
          <li type="a">Additionally, the Licensee shall be permitted to distribute unlimited internet downloads for non-profit and non-commercial use. </li>
        </ol><br>
      </li>

      <!-- PERFORMING RIGHTS -->

      <li>PERFORMING RIGHTS.
        <ol><p></p>
          <li type="a">The Licensee can use the Master Recording in <b>unlimited</b> non-profit performances, shows, or concerts. </li>
          <li type="a">The Licensee is permitted to earn an unlimited amount in compensation or ticket sales using the Master Recording in said performances. </li>
        </ol><br>

<!-- SYNCH -->

      </li>
      <li><b>SYNCHRONIZTION RIGHTS.</b>
        <ol><p></p>
          <li type="a">The Licensor does not grant to the Licensee the right to copy, perform, edit and/loop portions of, record on film, video, digital animations, motion graphics and video games (collectively, “Projects”).</li>
          <li type="a">The Licensee can use the Master Recording in synchronization or timed relation with the production in an unlimited number of projects. </li>
          <li type="a">The Licensee can receive an unlimited number of non-monetized YouTube plays for videos that the instrumental is included in. </li>
          <li type="a">The Licensee can receive an unlimited number of non-monetized streams collectively from video streaming platforms including but not limited to YouTube, Netflix and Vevo etc. </li>
          <li type="a">The Licensee understands and agrees that they cannot claim ownership of the Instrumental or submit it for synchronization licensing opportunities.</li>
        </ol><br>
      </li>

<!-- ELECTRICAL -->

      <li><b>ELECTRICAL TRANSCRIPTION RIGHTS.</b>
        <ol><p></p>
          <li type="a">The Licensor hereby grants Licensee the right to broadcast or air the Master Recording on an unlimited number of radio station(s) or through an unlimited number of station channel(s), respectively.</li>
        </ol><br>

<!-- PUBLISHING -->

      </li>
      <li><b>PUBLISHING RIGHTS.</b>
        <ol><p></p>
          <li type="a">With respect to the publishing rights and ownership of the underlying composition embodied in the Master Recording, the Licensee, and the Licensor hereby acknowledge and agree that the underlying composition shall be owned/split between them as follows:
            <ol>
              <li type="i">Licensee owns fifty percent <b>(50%)</b> of the writer’s share. </li>
              <li type="i">Licensor <b>Shaquille Blackwood [Thessiah], ISWC/IPI no.: 373470847 (JACAP)</b>, owns <b>50%</b> of the writer’s share. </li>
            </ol>
          </li>
          <li type="a">Licensor shall own, control, and administer One Hundred Percent (100%) of the so-called “Publisher’s Share” of the underlying composition.
            <ol>
              <li type="i">In the event that Licensee wishes to register his/her interests and rights to the underlying composition of the Master Recording with their Performing Rights Organization (“PRO”), Licensee must simultaneously identify and register the Licensor’s share and ownership interests in the composition to indicate that Licensor wrote and owns 50% of the composition in the Master Recording and as the owner of 100% of the Publisher’s share of the Mastered Recording. </li>
            </ol>
          </li>
        </ol> <br>
      </li>

<!-- SAMPLING -->

      <li><b>SAMPLING.</b>
        <ol><p></p>
          <li type="a">The Licensee agrees that the Instrumental is purchased as a “Work Made for Hire” whereby the clearing of any sampled material is the responsibility of the Licensee. </li>
          <li type="a">The Licensee shall not have the right to license or sublicense any use of the Instrumental or Master Recording, in whole or in part, for any so-called “samples”.</li>
        </ol><br>
      </li>

<!-- LICENSE DURATION -->

      <li><b>DURATION OF LICENSE</b>
        <ol> <p></p>
          <li type="a">This Licensing agreement is to be effective as for all intents and purposes, as of the Effective Date and shall expire in <b>five (5) years</b>.</li>
        </ol><br>
      </li>

<!-- RESTRICTIONS -->

      <li><b>LICENCEE'S RESTRICTIONS.</b>
        <ol><p></p>
          <li type="a">Licensee hereby agrees and acknowledges that he/she/they are expressly prohibited from taking any action(s) and from engaging in any use of the Instrumental or Master Recording in the manners, or for the purposes, set forth below:
            <ol>
              <li type="i">The rights granted to Licensee are <b>NON-TRANSFERABLE</b> and that Licensee may not transfer or assign any of its rights hereunder to any third-party;</li>
              <li type="i">The Licensee shall not synchronize, or permit third parties to synchronize, the Instrumental or Master Recording with any audio-visual works EXCEPT as expressly provided for and pursuant to clause 8(b) of this Agreement for use in an unlimited number of videos. This restriction includes, but is not limited to, use of Instrumental and/or Master Recording in television, commercials, film/movies, theatrical works, video games, and in any other form on the internet which is not expressly permitted herein. </li>
              <li type="i">Licensee shall not engage in any unlawful copying, streaming, duplicating, selling, lending, renting, hiring, broadcasting, uploading, or downloading to any database, servers, computers, peer to peer sharing, or other file-sharing services, posting on websites or distribution of the Instrumental in the form, or a substantially similar form, as delivered to Licensee. Licensee may send the Instrumental file to any individual musician, engineer, studio manager or other people who are working on the Master Recording.</li>
              <li type="i">THE LICENSEE IS EXPRESSLY PROHIBITED FROM REGISTERING THE INSTRUMENTAL AND/OR MASTER RECORDING WITH ANY CONTENT IDENTIFICATION SYSTEM SERVICE PROVIDER, MUSIC DISTRIBUTOR, RECORD LABEL OR DIGITAL AGGREGATOR (for example TuneCore or CD Baby, and any other provider of user-generated content identification services). The purpose of this restriction is to prevent you from receiving a copyright infringement takedown notice form a third party who also received a non-exclusive license to use the Instrumental in a Master Recording. The Instrumental has already been tagged for Content Identification (as that term is used in the music industry) by Licensor as a pre-emptive measure to protect all interested parties in the Master Recording. If you do not adhere to this policy, you are in violation of the terms of this License and your license to use the Instrumental and/or Master Recording may be revoked without notice or compensation to you. </li>
              <li type="i">As applicable to both the underlying composition in the Instrumental and to the sound recording of the instrumental:
                <ol>
                  <li>The parties acknowledge and agree that the Master Recording is a “derivative work”, as the term is used in the United States Copyright Act;</li>
                  <li>As applicable to the Instrumental and/or the Master Recording, there is no intention by the parties to create a joint work; and</li>
                  <li>There is no intention by the Licensor to grant any rights in and/or to any other derivative works that may have been created by other third-party licensees. </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li> <br>

<!-- OPTIONS -->

      <li><b>LICENSOR'S OPTION.</b>
        <ol><p></p>
          <li type="a">Licensor shall have the option, at Licensor’s sole discretion, to terminate this License at any time within the duration of this license’s term (see clause 12.a.) upon written notice to the Licensee. In the event that Licensor exercises this option, Licensor shall pay to Licensee a sum equal to One Hundred and Ten Percent (110%) of the License Fee paid by the Licensee. Upon Licensor’s exercise of the option, Licensee must immediately remove the New Song from any and all digital and physical distribution channels and must immediately cease access to any streams and/or downloads of the New Song by the general public. </li>
        </ol>
        <br>
      </li>

<!-- BREACH -->

      <li><b>BREACH.</b>
        <ol><p></p>
          <li type="a">The Licensee shall have five (5) business days from its receipt of written notice by the Licensor and/or Licensor’s authorized representative to cure any alleged breach of this Agreement by Licensee. Licensee’s failure to cure alleged breach within (5) business days shall result in Licensee’s default of its obligations, its breach of this Agreement, and at Licensor’s sole discretion, the termination of Licensee’s rights hereunder. </li>
          <li type="a">If Licensee engages in the commercial exploitation and/or sale of the Instrumental or Master Recording outside of the manner and amount expressly provided for in this Agreement, Licensee shall be liable to the Licensor for monetary damages in an amount equal to any and all monies paid, collected by, or received by Licensee, or any third party on its behalf, in connection with such unauthorized commercial exploitation of the Instrumental and/or Master Recording. </li>
          <li type="a">Licensee recognizes and agrees that a breach or threatened breach of this Agreement by Licensee give rise to irreparable injury to the Licensor, which may not be adequately compensated by damages. Accordingly, in the event of a breach or threatened breach by the Licensee of the provisions of this Agreement, Licensor may seek and shall be entitled to a temporary restraining order and a preliminary injunction restraining the Licensee from violating the provisions of this Agreement. Nothing herein shall prohibit the Licensor from pursuing any other available legal or equitable remedy from such breach or threatened breach, including but not limited to the recovery of damages from the Licensee. The Licensee shall be responsible for all costs, expenses or damages that Licensor incurs as a result of any violation by the Licensee of any provision of this Agreement. Licensee’s obligation shall include court costs, litigation expenses, and reasonable attorneys’ fees. </li>
        </ol><br>
      </li>

<!-- INDEMNIFICATION -->

      <li><b>INDEMNIFICATION.</b>
        <ol><p></p>
          <li type="a">The Licensee hereby agrees that Licensor has not made any guarantees or promises that the Instrumental fits the particular creative use or musical purpose intended or desired by the Licensee. The Instrumental, its sound recording, and the underlying musical composition embodied therein are licensed to the Licensee “as is” without warranties of any kind or fitness for a particular purpose. </li>
          <li type="a">Licensor warrants and represents that they have the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Licensor warrants that the manufacture, sale, distribution, or the exploitation of the Master Recording hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. The foregoing notwithstanding, Licensor undertakes no responsibility whatsoever as to any elements added to the Master Recording by Licensee, and Licensee indemnifies and holds Licensor harmless for any such elements. </li>
          <li type="a">Licensor warrants that it did not “sample” (as that term is commonly understood in the recording industry) any copyrighted material or sound recordings belonging to any other person, firm, or corporation (hereinafter referred to as “Owner”) without first having notified Licensee. The Licensee shall have no obligation to approve the use of any sample thereof; however, if approved, any payment in connection therewith, including any associated legal clearance costs, shall be borne by the Licensee. Knowledge by Licensee that “samples” were used by Licensor which was not affirmatively disclosed by Licensor to Licensee shall shift, in whole or in part, the liability for infringement or violation of the rights of any third party arising from the use of any such “sample” from Licensor to Licensee. </li>
          <li type="a">d.	Parties hereto shall indemnify and hold each other harmless from any and all third party claims, liabilities, costs, losses, damages or expenses as are actually incurred by the non-defaulting party and shall hold the non-defaulting party, free, safe, and harmless against and from any and all claims, suits, demands, costs, liabilities, loss, damages, judgments, recoveries, costs, and expenses; (including, without limitation, reasonable attorneys’ fees), which may be made or brought, paid, or incurred by reason of any breach or claim of breach of the warranties and representations hereunder by the defaulting party, their agents, heirs, successors, assigns and employees, which have been reduced to final judgement; provided that prior to final judgment, arising out of any breach of any representations or warranties of the defaulting party contained this agreement or any failure by defaulting party to perform any obligations on its part to be performed hereunder the non-defaulting party has given the defaulting party prompt written notice of all claims and the right to participate in the defence with counsel of its choice at its sole expense. In no event shall Licensee be entitled to seek injunctive or any other equitable relief for any breach or non-compliance with any provision of this agreement. </li>
        </ol>
      </li><br>

<!-- MISC -->

      <li><b>MISCELLANEOUS.</b>
        <ol><p></p>
          <li type="a">This License is non-transferable and is limited to the Master Recording specified, constitutes the entire agreement between the Licensor and the Licensee relating to the instrumental, and shall be binding upon both Licensor and Licensee and their respective successors, assigns, and legal representatives. </li>
          <li type="a">The Licensee shall be deemed to have signed, affirmed and ratified its acceptance of the terms of this Agreement by virtue of its payment of the License Fee to Licensor and its electronic acceptance of its terms and conditions at the time Licensee made payment of the License Fee. </li>
          <li type="a">This Agreement constitutes the entire understanding of the parties and is intended as a final expression of their agreement and cannot be altered, modified, amended or waived, in whole or in part, except by written instrument (email being sufficient) signed by both parties hereto. This agreement supersedes all prior agreements between the parties, whether oral or written. Should any provision of this agreement be held to be void, invalid or inoperative, such decision shall not affect any other provision hereof, and the remainder of this agreement shall be effective as though such void, invalid or inoperative provision had not been contained herein. No failure by Licensor hereto to perform any of its obligations hereunder shall be deemed a material breach of this agreement until the Licensee gives Licensor written notice of its failure to perform, and such failure has not been corrected within thirty (30) days from and after the service of such notice, or, if such breach is not reasonably capable of being cured within such thirty (30) day period, Licensor does not commence to cure such breach within said time period, and proceed with reasonable diligence to complete the curing of such breach thereafter.</li>
          <li type="a">The Licensee shall not be entitled to any monies in connection with the Master(s) other than as specifically set forth herein. All notices pursuant to this agreement shall be in writing and shall be given by registered or certified mail, return receipt requested (prepaid) at the respective addresses as may be designated by either party. Such notices shall be deemed given when received. Any notice mailed will be deemed to have been received five (5) business days after it is mailed; any notice dispatched by expedited delivery service will be deemed to be received two (2) business days after it is dispatched. </li>
          <li type="a">This Agreement may be executed in counterparts, each of which shall be deemed an original, and said counterparts shall constitute on and the same instrument. In addition, a signed copy of this agreement transmitted by facsimile or scanned into an image file and transmitted via email shall, for all purposes, be treated as if it were delivered containing an original manual signature of the party whose signature appears thereon and shall be binding upon such party as though an originally signed document had been delivered. Notwithstanding the forgoing, in the event that you do not sign this Agreement, your acknowledgement that you have reviewed the terms and conditions of this Agreement and your payment of the License Fee shall serve as your signature and acceptance of the terms and conditions of this Agreement. </li>
          <li type="a">Subject to the Licensee’s compliance with the terms and conditions of this Agreement, Licensee shall not be required to account or pay to Licensor any royalties, fees, or monies paid to or collected by the Licensee (expressly excluding mechanical royalties), or which would otherwise be payable to Licensor in connection with the uses/exploitation of the Master Recording as set forth in this Agreement. </li>
          <li type="a">Exceeding any of the terms and conditions set by this contract makes the contract null and void whereby the licensee will have to remove the Master Recording from all platforms or renew the License. </li>
        </ol>
      </li>
      <br>

<!-- INSTRUMENTAL -->

      <li><b>INSTRUMETNAL LICENSED. {NAME OF INSTRUMENTAL}</b></li>
      <br>

<!-- LAW -->

      <li><b>APPLICABLE LAW.</b>
        <p></p>
        <ol>
          <li type="a">This agreement shall be governed by and interpreted in accordance with the laws of Jamaica in every particular including formation and interpretation and shall be deemed to have been made in Jamaica</li>
        </ol><br>
      </li>

<!-- SPECIFICATIONS -->

      <li><b>SPECIFICATIONS.</b>
        <ol><p></p>
          <li type="a">The Licensor agrees to deliver the sound recording of the Instrumental as a high-quality <b>MP3 & WAV stereo files with TRACK-STEMS</b>, as such terms are understood in the music industry. </li>
          <li type="a">Licensor shall use commercially reasonable efforts to deliver the Instrumental to Licensee immediately after payment of the License Fee has been made. Licensee will receive the Instrumental via email, to the email address Licensee provided to Licensor.</li>
        </ol>
      </li><br>

<!-- RENEWAL -->

      <li><b>OPTION TO RENEW.</b>
        <ol><p></p>
          <li type="a">At the expiration of the term of this License, if the Licensor has not assigned his copyright in the instrumental that is the subject of this agreement to a third party, the Licensee has the option to renew the license. </li>
          <li type="a">The option to renew this license can be exercised by notifying the Licensor of the intention to renew the License in writing <b>thirty (30) days</b> before or after the expiration of the License’s duration. </li>
          <li type="a">The Licensor reserves the right to decline renewing this License upon notification of the Licensee’s intention to exercise the option to renew this License. </li>
        </ol><br>
      </li>

<!-- WITNESS -->

      <li><b>IN WITNESS WHEREOF</b>, the Parties hereto have executed this agreement as of the date first above written.</li>
      <br>

<!-- ATTESTATION -->

      <li><b>ATTESTATION.</b>
        <ol><p></p>
          <li type="a">YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ THIS AGREEMENT AND HAVE BEEN ADVISED BY US OF THE SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF YOUR CHOICE TO REVIEW THIS AGREEMENT ON YOUR BEHALF. YOU ACKNOWLEDGE AND AGREE THAT YOU HAD THE UNRESTRICTED OPPORTUNITY TO BE REPRESENTED BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF YOUR FAILURE TO OBTAIN AN INDEPENDENT ATTORNEY OR WAIVER THEREOF, YOU HEREBY WARRANT AND REPRESENT THAT YOU WILL NOT ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER AS A BASIS TO AVOID ANY OBLIGATIONS UNDER THIS AGREEMENT, OR TO INVALIDATE THIS AGREEMENT OR TO RENDER THIS AGREEMENT OR ANY PART THEREOF UNENFORCEABLE. </li>
          <li type="a">Having read or having had this agreement read to them by a third party, the Licensee understands the contents of this agreement and agrees to all terms and conditions outlined herein.</li>
        </ol>
      </li>
    </ol><br><br>
<div class="esig">
  <input type="checkbox" id="Sign" name="signature" value="esign">
<label for="signature"> I Agree</label>
<input type="checkbox" id="noSign" name="nosignature" value="noesign">
<label for="nosignature"> I Do Not Agree</label>
<button type="button" name="button">Next</button>
</div>

  </body>
</html> 
`

const ExclusiveProUnlimitedLicense = () => (
  <div>
    { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
  </div>
)

export default ExclusiveProUnlimitedLicense;
