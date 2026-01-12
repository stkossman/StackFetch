#!/bin/bash

# StackFetch Installer
# https://github.com/stkossman/StackFetch

set -e

# colors
RESET='\033[0m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
DIM='\033[2m'

# config
REPO="stkossman/StackFetch"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="stackfetch"

echo -e "${CYAN}
   StackFetch Installer
   ====================
${RESET}"

OS="$(uname -s)"
ARCH="$(uname -m)"

PLATFORM=""
ARCH_TYPE=""

case "$OS" in
    Linux)
        PLATFORM="linux"
        ;;
    Darwin)
        PLATFORM="macos"
        ;;
    *)
        echo -e "${RED}Error: Unsupported OS ($OS).${RESET}"
        exit 1
        ;;
esac

case "$ARCH" in
    x86_64)
        ARCH_TYPE="x64"
        ;;
    arm64|aarch64)
        if [ "$PLATFORM" = "macos" ]; then
            ARCH_TYPE="arm64"
        else
            echo -e "${RED}Error: Linux ARM64 builds are not yet available.${RESET}"
            exit 1
        fi
        ;;
    *)
        echo -e "${RED}Error: Unsupported architecture ($ARCH).${RESET}"
        exit 1
        ;;
esac

ASSET_NAME="stackfetch-${PLATFORM}-${ARCH_TYPE}"
DOWNLOAD_URL="https://github.com/${REPO}/releases/latest/download/${ASSET_NAME}"

echo -e "${DIM}Finding latest release for ${PLATFORM}/${ARCH_TYPE}...${RESET}"
echo -e "${DIM}Downloading from: ${DOWNLOAD_URL}${RESET}"

TMP_FILE="/tmp/${BINARY_NAME}_temp"

if ! curl -fsSL "$DOWNLOAD_URL" -o "$TMP_FILE"; then
    echo -e "${RED}Error: Download failed. Check your internet connection or if the release asset exists.${RESET}"
    exit 1
fi

chmod +x "$TMP_FILE"

echo -e "Installing to ${INSTALL_DIR}..."

move_binary() {
    if [ -w "$INSTALL_DIR" ]; then
        mv "$TMP_FILE" "$INSTALL_DIR/$BINARY_NAME"
    else
        echo -e "${DIM}Sudo privileges required to write to ${INSTALL_DIR}${RESET}"
        sudo mv "$TMP_FILE" "$INSTALL_DIR/$BINARY_NAME"
    fi
}

move_binary

echo -e "${GREEN}
Successfully installed StackFetch.
${RESET}"
echo -e "Run it by typing: ${CYAN}${BINARY_NAME}${RESET}\n"