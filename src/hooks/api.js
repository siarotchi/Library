import { useEffect, useState } from "react";
import axios from "axios";

export default function useSearchId() {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://github.com/toddmotto/public-apis#books"
    }).then(res => {
      console.log(res.data);
    });
  }, []);
  return null;
}
