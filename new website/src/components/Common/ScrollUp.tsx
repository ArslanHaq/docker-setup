"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);
  useEffect(() => {
    fetch('http://localhost:4000/').
      then((res) => {
        console.log(res.json);
        res.json
      })
  }, [])

  return null;
}
