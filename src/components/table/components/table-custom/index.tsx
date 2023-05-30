import React from 'react';

type TProps = {
  dataSource: any[][];
};

const TableCustom: React.FC<TProps> = ({ dataSource }) => (
  <div className="table-custom">
    {dataSource.map(source => (
      <div key={source[0]} className="column">
        {source.map((s, index) => (
          <div key={`${source[0]}-${index}`}>{s}</div>
        ))}
      </div>
    ))}
  </div>
);

export default TableCustom;
