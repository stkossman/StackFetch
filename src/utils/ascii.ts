import { theme } from './theme'

export const logos: Record<string, string> = {
	typescript: theme.brand.typescript(
`      
 _____ _____ 
|_   _|   __|
  | | |__   |
  |_| |_____|`),
	javascript: theme.brand.javascript(
`       
    __ _____ 
 __|  |   __|
|  |  |__   |
|_____|_____|`),
	csharp: theme.brand.csharp(
`
         _ _   
 _____ _| | |_ 
|     |_     _|
|   --|_     _|
|_____| |_|_|  `),
	rust: theme.brand.rust(
`
 _____ 
| __  |
|    -|
|__|__|`),
	python: theme.brand.python(
`  
 _____ __ __ 
|  _  |  |  |
|   __|_   _|
|__|    |_|  `),
	unknown: theme.brand.unknown(
`
 _____ 
|___  |
  |  _|
  |_|  
  |_|  `)
}

export const getLogo = (type: string) => logos[type] || logos.unknown;