import React from "react";
import { Button } from "@mui/material";

type Props = {};

function StartPage({}: Props) {
  return (
    <div>
      StartPage
      <Button variant="text" className="text-red-600">
        Text
      </Button>
    </div>
  );
}

export default StartPage;
