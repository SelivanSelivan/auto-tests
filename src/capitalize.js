#!/usr/bin/env node
export const capitalize = (text) => {
	  const [firstSymbol = '', ...restSymbols] = text;
	  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};
