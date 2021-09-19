import { parse } from "path";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { GoogleDataTableColumnRoleType } from "react-google-charts/dist/types";
import { ModuleKind } from "typescript";
import { Product } from "../../pages/Home";

interface Props {
  array: Product[];
}

export function Grafico({ array }: Props) {
  const [dadosGrafico, setDadosGrafico] = useState<any>([]);
  useEffect(() => {
    const arrayResponse = array.map((item) => {
      const object = [item.nomeTabela, item.preco];

      return object;
    });

    setDadosGrafico(arrayResponse);
  }, [array]);

  return (
    <Chart
      chartType="BarChart"
      rows={dadosGrafico}
      columns={[
        {
          type: "string",
          label: "FILAIS",
        },
        {
          type: "number",
          label: "Preço",
        },
      ]}
      options={
        // Chart options
        {
          legend: {
            position: "right",
          },
          title: "Preço por filial",
          hAxis: {
            title: "Preços",
          },
          vAxis: { title: "Filiais" },
        }
      }
      width={"100%"}
      height={"100%"}
      legendToggle
    />
  );
}
