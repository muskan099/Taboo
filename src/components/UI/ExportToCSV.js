import { CSVLink } from "react-csv";
import React from 'react'

function ExportToCSV({nft}) {
  return (
    <div>
      <CSVLink
  data={nft}
  filename={"my-file.csv"}
  className="transaction-page-btn"
  target="_blank"
>
  Export to CSV
</CSVLink>;
    </div>
  )
}

export default ExportToCSV
