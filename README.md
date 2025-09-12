<div align="center">

  ![Hero banner](/public/images/feedback-img.png)

  <div>
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img alt="Static Badge" src="https://img.shields.io/badge/AI-NLP-6A1B9A?style=for-the-badge&logoColor=white">
    <img alt="Work in Progress" src="https://img.shields.io/badge/Progress-70%25-yellow?style=for-the-badge">
  </div>

  <h3 align="center">AI Resume Analyzer</h3>

   <div align="center">
     🚀 An AI-powered tool that analyzes resumes, matches them with job descriptions, and provides actionable feedback for improvement.
    </div>
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 📂 [Project Structure](#project-structure)  
6. 🚀 [Roadmap](#roadmap)  
7. 📜 [License](#license)  

---

## ✨ Introduction

**AI Resume Analyzer** helps job seekers and recruiters quickly evaluate resumes, identify strengths, and highlight missing skills. Using **NLP** and **machine learning**, the app extracts content from resumes (PDF/DOCX), compares it with job descriptions, and generates:  

- ✅ Resume match score  
- ✅ Matched and missing skills  
- ✅ Feedback to improve ATS compatibility  

Currently at **70% progress**: resume parsing, scoring, and keyword matching are working. Advanced AI feedback, dashboards, and multi-language support are in progress.

---

## ⚙️ Tech Stack

- **[React](https://react.dev/)** – UI library for building reusable components.  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling.  
- **[TypeScript](https://www.typescriptlang.org/)** – Strongly typed JavaScript for better developer experience.  
- **[Vite](https://vite.dev/)** – Fast development server and build tool.  
- **[Zustand](https://github.com/pmndrs/zustand)** – Minimal state management library.  
- **[NLP/AI Libraries](https://huggingface.co/)** – Used for resume parsing, keyword extraction, and scoring.  
- **[Backend (planned)]** – FastAPI/Flask + PostgreSQL for storage and analytics.  

---

## 🔋 Features

👉 **Resume parsing**: Extracts text from PDF/DOCX resumes.  
👉 **Keyword matching**: Compares resumes with job descriptions.  
👉 **Basic scoring**: Calculates match percentage based on skills & keywords.  
👉 **Skill gap analysis** *(in progress)*: Identifies missing or weak areas.  
👉 **AI-powered suggestions** *(coming soon)*: Improve resume content for ATS.  
👉 **Dashboard & charts** *(planned)*: Visualize resume strengths & weaknesses.  

---

## 🤸 Quick Start

Follow these steps to run the project locally:

### Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Cloning the Repository
```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
```
### Installation

```bash
npm install
# or
yarn install
```
### Running the project

```bash
npm run dev
# or
yarn dev
```
### 📂Project structure

```bash
ai-resume-analyzer/
│── public/               # Static assets (banners, images)
│── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── utils/            # Resume parsing & scoring helpers
│   ├── store/            # Zustand state management
│   └── App.tsx           # Main entry
│── requirements.txt      # Python dependencies (for AI backend)
│── package.json          # Project metadata & scripts
│── README.md             # Documentation
```

## 🚀 Roadmap

- [x] Resume parsing & text extraction  
- [x] Basic keyword matching & scoring  
- [x] Skill gap analysis with NLP  
- [x] AI-powered resume improvement suggestions  
- [x] Web dashboard with charts & analytics  
- [x] Multi-language support  
- [x] REST API for integrations  

## 📜 License

MIT License © 2025 [Khatibullah Rahel]  

