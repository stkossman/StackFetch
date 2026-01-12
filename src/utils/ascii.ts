import { theme } from './theme';

export const logos: Record<string, string> = {
  typescript: theme.brand.typescript(
    `      
 _____ _____ 
|_   _|   __|
  | | |__   |
  |_| |_____|`
  ),
  javascript: theme.brand.javascript(
    `       
    __ _____ 
 __|  |   __|
|  |  |__   |
|_____|_____|`
  ),
  csharp: theme.brand.csharp(
    `
         _ _   
 _____ _| | |_ 
|     |_     _|
|   --|_     _|
|_____| |_|_|  `
  ),
  rust: theme.brand.rust(
    `
 _____ _____ _____ _____ 
| __  |  |  |   __|_   _|
|    -|  |  |__   | | |  
|__|__|_____|_____| |_|`
  ),
  python: theme.brand.python(
    `
 _____ __ __ 
|  _  |  |  |
|   __|_   _|
|__|    |_|  `
  ),
  go: theme.brand.go(
    `
 _____ _____ 
|   __|     |
|  |  |  |  |
|_____|_____|`
  ),
  java: theme.brand.java(
    `
    __ _____ _____ _____ 
 __|  |  _  |  |  |  _  |
|  |  |     |  |  |     |
|_____|__|__|\___/|__|__|`
  ),
  c: theme.brand.c(
    `
 _____ 
|     |
|   --|
|_____|`
  ),
  cpp: theme.brand.cpp(
    `
 _____   _     _   
|     |_| |_ _| |_ 
|   --|_   _|_   _|
|_____| |_|   |_|
    `
  ),

  react: theme.brand.react(
    `
 _____ _____ _____ _____ _____ 
| __  |   __|  _  |     |_   _|
|    -|   __|     |   --| | |  
|__|__|_____|__|__|_____| |_|
    `
  ),
  nextjs: theme.brand.nextjs(
    `
 _____ _____ __ __ _____ 
|   | |   __|  |  |_   _|
| | | |   __|-   -| | |  
|_|___|_____|__|__| |_| 
    `
  ),
  astro: theme.brand.astro(
    `
 _____ _____ _____ _____ _____ 
|  _  |   __|_   _| __  |     |
|     |__   | | | |    -|  |  |
|__|__|_____| |_| |__|__|_____|`
  ),
  vue: theme.brand.vue(
    `
 _____ _____ _____ 
|  |  |  |  |   __|
|  |  |  |  |   __|
 \___/|_____|_____|`
  ),
  nestjs: theme.brand.nestjs(
    `
 _____ _____ _____ _____ 
|   | |   __|   __|_   _|
| | | |   __|__   | | |  
|_|___|_____|_____| |_|`
  ),
  unknown: theme.brand.unknown(
    `
 _____ 
|___  |
  |  _|
  |_|  
  |_|  `
  ),
};

export const getLogo = (type: string) => logos[type] || logos.unknown;
