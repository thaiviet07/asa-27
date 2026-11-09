function PricingDummy() {
  return null;
}
PricingDummy.displayName = "Pricing";
PricingDummy.defaultProps = { height: 0, width: 0 };
PricingDummy.fonts = [];
PricingDummy.loader = { load: () => [] };

function $() {
  return PricingDummy;
}
function bt() {}

export { bt as n, PricingDummy as t };
