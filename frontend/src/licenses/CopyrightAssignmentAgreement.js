import React, { useState } from 'react'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = (new JSDOM('')).window
const DOMPurify = createDOMPurify(window)

const rawHTML = `
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Copyright Assignment Agreement</title>
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
    <h1>Copyright Assignment Agreement</h1>
    <hr>
    <p>This <b>Assignment Agreement</b> is made on <b>{DATE PURCHASED}</b> (hereinafter referred to as the “Effective Date”) by and between <b>{LEGAL NAME OF BUYER}</b> (hereinafter referred to as the "Assignee") and <b>Shaquille Blackwood</b> p/k/a <b>Thessiah</b> of <b>Thessian Sound Limited</b> (hereinafter referred to as the "Assignor") of <b>22 McKinley Crescent, Kingston 20, St. Andrew Jamaica W.I.</b> <br><br>
    The Licensor warrants that it no longer controls the mechanical rights in and to the musical work (“herein after referred to as the Instrumental “) being licensed to the Licensee as of the Effective Date.
    </p>
    <hr>
    <p>The Assignee and Assignor have agreed to the following terms:</p>
    <br>
    <ol>

<!-- MASTER USE-->

      <li> <b>MASTER USE.</b>
        <ol>
          <li type="a">The Assignor herby assigns the <b>COPYRIGHTS</b> to the sound recording of the instrumental, partly or in its entirety and substantially in its original form (herein referred to as the “Master Recording”) to the Assignee.</p></li>
        </ol>
      </li>

<!-- OWNERSHIP-->

      <li><b>OWNERSHIP.</b><p></p>
        <ol>
          <li type="a">The Assignee shall become the sole owner and holder of all rights, title, and interest in the Instrumental, including all copyrights to and in the sound recording and the underlying musical compositions written and composed by Assignor after all transactions have been made. </li>
          <li type="a">Assignee may register or attempt to register the Master Recording and/or the Instrumental with the U.S. Copyright Office. The aforementioned right to register the Master Recording and/or instrumental shall be strictly limited to the Assignee. </li><br>
        </ol>
      </li>

      <!-- PAYMENT TERMS-->

      <li><b>PAYMENT TERMS.</b> <p></p><ol>
        <li type="a">The Assignee shall make payment of the Assignment Fee to the Assignor on the date of this Agreement. All rights granted to Assignee by Assignor in the Master Recording are conditional upon Assignee’s timely payment of the Assignment Fee. The Assignment Fee is a one-time payment for all the rights granted to Assignee and this Agreement is not valid until the Assignment Fee has been paid in full. </li>
        <li type="a">The Assignee will pay the Assignor a sum of _______________________________________________________ for the Assignment of the Copyrights in the Instrumental.</li>
        <li type="a">An invoice for the payment of this Assignment will be sent to the Assignee and payment for the Assignment must be made within fifteen (15) days of the Assignee’s receipt of the said invoice.</li>
        <li type="a">Payment for this Assignment is non-refundable. </li>
      </ol></li><br>


    <!-- CREDIT -->

      <li><b>CREDIT.</b>
        <ol><p></p>
          <li type="a">No credit should be given to the Assignor after the Instrumental has been assigned to the Assignee. </li>
        </ol><br>
      </li>

      <!-- GENERAL TERMS -->

      <li><b>GENERAL TERMS.</b>
        <ol><p></p>
          <li type="a">The Assignor will express to the Assignee if there has been any issuance of Licenses to a third party for use of the Instrumental that is the subject of this Assignment prior to and on the effective date. </li>
          <li type="a">IF THERE HAS BEEN ANY ISSUANCE OF LICENSES TO ANY THIRD PARTY FOR THE USE OF THE INSTRUMENTAL PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT, ASSIGNEE WILL BE NOTIFIED BY ASSIGNOR, WHEREUPON, IF THE ASSIGNEE AGREES TO PROCEED WITH THE PURCHASE OF THE COPYRIGHT ASSIGNMENT AGREEMENT, THE ASSIGNEE AGREES AND UNDERSTANDS THAT THIS AGREEMENT IS TAKEN SUBJECT TO ANY AND ALL OTHER NON-EXCLUSIVE LICENSES IN OPERATION PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT AND THE RIGHTS OF THE PRIOR LICENSE HOLDERS WILL BE UPHELD BY THE ASSIGNEE AND WILL REMAIN IN EFFECT FOR THE DURATION OF THE TERMS OF THE LICENSES ISSUED PRIOR. </li>
        </ol>
      </li><br>

<!-- MECHANICAL RIGHTS -->

      <li>MECHANICAL RIGHTS.
        <ol><p></p>
          <li type="a">The Master Recording may be used for any promotional purposes, including but not limited to, a release in a single format, for inclusion in a mixtape or free compilation of music bundled together (EP or album), and/or promotional, non-monetized digital streaming. </li>
          <li type="a">The Assignor hereby grants to Assignee the right to use the Master Recording for an  unlimited number of commercial releases. </li>
          <li type="a">The Assignee is given the right to the reproduction, duplication, manufacture, and distribution of phonograph records, cassette tapes, compact disks, internet downloads, other and miscellaneous audio and digital recordings, and any lifts and versions thereof (collectively, “Recordings”) worldwide for up to the pressing or selling an unlimited number of copies of such Recordings or any combination of such Recordings.  </li>
          <li type="a">The Assignee can receive an unlimited number paid streams on audio streaming services/platforms including but not limited to Spotify, Rhapsody, and Apple Music. </li>
          <li type="a">Additionally, the Assignee shall be permitted to distribute unlimited internet downloads for non-profit and non-commercial use. </li>
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
          <li type="a">The Assignor hereby grants to the Assignee the right to copy, perform, edit and/loop portions of, record on film, video, digital animations, motion graphics and video games (collectively, “Projects”).</li>
          <li type="a">The Assignee can use the Master Recording in synchronization or timed relation with the production in an unlimited number of projects. </li>
          <li type="a">The Assignee can receive an unlimited number of non-monetized YouTube plays for videos that the instrumental is included in. </li>
          <li type="a">The Assignee is not prohibited from monetizing and/or collecting royalties from the use of the Instrumental from synchronization, including but not limited to YouTube or related video streaming services.  </li>
          <li type="a">The Assignee understands and agrees that they are the owners of the Instrumental and can submit it for synchronization licensing opportunities. </li>
        </ol><br>
      </li>

<!-- ELECTRICAL -->

      <li><b>ELECTRICAL TRANSCRIPTION RIGHTS.</b>
        <ol><p></p>
          <li type="a">The Assignor hereby grants Assignee the right to broadcast or air the Master Recording on an unlimited number of radio station(s) or through an unlimited number of station channel(s), respectively.</li>
        </ol><br>

<!-- PUBLISHING -->

      </li>
      <li><b>PUBLISHING RIGHTS.</b>
        <ol><p></p>
          <li type="a">With respect to the publishing rights and ownership of the underlying composition embodied in the Master Recording, the Assignee, and the Assignor hereby acknowledge and agree that the underlying composition shall be owned/split between them as follows:
            <ol>
              <li type="i">Assignee owns one hundred percent (100%) of the writer’s share. </li>
              <li type="i">Assignor <b>Shaquille Blackwood [Thessiah], ISWC/IPI no.: 373470847 (JACAP)</b>, owns <b>0%</b> of the writer’s share. </li>
            </ol>
          </li>
          <li type="a">Assign shall own, control, and administer zero Percent (0%) of the so-called “Publisher’s Share” of the underlying composition.
            <ol>
              <li type="i">In the event that Assignee wishes to register his/her interests and rights to the underlying composition of the Master Recording with their Performing Rights Organization (“PRO”), Licensee must not identify and register the Assignor’s share and/or ownership interests in the composition to indicate that Assignor wrote and owns any portion of the composition in the Master Recording. </li>
            </ol>
          </li>
        </ol> <br>
      </li>

<!-- SAMPLING -->

      <li><b>SAMPLING.</b>
        <ol><p></p>
          <li type="a">a.	The Assignee agrees that the Instrumental is purchased as a “Work Made for Hire” whereby the clearing of any sampled material is the responsibility of the Assignee.</li>
          <li type="a">b.	The Assignee shall have the right to license or sublicense any use of the Instrumental or Master Recording, in whole or in part, for any so-called “samples”.</li>
        </ol><br>
      </li>

<!-- LICENSE DURATION -->

      <li><b>DURATION OF LICENSE</b>
        <ol> <p></p>
          <li type="a">This assignment agreement is to be effective as for all intents and purposes, as of the Effective Date and shall held in perpetuity. </li>
        </ol><br>
      </li>


<!-- INDEMNIFICATION -->

      <li><b>INDEMNIFICATION.</b>
        <ol><p></p>
          <li type="a">The Assignee hereby agrees that Assignor has not made any guarantees or promises that the Instrumental fits the particular creative use or musical purpose intended or desired by the Assignee. The Instrumental, its sound recording, and the underlying musical composition embodied therein are licensed to the Licensee “as is” without warranties of any kind or fitness for a particular purpose. </li>
          <li type="a">Assignor warrants and represents that they have the full right and ability to enter into this agreement, and is not under any disability, restriction, or prohibition with respect to the grant of rights hereunder. Assignor warrants that the manufacture, sale, distribution, or the exploitation of the Master Recording hereunder will not infringe upon or violate any common law or statutory right of any person, firm, or corporation; including, without limitation contractual rights, copyrights, and right(s) of privacy and publicity and will not constitute libel and/or slander. The foregoing notwithstanding, Assignor undertakes no responsibility whatsoever as to any elements added to the Master Recording by Assignee, and Assignee indemnifies and holds Assignor harmless for any such elements. </li>
          <li type="a">Assignor warrants that it did not “sample” (as that term is commonly understood in the recording industry) any copyrighted material or sound recordings belonging to any other person, firm, or corporation (hereinafter referred to as “Owner”) without first having notified Assignee. Knowledge by Assignee that “samples” were used by Assignor which was not affirmatively disclosed by Assignor to Assingee shall shift, in whole or in part, the liability for infringement or violation of the rights of any third party arising from the use of any such “sample” from Assignor to Assignee. </li>
          <li type="a">Parties hereto shall indemnify and hold each other harmless from any and all third party claims, liabilities, costs, losses, damages or expenses as are actually incurred by the non-defaulting party and shall hold the non-defaulting party, free, safe, and harmless against and from any and all claims, suits, demands, costs, liabilities, loss, damages, judgments, recoveries, costs, and expenses; (including, without limitation, reasonable attorneys’ fees), which may be made or brought, paid, or incurred by reason of any breach or claim of breach of the warranties and representations hereunder by the defaulting party, their agents, heirs, successors, assigns and employees, which have been reduced to final judgement; provided that prior to final judgment, arising out of any breach of any representations or warranties of the defaulting party contained this agreement or any failure by defaulting party to perform any obligations on its part to be performed hereunder the non-defaulting party has given the defaulting party prompt written notice of all claims and the right to participate in the defence with counsel of its choice at its sole expense. In no event shall Licensee be entitled to seek injunctive or any other equitable relief for any breach or non-compliance with any provision of this agreement. </li>
        </ol>
      </li><br>

<!-- MISC -->

      <li><b>MISCELLANEOUS.</b>
        <ol><p></p>
          <li type="a">a.	The Assignee shall be deemed to have signed, affirmed and ratified its acceptance of the terms of this Agreement by virtue of its payment of the Assignment Fee to Assignor and its electronic acceptance of its terms and conditions at the time Assignee made payment of the License Fee. </li>
          <li type="a">b.	This Agreement constitutes the entire understanding of the parties and is intended as a final expression of their agreement and cannot be altered, modified, amended or waived, in whole or in part, except by written instrument (email being sufficient) signed by both parties hereto. This agreement supersedes all prior agreements between the parties, whether oral or written. Should any provision of this agreement be held to be void, invalid or inoperative, such decision shall not affect any other provision hereof, and the remainder of this agreement shall be effective as though such void, invalid or inoperative provision had not been contained herein. No failure by Assignor hereto to perform any of its obligations hereunder shall be deemed a material breach of this agreement until the Assignee gives Assignor written notice of its failure to perform, and such failure has not been corrected within thirty (30) days from and after the service of such notice, or, if such breach is not reasonably capable of being cured within such thirty (30) day period, Assignor does not commence to cure such breach within said time period, and proceed with reasonable diligence to complete the curing of such breach thereafter. </li>
          <li type="a">c.	The Assignee shall be entitled to any and all monies in connection with the Master(s). All notices pursuant to this agreement shall be in writing and shall be given by registered or certified mail, return receipt requested (prepaid) at the respective addresses as may be designated by either party. Such notices shall be deemed given when received. Any notice mailed will be deemed to have been received five (5) business days after it is mailed; any notice dispatched by expedited delivery service will be deemed to be received two (2) business days after it is dispatched. </li>
          <li type="a">d.	This Agreement may be executed in counterparts, each of which shall be deemed an original, and said counterparts shall constitute on and the same instrument. In addition, a signed copy of this agreement transmitted by facsimile or scanned into an image file and transmitted via email shall, for all purposes, be treated as if it were delivered containing an original manual signature of the party whose signature appears thereon and shall be binding upon such party as though an originally signed document had been delivered. Notwithstanding the forgoing, in the event that you do not sign this Agreement, your acknowledgement that you have reviewed the terms and conditions of this Agreement and your payment of the License Fee shall serve as your signature and acceptance of the terms and conditions of this Agreement. </li>
          <li type="a">e.	Subject to the Assignee’s compliance with the terms and conditions of this Agreement, Assignee shall not be required to account or pay to Assignor any royalties, fees, or monies paid to or collected by the Assignor.</li>
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
  </body>
</html>
`

function CopyrightAssignmentAgreement(props) {

  return(
  <div>
  <div>
    { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> } 
    </div>
    
    </div>
  )
}

export default CopyrightAssignmentAgreement;
