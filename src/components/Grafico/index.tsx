
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Product } from "../../pages/HomeAdmin";

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
      chartType="Bar"
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
          bars: 'horizontal',
          hAxis: {
            title: "Preços",
            minValue: 0,
          },
          vAxis: { title: "Filiais" },
        }
      }
      width={"95%"}
      height={"100%"}
      loader={<div>Loading Chart</div>}
    />
  );
}
