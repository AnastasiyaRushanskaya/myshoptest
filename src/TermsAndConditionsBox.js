import React from 'react';
import { Modal } from 'react-bootstrap';

function TermsAndConditionsBox() {
  return (
    <Modal.Dialog fullscreen>
      <Modal.Header closeButton>H&M Membership terms & conditions</Modal.Header>
      <Modal.Body>
        <strong>ololo</strong>
      </Modal.Body>
    </Modal.Dialog>

    // <div
    //   style={{
    //     position: 'absolute',
    //     zIndex: 99,
    //     top: 0,
    //     left: 0,
    //     height: 'fit-content',
    //     backgroundColor: '#413f3e',
    //   }}
    // >
    //   <div
    //     className='text-align-center'
    //     style={{
    //       position: 'relative',
    //       width: '40%',
    //       border: '10px solid #413f3e',
    //       margin: '0 auto',
    //       padding: '20px',
    //       backgroundColor: '#faf9f8',
    //       cursor: 'default',
    //     }}
    //   >
    //     <i
    //       className='bi bi-x c-pointer'
    //       style={{
    //         position: 'absolute',
    //         top: '0',
    //         right: '10px',
    //         fontSize: '4em',
    //         color: 'grey',
    //       }}
    //     ></i>
    //     <h1>H&M Membership terms & conditions</h1> <h3>Introduction</h3>
    //     <p>
    //       1.1 Welcome to the loyalty program of H&M Hennes & Mauritz GBC AB,
    //       with number of registration 556070-1715 and registered seat at Mäster
    //       Samuelsgatan 46 A, 111 57 Stockholm Sweden ("Loyalty Program"). By
    //       becoming a member you agree to be bound by these Terms and Conditions.
    //       1.2 The membership is free of charge and no purchase is necessary to
    //       become a member. 1.3 By becoming a member of the Loyalty Program you
    //       will be able to earn points which qualifies you to different tiers
    //       where you can take part of offers, services, events and much more
    //       organised by H&M or H&M partner companies. As a logged in member we
    //       will give you a tailor-made experience of the H&M brand including
    //       personalized offers and recommendations. As a member you will receive
    //       digital receipts for your purchases in our physical stores and online,
    //       you will be able to access your purchase history in your membership
    //       account ("My Account") which is accessible on hm.com and in your app,
    //       and when placing items in your shopping bag online while logged in we
    //       will save the items there between your logged in visits. Please note
    //       that items stored in the shopping bag will not be reserved for you and
    //       may sell out. You will find more information about current offers
    //       under My Account. 1.4 You can find information regarding how H&M will
    //       process your personal data in the Privacy Notice here.
    //     </p>
    //     <h3>Membership</h3>
    //     <p>
    //       2.1 The membership is limited to individuals that are acting in a
    //       personal capacity and not in the capacity of a company, who have a
    //       current and valid email account and are considered an adult by local
    //       legislation in the applicable province or territory of residence, or
    //       from 16 years of age who have the consent of the parent(s), guardian
    //       or legal representative as applicable. H&M reserves the right to
    //       request written confirmation of such consent. Employees, officers,
    //       directors, agents and representatives of H&M are eligible for
    //       membership but may be excluded from certain promotions. 2.3 Your
    //       membership is personal, non-transferable and subject to these Terms
    //       and Conditions as well as any other rules, regulations, policies, and
    //       procedures adopted by H&M as approved by you upon taking part of
    //       offers, rewards, making purchases and other related services. We apply
    //       a limit of one membership per person and registered email address. 2.4
    //       Companies, groups, associations or other entities, or others making
    //       commercial or bulk purchases are not eligible for membership. The
    //       membership may not be used for reselling or profit. 2.5 It is your
    //       responsibility, and a condition for your membership, to keep your
    //       email address and contact details up to date. 2.6 You are responsible
    //       for all activity that is conducted through your Membership account.
    //       This means you are also responsible for making every effort to keep
    //       your login details, such as e-mail address and password, secure and
    //       private. We advise using a unique password that has not used on any
    //       other account. If your password or account is compromised, we advise
    //       you change it quickly or reach out to Customer Services for further
    //       assistance.
    //     </p>
    //     <h3>Points, tiers & vouchers</h3>
    //     <p>
    //       4.1 The points you earn count toward the second tier membership as
    //       well as toward bonus vouchers. 4.2 The date when you become a member
    //       will constitute the “Start Date” of each Membership Year. The
    //       “Membership Year” is the 12 months following the Start Date of each
    //       year. The tier level of your membership is based on the points earned
    //       during the current or previous Membership Year whichever is the
    //       highest. If you are a new member, or do not have sufficient points to
    //       qualify you to the second membership tier level, your membership tier
    //       level will start at the first tier. If you reach the second tier
    //       during a Membership Year you will stay at the second membership tier
    //       level during the rest of the Membership Year and the following
    //       Membership Year. If you during the Membership Year do not accumulate
    //       sufficient points to qualify you to the second membership tier level,
    //       you will return to the first tier for the following Membership Year.
    //       4.3 After the end of each Membership Year all points counting towards
    //       the next membership tier level will be reset and start over at 0 at
    //       the beginning of each Membership Year. 4.4 Points counting towards
    //       vouchers are valid until the next Start Date. 4.5 When you have earned
    //       100 points, a voucher of £3 will be issued in your app or on your H&M
    //       account page. You can use the voucher both at H&M and H&M HOME, in
    //       store and online. 4.6 The bonus voucher will be issued 30 days after
    //       the date that the sufficient point limit is reached. You can only
    //       obtain 5 bonus vouchers per calender month, and a maximum of 20 bonus
    //       vouchers per 12 month period. 4.7 Vouchers cannot be exchanged for
    //       cash or used for purchases with a total value that is lower than the
    //       value of the voucher. The sum total of the purchase, after the voucher
    //       is applied, must exceed £1. Non-Commercial goods, such as shopping
    //       bags in store, do not count towards this sum. 4.8 Each bonus voucher
    //       is only redeemable once and is applied on all articles in the order.
    //       The discount is split between the articles so that the discount share
    //       per article remains the same for all articles in the order. The
    //       respective reduction of the individual articles of a purchase remains,
    //       even if some articles of the purchase are returned. The discount
    //       advantage of the bonus checks is not redistributed to the remaining
    //       articles of the order in case of a return. 4.9 In the case of a
    //       return, the discount advantage received through the bonus voucher
    //       (value of the bonus voucher) expires. Only the amount paid for the
    //       article will be refunded, not the savings from the bonus voucher. If
    //       you activate the bonus voucher to be used in an physical H&M- or H&M
    //       HOME-store, as applicable, the bonus voucher must be redeemed at the
    //       checkout within 15 minutes after activation, otherwise it will be
    //       irretrievably deleted and expire. Printouts or screenshots of the
    //       bonus voucher will not be accepted. Legal recourse is excluded. 4.10
    //       The bonus vouchers cannot be used to purchase H&M Gift Cards, or be
    //       applied to past purchases.
    //     </p>
    //     <h3>2023-02-14</h3>
    //   </div>
    // </div>
  );
}

export default TermsAndConditionsBox;
