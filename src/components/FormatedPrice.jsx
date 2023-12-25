import accounting from "accounting";

function FormatedPrice({product, children}) {

    const formattedPrice = accounting.formatMoney(product, {
        symbol: "$",
        precision: 2,
        thousand: ".",
        decimal: ",",
      });

  return (
    <div>
    <h5 className="bg-slate-200 font-bold">{formattedPrice}</h5>
    {children}
  </div>
  )
}
export default FormatedPrice