import orders from "../../data/orders.json";
import * as tools from "../../tools";

const AveragePriceForOrders = () => {
  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
  const totalProductPrices = orders.reduce((sum, order) => {
    const productPrice = order.details.reduce(
      (sum, det) => sum + det.unitPrice,
      0
    );
    return sum + productPrice;
  }, 0);

  const averagePrice = totalProductPrices / orders.length;

  return /*html*/ `
    <div>
      <div class="instructions">Durchschnittlicher Produktpreis.</div>
      <div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/average-price-for-orders.ts" target="_blank">Lösung anzeigen</a></div>
      <div class="solution">
        <div id = "firstDiv">
          Durchschnittlicher Preis: ${averagePrice.toFixed(2)}
        </div>
      </div>
    </div>
  `;
};

export default AveragePriceForOrders;
