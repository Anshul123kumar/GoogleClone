# React Native App

Welcome to the **React Native App**! This document provides step-by-step instructions to set up and run the app on your development environment.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Troubleshooting](#troubleshooting)

## Introduction

This React Native application is designed to run seamlessly on both iOS and Android platforms. Follow the instructions below to get started quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm** or **yarn** (for package management)
- **React Native CLI** (for project commands)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development)
- **Watchman** (for macOS users, recommended for file watching)

For detailed setup, refer to the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anshul123kumar/GoogleClone.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the Metro bundler:

   ```bash
   npm start
   # or
   yarn start
   ```

## Running the App

To run the app, use the following platform-specific instructions:

### For iOS

1. Install CocoaPods dependencies:

   ```bash
   cd ios
   pod install
   cd ..
   ```

2. Run the app on the iOS simulator:

   ```bash
   npx react-native run-ios
   ```

3. For a physical device, ensure your device is connected and trusted by your Mac, then follow the same command.

### For Android

1. Start an Android emulator or connect a physical device.

2. Run the app on the Android device:

   ```bash
   npx react-native run-android
   ```

## Troubleshooting

- **Metro bundler not starting:** Ensure no other process is using port 8081. Use `lsof -i :8081` to identify and kill conflicting processes.
- **Build issues on iOS:** Ensure all CocoaPods dependencies are installed and Xcode is updated to the latest version.
- **Build issues on Android:** Verify that your Android SDK and JDK are properly configured.
- **Permission issues:** For physical devices, ensure you have the necessary permissions and certificates set up.

If issues persist, consult the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

---

For additional questions or support, feel free to reach out or open an issue in the repository.
