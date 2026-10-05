import React from "react";
import Hero from "./Hero";
import PricingTable from "./PricingTable";
import AccountOpeningCharges from "./AccountOpeningCharges";
import AMCCharges from "./AMCCharges";
import OptionalCharges from "./OptionalCharges";
import Charges from "./Charges";

function PricingPage() {
  return (
    <>
      <Hero />
      <PricingTable />
      <AccountOpeningCharges />
      <AMCCharges />
      <OptionalCharges />
      <Charges />
    </>
  );
}

export default PricingPage;