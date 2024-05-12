"use client";

import React from "react";
import { Button } from "antd";
import { useDarkMode } from "@/hooks";

export const DarkMode = () => {
  const [theme, toggleTheme] = useDarkMode();

  return <Button onClick={toggleTheme}>light / dark</Button>;
};
